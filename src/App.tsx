import { FeedBox, Header, SignUp } from './components';
import { Routes, Route } from 'react-router-dom';
import { Login, PostPage } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<FeedBox />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
