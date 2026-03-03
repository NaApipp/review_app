# Review App

A web application to **view products and provide reviews** simply, securely, and modernly.

**Dev Demo:**
[https://mini-review-dev.vercel.app/](https://mini-review-dev.vercel.app/)

**Main Website:**
[https://mini-review-app.vercel.app/](https://mini-review-app.vercel.app/)

---

## Overview

**Review App** is a website that allows users to:

- View product list
- Open product details
- Read reviews from other users
- Give reviews and ratings
- Login and logout securely

This application is similar to the review system we often find in marketplaces or review websites.

---

## Main Feature

### User Features

- Login & Logout
- View product list
- Pagination (9 products per page)
- Product details
- Provide reviews and ratings
- Auto logout if user is inactive (idle timeout)
- Add Product (Admin Only)

### Technical Features

- Server Side Rendering (SEO Friendly)
- Protected Route using Layout
- Context API for authentication
- REST API using Next.js
- MongoDB Native Driver

---

## Technologies Used

| Technology       | Function                       |
| ---------------- | ------------------------------ |
| **Next.js 14+**  | Fullstack React Framework      |
| **TypeScript**   | Maintain data type consistency |
| **MongoDB**      | NoSQL Database                 |
| **Tailwind CSS** | UI Styling                     |
| **Context API**  | State Management (Auth)        |
| **Vercel**       | Deployment                     |

---

---

## Library Used

| Technology               | Function               |
| ------------------------ | ---------------------- |
| **Lucide React+**        | Icon Library           |
| **react-type-animation** | Creat typing animation |
| **Mongoose**             | MongoDB Package        |

---

## Folder Structure (Simple Explanation)

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
 │   ├── (dataset)/
 │   │   └── dataset/
 │   │       ├── components/
 │   │       |   └── ButtonBack.tsx   # Button Back
 │   │       └── data-laptop/
 │   │       |   └── page.tsx         # Dataset View (Fetch API for GET data)
 │   │       └── data-handphone/
 │   │       |   └── page.tsx         # Dataset View (Fetch API for GET data)
 │   │       └── data-fashion/
 │   │           └── page.tsx         # Dataset View (Fetch API for GET data)
 │   │
 │   │
 │   ├── (Anotatorfashion)/
 │   │   └── label-review-fashion/
 │   │   |   ├── page.tsx             # Product list + pagination
 │   │   |   └── components/
 │   │   |       └── Navbar.tsx       # Header + logout
 │   │   |       └── ReviewRow.tsx    # Header + logout
 │   │   |       └── ReviewTable.tsx  # Header + logout
 │   │   └── login-handphone/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx    # login Form
 │   │
 │   │
 │   ├── (AnotatorfashionUser2)/
 │   │   └── label-review-fashion/
 │   │   |   ├── page.tsx             # Product list + pagination
 │   │   |   └── components/
 │   │   |       └── Navbar.tsx       # Header + logout
 │   │   |       └── ReviewRow.tsx    # Header + logout
 │   │   |       └── ReviewTable.tsx  # Header + logout
 │   │   └── login-handphone/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx    # login Form
 │   │
 │   │
 │   ├── (Anotatorlaptop)/
 │   │   └── label-review-laptop/
 │   │   |   ├── page.tsx             # Product list + pagination
 │   │   |   └── components/
 │   │   |       └── Navbar.tsx       # Header + logout
 │   │   |       └── ReviewRow.tsx    # Header + logout
 │   │   |       └── ReviewTable.tsx  # Header + logout
 │   │   └── login-handphone/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx    # login Form
 │   │
 │   │
 │   ├── (AnotatorlaptopUser2)/
 │   │   └── label-review-laptop/
 │   │   |   ├── page.tsx             # Product list + pagination
 │   │   |   └── components/
 │   │   |       └── Navbar.tsx       # Header + logout
 │   │   |       └── ReviewRow.tsx    # Header + logout
 │   │   |       └── ReviewTable.tsx  # Header + logout
 │   │   └── login-handphone/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx    # login Form
 │   │
 │   │
 │   ├── (Anotatorlaptop)/
 │   │   └── label-review-laptop/
 │   │   |   ├── page.tsx                # Product list + pagination
 │   │   |   └── components/
 │   │   |       └── Navbar.tsx          # Header + logout
 │   │   |       └── ReviewRow.tsx       # Header + logout
 │   │   |       └── ReviewTable.tsx     # Header + logout
 │   │   └── login-anotator-laptop/
 │   │       ├── page.tsx                # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx       # login Form
 │   │
 │   │
 │   ├── (AnotatorlaptopuUser2)/
 │   │   └── label-review-laptop/
 │   │   |   ├── page.tsx                # Product list + pagination
 │   │   |   └── components/
 │   │   |       └── Navbar.tsx          # Header + logout
 │   │   |       └── ReviewRow.tsx       # Header + logout
 │   │   |       └── ReviewTable.tsx     # Header + logout
 │   │   └── login-anotator-laptop/
 │   │       ├── page.tsx                # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx       # login Form
 │   │
 │   │
 │   ├── (handphoneSector)/
 │   │   └── beranda-handphone/
 │   │   |   ├── page.tsx             # Product list + pagination
 │   │   |   ├── [productId]/
 │   │   |   |   └── page.tsx         # Product details & import reviews form
 │   │   |   |   └── ReviewForm.tsx   # Reviews product Form
 │   │   |   └── components/
 │   │   |       └── Header.tsx       # Header + logout
 │   │   └── login-handphone/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx    # login Form
 │   │
 │   │
 │   │
 │   ├── (fashionSector)/
 │   │   └── beranda-fashion/
 │   │   |   ├── page.tsx             # Product list + pagination
 │   │   |   ├── [productId]/
 │   │   |   |   └── page.tsx         # Product details & import reviews form
 │   │   |   |   └── ReviewForm.tsx   # Reviews product Form
 │   │   |   └── components/
 │   │   |       └── Header.tsx       # Header + logout
 │   │   └── login-fashion/
 │   │       ├── page.tsx             # Product list + pagination
 │   │       └── components/
 │   │           └── loginForm.tsx    # login Form
 │   │
 │   │
 │   ├── (laptopSector)/
 │       └── beranda-laptop/
 │       |   ├── page.tsx             # Product list + pagination
 │       |   ├── [productId]/
 │       |   |   └── page.tsx         # Product details & import reviews form
 │       |   |   └── ReviewForm.tsx   # Reviews product Form
 │       |   └── components/
 │       |       └── Header.tsx       # Header + logout
 │       └── login-laptop/
 │           ├── page.tsx             # Product list + pagination
 │           └── components/
 │               └── loginForm.tsx    # login Form
 │
 │
 │
 ├── hooks/
 │   └── useAddProduct.ts             # Manage State and side effect
 │   └── useAddLaptop.ts              # Manage State and side effect
 │
 ├── lib/
 │   └── AuthAnotator.ts                # Authentication Logic For Anotator 
 │   └── AuthDashboard.ts               # Authentication Logic For Admin
 │   └── AuthReview.ts                  # Authentication Logic For User
 │   └── mongodb.ts                     # MongoDB Connection
 │   └── userAdmin.ts                   # Hardcore data user admin
 │   └── userAnotatorV2.ts              # Hardcore data user anotator V2
 │   └── userAnotator.ts                # Hardcore data user anotator V1
 │   └── userReview.ts                  # Hardcore data user Reviewer
 │
 ├── models/                          # Data validation when retrieving/saving
 │   └── Products.ts
 │   └── Reviews.ts
 │
 │
 └── public/
```

---

## Authentication System

- User login receives a **token**
- Token is stored in **sessionStorage**
- User data is fetched from `/api/..../auth/me` endpoint
- Certain pages are protected by **Protected Layout**
- If user is inactive for 15 minutes → **auto logout**

All processes run automatically in the background.

---

## API Endpoints Handphone Sector

| Endpoint                        | Method | Function                    |
| ------------------------------- | ------ | --------------------------- |
| `/api/main/auth/login`          | POST   | Login user                  |
| `/api/main/auth/logout`         | POST   | Logout user                 |
| `/api/main/auth/me`             | GET    | Get user data               |
| `/api/main/product`             | GET    | Get product list            |
| `/api/main/product/[productId]` | GET    | Get Detail product & Review |
| `/api/main/review`              | GET    | Get reviews                 |
| `/api/main/review`              | POST   | Add review                  |
| `/api/dashboard/product`        | POST   | Add Product                 |


## API Endpoints Laptop Sector

| Endpoint                          | Method | Function                    |
| --------------------------------- | ------ | --------------------------- |
| `/api/laptop/auth/login`          | POST   | Login user                  |
| `/api/laptop/auth/logout`         | POST   | Logout user                 |
| `/api/laptop/auth/me`             | GET    | Get user data               |
| `/api/laptop/product`             | GET    | Get product list            |
| `/api/laptop/product/[productId]` | GET    | Get Detail product & Review |
| `/api/laptop/review`              | GET    | Get reviews                 |
| `/api/laptop/review`              | POST   | Add review                  |

## API Endpoints Fashion Sector

| Endpoint                           | Method | Function                    |
| ---------------------------------- | ------ | --------------------------- |
| `/api/fashion/auth/login`          | POST   | Login user                  |
| `/api/fashion/auth/logout`         | POST   | Logout user                 |
| `/api/fashion/auth/me`             | GET    | Get user data               |
| `/api/fashion/product`             | GET    | Get product list            |
| `/api/fashion/product/[productId]` | GET    | Get Detail product & Review |
| `/api/fashion/review`              | GET    | Get reviews                 |
| `/api/fashion/review`              | POST   | Add review                  |


## API Endpoints Anotator Handphone Sector User 1

| Endpoint                                          | Method | Function       |
| ------------------------------------------------- | ------ | -------------- |
| `/api/anotator-handphone/auth/login`              | POST   | Login user     |
| `/api/anotator-handphone/auth/logout`             | POST   | Logout user    |
| `/api/anotator-handphone/auth/me`                 | GET    | Get user data  |
| `/api/anotator-handphone/get-all-review`          | GET    | Get ALL Review |
| `/api/anotator-handphone/review/[reviewId]/label` | PATCH  | quesioner      |


## API Endpoints Anotator Laptop Sector User 1

| Endpoint                                       | Method | Function       |
| ---------------------------------------------- | ------ | -------------- |
| `/api/anotator-laptop/auth/login`              | POST   | Login user     |
| `/api/anotator-laptop/auth/logout`             | POST   | Logout user    |
| `/api/anotator-laptop/auth/me`                 | GET    | Get user data  |
| `/api/anotator-laptop/get-all-review`          | GET    | Get ALL Review |
| `/api/anotator-laptop/review/[reviewId]/label` | PATCH  | quesioner      |


## API Endpoints Anotator Laptop Sector User 1

| Endpoint                                        | Method | Function       |
| ----------------------------------------------- | ------ | -------------- |
| `/api/anotator-fashion/auth/login`              | POST   | Login user     |
| `/api/anotator-fashion/auth/logout`             | POST   | Logout user    |
| `/api/anotator-fashion/auth/me`                 | GET    | Get user data  |
| `/api/anotator-fashion/get-all-review`          | GET    | Get ALL Review |
| `/api/anotator-fashion/review/[reviewId]/label` | PATCH  | quesioner      |


## API Endpoints Anotator Handphone Sector User 2

| Endpoint                                                         | Method | Function       |
| ---------------------------------------------------------------- | ------ | -------------- |
| `/api/anotator-user2/anotator-handphone/auth/login`              | POST   | Login user     |
| `/api/anotator-user2/anotator-handphone/auth/logout`             | POST   | Logout user    |
| `/api/anotator-user2/anotator-handphone/auth/me`                 | GET    | Get user data  |
| `/api/anotator-user2/anotator-handphone/get-all-review`          | GET    | Get ALL Review |
| `/api/anotator-user2/anotator-handphone/review/[reviewId]/label` | PATCH  | quesioner      |


## API Endpoints Anotator Laptop Sector User 2

| Endpoint                                                      | Method | Function       |
| ------------------------------------------------------------- | ------ | -------------- |
| `/api/anotator-user2/anotator-laptop/auth/login`              | POST   | Login user     |
| `/api/anotator-user2/anotator-laptop/auth/logout`             | POST   | Logout user    |
| `/api/anotator-user2/anotator-laptop/auth/me`                 | GET    | Get user data  |
| `/api/anotator-user2/anotator-laptop/get-all-review`          | GET    | Get ALL Review |
| `/api/anotator-user2/anotator-laptop/review/[reviewId]/label` | PATCH  | quesioner      |


## API Endpoints Anotator Laptop Sector User 2

| Endpoint                                                       | Method | Function       |
| -------------------------------------------------------------- | ------ | -------------- |
| `/api/anotator-user2/anotator-fashion/auth/login`              | POST   | Login user     |
| `/api/anotator-user2/anotator-fashion/auth/logout`             | POST   | Logout user    |
| `/api/anotator-user2/anotator-fashion/auth/me`                 | GET    | Get user data  |
| `/api/anotator-user2/anotator-fashion/get-all-review`          | GET    | Get ALL Review |
| `/api/anotator-user2/anotator-fashion/review/[reviewId]/label` | PATCH  | quesioner      |


## API Universal / General

| Endpoint                          | Method       | Function                                                 |
| --------------------------------- | ------------ | -------------------------------------------------------- |
| `/api/add-review/laptop`          | POST & GET   | Add Review Data for anotator Laptop Sector               |
| `/api/add-review/handphone`       | POST & GET   | Add Review Data for anotator Handphone Sector            |
| `/api/add-review/fashion`         | POST & GET   | Add Review Data for anotator Fashion Sector              |
| `/api/dashboard/product`          | POST & GET   | Add Data product for user review Handphone Sector        |
| `/api/dashboard/laptop`           | POST & GET   | Add Data product for user review Handphone Sector        |
| `/api/add-review-user2/laptop`    | POST & GET   | Add Review Data for anotator user 2 Laptop Sector        |
| `/api/add-review-user2/handphone` | POST & GET   | Add Review Data for anotator user 2 Handphone Sector     |
| `/api/add-review-user2/fashion`   | POST & GET   | Add Review Data for anotator user 2 Fashion Sector       |
| `/api/dataset/data-laptop`        | GET & POST   | Get & Add Dataset for dataset Laptop Sector              |
| `/api/dataset/data-handphone`     | GET & POST   | Get & Add Dataset for dataset Handphone Sector           |
| `/api/dataset/data-fashion`       | GET & POST   | Get & Add Dataset for dataset Fashion Sector             |   

---

## New Commit Format
type (scope/halaman "optional") : Description

option For (type)

- feat: untuk menambahkan fitur baru
- fix: untuk memperbaiki bug
- docs: untuk memperbarui dokumentasi
- style: untuk memperbaiki format atau gaya code
- refactor: untuk merubah penulisan atau memperbaiki
- test: untuk menambahkan atau memperbaiki test
- chore: mengatur task atau perubahan konfigurasi

**Example :** feat (navbar): add dropdown menu

---

## Security & Best Practice

✔ Database queries only in Server Component
✔ No database access on client
✔ Auth state isolated in Client Component
✔ Scalable project structure

---

## About the Developer

**Project:** Review App

---
