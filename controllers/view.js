const {getAllItems, getAllCategories} = require("../database/queries.js");

async function renderAllItems(req, res){
    const items = await getAllItems();
    res.render("items", {items : items});
}

module.exports = { 
    renderAllItems
}