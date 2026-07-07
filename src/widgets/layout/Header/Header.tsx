import Search from '@/shared/components/Search/Search';
import Logo from '../../../shared/components/Logo';
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';

const Header = () => {
	return (
		<header className="glass sticky top-0 z-50 min-h-16 mb-6">
			<div className="container h-16 flex items-center">
				<div className="flex justify-between items-center w-full">
					<div className="hidden lg:block flex-shrink-0">
						<Logo />
					</div>
					<div className="flex items-center gap-2 lg:gap-4 flex-1 lg:flex-none lg:flex-[40%] lg:ml-8">
						<div className="flex-1 max-w-md">
							<Search />
						</div>
						<Notification />
					</div>
					<div className="flex-shrink-0 ml-2 lg:ml-0">
						<Profile />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
