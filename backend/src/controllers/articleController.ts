import { Request, Response } from 'express';
import Article from '../models/Article';

export const createArticle = async (req: Request, res: Response): Promise<void> => {
  const { title, description, category, slug } = req.body;
  const newArticle = new Article({ title, description, category, slug });
  try {
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description, category, slug } = req.body;
  try {
    const updatedArticle = await Article.findByIdAndUpdate(id, { title, description, category, slug }, { new: true });
    res.json(updatedArticle);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await Article.findByIdAndDelete(id);
    res.json({ message: 'Article deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

