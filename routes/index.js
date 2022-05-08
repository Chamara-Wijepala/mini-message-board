var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* home page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages
  });
});

/* /new */
router.get('/new', function(req, res, next) {
  res.render('form', {
    title: `What's on your mind?`
  });
});

router.post('/new', function(req, res, next) {
  const user = req.body.username
  const text = req.body.message

  messages.push({
    text,
    user,
    added: new Date()
  });

  res.redirect('/');
});

module.exports = router;
