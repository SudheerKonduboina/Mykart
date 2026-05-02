# Backend Setup and API Documentation

## Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [API Endpoints](#api-endpoints)

---

## Installation

To set up the backend, follow the steps below:

1. **Clone the Repository**  
   Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/SudheerKonduboina/Mykart.git
   ```

2. **Navigate to the Directory**  
   ```bash
   cd Mykart
   ```

3. **Install Dependencies**  
   Ensure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**  
   Create a `.env` file from the `.env.example` and fill in the required fields:
   ```bash
   cp .env.example .env
   ```

## Configuration

1. **Database Configuration**  
   Ensure that your database is running and connection details are correct in the `.env` file. Update the following:
   ```env
   DATABASE_URL=your_database_url
   ```

2. **Server Configuration**  
   You can also configure the server settings in the `.env` file:
   ```env
   PORT=3000
   ```

## API Endpoints

| HTTP Method | Endpoint               | Description                      |
|-------------|------------------------|----------------------------------|
| GET         | `/api/products`        | Retrieve all products           |
| GET         | `/api/products/:id`    | Retrieve a product by ID        |
| POST        | `/api/products`        | Create a new product            |
| PUT         | `/api/products/:id`    | Update an existing product      |
| DELETE      | `/api/products/:id`    | Delete a product                |

### Example Request

To retrieve all products:
```bash
curl -X GET http://localhost:3000/api/products
```

---

This documentation will help you set up the backend and understand the API endpoints available for usage. For further assistance, reach out to the maintainer.