import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));

const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<Spinner />}>
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 h-full max-w-6xl">
            <Routes>
              <Route path="/" element={<Navigate to="/articles" replace />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:slug" element={<ArticleDetailPage />} />
              <Route path="*" element={<ArticlesPage />} />
            </Routes>
          </div>
        </main>
      </Suspense>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
