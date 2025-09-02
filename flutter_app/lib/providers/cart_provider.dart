import 'package:flutter/foundation.dart';
import '../models/product.dart';

class CartItem {
  final Product product;
  int qty;
  CartItem(this.product, {this.qty = 1});
}

class CartProvider with ChangeNotifier {
  final Map<String, CartItem> _items = {};
  Map<String, CartItem> get items => _items;

  double get total => _items.values.fold(0, (s,i)=> s + i.product.price * i.qty);

  void add(Product p) {
    if (_items.containsKey(p.id)) {
      _items[p.id]!.qty++;
    } else {
      _items[p.id] = CartItem(p);
    }
    notifyListeners();
  }

  void remove(String id) {
    _items.remove(id);
    notifyListeners();
  }

  void clear() {
    _items.clear();
    notifyListeners();
  }
}
