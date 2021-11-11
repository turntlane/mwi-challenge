CREATE DATABASE mwiusers;

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(30),
    email text,
    message text
)