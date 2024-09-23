import {
	routersWithAuthorization,
	routerWithoutAuthorization,
} from '@/shared/consts/router.const';
import Layout from '@/widgets/layout/Layout';
import { Route, Routes } from 'react-router-dom';

export default function AppRouter() {
	return (
		<Routes>
			<Route element={<Layout />}>
				{routersWithAuthorization.map(router => (
					<Route
						key={router.path}
						path={router.path}
						element={router.element}
					/>
				))}
			</Route>
			{routerWithoutAuthorization.map(router => (
				<Route key={router.path} path={router.path} element={router.element} />
			))}
		</Routes>
	);
}
