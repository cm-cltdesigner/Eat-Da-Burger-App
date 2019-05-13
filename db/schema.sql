CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burgers_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);