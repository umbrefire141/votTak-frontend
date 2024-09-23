import CheckUser from './middlewares/CheckUser/CheckUser';
import SocketProvider from './providers/SocketProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<ThemeProvider>
			<SocketProvider>
				<CheckUser>
					<AppRouter />
				</CheckUser>
			</SocketProvider>
		</ThemeProvider>
	);
}

export default App;
