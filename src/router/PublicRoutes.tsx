import { Navbar } from '@/components/Navbar';
import HomePage from '@/page/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function PublicRouter() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default PublicRouter;
