import usersService from '@/shared/api/users.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { useUserStore } from '@/shared/model/user.store';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Separator } from '@/shared/ui/separator';
import { formatName } from '@/shared/utils/formatName';
import clsx from 'clsx';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IInfoComponent } from './Info.interface';
import WriteMessage from './WriteMessage/WriteMessage';

const Info = ({
	uuid,
	avatar,
	email,
	firstname,
	lastname,
	friendsCount,
	photosCount,
	info,
}: IInfoComponent) => {
	const status = false;

	const { user: userCurrent } = useUserStore();

	const addFriend = () => {
		usersService.addFriend(uuid);
	};

	return (
		<Card className="mb-5 p-3 col-start-1 col-end-7">
			<CardHeader className="flex-row gap-4 items-start justify-between">
				<div className="relative">
					<AvatarWithUserInfo
						avatarSrc={avatar?.photo?.image}
						fullName={formatName(firstname, lastname)}
						extraInfo={email}
						setAvatar={true}
					/>
					<div
						className={clsx(
							'w-6 h-6 rounded-full absolute top-[-10px] left-[-10px]',
							{
								['bg-green-700']: status,
								['none']: !status,
							}
						)}
					></div>
				</div>
				<div className="flex items-center gap-3">
					{userCurrent?.uuid !== uuid && (
						<Button onClick={addFriend}>Add friend</Button>
					)}
					<WriteMessage uuid={uuid} firstname={firstname} lastname={lastname} />
					<DropdownMenu>
						<DropdownMenuTrigger className="outline-none bg-secondary p-2 transition-colors rounded-sm w-10 h-10 hover:bg-slate-300">
							<BsThreeDots className="inline w-5 h-5" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuItem>Subscription</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>
			<Separator className="mb-5" />
			<CardContent className="flex gap-2 flex-col max-w-96">
				{info?.birth && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Birthday:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.birth}
						</Link>
					</div>
				)}
				{info?.city && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Current city:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.city}
						</Link>
					</div>
				)}
				{info?.hometown && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Hometown:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.hometown}
						</Link>
					</div>
				)}
			</CardContent>
			<Separator className="mb-5" />
			<CardFooter className="gap-5 justify-center">
				<div className="text-center">
					<div className="text-xl text-blue-600">{photosCount}</div>
					<p className="text-gray-500">Photos</p>
				</div>
				<div className="text-center">
					<div className="text-xl text-blue-600">{friendsCount}</div>
					<p className="text-gray-500">Friends</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default Info;
