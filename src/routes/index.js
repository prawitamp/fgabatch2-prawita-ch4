const { Router } = require("express");
const user_route = require("./v1/user.route");
const account_route = require("./v1/account.route");
const transaction_route = require("./v1/transaction.route");
const router = Router();

// Define Routes
router.use("/users", user_route);
router.use("/accounts", account_route);
router.use("/transactions", transaction_route);

module.exports = router;
