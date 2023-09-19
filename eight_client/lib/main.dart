import 'package:eight_client/webview.dart';
import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Permission.camera.request();

  runApp(MaterialApp(
    home: HomeScreen(),
  ));
}
