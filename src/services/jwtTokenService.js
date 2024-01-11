import jwt from 'jsonwebtoken';

class JWTTokenService {
  static generateTokenPair(userData) {
    const accessToken = jwt.sign({user: userData}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
    const refreshToken = jwt.sign({user: userData}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'});
    return {accessToken: accessToken, refreshToken: refreshToken};
  }
  static authenticateToken(token, isAccess = true) {
    const tokenSecret = isAccess? process.env.ACCESS_TOKEN_SECRET : process.env.REFRESH_TOKEN_SECRET;
    const decoded = jwt.verify(token, tokenSecret);
    return decoded;
  }
}
export default JWTTokenService;
