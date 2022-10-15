import express, { Express } from 'express';
import moment from 'moment';
import { router } from './routes/index.routes';
import path from 'path';
import morganBody from 'morgan-body';

const fs = require("fs");
const cors = require('cors');
const bodyParser = require('body-parser');

require('./database');

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
const log = fs.createWriteStream(path.join(__dirname + "/logs", `${moment().format('YYYY-MM-DD')}.log`), { flags: "a" });

morganBody(app, {
    noColors: true,
    stream: log
})

app.use(router);
app.listen(8001);
