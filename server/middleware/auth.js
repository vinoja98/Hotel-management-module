const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded; 
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }

  // const { authorization } = req.headers;
  //      //authorization === Bearer sfafsafa
  //      if(!authorization){
  //          return res.status(401).send({error:"you must be logged in"})
  //      }
  //      const token = authorization.replace("Bearer ","");
  //      jwt.verify(token,jwtkey,async (err,payload)=>{
  //          if(err){
  //            return  res.status(401).send({error:"you must be logged in 2"})
  //          }
  //       const {userId} = payload;
  //       const user = await User.findById(userId)
  //       req.user=user;
  //       next();
  //      })
}