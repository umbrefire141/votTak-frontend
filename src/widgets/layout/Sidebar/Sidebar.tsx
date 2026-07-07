import { Button } from '@/shared/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/ui/sheet';
import { BiMenu } from 'react-icons/bi';
import SidebarLinks from './SidebarLinks';

const Sidebar = () => {
	return (
		<>
			<aside className="sticky top-24 h-fit flex-auto p-4 min-w-44 max-w-52 hidden lg:block">
				<div className="rounded-xl bg-card border border-border/50 shadow-soft p-3">
					<SidebarLinks />
				</div>
			</aside>
			<Sheet>
				<SheetTrigger asChild className="fixed z-50 bottom-4 left-4 lg:hidden">
					<Button
						variant="default"
						size="icon"
						className="w-12 h-12 rounded-full shadow-soft-lg"
					>
						<BiMenu className="w-5 h-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="p-4">
					<SheetHeader className="mb-6">
						<SheetTitle className="gradient-text text-xl">Menu</SheetTitle>
					</SheetHeader>
					<SidebarLinks />
				</SheetContent>
			</Sheet>
		</>
	);
};

export default Sidebar;
