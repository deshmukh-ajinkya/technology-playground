import React, { Suspense } from "react";

const Counter = React.lazy(() => import('./components/example/Counter'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Counter />
    </Suspense>
  );
}

export default App;
