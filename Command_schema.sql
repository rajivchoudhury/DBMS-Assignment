CREATE TABLE User (
    userID INT PRIMARY KEY,
    name VARCHAR(45),
    email VARCHAR(60),
    phone BIGINT
);

INSERT INTO User VALUES 
(22001, 'Rajiv Choudhury', 'rajiv@gmail.com', 1234567890),
(22002, 'Harsh Gupta', 'harsh@iiitg.ac.in', 9876543345);