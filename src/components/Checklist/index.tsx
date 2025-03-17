import { ReactNode, useEffect, useState } from "react";
import {
  productMap,
  blockchainMap,
  tags,
  pnpFeatureMap,
  sfaFeatureMap,
  pnpPlatformMap,
  sfaPlatformMap,
  mpcPlatformMap,
} from "../../common/maps";

// whitelabeling
// change description of interoperability, check wallet services as a feature for it

import styles from "./styles.module.css";
import Select, { StylesConfig } from "react-select";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { getURLOptions, getURLFromFilterOptions } from "../../theme/URLParams";

export default function Checklist(props: {
  showProductFilter: boolean;
  showPlatformFilter: boolean;
  showBlockchainFilter: boolean;
  showFeatureFilter: boolean;
}) {
  type admonitionType = "info" | "warning" | "note" | "tip" | "danger" | "caution";

  type ChecklistType = {
    heading: string;
    content: ReactNode;
    admonition?: ReactNode;
    admonitionType?: admonitionType;
  };

  const { showProductFilter, showPlatformFilter, showBlockchainFilter, showFeatureFilter } = props;
  const [productFilter, setProductFilter] = useState<string>("");
  const [platformFilter, setPlatformFilter] = useState<string[]>([]);
  const [blockchainFilter, setBlockchainFilter] = useState<string[]>([]);
  const [featureFilter, setFeatureFilter] = useState<string[]>([]);
  const [accountAbstractionWarning, setAccountAbstractionWarning] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<boolean>(false);
  const [productionChecklist, updateProductionChecklist] = useState<ChecklistType[]>([]);
  const [developmentChecklist, updateDevelopmentChecklist] = useState<ChecklistType[]>([]);
  const examplesUrl = useBaseUrl("/examples");
  const resourcesUrl = useBaseUrl("/resources");
  const authProviderSetupUrl = useBaseUrl("/auth-providers/setup");
  const supportedBrowsersUrl = useBaseUrl("/troubleshooting/supported-browsers");
  const productFitComparisonTableUrl = useBaseUrl("/product-fit#comparison-table");
  const quickStartUrl = useBaseUrl("/quick-start");
  const sdkReferenceUrl = useBaseUrl("/sdk");
  const evmIntegrationUrl = useBaseUrl("/connect-blockchain/evm/");
  const solanaIntegrationUrl = useBaseUrl("/connect-blockchain/solana/");
  const xrplIntegrationUrl = useBaseUrl("/connect-blockchain/xrpl/");
  const otherBlockchainIntegrationUrl = useBaseUrl("/connect-blockchain/other/");

  useEffect(() => {
    const urlOpts = getURLOptions();
    if (urlOpts["product"]) setProductFilter(urlOpts["product"]);
    if (urlOpts["platform"]) setPlatformFilter(urlOpts["platform"].split(","));
    if (urlOpts["blockchain"]) setBlockchainFilter(urlOpts["blockchain"].split(","));
    if (urlOpts["feature"]) setFeatureFilter(urlOpts["feature"].split(","));
  }, []);

  const onChangeProduct = (e) => {
    setProductFilter(e.value);
    setPlatformFilter([]);
    setBlockchainFilter([]);
    setFeatureFilter([]);
    setProductSelected(true);
  };

  const onChangePlatform = (e) => {
    const filterValue = e.map((item) => item.value);
    setPlatformFilter(filterValue);
  };

  const onChangeBlockchain = (e) => {
    const filterValue = e.map((item) => item.value);
    setBlockchainFilter(filterValue);
  };

  const onChangeFeature = (e) => {
    const filterValue = e.map((item) => item.value);
    setFeatureFilter(filterValue);
  };

  const createAdmonition = (content: ReactNode, type: admonitionType = "info") => {
    const typeToTitle = {
      info: "INFO",
      warning: "WARNING",
      note: "NOTE",
      tip: "TIP",
      danger: "DANGER",
      caution: "CAUTION",
    };

    const title = typeToTitle[type];
    return (
      <div className={`admonition admonition-${type} alert alert--${type}`}>
        <div className="admonition-heading">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
            <path
              fillRule="evenodd"
              d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
              fill="currentColor"
            ></path>
          </svg>
          <span style={{ fontWeight: "bold", verticalAlign: "5%", marginLeft: "5px" }}>
            {title}
          </span>
        </div>
        <div className="admonition-content">{content}</div>
      </div>
    );
  };

  useEffect(() => {
    if (
      featureFilter.includes(tags.accountAbstraction) &&
      (platformFilter.includes(tags.ios) ||
        platformFilter.includes(tags.android) ||
        platformFilter.includes(tags.flutter) ||
        platformFilter.includes(tags.unity) ||
        platformFilter.includes(tags.unreal))
    ) {
      setAccountAbstractionWarning(true);
    } else {
      setAccountAbstractionWarning(false);
    }
  }, [featureFilter, platformFilter]);

  useEffect(() => {
    const prodChecklist: ChecklistType[] = [
      {
        heading: "Create a Web3Auth Sapphire Mainnet Client ID",
        content: (
          <>
            Make sure your client id for Web3Auth is on the Sapphire Mainnet Network. If you have
            certain specific requirements for the network configurations for scalability, please
            reach out to us at our{" "}
            <a href="https://community.web3auth.io" target="_blank">
              Community Portal.
            </a>
          </>
        ),
        admonition:
          "Please ensure you are using a Sapphire Mainnet Client ID in your production environment. The Devnet network is intended only for testing and development purposes, as it undergoes periodic key rotations that could lead to lost wallets.",
        admonitionType: "warning",
      },
      {
        heading: "Update your Web3Auth SDKs to the latest version",
        content:
          "We are constantly updating our SDKs to make sure they are secure and performant. Make sure you are using the latest stable version of the SDK. Please do not actively use the pre release versions, rather wait for the latest stable release.",
      },
    ];

    if (productFilter !== tags.pnp || featureFilter.includes(tags.customAuthentication)) {
      prodChecklist.push({
        heading: "Create a Web3Auth Sapphire Mainnet Verifier",
        content:
          "All verifiers produce different wallets/ accounts for users. Please make sure the configuration is correct for your production application since account migrations between verifiers is not possible.",
        admonition:
          "Make sure the configuration is correct for your production application since account migrations between verifiers is not possible.",
        admonitionType: "warning",
      });
    }

    if (productFilter === tags.sfa) {
      prodChecklist.push({
        heading: "Audit the UX for your Login flow",
        content:
          "Do a thorough check of your login flow. From getting the id token from your auth provider to passing it over the Web3Auth SDK, make sure the user flow is seamless.",
      });
    } else if (productFilter === tags.mpcCoreKit) {
      prodChecklist.push({
        heading: "Audit the UX for your Login flow",
        content:
          "Do a thorough check of your login flow. From getting the id token from your auth provider to passing it over the Web3Auth SDK, and handling of the additional shares, make sure the user flow is seamless.",
        admonition:
          "With multiple MFA options, there can be a lot of edge cases. Make sure you have tested all the possible flows. Please contact your Web3Auth Rep to make sure your UX flow is audited.",
        admonitionType: "warning",
      });
    } else if (featureFilter.includes(tags.customAuthentication)) {
      prodChecklist.push({
        heading: "Audit the UX for your Login flow",
        content:
          "Do a thorough check of your login flow. Check the Web3Auth Dashboard for all the whitelabel settings and your custom authentication flow. Checking all the possible flows is recommended with your branding and customisations.",
      });
    } else {
      prodChecklist.push({
        heading: "Audit the UX for your Web3Auth Login flow",
        content:
          "Do a thorough check of your login flow. Check the Web3Auth Dashboard for all the whitelabel settings from the icon showing up in the Web3Auth Modal to the whitelabel setting for the intermediary pages that are shown to the user. Checking all the possible flows is recommended with your branding and customisations.",
        admonition: (
          <>
            Consider using Custom Authentication for better control over the UX Flows & User
            Accounts. <a href={authProviderSetupUrl}>Click here to learn more.</a>
          </>
        ),
        admonitionType: "info",
      });
    }

    if (featureFilter.includes(tags.accountAbstraction)) {
      prodChecklist.push({
        heading: "Configure your Bundler and Paymaster",
        content:
          "Check whether your Bundler and Paymaster are enabled the Mainnet Network for your dApp",
      });
    }

    prodChecklist.push(
      {
        heading: "Use a production RPC Endpoint for your respective blockchains",
        content:
          "For testing purposes, our examples and SDKs expose public RPC endpoints. Make sure you are using a production RPC endpoint (by providers like Infura) for your production environment before going live.",
      },

      {
        heading: "Check your interoperability flow",
        content:
          "If you're using WalletConnect or Web3Auth Wallet Services based interoperability flow, make sure you have tested the flow before going live.",
      },
      {
        heading: "Check in multiple browsers and devices",
        content: (
          <>
            The Web3Auth SDKs are built to work in all{" "}
            <a href={supportedBrowsersUrl}>major browsers and devices</a>. Make sure you have tested
            your login flow in all major browsers and devices. If you're facing any issues with any
            particular browser or device, please make sure they're compatible with the Web3Auth
            SDKs.
          </>
        ),
      },
      {
        heading: "Upgrade your Web3Auth Plan",
        content: (
          <>
            Finally, make sure you're on the correct{" "}
            <a href="https://web3auth.io/pricing.html" target="_blank">
              Web3Auth Plan
            </a>{" "}
            according to the features you're looking to use in the production environment.
            Additionally make sure to add a credit card in the Web3Auth Dashboard so that your
            services are not stopped once the MAW cap has reached.
          </>
        ),
      },
    );

    const devChecklist: ChecklistType[] = [
      {
        heading: "Create a new project on the Web3Auth Dashboard",
        content: (
          <>
            Start your integration journey with Logging into the{" "}
            <a href="https://dashboard.web3auth.io" target="_blank">
              Web3Auth Dashboard
            </a>{" "}
            and creating a new project
          </>
        ),
        admonition:
          "You can create a Sapphire Devnet project and use all Web3Auth features for free in your development environment. However, please ensure you are using a Sapphire Mainnet Client ID in your production environment. The Devnet network is intended only for testing and development purposes, as it undergoes periodic key rotations that could lead to lost wallets.",
        admonitionType: "warning",
      },
      {
        heading: "Use the Web3Auth Quick Start",
        content: (
          <>
            For a quick POC, we recommend using the <a href={quickStartUrl}>Quick Start</a> with a
            dynamic Integration Builder. It will help you get started with the Web3Auth SDKs in a
            few minutes.
          </>
        ),
      },
      {
        heading: "Checkout the Resources Section",
        content: (
          <>
            For Additional configurations and settings, like blockchain integration, authentication
            provider setup etc., checkout the <a href={resourcesUrl}>Resources Section</a>
          </>
        ),
      },
      {
        heading: "Checkout the SDK Reference",
        content: (
          <>
            Deep dive into your SDK for advanced configuration, and customisation. Checkout the{" "}
            <a href={sdkReferenceUrl}>Web3Auth SDK References</a>.
          </>
        ),
      },
      {
        heading: "Checkout the Particular Examples for your Integration",
        content: (
          <>
            We have a comprehensive list of examples built for each platform, blockchain and
            additional configurations. Checkout the <a href={examplesUrl}>particular examples</a>{" "}
            for your usecase.
          </>
        ),
      },
    ];

    if (blockchainFilter.includes(tags.evm)) {
      devChecklist.push({
        heading: "Integrate Web3Auth with EVM Compatible Chains",
        content: (
          <>
            Checkout our Reference for integrating Web3Auth with{" "}
            <a href={evmIntegrationUrl}>EVM Compatible Chains</a> like Ethereum, Binance Smart
            Chain, Polygon etc.
          </>
        ),
      });
    }

    if (blockchainFilter.includes(tags.solana)) {
      devChecklist.push({
        heading: "Integrate Web3Auth with the Solana Blockchain",
        content: (
          <>
            Checkout our Reference for integrating Web3Auth with{" "}
            <a href={solanaIntegrationUrl}>Solana Blockchain</a>.
          </>
        ),
      });
    }

    if (blockchainFilter.includes(tags.xrpl)) {
      devChecklist.push({
        heading: "Integrate Web3Auth with the XRPL Blockchain",
        content: (
          <>
            Checkout our Reference for integrating Web3Auth with{" "}
            <a href={xrplIntegrationUrl}>XRPL Blockchain</a>.
          </>
        ),
      });
    }

    // Check if any blockchain is selected that isn't EVM, Solana, or XRPL
    if (
      blockchainFilter.some(
        (tag) => tag !== tags.evm && tag !== tags.solana && tag !== tags.xrpl,
      ) &&
      blockchainFilter.length > 0
    ) {
      devChecklist.push({
        heading: "Integrate Web3Auth with Non EVM Blockchains",
        content: (
          <>
            Checkout our Reference for integrating Web3Auth with{" "}
            <a href={otherBlockchainIntegrationUrl}>Other Blockchain</a>.
          </>
        ),
      });
    }

    updateProductionChecklist(prodChecklist);
    updateDevelopmentChecklist(devChecklist);

    window.history.pushState(
      {},
      "",
      getURLFromFilterOptions({
        product: productFilter,
        platform: platformFilter.join(","),
        blockchain: blockchainFilter.join(","),
        feature: featureFilter.join(","),
      }),
    );
  }, [featureFilter, productFilter, platformFilter, blockchainFilter]);

  function renderChecklist(item: ChecklistType, index: number) {
    return (
      <>
        <details open className={styles.checklistItem}>
          <summary>
            {index + 1}. {item.heading}
          </summary>
          <p>{item.content}</p>
        </details>
        {item.admonition && createAdmonition(item.admonition, item.admonitionType)}
        <br />
      </>
    );
  }

  return (
    <>
      <h4>Customize Your Implementation Checklist</h4>
      <p className={styles.subtitle}>
        Select your Web3Auth Product and Integration Platform to see relevant implementation steps
      </p>
      <div className={styles.searchArea}>
        {showProductFilter && (
          <Select
            options={productMap as any}
            styles={customSelectButtonStyles}
            onChange={onChangeProduct}
            placeholder="Select Product"
            value={
              productFilter
                ? {
                    value: productFilter,
                    label: productMap.find((p) => p.value === productFilter)?.label || "",
                  }
                : null
            }
          />
        )}
        {showPlatformFilter && productFilter && (
          <Select
            options={
              productFilter === tags.pnp
                ? pnpPlatformMap
                : productFilter === tags.sfa
                  ? sfaPlatformMap
                  : mpcPlatformMap
            }
            isMulti
            styles={customSelectButtonStyles}
            onChange={onChangePlatform}
            placeholder="Select Platform"
            value={platformFilter.map((value) => {
              const platform = (
                productFilter === tags.pnp
                  ? pnpPlatformMap
                  : productFilter === tags.sfa
                    ? sfaPlatformMap
                    : mpcPlatformMap
              ).find((p) => p.value === value);
              return {
                value,
                label: platform?.label || "",
              };
            })}
          />
        )}
        {showBlockchainFilter && productFilter && productFilter !== tags.mpcCoreKit && (
          <Select
            options={blockchainMap as any}
            isMulti
            styles={customSelectButtonStyles}
            onChange={onChangeBlockchain}
            placeholder="Select Blockchain"
            value={blockchainFilter.map((value) => {
              const blockchain = blockchainMap.find((p) => p.value === value);
              return {
                value,
                label: blockchain?.label || "",
              };
            })}
          />
        )}
        {showFeatureFilter && productFilter && productFilter !== tags.mpcCoreKit && (
          <Select
            options={productFilter === tags.pnp ? pnpFeatureMap : (sfaFeatureMap as any)}
            isMulti
            styles={customSelectButtonStyles}
            onChange={onChangeFeature}
            placeholder="Select Feature"
            value={featureFilter.map((value) => {
              const feature = (productFilter === tags.pnp ? pnpFeatureMap : sfaFeatureMap).find(
                (p) => p.value === value,
              );
              return {
                value,
                label: feature?.label || "",
              };
            })}
          />
        )}
      </div>
      <div className={styles.container}>
        {accountAbstractionWarning && (
          <>
            {createAdmonition(
              "Account Abstraction is only supported in Web & React Native SDKs.",
              "danger",
            )}
          </>
        )}
        <div style={{ display: !productSelected ? "block" : "none" }}>
          {createAdmonition(
            <>
              Please select your Web3Auth Product. Review the{" "}
              <a href={productFitComparisonTableUrl}>Web3Auth Product Fit Guide</a> to determine
              which product best suits your needs.
            </>,
            "warning",
          )}
        </div>
        <br />
        <div className={styles.checklist}>
          <details open className={styles.checklistContainer}>
            <summary>
              <h2>Development Checklist</h2>
            </summary>
            {developmentChecklist.map((item, index) => renderChecklist(item, index))}
          </details>
          <details open className={styles.checklistContainer}>
            <summary>
              <h2>Production Checklist</h2>
            </summary>
            {productionChecklist.map((item, index) => renderChecklist(item, index))}
          </details>
        </div>
      </div>
    </>
  );
}

const customSelectButtonStyles: StylesConfig<true> = {
  container: (provided) => ({
    ...provided,
    width: "max-content",
    minHeight: "42px",
    maxWidth: "275px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "125%",
  }),
  control: (provided) => ({
    ...provided,
    background: "var(--ifm-background-surface-color);",
    color: "var(--w3a-color-icon-gray)",
    border: "1px solid var(--ifm-color-emphasis-300)",
    borderRadius: "8px",
    minHeight: "42px",
  }),
  menu: (provided) => ({
    ...provided,
    background: "var(--ifm-background-surface-color);",
    border: "1px solid var(--ifm-color-emphasis-300)",
    borderRadius: "8px",
  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isDisabled
      ? undefined
      : isSelected
        ? "var(--ifm-color-emphasis-300)"
        : isFocused
          ? "var(--ifm-color-primary-lightest)"
          : undefined,
    cursor: isDisabled ? "not-allowed" : "default",
  }),
  multiValue: (styles, { data }) => ({
    ...styles,
    color: "var(--ifm-color-primary)",
    backgroundColor: "var(--ifm-color-primary-lightest)",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "125%",
    borderWidth: "0",
    borderRadius: "8px",
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "var(--ifm-color-primary)",
    backgroundColor: "var(--ifm-color-primary-lightest)",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "125%",
    borderWidth: "0",
    borderRadius: "8px",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "var(--ifm-color-primary)",
    backgroundColor: "var(--ifm-color-primary-lightest)",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "125%",
    borderWidth: "0",
    borderRadius: "8px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "var(--ifm-color-primary)",
    backgroundColor: "var(--ifm-color-primary-lightest)",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "125%",
    borderWidth: "0",
    borderRadius: "8px",
    padding: "2px 8px",
  }),
};
