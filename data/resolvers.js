import {Author,Post} from './connectors';

const resolvers = {
  Query: {
    authors(root, args) {
      return Author.find(args);
    },
    allAuthors() {
      return Author.find({});
    },
    posts(root, args) {
      return Post.find(args);
    },
    allPosts() {
      return Post.find({});
    },
  },

  Mutation: {
    createAuthor: async (root, args, context, info) => {
      const res = await Author.create(args)
      return await Author.findOne({_id: res._id})
    },
    createPost: async (root, args, context, info) => {
      const res = await Post.create(args)
      return await Post.findOne({_id: res._id})
    },
  },

  Author: {
    posts(author) {
      return Post.find({author_id: author._id})
    }
  },
  Post: {
    author(post) {
      return Author.findOne({_id: post.author_id})
    }
  }
};

export default resolvers;