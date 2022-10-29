using System;
using System.Linq;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Newtonsoft.Json;

public class Web3custom : MonoBehaviour
{
    Web3Auth web3Auth;

    // Start is called before the first frame update
    void Start()
    {
        web3Auth = GetComponent<Web3Auth>();
        // HIGHLIGHTSTART-instantiate
        web3Auth.setOptions(new Web3AuthOptions()
        {
            // REPLACE-Web3AuthOptions-

        });
        // HIGHLIGHTEND-instantiate
        web3Auth.onLogin += onLogin;
        web3Auth.onLogout += onLogout;
    }

    public void login()
    {
        var selectedProvider = Provider.GOOGLE;

        // HIGHLIGHTSTART-triggeringLogin
        var options = new LoginParams()
        {
            loginProvider = selectedProvider
            // REPLACE-LoginParams-

        };

        web3Auth.login(options);
        // HIGHLIGHTEND-triggeringLogin
    }
    // HIGHLIGHTSTART-getUserInfo
    private void onLogin(Web3AuthResponse response)
    {
        var userInfo = JsonConvert.SerializeObject(response.userInfo, Formatting.Indented);
        Debug.Log(userInfo);
    }
    // HIGHLIGHTEND-getUserInfo

    public void logout()
    {
        // HIGHLIGHTSTART-triggeringLogout
        web3Auth.logout();
        // HIGHLIGHTEND-triggeringLogout
    }

    private void onLogout()
    {
        Debug.Log("Logged out!");
    }
}
