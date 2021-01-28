// require modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// use express on app
const app = express()

// use handlebars engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// use cookie-parser ( 設定簽章 )
app.use(cookieParser('karol171717'))

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
  if (req.signedCookies.user) {
    res.redirect('/success')
  } else {
    res.render('index')
  }
})

// routes => success page
app.get('/success', (req, res) => {
  if (req.signedCookies.user) {
    const cookieUserName = req.signedCookies.user
    res.render('success', { cookieUserName })
  } else {
    res.redirect('/')
  }
})

// verify user
app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const user = users.find(user => user.email === email)
  if (!user) {
    const emailErr = 1
    return res.render('index', { emailErr, email })
  } else {
    if (user.password !== password) {
      const passwordErr = 1
      return res.render('index', { passwordErr, email })
    } else {
      const userName = user.firstName
      // save userInfo by cookies
      res.cookie('user', userName, { path: '/', signed: true, httpOnly: true })
      res.redirect('/success')
    }
  }
})

// routes => log out and clear cookie
app.get('/logout', (req, res) => {
  res.clearCookie('user', { path: '/' })
  res.redirect('/')
})

// listen the server
app.listen(3000, () => {
  console.log('The server is running on localhost:3000')
})
