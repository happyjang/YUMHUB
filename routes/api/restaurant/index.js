const express = require("express");
const controller = require("./restaurant.controller");
const auth = require("../auth/auth.service");

const router = express.Router();

router.get("/", auth.hasRole("user"), controller.index);
router.get("/:id", auth.hasRole("user"), controller.show);
router.post("/", auth.hasRole("partner"), controller.create);
router.put("/:id", auth.hasRole("partner"), controller.update);
router.patch("/:id", auth.hasRole("partner"), controller.update);
router.delete("/:id", auth.hasRole("partner"), controller.destroy);

module.exports = router;
