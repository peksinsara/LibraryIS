module.exports = {
  env: 'production',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: 'postgres',
    logging: console.log,
    operatorsAliases: false,
  },


  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: false,

  clientUrl: 'http://localhost:8081',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: 'af3d8ff4-4076-4641-a08e-d0dc34950674',
};
