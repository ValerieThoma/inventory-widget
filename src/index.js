import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
// import TemperatureApp from './tempApp/TemperatureApp';
import ProductTable from './ProductTable';

ReactDOM.render(<App />,
	//<TemperatureApp />,
 document.getElementById('root'));
registerServiceWorker();
