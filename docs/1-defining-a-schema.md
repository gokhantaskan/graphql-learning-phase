# Defining A Schema

```js
const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		greeting: String
	}
`;

console.log(typeDefs);
```

log:
```
{
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    }
  ],
  loc: { start: 0, end: 37 }
}
```