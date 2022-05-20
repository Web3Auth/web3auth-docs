package com.web3auth.app

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.textfield.TextInputLayout
import com.google.gson.Gson
import com.web3auth.core.types.WhiteLabelData
import com.web3auth.core.types.Provider
import com.web3auth.core.Web3Auth
import com.web3auth.core.isEmailValid
import com.web3auth.core.types.ExtraLoginOptions
import com.web3auth.core.types.LoginParams
import com.web3auth.core.types.Web3AuthOptions
import com.web3auth.core.types.Web3AuthResponse
import java8.util.concurrent.CompletableFuture

class MainActivity : AppCompatActivity(), AdapterView.OnItemClickListener {
    private lateinit var web3Auth: Web3Auth

    private val verifierList: List<LoginVerifier> = listOf(
        LoginVerifier("Google", Provider.GOOGLE),
        LoginVerifier("Facebook", Provider.FACEBOOK),
        LoginVerifier("Twitch", Provider.TWITCH),
        LoginVerifier("Discord", Provider.DISCORD),
        LoginVerifier("Reddit", Provider.REDDIT),
        LoginVerifier("Apple", Provider.APPLE),
        LoginVerifier("Github", Provider.GITHUB),
        LoginVerifier("LinkedIn", Provider.LINKEDIN),
        LoginVerifier("Twitter", Provider.TWITTER),
        LoginVerifier("Line", Provider.LINE),
        LoginVerifier("Hosted Email Passwordless", Provider.EMAIL_PASSWORDLESS)
    )

    private var selectedLoginProvider: Provider = Provider.GOOGLE

    private val gson = Gson()

    private fun signIn() {
        val hintEmailEditText = findViewById<EditText>(R.id.etEmailHint)
        var extraLoginOptions: ExtraLoginOptions? = null
        if (selectedLoginProvider == Provider.EMAIL_PASSWORDLESS) {
            val hintEmail = hintEmailEditText.text.toString()
            if (hintEmail.isBlank() || !hintEmail.isEmailValid()) {
                Toast.makeText(this, "Please enter a valid Email.", Toast.LENGTH_LONG).show()
                return
            }
            extraLoginOptions = ExtraLoginOptions(login_hint = hintEmail)
        }

        val loginCompletableFuture: CompletableFuture<Web3AuthResponse> = web3Auth.login(
            LoginParams(selectedLoginProvider, extraLoginOptions = extraLoginOptions)
        )
        loginCompletableFuture.whenComplete { loginResponse, error ->
            if (error == null) {
                reRender(loginResponse)
            } else {
                Log.d("MainActivity_Web3Auth", error.message ?: "Something went wrong" )
            }

        }
    }

    private fun signOut() {
        val logoutCompletableFuture =  web3Auth.logout()
        logoutCompletableFuture.whenComplete { _, error ->
            if (error == null) {
                reRender(Web3AuthResponse())
            } else {
                Log.d("MainActivity_Web3Auth", error.message ?: "Something went wrong" )
            }
        }
    }

    private fun reRender(web3AuthResponse: Web3AuthResponse) {
        val contentTextView = findViewById<TextView>(R.id.contentTextView)
        val signInButton = findViewById<Button>(R.id.signInButton)
        val signOutButton = findViewById<Button>(R.id.signOutButton)
        val spinner = findViewById<TextInputLayout>(R.id.verifierList)
        val hintEmailEditText = findViewById<EditText>(R.id.etEmailHint)

        val key = web3AuthResponse.privKey
        val userInfo = web3AuthResponse.userInfo
        if (key is String && key.isNotEmpty()) {
            contentTextView.text = gson.toJson(web3AuthResponse)
            contentTextView.visibility = View.VISIBLE
            signInButton.visibility = View.GONE
            signOutButton.visibility = View.VISIBLE
            spinner.visibility = View.GONE
            hintEmailEditText.visibility = View.GONE
        } else {
            contentTextView.text = getString(R.string.not_logged_in)
            contentTextView.visibility = View.GONE
            signInButton.visibility = View.VISIBLE
            signOutButton.visibility = View.GONE
            spinner.visibility = View.VISIBLE
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Configure Web3Auth
        web3Auth = Web3Auth(
            Web3AuthOptions(context = this,
            clientId = getString(R.string.web3auth_project_id),
            network = Web3Auth.Network.MAINNET,
            redirectUrl = Uri.parse("torusapp://org.torusresearch.web3authexample/redirect"),
                whiteLabel = WhiteLabelData(
                    "Web3Auth Sample App", null, null, "en", true,
                    hashMapOf(
                        "primary" to "#123456"
                    )
                )
            )
        )

        web3Auth.setResultUrl(intent.data)

        // Setup UI and event handlers
        val signInButton = findViewById<Button>(R.id.signInButton)
        signInButton.setOnClickListener { signIn() }

        val signOutButton = findViewById<Button>(R.id.signOutButton)
        signOutButton.setOnClickListener { signOut() }

        val spinner = findViewById<AutoCompleteTextView>(R.id.spinnerTextView)
        val loginVerifierList: List<String> = verifierList.map { item ->
            item.name
        }
        val adapter: ArrayAdapter<String> =
            ArrayAdapter(this, R.layout.item_dropdown, loginVerifierList)
        spinner.setAdapter(adapter)
        spinner.onItemClickListener = this
    }

    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        web3Auth.setResultUrl(intent?.data)
    }

    override fun onItemClick(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
        selectedLoginProvider = verifierList[p2].loginProvider

        val hintEmailEditText = findViewById<EditText>(R.id.etEmailHint)
        if (selectedLoginProvider == Provider.EMAIL_PASSWORDLESS) {
            hintEmailEditText.visibility = View.VISIBLE
        } else {
            hintEmailEditText.visibility = View.GONE
        }
    }

    data class LoginVerifier (
        val name : String,
        val loginProvider : Provider
    )

}
