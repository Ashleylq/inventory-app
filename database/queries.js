const pool = require("./pool");

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function getItemsOnCategory(categoryId) {
    const { rows } = await pool.query("SELECT * FROM items WHERE category_id = $1", [categoryId]);
    return rows;
}

async function getItemDetails(id) {
    const { rows } = await pool.query(`SELECT items.id, items.name as name, brand, price, quantity, categories.name as category_name FROM items
                                       LEFT JOIN categories ON categories.id = category_id
                                       WHERE items.id = $1;`, [id]);
    return rows[0];
}

async function getCategoryDetails(id){
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
}

async function createItem(name, brand, price, quantity, categoryId) {
    await pool.query("INSERT INTO items(name, brand, price, quantity, category_id) VALUES($1, $2, $3, $4, $5)", [name, brand, price, quantity, categoryId]);
}

async function createCategory(name){
    await pool.query("INSERT INTO categories(name) VALUES($1)", [name]);
}

async function editItem(id, name, brand, price, quantity, category){
    await pool.query(`UPDATE items
         SET name = $1,
             brand = $2,
             price = $3,
             quantity = $4,
             category_id = $5
         WHERE id = $6`, [name, brand, price, quantity, category, id]);
}

async function editCategory(id, name){
    await pool.query("UPDATE categories SET name = $1 WHERE id = $2", [name, id]);
}

async function deleteItem(id){
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
}

async function deleteCategory(id){
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

module.exports = {
    getAllItems,
    getAllCategories,
    getItemsOnCategory,
    getItemDetails,
    getCategoryDetails,
    createItem,
    createCategory,
    editItem,
    editCategory,
    deleteItem,
    deleteCategory
}