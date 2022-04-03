import { MainPage, Header, SignUp } from './components';
import { Routes, Route } from 'react-router-dom';
import { Login, PostPage } from './components';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
