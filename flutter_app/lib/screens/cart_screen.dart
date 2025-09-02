import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/cart_provider.dart';

class CartScreen extends StatelessWidget {
  const CartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final cart = context.watch<CartProvider>();
    final items = cart.items.values.toList();
    return Scaffold(
      appBar: AppBar(title: const Text('Your Cart')),
      body: items.isEmpty
          ? const Center(child: Text('Cart is empty'))
          : ListView.separated(
              itemCount: items.length,
              separatorBuilder: (_, __) => const Divider(height: 1),
              itemBuilder: (_, i) {
                final it = items[i];
                return ListTile(
                  title: Text(it.product.title),
                  subtitle: Text('Qty: ${it.qty}'),
                  trailing: Text('₹ ${(it.product.price * it.qty).toStringAsFixed(2)}'),
                );
              },
            ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.all(12.0),
        child: ElevatedButton(
          onPressed: items.isEmpty ? null : () {},
          child: Text('Checkout • ₹ ${cart.total.toStringAsFixed(2)}'),
        ),
      ),
    );
  }
}
