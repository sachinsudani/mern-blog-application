import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createArticle } from '../redux/slices/articleSlice';
import { TextField, Button } from '@mui/material';
import { IArticle } from '../types/article';

const ArticleForm: React.FC = () => {
  const [formData, setFormData] = useState<IArticle>({ title: '', description: '', category: '', slug: '' });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createArticle(formData));
    setFormData({ title: '', description: '', category: '', slug: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ArticleForm;
