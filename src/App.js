import React from "react";
import Banner from "./components/Banner";
import requests from "./components/data/requests";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Row from "./components/Row";
import Video from "./components/Video";
import { BrowserRouter as Router  , Routes,Route, Navigate  } from 'react-router-dom';


const App = () => {
  return (
    <div>
     <Router>
          <Nav />
          <Banner />

          <Routes>
               <Route exact path="/video/:id" element={Video} />
          </Routes>

         

      <Row
        title="Programmes originaux Netflix"
        fecthUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      />
      
      <Row
        title="Tendances actuelles "
        fecthUrl={requests.fetchTrending}
        
      />

      <Row
        title="Les mieux notés"
        fecthUrl={requests.fetchActionMovies}
      />
      <Row
        title="Films actions"
        fecthUrl={requests.fetchTopRated}
      />

      {/* video */}
      {/* video rapide */}
      {/* Footer */}
      <Footer />
     </Router>


      
    </div>
  );
};

export default App;
