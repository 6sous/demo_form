const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "item" });
  }

  // The C of CRUD - Create operation

  async create(item) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description) values (?, ?)`,
      [item.title, item.description]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(item) {
    // Execute the SQL UPDATE query to modify an existing item in the "item" table
    await this.database.query(
      `update ${this.table} set title = ?, description = ? where id = ?`,
      [item.title, item.id, item.description]
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    // Execute the SQL DELETE query to remove an item from the "item" table
    await this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = ItemManager;
