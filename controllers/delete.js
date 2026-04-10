const { deleteItem, deleteCategory, getAllCategories } = require("../database/queries");

async function deleteItemAndRedirect(req, res){
    const id = req.params.id;
    await deleteItem(id);
    res.redirect('/items');
}

async function renderDeleteCategory(req, res){
    const categories = await getAllCategories();
    res.render('selectCategory', {categories, action : 'Delete', link : '/categories/delete'});
}

async function deleteCategoryAndRedirect(req, res){
    const { id } = req.body;
    await deleteCategory(id);
    res.redirect("/categories")
}

module.exports = { 
    deleteItemAndRedirect,
    renderDeleteCategory,
    deleteCategoryAndRedirect
 }