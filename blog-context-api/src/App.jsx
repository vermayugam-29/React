import './App.css'
import Header from './components/Header';
import Blogs from './components/Blogs';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-1'>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App
