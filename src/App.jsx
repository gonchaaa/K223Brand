import './App.css';
import Banner from './components/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='w-[80%] m-auto'>
      <Banner/>
      </div>
    </div>
  );
}

export default App;
