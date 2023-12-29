module.exports.config = {
  database: {
    databaseUrl: process.env.DB_URL
  },
  app: {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
  },
  jwt: {
    secret: process.env.SECRET_KEY,
    expiry: process.env.JWT_EXPIRY
  },
};