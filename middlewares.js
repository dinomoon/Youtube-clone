import routes from "./routes";

const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Mktube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 5,
  };
  next();
};

export default localMiddleware;
