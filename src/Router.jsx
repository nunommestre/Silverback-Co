import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Cleaning from './Cleaning.js';
import Tile from './Tile.js';

const MyRouter = () => (
  <Router>
           <Routes>
                 <Route exact path='/Silverback-Co' element={< Tile />}></Route>
                 <Route exact path='/cleaning' element={< Cleaning />}></Route>
          </Routes>
       </Router>
);


export default MyRouter;