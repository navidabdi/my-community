import { FeedBox, Header, SignUp, ProfileMenu } from './components';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components';

function App() {
  return (
    <div className="app">
      <ProfileMenu />
      <Header />
      <Routes>
        <Route path="/" element={<FeedBox />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
