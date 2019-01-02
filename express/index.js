import express from 'express';
import bodyParser from 'body-parser';

import { env } from './config/index';
import router from './routes/index';

const app = express();
const port = env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(express.static('dist'));

app.use('/', router);

app.listen(port, () => console.log(`Backend listening on port ${port}`));
