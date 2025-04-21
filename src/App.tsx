import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import Header from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/articles" replace />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticleDetailPage />} />
      <Route path="*" element={<ArticlesPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
