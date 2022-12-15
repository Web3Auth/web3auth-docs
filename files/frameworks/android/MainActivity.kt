package com.web3auth.app

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import com.web3auth.core.Web3Auth
import com.web3auth.core.types.*
import java8.util.concurrent.CompletableFuture
import org.web3j.crypto.Credentials
import org.web3j.protocol.Web3j
import org.web3j.protocol.http.HttpService


class MainActivity : AppCompatActivity() {

    private lateinit var web3Auth: Web3Auth
    private lateinit var sessionId: String // <-- Stores the Web3Auth's sessionId.
    private lateinit var web3: Web3j
    private lateinit var credentials: Credentials

    // REPLACE-EVMProvider-


    private val gson = Gson()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //HIGHLIGHTSTART-instantiate
        // REPLACE-getConstructorCode-

        //HIGHLIGHTEND-instantiate

        //HIGHLIGHTSTART-setResultURL
        // Handle user signing in when app is not alive
        web3Auth.setResultUrl(intent?.data)
        //HIGHLIGHTEND-setResultURL

        // Call sessionResponse() in onCreate() to check for any existing session.
        val sessionResponse: CompletableFuture<Web3AuthResponse> = web3Auth.sessionResponse()
        sessionResponse.whenComplete { loginResponse, error ->
            if (error == null) {
                // Sets the sessionId, credentials and Web3j instance.
                sessionId = loginResponse.sessionId.toString()
                credentials = Credentials.create(sessionId)
                web3 = Web3j.build(HttpService(rpcUrl))
                reRender(loginResponse)
            } else {
                Log.d("MainActivity_Web3Auth", error.message ?: "Something went wrong")
                // Ideally, you should initiate the login function here.
            }
        }

        // Setup UI and event handlers
        val signInButton = findViewById<Button>(R.id.signInButton)
        signInButton.setOnClickListener { signIn() }

        val signOutButton = findViewById<Button>(R.id.signOutButton)
        signOutButton.setOnClickListener { signOut() }

        // Blockchain calls
        // HIGHLIGHTSTART-evmRPCFunctions
        val getBalanceButton = findViewById<Button>(R.id.getBalanceButton)
        getBalanceButton.setOnClickListener { getAddress() }

        val getBalanceButton = findViewById<Button>(R.id.getBalanceButton)
        getBalanceButton.setOnClickListener { getBalance() }

        val signMessageButton = findViewById<Button>(R.id.signMessageButton)
        signMessageButton.setOnClickListener { signMessage() }

        val sendTransactionButton = findViewById<Button>(R.id.sendTransactionButton)
        sendTransactionButton.setOnClickListener { sendTransaction() }
        // HIGHLIGHTEND-evmRPCFunctions

        reRender(Web3AuthResponse())
    }
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)

        //HIGHLIGHTSTART-setResultURL
        // Handle user signing in when app is active
        web3Auth.setResultUrl(intent?.data)
        //HIGHLIGHTEND-setResultURL

    }

    private fun signIn() {
        //HIGHLIGHTSTART-triggeringLogin

        // REPLACE-getAndroidLoginConfig-

        //HIGHLIGHTEND-triggeringLogin

        loginCompletableFuture.whenComplete { loginResponse, error ->
            if (error == null) {
                // Set the sessionId from Web3Auth in App State
                // This will be used when making blockchain calls with Web3j
                sessionId = loginResponse.sessionId.toString()
                // Sets the credentials and Web3j instance.
                credentials = Credentials.create(sessionId)
                web3 = Web3j.build(HttpService(rpcUrl))
                reRender(loginResponse)
            } else {
                Log.d("MainActivity_Web3Auth", error.message ?: "Something went wrong" )
            }
        }
    }

    private fun signOut() {
        //HIGHLIGHTSTART-triggeringLogout
        val logoutCompletableFuture =  web3Auth.logout()
        //HIGHLIGHTEND-triggeringLogout
        logoutCompletableFuture.whenComplete { _, error ->
            if (error == null) {
                reRender(Web3AuthResponse())
            } else {
                Log.d("MainActivity_Web3Auth", error.message ?: "Something went wrong" )
            }
        }
        recreate()
    }

    // HIGHLIGHTSTART-evmRPCFunctions
    private fun getAddress(): String {
        println("Address:, ${credentials.address}")
        return credentials.address
    }
    // HIGHLIGHTEND-evmRPCFunctions

    // HIGHLIGHTSTART-evmRPCFunctions
    private fun getBalance(): BigInteger? {
        val publicAddress = credentials.address
        val ethBalance: EthGetBalance = web3.ethGetBalance(publicAddress, DefaultBlockParameterName.LATEST).sendAsync().get()
        println("Balance: ${ethBalance.balance}")
        return ethBalance.balance
    }
    // HIGHLIGHTEND-evmRPCFunctions

    // HIGHLIGHTSTART-evmRPCFunctions
    private fun signMessage(message: String): String {
        val hashedData = Hash.sha3(message.toByteArray(StandardCharsets.UTF_8))
        val signature = Sign.signMessage(hashedData, credentials.ecKeyPair)
        val r = Numeric.toHexString(signature.r)
        val s = Numeric.toHexString(signature.s).substring(2)
        val v = Numeric.toHexString(signature.v).substring(2)
        val signHash = StringBuilder(r).append(s).append(v).toString()
        println("Signed Hash: $signHash")
        return signHash
    }
    // HIGHLIGHTEND-evmRPCFunctions

    // HIGHLIGHTSTART-evmRPCFunctions
    private fun sendTransaction(amount: Double, recipientAddress: String): String? {
        val ethGetTransactionCount: EthGetTransactionCount = web3.ethGetTransactionCount(credentials.address, DefaultBlockParameterName.LATEST).sendAsync().get()
        val nonce: BigInteger = ethGetTransactionCount.transactionCount
        val value: BigInteger = Convert.toWei(amount.toString(), Convert.Unit.ETHER).toBigInteger()
        val gasLimit: BigInteger = BigInteger.valueOf(21000)
        val chainId: EthChainId = web3.ethChainId().sendAsync().get()

        // Raw Transaction
        val rawTransaction: RawTransaction = RawTransaction.createTransaction(
          chainId.chainId.toLong(),
          nonce,
          gasLimit,
          recipientAddress,
          value,
          "",
          BigInteger.valueOf(5000000000),
          BigInteger.valueOf(6000000000000)
        )

        val signedMessage: ByteArray = TransactionEncoder.signMessage(rawTransaction, credentials)
        val hexValue: String = Numeric.toHexString(signedMessage)
        val ethSendTransaction: EthSendTransaction = web3.ethSendRawTransaction(hexValue).sendAsync().get()
        return if(ethSendTransaction.error != null) {
          println("Tx Error: ${ethSendTransaction.error.message}")
          ethSendTransaction.error.message
        } else {
          println("Tx Hash: ${ethSendTransaction.transactionHash}")
          ethSendTransaction.transactionHash
        }
    }
    // HIGHLIGHTEND-evmRPCFunctions

    private fun reRender(web3AuthResponse: Web3AuthResponse) {
        val contentTextView = findViewById<TextView>(R.id.contentTextView)
        val signInButton = findViewById<Button>(R.id.signInButton)
        val signOutButton = findViewById<Button>(R.id.signOutButton)

        val key = web3AuthResponse.privKey
        val userInfo = web3AuthResponse.userInfo

        if (key is String && key.isNotEmpty()) {
            contentTextView.text = gson.toJson(web3AuthResponse)
            contentTextView.visibility = View.VISIBLE
            signInButton.visibility = View.GONE
            signOutButton.visibility = View.VISIBLE
        } else {
            contentTextView.text = getString(R.string.not_logged_in)
            contentTextView.visibility = View.GONE
            signInButton.visibility = View.VISIBLE
            signOutButton.visibility = View.GONE
        }
    }
}
