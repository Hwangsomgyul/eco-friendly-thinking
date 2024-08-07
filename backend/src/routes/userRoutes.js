const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 사용자 정보 가져오기
router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      attributes: ["nickname", "email"],
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
