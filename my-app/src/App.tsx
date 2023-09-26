
import {Layout} from './layout';
import Home from './pages/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Details} from './pages/details-employee';
import {NotFound} from './pages/not-found';
import {Navigate} from 'react-router-dom';

const App: React.FC=() => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/employees" element={<Home />} />
					<Route path="/employees/:id" element={<Details />} />
					<Route path="*" element={<NotFound />} />
					<Route
						path="/"
						element={<Navigate to="/employees" />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>

	);
};

export default App;
