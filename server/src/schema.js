const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Qeury to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules tht teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's image url"
    thumbNail: String
    "the track's approximate length"
    length: Int
    "the number of modules in the track"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    "url to the author's image"
    photo: String
  }
`;

module.exports = typeDefs;