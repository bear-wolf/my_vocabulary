import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Vocabulary API',
            description: "API endpoints for my-vocabulary documented on swagger",
            contact: {
                name: "Andrew Baranov"
            },
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:4000/",
                description: "Local server"
            }
        ]
    },
    // looks for configuration in specified directories
    apis: [
        './src/api/v1/routes/*/*.ts'
    ],
}
const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app: any, port: any) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    // Documentation in JSON format
    app.get('/docs.json', (req: any, res: any) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}

export default swaggerDocs