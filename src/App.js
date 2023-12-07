import './App.css';
import images from '../src/images';

function App() {
  return (
    <div className="App">
        <div className='card' >
          <a>
            <img className='img-codeqr'src={images.codeQr} />
          </a>
          <h1 className='title'>Improve your front-end skills by building projects</h1>
          <p className='text'>
          Scan the Qr code to visit Front-end Mentor and take your coding skills to the next nevel
          </p>



       </div>



    </div>
  );
}

export default App;
