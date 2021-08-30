var express = require('express')
var router = express.Router()
const UserController = require('./UserController')

const users = [
	{ id: 1, name: 'Node.js' },
	{ id: 2, name: 'npm' },
	{ id: 3, name: 'Pengsu' },
      ]


router.get('/', function (req, res, next) {
	res.json(users);
      });


//get Name
router.get('/:id',UserController.getUserName);

//sign in
router.post('/signIn',UserController.SignIn);



module.exports = router