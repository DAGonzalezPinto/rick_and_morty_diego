const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
    getCharById(req, res);
})

router.get("/login", (req, res) => { // Simplificado: router.get("/login", login) -- De esta forma recibe req y res automaticamente
    login(req, res);
})

router.post("/fav", (req, res) => {
    postFav(req, res);
})

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
})

module.exports = router;