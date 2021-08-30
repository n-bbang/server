const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Pie API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        basePath: '/api-docs'
    },
    apis: ['../User/UserRoute.js','./Swagger/*']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};