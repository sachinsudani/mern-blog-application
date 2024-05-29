import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../redux/slices/articleSlice';
import { IArticle } from '../types/article';

interface ArticleProps {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (article._id) {
      dispatch(deleteArticle(article._id));
    }
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.category}</p>
      <p>{article.slug}</p>
      <p>{new Date(article.date || '').toLocaleDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Article;
