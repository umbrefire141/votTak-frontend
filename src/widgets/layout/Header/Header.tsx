import Search from '@/shared/components/Search/Search';
import Logo from './Logo';
import Notification from './Notification/Notification';
import Profile from './Profile/Profile';

const Header = () => {
	return (
		<header className="p-4 shadow-md min-h-16 mb-6">
			<div className="container">
				<div className="flex justify-between items-center">
					<div className="flex justify-between items-center flex-shrink flex-grow-0 flex-[40%]">
						<Logo />
						<div className="flex items-center gap-4">
							<Search />
							<Notification />
						</div>
					</div>
					<Profile />
				</div>
			</div>
		</header>
	);
};

export default Header;
