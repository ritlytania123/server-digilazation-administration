const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const { createServer } = require('http');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.init();

  const handler = app.getHttpAdapter().getHttpServer().requestHandler;

  const server = createServer((req, res) => {
    handler(req, res);
  });

  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

bootstrap();
