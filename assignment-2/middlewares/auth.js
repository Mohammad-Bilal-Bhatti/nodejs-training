const jwt = require('../helpers/jwt');


function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).send({ message: 'Token not provided' });

    const user = jwt.verifyAndDecodeBearerToken(authHeader);
    if (user === null) return res.status(401).send({ message: 'Invalid token provided' });

    next();
}


module.exports = authMiddleware;