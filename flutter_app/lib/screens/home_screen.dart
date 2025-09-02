import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/product_provider.dart';
import '../widgets/product_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final provider = context.watch<ProductProvider>();
    return Scaffold(
      appBar: AppBar(
        title: const Text('Stellar Shop'),
        actions: [
          IconButton(
            onPressed: () => Navigator.pushNamed(context, '/cart'),
            icon: const Icon(Icons.shopping_cart_outlined),
          )
        ],
      ),
      body: provider.loading
          ? const Center(child: CircularProgressIndicator())
          : GridView.builder(
              padding: const EdgeInsets.all(12),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 0.72,
                crossAxisSpacing: 12,
                mainAxisSpacing: 12,
              ),
              itemCount: provider.products.length,
              itemBuilder: (_, i) => ProductCard(product: provider.products[i]),
            ),
    );
  }
}
