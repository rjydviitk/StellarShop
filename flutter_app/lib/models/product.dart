class Product {
  final String id;
  final String title;
  final String? description;
  final double price;
  final String? image;
  final String? category;

  Product({required this.id, required this.title, this.description, required this.price, this.image, this.category});

  factory Product.fromJson(Map<String, dynamic> j) => Product(
    id: j['_id'],
    title: j['title'],
    description: j['description'],
    price: (j['price'] as num).toDouble(),
    image: (j['images'] != null && j['images'].isNotEmpty) ? j['images'][0] : null,
    category: j['category'],
  );
}
