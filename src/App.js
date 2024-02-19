
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className="App">

      <div className='leftOut'>
            <LeftSection/>
      </div>

      <div className='rightOut'>
          <RightSection/>
      </div>
    </div>
  );
}

export default App;
