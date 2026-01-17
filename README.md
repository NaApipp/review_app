# Review App

A web application to **view products and provide reviews** simply, securely, and modernly.

**Live Demo:**
[https://mini-review-app.vercel.app/](https://mini-review-app.vercel.app/)

---

## Overview

**Review App** is a website that allows users to:

* View product list
* Open product details
* Read reviews from other users
* Give reviews and ratings
* Login and logout securely

This application is similar to the review system we often find in marketplaces or review websites.


---


## Main Feature

### User Features

* Login & Logout 
* View product list
*  Pagination (9 products per page)
*  Product details
*  Provide reviews and ratings
*  Auto logout if user is inactive (idle timeout)
* Add Product (Admin Only)

### Technical Features

* Server Side Rendering (SEO Friendly)
* Protected Route using Layout
* Context API for authentication
* REST API using Next.js
* MongoDB Native Driver

---

## Technologies Used

| Technology       | Function                      |
| ---------------- | ----------------------------- |
| **Next.js 14+**  | Fullstack React Framework     |
| **TypeScript**   | Maintain data type consistency |
| **MongoDB**      | NoSQL Database                |
| **Tailwind CSS** | UI Styling                    |
| **Context API**  | State Management (Auth)       |
| **Vercel**       | Deployment                    |
| **Mongoose**     | MongoDB Package               |

---

##  Folder Structure (Simple Explanation)

```
src/
 ├── app/
 │   |
 │   │
 │   ├── (dashboard)/
 │   │   └── add-product/
 │   │       ├── comoponents/
 │   │       └── page.tsx             # Add Prouct From
 │   │
 │   │
 │   ├── (main)/
 │   │   └── beranda/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       ├── [productId]/
 │   │       |   └── page.tsx         # Product details & import reviews form
 │   │       |   └── ReviewForm.tsx   # Reviews product Form
 │   │       └── components/
 │   │           └── Header.tsx       # Header + logout
 │   │
 │   ├── api/
 │   │   └── main/
 │   │       ├── auth/                # Login, logout, me
 │   │       ├── product/             # Product API
 │   │       └── review/              # Review API
 │
 ├── hooks/
 │   └── useAddProduct.ts             # Manage State and side effect
 │
 ├── lib/
 │   └── mongodb.ts                   # MongoDB Connection
 │
 ├── models/                          # Data validation when retrieving/saving
 │   └── Products.ts                  
 │   └── Reviews.ts                   
 │
 └── public/
```

---

##  Authentication System

* User login receives a **token**
* Token is stored in **sessionStorage**
* User data is fetched from `/api/main/auth/me` endpoint
* Certain pages are protected by **Protected Layout**
* If user is inactive for 15 minutes → **auto logout**

All processes run automatically in the background.

---

## API Endpoints

| Endpoint                | Method | Function            |
| ----------------------- | ------ | ------------------- |
| `/api/main/auth/login`  | POST   | Login user          |
| `/api/main/auth/logout` | POST   | Logout user         |
| `/api/main/auth/me`     | GET    | Get user data       |
| `/api/main/product`     | GET    | Get product list    |
| `/api/main/review`      | GET    | Get reviews         |
| `/api/main/review`      | POST   | Add review          |
| `/api/dashboard/product`      | POST   | Add Product          |

---

## How to Run Project (Req Main Developer)

<!-- ### 1️⃣ Clone Repository

```bash
git clone https://github.com/NaApipp/review_app.git
cd review_app
```

### 2️⃣ Install Dependency

```bash
npm install
```

### 3️⃣ Setup Environment

Create `.env.local` file

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Buka browser:

```
http://localhost:3000
``` -->

---

##  Pagination

* Displays **9 products per page**
* **Next & Previous** buttons
* Buttons automatically disabled on first or last page

---

##  Security & Best Practice

✔ Database queries only in Server Component
✔ No database access on client
✔ Auth state isolated in Client Component
✔ Scalable project structure



---

## About the Developer

**Main Developer:** NaApipp
**Project:** Review App

---
