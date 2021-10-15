import { Search } from '../../components/Search';
import './Header.css';

export function Header() {
	return (
		<header className='weatherHead'>
			<h1>Weather App</h1>
			<Search />
		</header>
	);
}
