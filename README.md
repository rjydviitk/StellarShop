# 🛒 StellarShop — Full-Stack E-Commerce App

> **Cross-platform online shopping application** built with **Flutter + Dart** (frontend) and **Node.js + Express + MongoDB** (backend).  
> Designed for a **seamless shopping experience** with modern features like authentication, product catalog, cart, orders, and scalable APIs.  
> Future-ready with support for **AI recommendations, AR product preview, payment gateways, and admin analytics dashboard**.

---

## 🚀 Features

✅ Cross-platform app (Android/iOS) built in **Flutter**  
✅ Product listing with **search, filters & categories**  
✅ **Add-to-Cart** and checkout workflow  
✅ Secure **user authentication (JWT / Firebase Auth)**  
✅ Order management + **real-time notifications**  
✅ RESTful API backend with **Node.js + Express**  
✅ Cloud database with **MongoDB Atlas**  
✅ Extensible for **Stripe/PayPal/Razorpay payments**  
✅ Future support for:
- AI-powered recommendations (TensorFlow Lite)  
- AR product preview (ARCore/ARKit)  
- Chatbot (Dialogflow/Rasa)  
- Admin dashboard with analytics  

---

## 🏗️ Architecture

```
Flutter App (Frontend)
   ├── Product Catalog
   ├── Cart & Checkout
   ├── Auth Screens
   └── API Integration
          │
          ▼
Node.js + Express API (Backend)
   ├── Auth Service (JWT/Firebase)
   ├── Product Service (CRUD, stock)
   ├── Cart & Order Service
   ├── Payment Integration (future)
   └── Analytics & Notifications
          │
          ▼
MongoDB Atlas / Firestore (Database)
   ├── Users
   ├── Products
   ├── Orders
   └── ML Data Store
```

---

## ⚙️ Tech Stack

**Frontend:** Flutter, Dart, Provider, HTTP  
**Backend:** Node.js, Express, JWT, Bcrypt  
**Database:** MongoDB Atlas / Firebase Firestore  
**DevOps:** Docker, Docker Compose  
**Future Integrations:** Stripe, PayPal, Razorpay, TensorFlow Lite, ARCore/ARKit  

---

## 📦 Getting Started

### 🔹 Backend
```bash
cd backend
cp .env.example .env   # add MongoDB/Stripe keys here
npm install
npm run dev
```
Runs API at: `http://localhost:8080`

### 🔹 Seed Database (optional)
```bash
node src/seed.js
```

### 🔹 Flutter App
```bash
cd flutter_app
flutter pub get
flutter run
```

---

## 📊 Roadmap
- [x] Core shopping flows (products, cart, checkout)  
- [x] Auth & JWT integration  
- [x] Order placement & storage  
- [ ] Payment gateway integration  
- [ ] Push notifications (FCM)  
- [ ] AI recommendation engine  
- [ ] AR product preview  
- [ ] Admin analytics dashboard  

---

## 📸 Screenshots (Coming Soon!)
*(Add screenshots/gifs once UI is ready)*  

---

## 👨‍💻 Author
**Ramji Yadav**  
📌 Final Year B.Tech, Civil Engineering @ IIT Kanpur  
🔗 [LinkedIn](https://www.linkedin.com/in/ramji-yadav-iitk/) | [GitHub](https://github.com/rjydviitk)

---

✨ If you like this project, don’t forget to ⭐ the repo!
