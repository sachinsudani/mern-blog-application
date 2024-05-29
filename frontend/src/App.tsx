import React from 'react';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Blog Application</h1>
      <ArticleForm />
      <ArticleList />
    </div>
  );
};

export default App;
