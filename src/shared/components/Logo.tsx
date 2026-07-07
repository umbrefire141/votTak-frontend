import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="flex items-center gap-2">
			<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
				<span className="text-white font-bold text-sm">V</span>
			</div>
			<span className="text-lg font-bold gradient-text hidden sm:inline">votTak</span>
		</Link>
	);
};

export default Logo;
