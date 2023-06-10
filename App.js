import React, { lazy, Suspense } from 'react';

const MovieList = lazy(() => import('./MovieList'));

function App() {
  return (
    <div>
      <h1>Movie Listings</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieList />
      </Suspense>
    </div>
  );
}

export default App;
