import {User} from '../../models/User';
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
const localVerify = (loginId, passwd, done)=> {
  try {
    const check = User.findOne({where:{loginId:loginId}});
    if(!check) return done(null,false);
    let hashPassword = crypto.createHash("sha512").update(passwd).digest("hex");
    if(!(check.passwd === hashPassword)) return done(null,false);
    console.log(check);
    return done(null,check);
  } catch(e){
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
    const check = User.findOne({where:{loginId:loginId}});
    if(!check) return done(null,false);
    let hashPassword = crypto.createHash("sha512").update(passwd).digest("hex");
    if(!(check.passwd === hashPassword)) return done(null,false);
    console.log(check);
    return done(null,check);
  } catch (e) {
    return done(e);
  }
}

module.exports = () => {
  passport.use(new LocalStrategy(LocalStrategyOption, localVerify));
  passport.use(new JWTStrategy(jwtStrategyOption, jwtVerift));
}