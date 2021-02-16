---

title: Torus Architecture
sidebar_label: Torus Architecture

---


Welcome a brief description of Torus! This living document describes the
overall architecture of Torus.

---


![General Architecture of Torus](../../static/assets/image.png)

## General Overview <a id="general-overview"></a>

This document is not meant to serve as a set of technical specifications. You can view our most updated code repository at [https://github.com/torusresearch](https://github.com/torusresearch/torus-website)​‌

The Torus Architecture can be described in four main parts:‌

* Nodes in charge of Distributed Key Generation
* A smart contract in charge of management of nodes
* A private Byzantine Fault Tolerant network between nodes
* A Javascript client that interacts with nodes

Managed via a smart contract, nodes are selected and operate for a fixed period of time, they generate a set of keys via DKG.‌

When a user arrives at a DApp, the javascript client is loaded, creating a secure javascript context. From there a user logs in, they provide proof that they are logged in with a third-party authentication service, and the proof is verified by each node individually. This proof can be integrated to today's OAuth 2.0 standard flow. For new users, nodes will assign a new key share from the pre-generated set of keys, and store this assignment in an internal mapping. For returning users, nodes will look up their internal mapping and return that user’s corresponding key share.‌

The user then recollects these shares and reconstructs his or her key in the front-end javascript client, only to be kept for the session and erased once the browser is closed.‌

## A Node and Its Trust Assumptions <a id="a-node-and-its-trust-assumptions"></a>

### What a Torus Node Is <a id="what-a-torus-node-is"></a>

A Torus node primarily does 4 things: it starts, it runs a key generation protocol, it maps keys, and it re-shares its keys to the next set of nodes. In order to not roll our own crypto, we stick to the academic schemes for Distributed Key Generation \(DKG\) and Proactive Secret Sharing \(PSS\) closely, and have made modifications only where necessary.‌

The Torus node is part of an epoch of nodes that run as a network. This network can store private keys and map them to appropriate user IDs, and allow users to retrieve them via non-cryptographic authentication methods.‌

Beyond the persisting mappings of keys to user IDs, the network has no other shared state. Tendermint is used simply for purposes of having a Byzantine Fault Tolerant \(BFT\) replicated state to share this mapping state between nodes.‌

A Torus node is also not a typical distributed system, since each node operator only runs a single node.‌

### Trust Assumptions <a id="trust-assumptions"></a>

We built Torus on the assumptions of honest majority, keeping our code tolerant of some byzantine adversaries.‌

For the deployed scheme, since Asynchronous Verifiable Secret Sharing \(AVSS\) supports a dual-threshold sharing, we are using a 3/4 honest majority with a 1/2 + 1 reconstruction threshold.‌

While, most other secret sharing schemes use 2/3 honest majority with a 1/3 + 1 reconstruction threshold, our preference for total system failure over key theft favours the former thresholds.‌

## Key Generation <a id="key-generation"></a>

Since key generation is an activity that requires several rounds of communication, it is unwise to do this when ever a user requires new keys. Instead, we generate buffers of unused keys ahead of time, so that we only need to assign them to users when they request for new keys.‌

We run this Distributed Key Generation \(DKG\) via a cryptographic scheme called [Asynchronous Verifiable Secret Sharing \(AVSS\) by Cachin et al. \(2002\)](https://eprint.iacr.org/2002/134.pdf). The main advantage DKG has over the other well-known DKGs like Pedersen DKG - Feldmen's VSS and its variants, is that it is fully Asynchronous and thus does not require a complaint phase when we consider the allowance for a small zero-knowledge proof. This simplifies matters greatly, reducing the rounds of communication, but at the expense of message complexity and some initial logical overhead \(we will need to use bivariate sharings instead of the usual univariate sharings\).‌ Which is a fair trade-off

In brief, this scheme generates a random 2D plane and creates horizontal \(X\) and vertical \(Y\) slices at the appropriate indices as sharings. We then get sub-sharings on these horizontal and vertical sharings at the appropriate indices, and echo them to other nodes. As a node, the sub-sharings received from other nodes should match up with the initial sharing that the node received from the dealer, and even if they do not, the node can always interpolate the correct sharing via these echoed sub-sharings. This eliminates the dealer complaint phase entirely. Once that is done, we restrict ourselves to just the horizontal \(X\) domain such that our final sharings are still on that of a univariate polynomial, which is what a typical DKG does.‌

At the end of the Key Generation process, the nodes are left with a final \(aggregated\) share to a master public key pair, which every node contributed to its randomness. This is achieved without the formation of the respective private key in any context. The next section "Authentication and Assignments" goes through how a user is assigned and retrieves their keys.

## Authentication and Assignments <a id="authentication-and-assignments"></a>

### Key Assignments <a id="key-assignments"></a>

Keys are Assigned to a combination of verifier \(e.g. Google, Github\) and `verifier_id`, which is a unique identifier respective and provided by the `verifier`.‌ This assignment can be triggered by any node and is decided through the nodes consensus layer.

### Verifiers and Key Retrieval <a id="verifiers-and-key-retrieval"></a>

In order to allow for general identifiers to be used instead of only allowing OAuth, we typically need at least two of these APIs to be implemented by the external verifier:‌

1. an API that issues unique tokens with a unique representation.
2. an API that consumes these tokens and returns user information as well as when the token was issued.

Typically any entity that fulfils an interface and provide signatures on unique ID strings and a timestamp can be a verifier. This is extendable to most authentication schemes including many implementations of the OAuth standard and OpenID Connect.‌

#### OAuth Integration <a id="oauth-integration"></a>

Although there is the OAuth 2.0 standard, many implementations of them differ slightly from the specification. Many implementations, including Google's, do not necessitate a server gaining access to a users OAuth before the front-end. Google's for example, through its client uses an iframe and post message to communicate the OAuth token directly to the front-end. The OAuth tokens often represent signatures which can be verified locally against a public key by the recipient nodes.‌

In the case where token's are shared to a server ahead of the front-end we extend commit reveal schemes, similar to the one described below to ensure a user's key is always returned to only themselves.‌

#### Front-Running Protection <a id="front-running-protection"></a>

In order to prevent the possibility of a rogue node from front-running you by taking your token, spinning up a browser and pretending to be you and thereby stealing your key, we use a commitment scheme on our token similar to Bracha’s Reliable Broadcast, to ensure that all nodes can be sure that most other nodes are aware of the commitment, before it is finally revealed.‌

This is done by generating a temporary private key that nodes will use to encrypt all incoming communication. The received token is then hashed from the first API, asking for a signature on this hashed token from all nodes, bundling these signatures together as a proof, and submitting the proof together with the plain un-hashed token to each node to get back our shares.‌

The idea here is that as an honest node, you will never give out shares for a token whose commitment has been seen before. You want to give out shares, but you cannot be sure that the final incoming request with a proof is not by a front-runner. However, you know that in order to generate this proof, enough nodes must have received this token and encrypted a message for a recipient with this private key.‌

If a front-runner had intercepted the original commitment and gotten this proof for himself, the user would not receive enough signatures and would never have revealed this token, so this scenario would not be possible. Even if a front-runner is currently intercepting this message that contains a revealed token with a proof, by encrypting the share with the associated temporary private key, the front-runner has no way of decrypting it. This sounds complicated and unlikely, but it is a relatively easy to spot attack.‌

### Private Key Reconstruction <a id="private-key-reconstruction"></a>

In order to improve the user experience we make use of a Javascript front-end client to provide a Web3 interface for DApps that holds the private key for the user in a separate Javascript context. All communications to nodes, third-party authentication servers, as well as message signing, are done in this separate Javascript iframe context that is loaded within our domain.‌

## Node Migration <a id="node-migration"></a>

The Torus network functions in epochs. Each epoch has a set of nodes who are in charge of the node operations, and when they are done, they migrate the necessary state over to the next epoch’s nodes. Since our entire system does not store any state other than the mappings of TorusIDs to user verifier IDs and private keys, the only systems needed are the ones that migrate mappings and private keys across epochs.‌

The migration of keys uses Proactive Secret Sharing, also from Cachin et al. This is necessary because we cannot just copy shares to the new set of nodes, as that might mean that a single node operator could get access to more than one share, and it is not possible to add or remove nodes. Proactive Secret Sharing allows that.‌

In brief, the key idea is that we create sharings of shares and add them up in a way such that they form a Lagrange Interpolation on the original secret. Much like how DKGs are the sum of several secret sharings, where the master secret is the sum of all of the secrets from each of the N-parallel secret sharing protocols, we can do the same thing by setting N-parallel secret sharing protocols to be run by the original set of nodes, with their “secret” as their share. The resulting shares of shares, if added appropriately \(multiply them by Lagrange coefficients first\), would lead to a re-sharing on the original secret.

