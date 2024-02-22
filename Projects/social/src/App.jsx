import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Create_post from './components/Create_post';
import Post_List from './components/Post_List';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">

        <Sidebar></Sidebar>

        <div className="content">
          <Header></Header>
          <Create_post></Create_post>
          <Post_List />
          <Footer></Footer>
        </div>

      </div>
    </>
  )
}

export default App
