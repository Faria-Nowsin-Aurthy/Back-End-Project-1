# E-Commerce Order Management API (ECOM-OMA)
This project is a robust, RESTful API designed to serve as the foundational back-end for an e-commerce platform. It handles all core business logic related to User Management and Order Processing, as well as managing Products, Carts, Categories, and Feedback.



# 🌍 API Endpoints Reference
The API base URL is typically set to " http://localhost:3000 " during local development.



# 👤 Users
  POST - http://localhost:3000/api/users <br/>
    demo code:<br/>
              {
                "name": "Faria Nowsin",
                "email": "nowsin@example.com",
                "age": 21,
                "password": "faria123",
                "address": {
                  "street": "123 Flower Road",
                  "city": "Dhaka",
                  "country": "Bangladesh"
                },
                "role": "user",
                "isActive": true,
                "hobbies": ["singing", "coding", "sleeping"]
              } <br/>
  GET (Read all) - http://localhost:3000/api/users <br/>
  GET (Read one user only) - http://localhost:3000/api/users/"id" <br/>
  PUT (Update) - http://localhost:3000/api/users/"id" <br/>
  DELETE - http://localhost:3000/api/users/"id" <br/>


# 🗂️ Categories
  POST - http://localhost:3000/api/categories <br/>
    demo code: <br/>
              {
                "name": "Electronics",
                "description": "Devices, gadgets, and home appliances."
              } <br/>
  GET (Read all) - http://localhost:3000/api/categories <br/>
  GET (read one category) - http://localhost:3000/api/categories/"id" <br/>
  PUT (Update) - http://localhost:3000/api/categories/"id" <br/>
  DELETE - http://localhost:3000/api/categories/"id" <br/>


# 🛍️ Products
  POST - http://localhost:3000/api/products <br/>
    demo code: <br/>
              {
                  "name": "Wireless Headphones",
                  "price": 2999,
                  "description": "Bluetooth over-ear headphones with noise cancellation",
                  "category": "Electronics",
                  "stock": 25,
                  "isAvailable": true,
                  "ratings": [
                      1,
                      2,
                      3,
                      4,
                      5
                  ],
                  "imageUrl": "https://m.media-amazon.com/images/I/61zKWtjenPL._AC_SL1500_.jpg"
              } <br/>
  GET (Read all) - http://localhost:3000/api/products <br/>
  GET (read one product) - http://localhost:3000/api/products/"id" <br/>
  PUT (Update) - http://localhost:3000/api/products/"id" <br/>
  DELETE - http://localhost:3000/api/products/"id" <br/>


# 🛒 Carts
  POST - http://localhost:3000/api/carts <br/>
    demo code: <br/>
              {
                "userId": "6900f966c7f027e45fd90a99",
                "items": [
                  {
                    "productId": "6900f990c7f027e45fd90a9c",
                    "quantity": 1,
                    "price": 2999
                  }
                ],
                "status": "active"
              } <br/>
  GET (Read all) - http://localhost:3000/api/carts <br/>
  GET (read by user) - http://localhost:3000/api/carts/"userId" <br/>
  PUT (Update) - http://localhost:3000/api/carts/"userId" <br/>
  DELETE - http://localhost:3000/api/carts/"userId" <br/>


# 📦 Orders
  POST - http://localhost:3000/api/orders <br/>
    demo code: <br/>
              {
                "userId": "6900f966c7f027e45fd90a99",
                "items": [
                  {
                    "productId": "6900f990c7f027e45fd90a9c",
                    "quantity": 2,
                    "price": 2999
                  }
                ],
                "shippingAddress": {
                  "street": "123 Main St",
                  "city": "Dhaka",
                  "state": "Dhaka Division",
                  "postalCode": "1200",
                  "country": "Bangladesh"
                },
                "paymentMethod": "card"
              } <br/>
  GET (Read all) - http://localhost:3000/api/orders <br/>
  GET (Read one) - http://localhost:3000/api/orders/"id" <br/>
  GET (Order by user) - http://localhost:3000/api/orders/user/"userId" <br/>
  PUT (Update) - http://localhost:3000/api/orders/"id" <br/>
  PATCH (Update status) - http://localhost:3000/api/orders/"id"/status <br/>
  DELETE - http://localhost:3000/api/orders/"id" <br/>


# ⭐ Feedback
  POST - http://localhost:3000/api/feedback <br/>
    demo code: <br/>
              {
                "user": "6900f966c7f027e45fd90a99",
                "message": "I really love your website! It's very easy to navigate.",
                "rating": 5
              } <br/>
  GET (Read all) - http://localhost:3000/api/feedback <br/>
  GET (read one) - http://localhost:3000/api/feedback/"id" <br/>
  PUT (Update) - http://localhost:3000/api/feedback/"id" <br/>
  DELETE - http://localhost:3000/api/feedback/"id" <br/>

