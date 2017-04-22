CREATE DATABASE IF NOT EXISTS bamazon;

CREATE TABLE IF NOT EXISTS products	(
        id INTEGER(11) AUTO_INCREMENT NOT NULL,
        product_name VARCHAR(100) NULL,
        department_name VARCHAR(100) NULL,
        price DECIMAL(10,4) NULL,
        stock_quantity DECIMAL(10,4) NULL,
		PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gummy Bears", "Food", "2.00","23");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NECA Action Figures", "toys", "30.00", "12");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "toys", "300", "14");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Litter", "Pet Needs", "10", "35");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cellphone Case", "Accessories", "8", "23");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hellraiser DVD", "Movie", "13", "29");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Clubs", "Sports Equipment", "195", "14");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Light Bulbs", "Household Supplies", "12", "45");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ketchup", "Food", "6", "19");
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Remote Control", "Entertainment", "34", "37");

SELECT * FROM Bamazon.products
SELECT * FROM Bamazon.products WHERE id = 4;

UPDATE products SET stock_quantity=2200
WHERE id = 4