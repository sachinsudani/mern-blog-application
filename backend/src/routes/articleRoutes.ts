import { Router } from 'express';
import { createArticle, getArticles, updateArticle, deleteArticle } from '../controllers/articleController';

const router = Router();

router.post('/articles', createArticle);
router.get('/articles', getArticles);
router.put('/articles/:id', updateArticle);
router.delete('/articles/:id', deleteArticle);

export default router;
