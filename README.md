# 📚 Book Store (MERN CRUD App)

## 🔹 Summary

- Full-stack **MERN** application implementing **CRUD operations** (Create, Read, Update, Delete).
- Backend built with **Node.js, Express.js, MongoDB, and Mongoose**.
- Frontend built with **React (Vite, Tailwind CSS, React Router DOM, Axios)**.
- Features include:
  - Add a new book
  - View all books
  - View book details
  - Edit book
  - Delete book
- Clean architecture with **Express Router**, **CORS enabled**, and **MongoDB Atlas integration**.
- Enhanced UX using **notistack** (snackbar alerts).
- API Endpoints follow REST conventions.

---

## 🔹 How to Run on Your PC

### 1. Clone the Repository

```bash
git clone https://github.com/utsingh14/book-store-mern.git
cd book-store-mern
```

### 2. Setup Backend

1. Install Dependencies

```bash
cd backend
npm install
```

2. Setup MongoDB Connection
   1. Go to the MongoDB official site
   2. Log in to your account (or create one if you don’t have).
   3. Create a new Cluster in MongoDB Atlas.
   4. Once the cluster is created:
      1. Click Connect
      2. Choose Connect your application
      3. Copy the connection string (it will look like this):

```bash
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myDatabase?retryWrites=true&w=majority
```

3. Create a config.js File
   - Inside your backend folder

```js
export const PORT = 5555;
export const mongoDBURL = "your-key-connection-string";
```

4. Run Backend

```bash
node index.js
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Access App

- Open http://localhost:5173 (default Vite port).
- Backend runs on http://localhost:5555

### 🔹 Tech Stack & Libraries

#### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemon (dev)
- CORS

#### Frontend

- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- Notistack (for alerts)
- React Icons

## Future To Dos

- deploy it somewhere
