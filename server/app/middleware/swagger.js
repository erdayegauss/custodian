const swaggerJSDoc = require('swagger-jsdoc');
const options = {
  swaggerDefinition: {
    info: {
      title: 'Backend API Documentation for the App',
      version: '1.0.0',
      description: 'This is the documentation for the backend API for the App',
    },
    basePath: '/',
    "securityDefinitions": {
      "Authorization": {
        "type": "apiKey",
        "name": "authorization",
        "in": "header",
        "description": "Authentication token"
      }
    },
    "security": [
      {
        "Authorization": ['server/app/routes/*.js']
      }
    ]
  },
  apis: ['server/app/routes/*.js'],
};
const specs = swaggerJSDoc(options);
module.exports = specs;
