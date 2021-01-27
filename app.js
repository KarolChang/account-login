// require modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// use express on app
const app = express()

// use handlebars engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// user information
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// routes => index page
app.get('/', (req, res) => {
  res.render('index')
})

// routes => login page
app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const user = users.find(user => user.email === email)
  if (!user) {
    const emailErr = 1
    return res.render('hello', { emailErr })
  } else {
    if (user.password !== password) {
      const passwordErr = 1
      return res.render('hello', { passwordErr })
    } else {
      const firstName = user.firstName
      res.render('hello', { firstName })
    }
  }
})

// listen the server
app.listen(3000, () => {
  console.log('The server is running on localhost:3000')
})
