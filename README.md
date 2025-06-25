# 🔗 LinkStack

**LinkStack** is a lightweight, privacy-conscious link management platform that lets users create and share personalized collections of links — no sign-up required. It's ideal for individuals who want to quickly generate a simple, shareable link page using a unique handle.

---

## 📖 Description

LinkStack is built for simplicity and speed. Unlike traditional link management tools, it does **not require account registration**. Users can instantly generate a public-facing link page simply by creating a unique handle (e.g., `/john-links`) and adding their desired links. All data is stored securely in a MongoDB database.

---

## ✨ Features

- ⚡ **Instant Link Page Creation** – Generate your own link hub in seconds.
- 🆓 **No Account Required** – Skip sign-ups, passwords, and email confirmations.
- 🔗 **Handle-Based Sharing** – Share your page at `localhost:3000/[your-handle]`.
- 🧠 **Simple & Intuitive UX** – Designed for speed and ease of use.
- 💾 **MongoDB Storage** – All link collections are stored in a flexible document database.

---

## 🧰 Technology Stack

| Layer       | Technology   |
|-------------|--------------|
| Frontend    | [Next.js](https://nextjs.org/) |
| Backend     | Node.js(https://nodejs.org/) |
| Database    | [MongoDB](https://www.mongodb.com/) |

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/) (local or remote)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### 🧩 Installation

1. **Clone the Repository**

https://github.com/Abou-bakar/linktree-clone.git
cd linkstack

2. **Install Dependencies**

npm install
or
yarn install

3. **Configure Environment Variables**

Create a .env.local file in the root of your project and add:

MONGODB_URI=your-mongodb-connection-uri

4. **Run the App Locally**
 
npm run dev
or
yarn dev

▶️ ## Usage Instructions

1. Navigate to the homepage.

2. Enter your links and create a unique handle.

3. Your custom link page will be accessible at:

http://localhost:3000/[your-handle]

4. Share the handle with anyone — no login required!



