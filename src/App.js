import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Loader from '../src/Components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;