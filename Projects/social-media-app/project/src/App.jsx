import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/Post-list-store';


function App() {

  const [selectedTab, setSelecttedTab] = useState("CreatePost")

  return (
    <PostListProvider>
      <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelecttedTab={setSelecttedTab} />
      <div className="content">
        <Header />
        {selectedTab ==="Home" ? <PostList /> : <CreatePost />}
        <Footer />
        </div>
      </div>
      </PostListProvider>
  );
}

export default App;
