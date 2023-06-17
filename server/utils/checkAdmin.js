import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, 'shalala321');
      req.userId = decoded._id;
      if (req.userId != '64862ef5fea926d6b7c7737d'){
        return res.status(403).json({
            message: 'Нет доступа',
        });
      }
      next();
    } catch (e) {
      return res.status(403).json({
        message: 'Нет доступа',
      });
    }
  } else {
    return res.status(403).json({
      message: 'Нет доступа',
    });
  }
};