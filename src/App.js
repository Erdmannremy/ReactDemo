

import React from "react";
import Collection from "./components/Collection";
import Header from "./components/Header";
import Footer from "./components/Footer";




const App = () => {
  return (
    <div>
      <Header/>
      <Collection/>
      <Footer/>
      
      {/* <Router>
        <nav>
          <ul>
            <li>
               <Link to="/Home">Home</Link> 
            </li>
            <li>
              <Link to="/Collection">Page principale</Link> 
            </li>
          </ul>
        </nav>
        
        
       <Routes>
        <Route path="/Home"element={<Home/>}/>   
        <Route path="/Collection" element={<Collection/>}/>
        </Routes>    
       </Router> */}
      

     </div>

            
  
     
  );
};

export default App;

