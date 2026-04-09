const { deleteItem, deleteCategory } = require("../database/queries");

async function deleteItemAndRedirect(req, res){
    const id = req.params.id;
    await deleteItem(id);
    res.redirect('/items');
}

module.exports = { deleteItemAndRedirect }