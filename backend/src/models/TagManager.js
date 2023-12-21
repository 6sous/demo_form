const AbstractManager = require("./AbstractManager");

class TagManager extends AbstractManager {
  constructor() {
    super({ table: "tag" });
  }

  async create(tag) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [tag.name]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(tag) {
    await this.database.query(
      `update ${this.table} set name = ?, color = ? where id = ?`,
      [tag.name, tag.id, tag.color]
    );
  }

  async delete(id) {
    await this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = TagManager;
