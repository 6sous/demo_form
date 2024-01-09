const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const tagControllers = require("./controllers/tagControllers");
const userControllers = require("./controllers/userControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");

// items routes
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.post("/items", itemControllers.add);
router.put("/items/:id", itemControllers.edit);
router.delete("/items/:id", itemControllers.destroy);

// tags routes
router.get("/tags", verifyToken, tagControllers.browse);
router.get("/tags/:id", tagControllers.read);
router.put("/tags/:id", tagControllers.edit);
router.post("/tags", tagControllers.add);
router.delete("/tags/:id", tagControllers.destroy);

// users routes
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);
router.post(
  "/users/login",
  userControllers.readByEmailAndPassToNext,
  verifyPassword
);
router.delete("/users/:id", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
