CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
)