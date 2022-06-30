import React from "react";
import Banner from "./components/Banner";
import requests from "./components/data/requests";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Row from "./components/Row";


const App = () => {
  return (
    <div>

 

      <Nav />
      <Banner />

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
    </div>
  );
};

export default App;
