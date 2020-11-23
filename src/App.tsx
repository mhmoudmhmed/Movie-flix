import React from 'react';
import request from './request';
import Nav from './components/Navbar/Nav';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* NAV */}
      <Nav />
      {/* BANNER */}
      <Banner />
      {/* ROW */}
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />

    </div>
  );
}

export default App;
