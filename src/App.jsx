/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainApp from './components/MainApp.jsx';
import { useEffect, useState } from "react";
import { DNA } from 'react-loader-spinner'


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to switch from loading to the next component after 2 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return <div className='d-flex justify-content-center items-center align-middle' style={{ height: "100vh", alignItems: "center" }}>
      <div className='d-flex'>
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  } else {
    return <MainApp />
  }
}



export default App;
