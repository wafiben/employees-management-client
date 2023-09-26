import ReactDOM from 'react-dom';
import App from './App';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Provider} from 'react-redux';
import {store} from './store/store';


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
