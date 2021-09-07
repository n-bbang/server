import {User} from '../../models';
import crypto from "crypto";

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const LocalStrategy = require('passport-local').Strategy;

const LocalStrategyOption = {
  usernameField: "loginId",
  passwordField: "passwd"
};
const localVerify = async (loginId, passwd, done)=> {
  try {
    console.log("loginId : ",loginId+", "+passwd );
    const user = await User.findOne({where:{loginId:loginId}});
    if(!user) return done(null,false);
    let hashPassword = crypto.createHash("sha512").update(passwd+user.saltKey).digest("hex");
    if(!(user.passwd == hashPassword)) return done(null,false);
    console.log("localVerify success!!");
    return done(null,user);
  } catch(e){
    console.log("error : ",e);
    return done(e);
  }
}

const jwtStrategyOption = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'nbbang',
};

//...?????
const jwtVerift = (payload, done)=> {
  try {
    const user = User.findOne({where:{loginId:payload.loginId}});
    if(!user) return done(null,false);
    let hashPassword = crypto.createHash("sha512").update(payload.passwd).digest("hex");
    if(!(user.passwd === hashPassword)) return done(null,false);
    console.log(user);
    return done(null,user);
  } catch (e) {
    return done(e);
  }
}

module.exports = () => {
  passport.use(new LocalStrategy(LocalStrategyOption, localVerify));
  passport.use(new JWTStrategy(jwtStrategyOption, jwtVerift));
}