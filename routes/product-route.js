const express = require("express");
const { getProducts, getProductById, createProduct, updateProductById, deleteProductById } = require("../controllers/product-controller");
const router = express.Router();

router.get('/', getProducts);
router.get("/:id", getProductById);
router.post('/', createProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);



module.exports = router;