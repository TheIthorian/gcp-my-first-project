import express from 'express';

async function main(): Promise<void> {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

main();
