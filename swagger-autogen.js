const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/*.js'];

const config = {
    info: {
        title: 'API Documentation',
        description: '',
    },
    tags: [ ],
    host: 'localhost:3000/api-docs',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config);