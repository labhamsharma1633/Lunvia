# server.js – Interview Questions & Answers

## 1. Express Basics
**Q:** `express()` kya return karta hai?  
**A:** Ye ek Express application ka instance return karta hai jo HTTP requests handle karta hai.

**Q:** `app.use()` ka purpose kya hai?  
**A:** Middleware ya routes ko mount karne ke liye use hota hai.

---

## 2. dotenv
**Q:** `"dotenv/config"` ka use kya hai?  
**A:** `.env` file se environment variables load karta hai bina alag se `dotenv.config()` likhe.

**Q:** `.env` file ka fayda kya hai?  
**A:** Sensitive data (PORT, DB password) ko code me hardcode na karke secure rakhna.

---

## 3. Middlewares
**Q:** `express.json()` ka role kya hai?  
**A:** Request body me aayi JSON data ko parse karke `req.body` me laata hai.

**Q:** `cookieParser()` ka role kya hai?  
**A:** HTTP request me aayi cookies ko object form me `req.cookies` me available karata hai.

---

## 4. Routing
**Q:** Ye line kya karti hai?  
```js
app.use("/api/auth", authRoutes);
