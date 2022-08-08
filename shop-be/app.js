import  express from "express";
import "dotenv/config"
import { ApolloServer } from "apollo-server-express";
//import { resolvers } from "./graphQL_schemas/resolvers.js"
//import  { typeDefs }  from  "./graphQL_schemas/schema.js"

//import { PORT } from "../app-config"

const PORT = process.env.PORT

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

await server.start()
server.applyMiddleware({ app });

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: PORT }, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
});