import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/product_provider.dart';
import 'providers/cart_provider.dart';
import 'screens/home_screen.dart';
import 'screens/cart_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ProductProvider()..fetchProducts()),
        ChangeNotifierProvider(create: (_) => CartProvider()),
      ],
      child: MaterialApp(
        title: 'Stellar Shop',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(useMaterial3: true),
        routes: {
          '/': (_) => const HomeScreen(),
          '/cart': (_) => const CartScreen(),
        },
      ),
    );
  }
}
