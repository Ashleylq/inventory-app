const {editItem, editCategory, getItemDetails, getAllCategories, getCategoryDetails} = require("../database/queries");

async function renderEditItem(req, res){
    const item = await getItemDetails(req.params.id);
    const categories = await getAllCategories();
    res.render('createItem', {categories, item, link : '/items/edit/' + req.params.id, action : 'Edit'});
}

async function postEditItem(req, res){
    const { name, brand, price, quantity, categoryId } = req.body;
    await editItem(req.params.id, name, brand, price, quantity, categoryId);
    res.redirect('/items')
}

async function renderEditSelection(req, res){
    const categories = await getAllCategories();
    res.render('selectCategory', {categories, link : '/categories/edit', action : 'Edit'})
}

async function postEditSelection(req, res){
    const { id } = req.body;
    res.redirect('/categories/edit/' + id);
}

async function renderEditCategory(req, res){
    const category = await getCategoryDetails(req.params.id)
    res.render('createCategory',{action : 'Edit', link : '/categories/edit/' + req.params.id, category})
}

async function postEditCategory(req, res){
    const { name } = req.body;
    await editCategory(id, name);
    res.redirect('/categories');
}

module.exports = {
    renderEditItem,
    postEditItem,
    renderEditSelection,
    postEditSelection,
    renderEditCategory,
    postEditCategory
}