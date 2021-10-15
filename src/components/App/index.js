import { AppProvider } from '../../AppContext';
import { Header } from '../../layout/Header';
import { Main } from '../../layout/Main';

export function App() {
	return (
		<AppProvider>
			<Header />
			<Main />
		</AppProvider>
	);
}
