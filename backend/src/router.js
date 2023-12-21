const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const tagControllers = require("./controllers/tagControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.put("/items/:id", itemControllers.edit);
router.delete("/items/:id", itemControllers.destroy);

router.get("/tags", tagControllers.browse);
router.get("/tags/:id", tagControllers.read);
router.put("/tags/:id", tagControllers.edit);
router.post("/tags", tagControllers.add);
router.delete("/tags/:id", tagControllers.destroy);

/* ************************************************************************* */

module.exports = router;
