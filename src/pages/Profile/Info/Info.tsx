import friendsService from '@/shared/api/friends/friends.service';
import AvatarWithUserInfo from '@/shared/components/AvatarWithUserInfo/AvatarWithUserInfo';
import { useUserStore } from '@/shared/model/user.store';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card';
import { Separator } from '@/shared/ui/separator';
import { formatName } from '@/shared/utils/formatName';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
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

	useEffect(() => {
		if (friend) setIsFriend(Object.keys(friend).length > 0 ? true : false);
	}, [friend]);

	return (
		<Card className="col-span-full lg:col-span-3 card-hover overflow-hidden">
			<div className="h-32 bg-gradient-to-r from-primary/20 via-purple-500/20 to-purple-600/20" />
			<CardHeader className="flex-row gap-4 items-start justify-between -mt-12 relative">
				<div className="relative">
					<AvatarWithUserInfo
						avatarSrc={avatar?.photo?.image}
						fullName={formatName(firstname, lastname)}
						extraInfo={email}
						setAvatar={true}
						avatarSize="xl"
					/>
				</div>
				<div className="flex items-center gap-2 pt-12">
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
			<Separator className="mb-4" />
			<CardContent className="flex gap-2 flex-col max-w-96">
				{info?.birth && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Birthday:</p>
						<span className="text-sm font-semibold text-foreground">
							{new Date(info.birth).toLocaleDateString('en', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</span>
					</div>
				)}
				{info?.currentCity && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Current city:</p>
						<span className="text-sm font-semibold text-foreground">{info.currentCity}</span>
					</div>
				)}
				{info?.hometown && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Hometown:</p>
						<span className="text-sm font-semibold text-foreground">{info.hometown}</span>
					</div>
				)}
				{info && info.languages.length > 0 && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Languages:</p>
						<span className="text-sm font-semibold text-foreground">{info.languages.join(', ')}</span>
					</div>
				)}
				{info && info.hobbies.length > 0 && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Hobbies:</p>
						<span className="text-sm font-semibold text-foreground">{info.hobbies.join(', ')}</span>
					</div>
				)}
				{info?.occupation && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Occupation:</p>
						<span className="text-sm font-semibold text-foreground">{info.occupation}</span>
					</div>
				)}
				{info?.description && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Description:</p>
						<span className="text-sm font-semibold text-foreground">{info.description}</span>
					</div>
				)}
				{info && info.favorite_games.length > 0 && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Favorite Games:</p>
						<span className="text-sm font-semibold text-foreground">{info.favorite_games.join(', ')}</span>
					</div>
				)}
				{info && info.favorite_movies.length > 0 && (
					<div className="inline-flex justify-between gap-3 items-center py-1">
						<p className="text-sm text-muted-foreground font-medium">Favorite movies:</p>
						<span className="text-sm font-semibold text-foreground">{info.favorite_movies.join(', ')}</span>
					</div>
				)}
			</CardContent>
			<Separator className="my-2" />
			<CardFooter className="gap-8 justify-center py-4">
				<div className="text-center">
					<div className="text-xl font-bold gradient-text">{photosCount}</div>
					<p className="text-xs text-muted-foreground">Photos</p>
				</div>
				<div className="text-center">
					<div className="text-xl font-bold gradient-text">{friends.length}</div>
					<p className="text-xs text-muted-foreground">Friends</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default Info;
