import { Schema, model, Document } from 'mongoose';

interface IArticle extends Document {
  title: string;
  description: string;
  category: string;
  slug: string;
  date: Date;
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Article = model<IArticle>('Article', articleSchema);
export default Article;
export type { IArticle };
