declare global {
    namespace NodeJS {
        interface ProcessEnv {
            RABBITMQ_USERNAME: string;
            RABBITMQ_PASSWORD: string;
            RABBITMQ_URL: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}