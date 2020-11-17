const express = require('express')
const app = express()
const port = 3000

const { urlencodedBodyParser, cookieParser, cookieSession } = require('./middlewares')

const withErrorHandling = require('./handlers/web/helpers/with-error-handling')

const {
    handleGoToRegister,
    handleRegister,
    handleGoToLogin,
    handleLogin,
    handleGoToHome,
    handleLogout,
    handleNotFound,
    handleGoToSearch,
    handleGoToDetail
} = require('./handlers/web')

const {
    handleAcceptCookies
} = require('./handlers/api')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/register', cookieParser, cookieSession, withErrorHandling(handleGoToRegister))

app.post('/register', urlencodedBodyParser, withErrorHandling(handleRegister))

app.get('/login', cookieParser, cookieSession, withErrorHandling(handleGoToLogin))

app.post('/login', cookieParser, cookieSession, urlencodedBodyParser, withErrorHandling(handleLogin))

app.get('/', cookieParser, cookieSession, withErrorHandling(handleGoToHome))

app.post('/logout', cookieParser, cookieSession, withErrorHandling(handleLogout))

app.get('/search', cookieParser, cookieSession, withErrorHandling(handleGoToSearch))

app.get('/vehicles/:vehicleId', cookieParser, cookieSession, withErrorHandling(handleGoToDetail))

// api paths

app.post('/api/accept-cookies', cookieParser, cookieSession, handleAcceptCookies)

app.get('/*', withErrorHandling(handleNotFound))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 