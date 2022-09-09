const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Quote = sequelize.define('quote', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Quote;
/*
  save() {
    return db.execute("INSERT INTO quotes (author , content) VALUES (? , ?) ", [
      this.author,
      this.content,
    ]);
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM quotes");
  }

  static findById(id) {}
};
*/
