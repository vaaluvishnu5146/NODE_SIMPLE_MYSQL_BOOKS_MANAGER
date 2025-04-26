-- CREATE A DATABASE NAMED 'books'
CREATE DATABASE books;

-- USE DESIRED DATABASE
-- use books;

-- CREATE A TABLE NAMED 'books'
CREATE TABLE books (
	book_id int(200) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    book_name varchar(20) NOT NULL,
    book_published_year int(5) NOT NULL,
    book_type varchar(20) NULL
);

ALTER TABLE books
MODIFY COLUMN book_name varchar(50);

-- INSERT A NEW BOOK DATA INTO THE TABLE
INSERT INTO books (book_name, book_published_year, book_type)
VALUES ("Alice in Wonderland: Lewis Carrol", 1865, "novel");

SELECT * FROM books;

UPDATE books SET book_name = '', book_published_year = '', book_type = '';