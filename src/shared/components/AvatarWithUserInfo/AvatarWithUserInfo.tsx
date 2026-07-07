import UserLogo from '@/app/media/user_logo.png';
import usersService from '@/shared/api/users/users.service';
import { apiServer } from '@/shared/consts/apiServer.const';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import clsx from 'clsx';
import { ChangeEvent } from 'react';
import { IAVatarWithUserInfo } from './AvatarWithUserInfo.interface';

const avatarSizes = {
	sm: 'w-8 h-8',
	md: 'w-10 h-10',
	lg: 'w-11 h-11',
	xl: 'w-20 h-20 ring-4 ring-background',
};

const AvatarWithUserInfo = ({
	avatarSrc,
	fullName,
	direction = 'row',
	sizeTitle = 'lg',
	extraInfo,
	setAvatar = false,
	className,
	avatarSize = 'lg',
}: IAVatarWithUserInfo) => {
	const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
		const files = (e.target as HTMLInputElement).files;

		if (files) {
			const formData = new FormData();
			formData.append('avatar', files[0]);
			usersService.setAvatar(formData);
		}
	};

	return (
		<div
			className={clsx('flex gap-3 items-center', className, {
				['flex-col']: direction === 'column',
			})}
		>
			<div className="relative flex-shrink-0">
				<Avatar className={clsx(avatarSizes[avatarSize], 'relative shadow-md')}>
					{avatarSrc ? (
						<AvatarImage src={`${apiServer}/${avatarSrc}`} alt={fullName} />
					) : (
						<AvatarImage src={UserLogo} alt={fullName} />
					)}
					<AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
						{fullName?.split(' ').map(n => n[0]).join('').slice(0, 2)}
					</AvatarFallback>
				</Avatar>
				{setAvatar && (
					<input
						type="file"
						className="absolute inset-0 opacity-0 cursor-pointer rounded-full"
						accept="image/*"
						title="click to change avatar"
						onChange={handleFileUpload}
					/>
				)}
			</div>
			<div className={clsx({ ['text-center']: direction === 'column' })}>
				<div
					className={clsx('font-semibold', {
						['text-lg']: sizeTitle === 'lg',
						['text-base']: sizeTitle === 'base',
						['text-md']: sizeTitle === 'md',
						['text-sm']: sizeTitle === 'sm',
					})}
				>
					{fullName}
				</div>
				{extraInfo && (
					<div className="text-xs text-muted-foreground">{extraInfo}</div>
				)}
			</div>
		</div>
	);
};

export default AvatarWithUserInfo;
