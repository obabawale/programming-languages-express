import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;
import programmingLanguagesRouter from './src/routes/programmingLanguages.route.js';


const { json, urlencoded } = bodyParser;
app.use(json());
app.use(
    urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/programming-languages', programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});