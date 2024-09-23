import {
	routerAuth,
	routersWithAuthorization,
} from '@/shared/consts/router.const';
import AuthLayout from '@/widgets/AuthLayout/AuthLayout';
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
			<Route element={<AuthLayout />}>
				{routerAuth.map(router => (
					<Route
						key={router.path}
						path={router.path}
						element={router.element}
					/>
				))}
			</Route>
		</Routes>
	);
}
