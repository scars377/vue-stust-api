const router = require('express').Router();

const chat = [];

router.get("/", (req, res) => {
  res.json(chat);
});

router.post("/", (req, res) => {
  const {text, author} = req.body;
  const id = Date.now();
  chat.push({ text, author, id });
  res.json(chat);
});

module.exports = router;