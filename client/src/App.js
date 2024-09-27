import Header from './component/Header';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="p-2 lg:p-0">
      <Header className="fixed top-0 left-0 w-full z-10" />
      <Toaster />
      <Navigation className="fixed top-16 left-0 w-full z-10" /> 
      <main className="pt-[100px]"> 
        <Outlet />
      </main>
    </div>
  );
}

export default App;