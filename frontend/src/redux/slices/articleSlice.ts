import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IArticle } from '../../types/article';

interface ArticleState {
  articles: IArticle[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: null
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await axios.get('/api/articles');
  return response.data;
});

export const createArticle = createAsyncThunk('articles/createArticle', async (article: IArticle) => {
  const response = await axios.post('/api/articles', article);
  return response.data;
});

export const updateArticle = createAsyncThunk('articles/updateArticle', async ({ id, article }: { id: string, article: IArticle }) => {
  const response = await axios.put(`/api/articles/${id}`, article);
  return response.data;
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id: string) => {
  await axios.delete(`/api/articles/${id}`);
  return id;
});

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch articles';
      })
      .addCase(createArticle.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.articles.push(action.payload);
      })
      .addCase(updateArticle.fulfilled, (state, action: PayloadAction<IArticle>) => {
        const index = state.articles.findIndex(article => article._id === action.payload._id);
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      })
      .addCase(deleteArticle.fulfilled, (state, action: PayloadAction<string>) => {
        state.articles = state.articles.filter(article => article._id !== action.payload);
      });
  }
});

export default articleSlice.reducer;
