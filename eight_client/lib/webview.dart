import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

final homeUrl = Uri.parse('https://capstone-eight.netlify.app/');

// ignore: must_be_immutable
class HomeScreen extends StatelessWidget {
  WebViewController controller = WebViewController()
    ..setJavaScriptMode(JavaScriptMode.unrestricted)
    ..loadRequest(homeUrl);
  HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color.fromRGBO(207, 200, 188, 100),
        body: SafeArea(
          child: WebViewWidget(
            controller: controller,
          ),
        ));
  }
}
