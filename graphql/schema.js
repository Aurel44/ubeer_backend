const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Beer{
    _id: ID!
    name: String!
    description: String!
}
type beerData{
    beers: [Beer!]!
}
type RootQuery{
    beers: BeerData!
}
schema{
    query: RootQuery
}
`)