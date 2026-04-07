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

async function getItemsOnName(name) {
    const { rows } = await pool.query("SELECT * FROM items WHERE name LIKE $1", [name + '%']);
    return rows;
}

async function createItem(name, brand, quantity, categoryId) {
    await pool.query("INSERT INTO items(name, brand, quantity, catergory_id) VALUES($1, $2, $3, $4)", [name, brand, quantity, categoryId]);
}

async function createCategory(name){
    await pool.query("INSERT INTO categories(name) VALUES($1)", [name]);
}

async function editItem(id, name, brand, quantity, category){
    await pool.query(`UPDATE items
         SET name = $1,
             brand = $2,
             quantity = $3,
             category = $4
         WHERE id = $5`, [name, brand, quantity, category, id]);
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
    getItemsOnName,
    createItem,
    createCategory,
    editItem,
    editCategory,
    deleteItem,
    deleteCategory
}