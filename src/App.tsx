import { Route, Routes } from 'react-router-dom';

import ThemeProvider from './store/ThemeProvider';

import About from './modules/Example/About';
import Home from './modules/Example/Home';
import Layout from './modules/Example/Layout';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/example" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/example/about" element={<About />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
