const { Router } = require("express");
const categoryRouter = Router();

const {renderAllCategories} = require("../controllers/view")
const {renderDeleteCategory, deleteCategoryAndRedirect} = require("../controllers/delete")
const {postCreateCategory, renderCreateCategory} = require("../controllers/create")
const {renderEditSelection, renderEditCategory, postEditCategory, postEditSelection} = require("../controllers/edit")

categoryRouter.get('/', (req, res) => {
    renderAllCategories(req, res);
})

categoryRouter.get('/delete', (req, res) => {
    renderDeleteCategory(req, res);
})

categoryRouter.post('/delete', (req, res) => {
    deleteCategoryAndRedirect(req, res);
})

categoryRouter.get('/create', (req, res) => {
    renderCreateCategory(req, res);
})

categoryRouter.post('/create', (req, res) => {
    postCreateCategory(req, res);
})

categoryRouter.get('/edit', (req, res) => {
    renderEditSelection(req, res);
})

categoryRouter.post('/edit', (req, res) => {
    postEditSelection(req, res);
})

categoryRouter.get('/edit/:id', (req, res) => {
    renderEditCategory(req, res);
})

categoryRouter.post('/edit/:id', (req, res) => {
    postEditCategory(req, res);
})

module.exports = categoryRouter;