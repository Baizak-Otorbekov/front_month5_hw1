import Home from './Page/Home';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Detail from './Page/Detail';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/page1' element={<Page1/>}/>
    <Route path='/page2' element={<Page2/>}/>
    <Route path='/user/:id' element={<Detail/>}/>

    </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
