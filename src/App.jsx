import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Gallery />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
