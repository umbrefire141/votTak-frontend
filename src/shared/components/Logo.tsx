import logo from '@/app/media/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="w-24">
			<img src={logo} alt="votTak logo" className="w-24" />
		</Link>
	);
};

export default Logo;
