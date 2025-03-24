import CheckUser from './middlewares/CheckUser/CheckUser';
import NotificationsProvider from './providers/NotificationsProvider';
import SocketProvider from './providers/SocketProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<ThemeProvider>
			<NotificationsProvider>
				<SocketProvider>
					<CheckUser>
						<AppRouter />
					</CheckUser>
				</SocketProvider>
			</NotificationsProvider>
		</ThemeProvider>
	);
}

export default App;
