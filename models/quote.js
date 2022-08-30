const db = require("../util/database");

module.exports = class Quote {
  constructor(id, author, content) {
    this.id = id;
    this.author = author;
    this.content = content;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM quotes");
  }

  static findById(id) {}
};
