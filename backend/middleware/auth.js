const jwt = require('jsonwebtoken');

module.export = ( req, res, next ) =>{
    try {
        const token = req.header.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId ){
            throw 'Invalid user ID'
        }else {
            next();
        }
    }catch {
        res.status(401).json({
            error: new Error('Invalid request')
        });
    }
}