# Nest Mate - Roommate Finder Website 🏠

A platform to help individuals find compatible roommates based on location, budget, lifestyle preferences, and interests.

## 🚀 Live Demo
Live Site: [https://nest-mate.web.app/](https://nest-mate.web.app/)  
Server: [https://nest-mate-server.vercel.app/](https://nest-mate-server.vercel.app/)

## ✅ Features Implemented

- 🔐 **Authentication**: Login and SignUP with Email/Password or Google.
- 🛡️ **Private Routes**: Add, Update, and View own roommate listings securely.
- ➕ **Add Roommate Listing**: Users can add their roommate listing with title, rent, lifestyle preferences, and more.
- 🔍 **Browse Listings**: Explore all available roommate posts in a table view.
- 📋 **My Listings**: View, edit, or delete your own roommate posts.
- 📝 **Details Page**: View full post info, like a listing, and see contact info after liking.
- 📱 **Responsive Design**: Works smoothly across mobile, tablet, and desktop.
- 💬 **Toast Notifications**: All actions show success/error messages using toast.
- 🌗 **Dark/Light Mode Toggle**: Switch between themes for better user experience.
- 🔄 **Loading Spinner**: Displayed while data is being fetched.
- 🧾 **404 Page**: Custom page for invalid routes.
- 🎞️ **Lottie Animations & Typewriter Effect**
- 🧭 **Tooltip and SweetAlert2 support**

## 🧰 Technologies Used

### Frameworks & Libraries:
- React
- React Router v7
- Firebase Authentication & Firestore
- Tailwind CSS + DaisyUI
- react-hot-toast
- react-icons
- react-slick / Swiper (for slider)
- lottie-react
- react-simple-typewriter
- react-tooltip
- sweetalert2

### Dev Tools:
- Vite
- ESLint
- daisyui
- globals
- @vitejs/plugin-react

## 📦 Packages Used (from package.json)

| Category        | Package                                     |
|-----------------|---------------------------------------------|
| Auth/           | `firebase`                                  |
| UI              | `tailwindcss`, `daisyui`                    |
| Animations      | `lottie-react`, `react-simple-typewriter`,  |
|                 | `react-tooltip`,`sweetalert2`               |
|                 |                                             |
| Backend         | `express.js`,  `mongoDB`                    |
| Routing         | `react-router`                              |
| Toasts          | `react-hot-toast`                           |
| Icons           | `react-icons`                               |
| Slider          | `react-slick`, `slick-carousel` or `swiper` |
| Build Tool      | `vite`, `@vitejs/plugin-react`              |


## 📝 Notes

- Firebase is used for authentication and database
- Environment variables stored in `.env`
- Styled with Tailwind CSS & DaisyUI
- No Lorem Ipsum – all text meaningful and relevant
- Toast notifications used instead of alerts
- Responsive layout with mobile-first approach


## 🧪 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/nestmate.git 
   npm install
   npm run dev
