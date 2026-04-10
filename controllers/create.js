const { createCategory, createItem, getAllCategories } = require("../database/queries");

async function renderItemCreatePage(req, res){
    const categories = await getAllCategories();
    res.render("createItem", { categories, item : null, link : '/items/create', action : 'Create'});
}

async function postCreateItem(req, res){
    const { name, brand, price, quantity, categoryId } = req.body;
    await createItem(name, brand, price, quantity, categoryId);
    res.redirect('/items');
}

async function renderCreateCategory(req, res){
    res.render("createCategory", {action : "Create", link : '/categories/create', category : null});
}

async function postCreateCategory(req, res){
    const { name } = req.body;
    await createCategory(name);
    res.redirect('/categories');
}

module.exports = {
    renderItemCreatePage,
    postCreateItem,
    renderCreateCategory,
    postCreateCategory
}