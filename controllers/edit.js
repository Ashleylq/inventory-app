const {editItem, editCategory, getItemDetails, getAllCategories} = require("../database/queries");

async function renderEditItem(req, res){
    const item = await getItemDetails(req.params.id);
    const categories = await getAllCategories();
    res.render('createItem', {categories, item, link : '/items/edit/' + req.params.id});
}

async function postEditItem(req, res){
    const { name, brand, price, quantity, categoryId } = req.body;
    await editItem(req.params.id, name, brand, price, quantity, categoryId);
    res.redirect('/items')
}

module.exports = {
    renderEditItem,
    postEditItem
}