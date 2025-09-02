import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import '../models/product.dart';

class ProductProvider with ChangeNotifier {
  final String baseUrl = const String.fromEnvironment('API_BASE', defaultValue: 'http://localhost:8080');
  List<Product> _products = [];
  bool loading = false;

  List<Product> get products => _products;

  Future<void> fetchProducts() async {
    loading = true; notifyListeners();
    try {
      final res = await http.get(Uri.parse('$baseUrl/api/products?sort=newest'));
      if (res.statusCode == 200) {
        final List data = jsonDecode(res.body);
        _products = data.map((e) => Product.fromJson(e)).toList();
      }
    } finally {
      loading = false; notifyListeners();
    }
  }
}
