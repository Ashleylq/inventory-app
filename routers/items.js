const { Router } = require("express");
const itemRouter = Router();

const { renderAllItems } = require("../controllers/view");
const { renderItemDetails } = require("../controllers/details");
const { deleteItemAndRedirect } = require("../controllers/delete");
const { renderItemCreatePage, postCreateItem } = require("../controllers/create")
const { renderEditItem, postEditItem } = require("../controllers/edit")

itemRouter.get('/', (req, res) => {
    renderAllItems(req, res);
})

itemRouter.get('/details/:id', (req, res) => {
    renderItemDetails(req, res, req.params.id);
})

itemRouter.get('/delete/:id', (req, res) => {
    deleteItemAndRedirect(req, res);
})

itemRouter.get('/create', (req, res) => {
    renderItemCreatePage(req, res);
})

itemRouter.post('/create', (req, res) => {
    postCreateItem(req, res);
})

itemRouter.get('/edit/:id', (req, res) => {
    renderEditItem(req, res);
})

itemRouter.post('/edit/:id', (req, res) => {
    postEditItem(req, res);
})

module.exports = itemRouter;