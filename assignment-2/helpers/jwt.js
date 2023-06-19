const jsonwebtokens = require('jsonwebtoken');

const secret = 'supersecuresecret';
const expiresIn = '1h';

function generateToken(payload){
    const token = jsonwebtokens.sign(payload, secret, { expiresIn: expiresIn });
    return token;
}

function verifyAndDecodeBearerToken(bearerToken){
    try {

        const token = bearerToken.replace('Bearer ', '');

        const verified = jsonwebtokens.verify(token, secret);
        if (verified) return jsonwebtokens.decode(token);
        return null;

    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports = {
    generateToken,
    verifyAndDecodeBearerToken
};

