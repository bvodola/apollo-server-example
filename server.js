import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const APP_PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(APP_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${APP_PORT}/graphiql`
  )
);
