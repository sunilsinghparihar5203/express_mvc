const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

// const Cart = require('./cart');
// const db = require("../util/database")

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products (title,price,imageURL,description) VALUES(?,?,?,?)',[this.title,this.price,this.imageUrl,this.description])
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products')
//   }

//   static deleteProduct(id){
//     return db.execute('DELETE FROM products where products.id = ? ', [id])
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products where products.id = ? ', [id])
//   }
// };
