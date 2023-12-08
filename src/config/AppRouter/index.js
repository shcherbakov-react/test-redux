import { Routes, Route, Navigate } from 'react-router-dom';
import { Catalog } from '../../components/Catalog';

export const AppRouter = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Navigate to="/clothes" />}>
			</Route>
			<Route path="/food" element={<Catalog category="food" />}></Route>
			<Route path="/clothes" element={<Catalog category="clothes" />}></Route>
			<Route path="/electronics" element={<Catalog category="electronics" />}></Route>
		</Routes>
	)
}

