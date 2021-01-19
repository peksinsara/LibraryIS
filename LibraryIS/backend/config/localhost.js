const os = require('os');

module.exports = {
  env: 'localhost',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'postgres',
    database: 'Library',
    host: 'localhost',
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

  graphiql: true,

  clientUrl: 'http://localhost:8081',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: 'af3d8ff4-4076-4641-a08e-d0dc34950674',
};
