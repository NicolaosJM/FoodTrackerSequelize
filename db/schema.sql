CREATE DATABASE food_db;
USE food_db;

CREATE TABLE foodTable
(	
	id int NOT NULL AUTO_INCREMENT,
    meal_name VARCHAR(80),
    calorie_count INT(11) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);