import client, {Channel, Connection} from "amqplib";
import 'dotenv/config'

describe("Rabbit MQ", () => {
    beforeEach(() => jest.resetModules());

    const rmqUser = process.env.RABBITMQ_USERNAME;
    const rmqPass = process.env.RABBITMQ_PASSWORD;
    const rmqhost = process.env.RABBITMQ_URL;
    const NOTIFICATION_QUEUE = "@notification";

    type HandlerCB = (msg: string) => any;

    class RabbitMQConnection {
        connection!: Connection;
        channel!: Channel;
        public connected!: Boolean;

        async connect() {
            if (this.connected && this.channel) return;

            try {
                console.log(`Connecting string to rabbitMQ: amqp://${rmqUser}:${rmqPass}@${rmqhost}:5672`);
                console.log(`⌛️ Connecting to Rabbit-MQ Server`);
                this.connection = await client.connect(
                    `amqp://${rmqUser}:${rmqPass}@${rmqhost}:5672`
                );
                console.log(`✅ Rabbit MQ Connection is ready`);

                this.channel = await this.connection.createChannel();
                this.connected = true;
                console.log(`🛸 Created RabbitMQ Channel successfully`);
            } catch (error) {
                console.error(`Not connected to MQ Server`, error);
                this.connected = false;
            }
        }

        async sendToQueue(queue: string, message: any) {
            try {
                if (!this.channel) await this.connect()

                this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
            } catch (error) {
                console.error(error);
                throw error;
            }
            return true;
        }

        async consume(handleIncomingNotification: HandlerCB) {
            await this.channel.assertQueue(NOTIFICATION_QUEUE, {
                durable: true
            });

            this.channel.consume(
                NOTIFICATION_QUEUE,
                (msg) => {
                    {
                        if (!msg) return console.error(`Invalid incoming message`);
                        console.log('MSG', msg)
                        handleIncomingNotification(msg?.content?.toString());
                        this.channel.ack(msg);
                    }
                },
                {
                    noAck: false
                }
            );
            return true;
        }
    }

    it("Check if environment variables are exists", async () => {
        expect(rmqUser && rmqPass && rmqhost !== undefined).toBe(true);
    })

    it("Connection to rabbitMQ", async () => {
        const mqConnection = new RabbitMQConnection();
        await mqConnection.connect();

        expect(mqConnection.connected).toEqual(true);
    })

    it("Consumer message", async () => {
        const handleIncomingNotification = (msg: string) => {
            console.log('MSG', msg)
            try {
                const parsedMessage = JSON.parse(msg);

                console.log(`Received Notification`, parsedMessage);

                // Implement your own notification flow
            } catch (error) {
                console.error(`Error While Parsing the message`);
            }
        };

        const listen = async () => {
            const mqConnection = new RabbitMQConnection();
            await mqConnection.connect();
            return await mqConnection.consume(handleIncomingNotification);
        };

        const isResult = await listen();
        expect(isResult).toEqual(true);
    });

    it("producer message", async () => {
        type INotification = {
            title: string;
            description: string;
        };
        const mqConnection = new RabbitMQConnection();

        const sendNotification = async (notification: INotification) => {
            return await mqConnection.sendToQueue(NOTIFICATION_QUEUE, notification);
        };
        const send = async () => {
            await mqConnection.connect();

            const newNotification = {
                title: "You have received new notification",
                description:
                    "You have received new incmoing notification from the producer service",
            };
            return await sendNotification(newNotification);
        };

        const isResult = await send();
        expect(isResult).toEqual(true);
    })
});