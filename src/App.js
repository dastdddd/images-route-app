import './App.css';
import Header from './components/Header';
import ImageDetail from './components/ImageDetail';
import { imgUrls } from "./data"
import {Route, Routes, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="image-container">
        {
          imgUrls.map((item, index) => <div key={index} className='item'>
            <Link to={`/images/${index}`}>
              <img
                style={{ width: '100%', height: "100%", objectFit: "contain" }}
                width={100} 
                /*width={100} - атрибут фото качество не теряется */
                height={100} src={item}
              />
            </Link>
          </div>)
        }
      </div>
      <Routes>
        <Route path='/images/:index' element={<ImageDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
