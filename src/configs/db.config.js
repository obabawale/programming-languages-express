import 'dotenv/config'

const env = process.env;

const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME || 'programming_languages',
    port: env.DB_PORT || 3306,
    // ssl: {
    //   mode: 'VERIFY_IDENTITY',
    //   ca: readFileSync('/etc/ssl/cert.pem', 'utf-8'),
    // }
};
console.log("**** db ******", db);
export default db;