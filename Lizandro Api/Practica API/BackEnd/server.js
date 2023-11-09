const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor Node.js en ejecución en el puerto ${port}`);
});
