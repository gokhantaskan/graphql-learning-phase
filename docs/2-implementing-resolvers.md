# Implementing Resolvers

```js
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		greeting: String
	}
`;

const resolvers = {
	Query: {
		greeting: () => "Hello!",
	},
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({port: 9000})
	.then((serverInfo) => console.log(`Server info: ${serverInfo.url}`));

```

log:
```
Server info: http://localhost:9000/
```
