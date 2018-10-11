import express from 'express';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import { schema } from './src/schema';

const PORT = 7070;
const server = express();
//server.use('*', cors({ origin: 'http://localhost:7800' }));
server.use('*', cors());

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));
 
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () =>
  console.log(`Location Service is running. Open http://localhost:${PORT} to run queries`)
);
