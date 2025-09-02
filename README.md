# Stellar Shop — Full-Stack E‑commerce (Flutter + Node + Mongo)

A production-style, resume‑worthy shopping app with:
- Flutter mobile client (Provider, HTTP)
- Node.js + Express API (JWT auth, Products, Cart, Orders)
- MongoDB (Atlas/local), Docker support
- Seed script for demo products

## 1) Quick Start with Docker
```bash
cd backend
docker compose up --build
# API on http://localhost:8080, Mongo on 27017
```

Seed products (optional):
```bash
# in another terminal (same folder)
node src/seed.js
```

## 2) Run Backend Locally (no Docker)
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Update `.env` with your Mongo connection + JWT secret.

### REST Endpoints
- `POST /api/auth/register {name,email,password}`
- `POST /api/auth/login {email,password}` → returns `{token}`
- `GET  /api/products?q=&category=&sort=newest|price_asc|price_desc|rating`
- `GET  /api/products/:id`
- `GET  /api/cart` (Auth)
- `POST /api/cart/add {productId, qty}` (Auth)
- `POST /api/cart/remove {productId}` (Auth)
- `POST /api/cart/clear` (Auth)
- `POST /api/orders {address}` (Auth)
- `GET  /api/orders` (Auth)

Auth header: `Authorization: Bearer <token>`

## 3) Run Flutter App
```bash
cd flutter_app
flutter pub get
flutter run
```
The app fetches from `http://localhost:8080` (see `providers/product_provider.dart`).

