import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const PostSchema = new Schema({
  title: String,
  tags: String,
  content: String,
  authorName: String,
  authorId: String,
  lost: String,
  type: String,
  anonymous: Boolean,
  resolved: Boolean,
  pictureURL: String,
  key: String,
});

// create model class
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
