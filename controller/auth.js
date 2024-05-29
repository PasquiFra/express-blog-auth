//importo il modulo di json web token
const jwt = require("jsonwebtoken");
// importo la configurazione di dotenv
require("dotenv").config();

//imposto il metodo per creare un token d'accesso
const createLoginToken = user => {
    const payload = user;
    const token = jwt.sign(payload, process.env.AUTH_KEY, { expiresIn: '1m' });
    return token
}

//imposto il metodo di accesso alla creation di un post
const createPost = (req, res, next) => {
    console.log('ciao')
}

module.exports = {
    createPost,
    createLoginToken
}