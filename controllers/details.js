const { getItemDetails } = require("../database/queries")

async function renderItemDetails(req, res, id){
    const details = await getItemDetails(id);
    res.render("itemDetails", { details : details })
}

module.exports = { renderItemDetails };