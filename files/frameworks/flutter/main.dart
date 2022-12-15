//HIGHLIGHTSTART-buildingApp
import 'dart:collection';
import 'dart:io';
import 'package:flutter/material.dart';
import 'dart:async';
//HIGHLIGHTEND-buildingApp

// HIGHLIGHTSTART-installationFlutter
import 'package:web3auth_flutter/web3auth_flutter.dart';
import 'package:web3auth_flutter/enums.dart';
import 'package:web3auth_flutter/input.dart';
import 'package:web3auth_flutter/output.dart';
// HIGHLIGHTEND-installationFlutter


void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String _result = '';
  bool logoutVisible = false;

  // REPLACE-EVMProvider-


  @override
  void dispose() {
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    initPlatformState();
  }

  // Platform messages are asynchronous, so we initialize in an async method.
  Future<void> initPlatformState() async {
    // HIGHLIGHTSTART-whiteLabeling
    HashMap themeMap = HashMap<String, String>();
    themeMap['primary'] = "#229954";
    // HIGHLIGHTEND-whiteLabeling

    Uri redirectUrl;
    if (Platform.isAndroid) {
      // HIGHLIGHTSTART-registerApp
      redirectUrl = Uri.parse('w3a://com.example.w3aflutter/auth');
      // HIGHLIGHTEND-registerApp
    } else if (Platform.isIOS) {
      // HIGHLIGHTSTART-registerApp
      redirectUrl = Uri.parse('com.example.w3aflutter://openlogin');
      // HIGHLIGHTEND-registerApp
    } else {
      throw UnKnownException('Unknown platform');
    }
    // REPLACE-getConstructorCode-
  }

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Web3Auth x Flutter Example'),
        ),
        body: SingleChildScrollView(
          child: Center(
              child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Padding(
                padding: EdgeInsets.all(8.0),
              ),
              Visibility(
                visible: !logoutVisible,
                child: Column(
                  children: [
                    const Icon(
                      Icons.flutter_dash,
                      size: 80,
                      color: Color(0xFF1389fd),
                    ),
                    const SizedBox(
                      height: 40,
                    ),
                    const Text(
                      'Web3Auth',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 36,
                          color: Color(0xFF0364ff)),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    const Text(
                      'Welcome to Web3Auth x Flutter Demo',
                      style: TextStyle(fontSize: 14),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    const Text(
                      'Login with',
                      style: TextStyle(fontSize: 12),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    ElevatedButton(
                        onPressed: _login(_withProvider),
                        child: const Text('Login')),
                  ],
                ),
              ),
              Visibility(
                // ignore: sort_child_properties_last
                child: Column(
                  children: [
                    Center(
                      child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                              backgroundColor:
                                  Colors.red[600] // This is what you need!
                              ),
                          onPressed: _logout(),
                          child: Column(
                            children: const [
                              Text('Logout'),
                            ],
                          )),
                    ),
                  ],
                ),
                visible: logoutVisible,
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(_result),
              )
            ],
          )),
        ),
      ),
    );
  }

  Future<Web3AuthResponse> _withProvider() {
    // REPLACE-getFlutterLoginConfig-
  }

  VoidCallback _login(Future<Web3AuthResponse> Function() method) {
    return () async {
      try {
        final Web3AuthResponse response = await method();
        setState(() {
          _result = response.toString();
          logoutVisible = true;
        });
      } on UserCancelledException {
        print("User cancelled.");
      } on UnKnownException {
        print("Unknown exception occurred");
      }
    }
  }

  VoidCallback _logout() {
    return () async {
      try {
        setState(() {
          _result = '';
          logoutVisible = false;
        });
        // HIGHLIGHTSTART-triggeringLogout
        await Web3AuthFlutter.logout();
        // HIGHLIGHTEND-triggeringLogout
      } on UserCancelledException {
        print("User cancelled.");
      } on UnKnownException {
        print("Unknown exception occurred");
      }
    };
  }


}
