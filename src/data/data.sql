CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS wines (
    id SERIAL PRIMARY KEY,
    winename VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL, 
    description TEXT,
    manufacture_date DATE NOT NULL,
    expiration_date DATE NOT NULL
);
