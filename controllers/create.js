const { createCategory, createItem, getAllCategories } = require("../database/queries");

async function renderItemCreatePage(req, res){
    const categories = await getAllCategories();
    res.render("createItem", { categories, item : null, link : '/items/create' });
}

async function postCreateItem(req, res){
    const { name, brand, price, quantity, categoryId } = req.body;
    await createItem(name, brand, price, quantity, categoryId);
    res.redirect('/items');
}

module.exports = {
    renderItemCreatePage,
    postCreateItem
}