import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Create_post from './components/Create_post';
import Post_List from './components/PostList';
import PostListProvider from './store/post-list-store';
function App() {
  const [selectedTab, setselectedTab] = useState("");

  return (
    <>

      <PostListProvider>

        <div className="app-container">

          <Sidebar selectedTab={selectedTab}

            setselectedTab={setselectedTab}

          ></Sidebar>

          <div className="content">
            <Header></Header>

            {selectedTab === "Home" ? (
              <Post_List />) : (
              <Create_post></Create_post>

            )
            }
            <Footer></Footer>
          </div>

        </div>

      </PostListProvider>

    </>
  )
}

export default App
