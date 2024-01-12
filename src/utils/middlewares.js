function unlessPathApplyMiddleware(middleware, ...paths) {
  return function(req, res, next) {
    const pathCheck = paths.some((path) => path === req.path);
    const methodCheck = req.method.toLowerCase() !== 'get';

    if (pathCheck && methodCheck) {
      next();
    } else {
      middleware(req, res, next);
    }
  };
};

export {unlessPathApplyMiddleware};
