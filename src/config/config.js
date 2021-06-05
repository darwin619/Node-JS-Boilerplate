const dotenv = require('dotenv');
const Joi = require('joi');

const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `./.env.${environment}` });

const validationSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    DB_NAME: Joi.string().required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('MongoDb url'),
  })
  .unknown();

const { value: env, error } = validationSchema.validate(process.env);
if (error) throw new Error(`Config validation error: ${error.message}`);

const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  mongoose: {
    dbName: env.DB_NAME,
    url: env.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

module.exports = config;
