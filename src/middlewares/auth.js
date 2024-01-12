import JWTTokenService from '../services/jwtTokenService.js';
import UserService from '../services/userService.js';

export async function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;

  if (bearerHeader) {
    const [bearerText, bearerToken] = bearerHeader.split(' ');
    if (bearerText == 'Bearer') {
      try {
        const decodedToken = JWTTokenService.authenticateToken(bearerToken);
        req.userToken = decodedToken;
        return next();
      } catch (error) {
        return res.status(401).send('Невалидный токен');
      }
    }
  }

  return res.status(401).send('Учетные данные не были предоставлены');
}

export async function checkUserPermissionToProfile(req, res, next) {
  try {
    const user = await UserService.getProfileByEmail(req.userToken.user.email);
    if (user && user.id === parseInt(req.params['id'])) {
      req.user = user;
      return next();
    }
    return res.status(403).send('Нет доступа к профилю');
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}
