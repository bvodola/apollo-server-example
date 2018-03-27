import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  authors(firstName:String): [Author],
  allAuthors: [Author],
  posts(author_id:String): [Post],
  allPosts: [Post]
}

type Mutation {
  createAuthor(firstName: String, lastName: String): Author
  createPost(title: String, text: String, authorId: String): Post
}

type Author {
  _id: String,
  firstName: String,
  lastName: String,
  posts: [Post]
}

type Post {
  _id: String,
  title: String,
  text: String,
  author: Author
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
