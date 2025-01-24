import friendsService from '@/shared/api/friends/friends.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { useUserStore } from '@/shared/model/user.store';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { Separator } from '@/shared/ui/separator';
import { formatName } from '@/shared/utils/formatName';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ActionsFriend from './ActionsFriend/ActionsFriend';
import { IInfoComponent } from './Info.interface';
import Menu from './Menu/Menu';
import WriteMessage from './WriteMessage/WriteMessage';

const Info = ({
	uuid,
	avatar,
	email,
	firstname,
	lastname,
	friends,
	photosCount,
	info,
}: IInfoComponent) => {
	const { user: userCurrent } = useUserStore();
	const { data: friend } = useQuery({
		queryFn: () => (uuid ? friendsService.getFriend(uuid) : null),
		queryKey: ['friend', uuid],
		keepPreviousData: true,
	});
	const [isFriend, setIsFriend] = useState(false);
	const status = false;

	useEffect(() => {
		if (friend) setIsFriend(Object.keys(friend).length > 0 ? true : false);
	}, [friend]);

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
						<ActionsFriend
							isFriend={isFriend}
							user_id={friend?.id as number}
							uuid={uuid}
						/>
					)}
					<WriteMessage uuid={uuid} firstname={firstname} lastname={lastname} />
					<Menu uuid={uuid} />
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
							{new Date(info.birth).toLocaleDateString('en', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</Link>
					</div>
				)}
				{info?.currentCity && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Current city:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.currentCity}
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
				{info?.languages && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Languages:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.languages.join(', ')}
						</Link>
					</div>
				)}
				{info?.hobbies && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Hobbies:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.hobbies.join(', ')}
						</Link>
					</div>
				)}
				{info?.occupation && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Occupation:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.occupation}
						</Link>
					</div>
				)}
				{info?.description && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Description:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.description}
						</Link>
					</div>
				)}
				{info?.favorite_games && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">favorite Games:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.favorite_games.join(', ')}
						</Link>
					</div>
				)}
				{info?.favorite_movies && (
					<div className="inline-flex justify-between gap-3 items-center">
						<p className="text-gray-500 font-medium">Favorite movies:</p>
						<Link
							to=""
							className="transition-colors text-blue-400 hover:text-blue-500 font-bold"
						>
							{info.favorite_movies.join(', ')}
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
					<div className="text-xl text-blue-600">{friends.length}</div>
					<p className="text-gray-500">Friends</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default Info;
