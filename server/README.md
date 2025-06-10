# Todo App Server

A Node.js/Express server with MongoDB integration for a todo application.

## MongoDB URL Setup

### Option 1: Local MongoDB
If you have MongoDB installed locally, use this URL format:
```
mongodb://localhost:27017/todo-app
```

### Option 2: MongoDB Atlas (Cloud)
For MongoDB Atlas, use this URL format:
```
mongodb+srv://username:password@cluster.mongodb.net/todo-app?retryWrites=true&w=majority
```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/todo-app

# Server Configuration
PORT=5000
```

## MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string
7. Replace `<username>`, `<password>`, and `<dbname>` with your actual values

Example Atlas URL:
```
mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/todo-app?retryWrites=true&w=majority
```

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on port 5000 and connect to MongoDB automatically.

## Available URLs

- **Local MongoDB**: `mongodb://localhost:27017/todo-app`
- **MongoDB Atlas**: `mongodb+srv://username:password@cluster.mongodb.net/todo-app?retryWrites=true&w=majority`

## Database Configuration

The MongoDB connection is configured in `config/database.js` with:
- Automatic reconnection
- Error handling
- Connection event logging
- Environment variable support 