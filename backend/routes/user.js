const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('working>>>>>>>>>>');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
