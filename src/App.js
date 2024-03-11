import logo from './logo.svg';
import './css/App.css';
import './css/bodyMain.css'
import BasicExample from './components/Navbar';


function App() {
  return (
    <div className="App">
      <header>
        <BasicExample />
      </header>
      <body className='bodyMain'>
        <h1>Test React.js</h1>
      </body>
    </div>
  );
}

export default App;
