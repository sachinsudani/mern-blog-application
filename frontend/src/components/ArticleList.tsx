import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../redux/slices/articleSlice';
import { RootState } from '../redux/store';
import Article from './Article';

const ArticleList: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
