import { ThemeProvider } from './providers/ThemeProvider';
import AppRouter from './routers/AppRouter';

function App() {
	return (
		<ThemeProvider>
			<AppRouter />
		</ThemeProvider>
	);
}

export default App;
