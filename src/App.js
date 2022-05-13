import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="movies/:id" element={<MovieForm />} />
          <Route path="movies" element={<Movies />} />
          <Route path="customers" element={<Customers />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate push to="movies" />} />
          <Route path="*" element={<Navigate push to="not-found" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
