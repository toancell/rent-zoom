import Header from './component/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navigation from './component/Navigation';
function App() {
  return (
    <div >
    <Header />
    <Toaster  />
    <Navigation/>
      <main>
        <Outlet />
        
      </main>
    </div>
  );
}

export default App;
