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
import com.web3auth.core.types.LoginParams
import com.web3auth.core.types.Provider
import com.web3auth.core.types.Web3AuthOptions
import com.web3auth.core.types.Web3AuthResponse
import java8.util.concurrent.CompletableFuture


class MainActivity : AppCompatActivity() {

    private lateinit var web3Auth: Web3Auth

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
