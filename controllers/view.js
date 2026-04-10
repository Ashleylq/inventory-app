const {getAllItems, getAllCategories, getItemsOnCategory} = require("../database/queries.js");

async function renderAllItems(req, res){
    const items = await getAllItems();
    res.render("items", {items : items});
}

async function renderAllCategories(req, res){
    const categories = await getAllCategories();
    res.render("categories", {categories});
}

async function renderItemsOnCategory(req, res){
    const items = await getItemsOnCategory(req.query.category);
    res.render("items", {items});
}

module.exports = { 
    renderAllItems,
    renderAllCategories,
    renderItemsOnCategory
}