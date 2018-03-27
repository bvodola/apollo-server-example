import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/apollo');
const ObjectId = Mongoose.Schema.ObjectId;

const PostSchema = Mongoose.Schema({
  title: String,
  text: String,
  author_id: ObjectId
});

const AuthorSchema = Mongoose.Schema({
  firstName: String,
  lastName: String,
  posts: Array
});

const Post = Mongoose.model('posts', PostSchema);
const Author = Mongoose.model('authors', AuthorSchema);

export { Author, Post };