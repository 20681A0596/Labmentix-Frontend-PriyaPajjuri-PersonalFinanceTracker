# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💰 Personal Finance Tracker

A full-stack Personal Finance Tracker application that helps users manage their income and expenses efficiently.

## 🚀 Features

- User Registration
- User Login
- Secure Authentication
- Dashboard Overview
- Add Income Transactions
- Add Expense Transactions
- Delete Transactions
- Real-time Balance Calculation
- Pie Chart Visualization
- Bar Chart Visualization
- Responsive User Interface

---

## 📊 Dashboard Features

### Income Summary
Displays total income added by the user.

### Expense Summary
Displays total expenses recorded.

### Balance Summary
Automatically calculates:

Balance = Income - Expense

### Charts

#### Pie Chart
Shows Income vs Expense distribution.

#### Bar Chart
Displays Income and Expense comparison.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router DOM
- Axios
- Recharts
- CSS3

### Backend

- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA

### Database

- MongoDB Compass and MongoDBShell

---

## 📁 Project Structure

### Frontend

```text
finance-frontend
│
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Summary.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionList.jsx
│   │   └── Chart.jsx
│   │
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
└── package.json
```

---


## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Transactions

```http
GET    /api/transactions
POST   /api/transactions
DELETE /api/transactions/{id}
```

---

## 📸 Screenshots
![registeration.png](../../../OneDrive/Desktop/registeration.png)

![login.png](../../../OneDrive/Desktop/login.png)

![dashboard.png](../../../OneDrive/Desktop/dashboard.png)

![TransactionAdded.png](../../../OneDrive/Desktop/TransactionAdded.png)

![variationinIncomeExpense.png](../../../OneDrive/Desktop/variationinIncomeExpense.png)

![charts.png](../../../OneDrive/Desktop/charts.png)

![TransactionDeleted.png](../../../OneDrive/Desktop/TransactionDeleted.png)

![CalucalatedIncomeExpenseBalance.png](../../../OneDrive/Desktop/CalucalatedIncomeExpenseBalance.png)

![registereduser.png](../../../OneDrive/Desktop/registereduser.png)

![loginuser.png](../../../OneDrive/Desktop/loginuser.png)

### Login Page

User authentication interface for secure access.

### Register Page

New user registration form.

### Dashboard

Displays:

- Income
- Expense
- Balance
- Pie Chart
- Bar Chart
- Transaction List

---

## Future Enhancements

- Edit Transactions
- Monthly Reports
- Download PDF Reports
- Export Excel Data
- Category-wise Analytics
- Dark Mode
- Notification System

---