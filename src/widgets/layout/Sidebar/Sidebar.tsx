import Logo from '@/shared/components/Logo';
import { Button } from '@/shared/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/ui/sheet';
import SidebarLinks from './SidebarLinks';

const Sidebar = () => {
	return (
		<>
			<aside className="flex-auto items-end p-4 min-h-16 mb-6 min-w-40 max-w-52 hidden lg:block">
				<SidebarLinks />
			</aside>
			<Sheet>
				<SheetTrigger asChild className="fixed z-50 bottom-3 left-2">
					<Button variant="outline">+</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
						<SheetDescription>
							<Logo />
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<SidebarLinks />
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default Sidebar;
