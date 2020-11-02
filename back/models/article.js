import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({

  title: String,
  preview: String,
  body: String,
  img: String,
});

export default mongoose.model('Article', ArticleSchema);
