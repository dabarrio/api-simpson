import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: parseInt(process.env.DATABASE_PORT, 10),
      pass: process.env.DATABASE_PASS,
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});
