import UserLogo from '@/app/media/user_logo.png';
import usersService from '@/shared/api/users.service';
import { apiServer } from '@/shared/consts/apiServer.const';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import clsx from 'clsx';
import { ChangeEvent } from 'react';
import { IAVatarWithUserInfo } from './AvatarWithUserInfo.interface';

const AvatarWithUserInfo = ({
	avatarSrc,
	fullName,
	direction = 'row',
	sizeTitle = 'lg',
	extraInfo,
	setAvatar = false,
	className,
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
			className={clsx('flex gap-2 items-center', className, {
				['flex-col']: direction === 'column',
			})}
		>
			<Avatar className="w-11 h-11 relative">
				{avatarSrc ? (
					<AvatarImage src={`${apiServer}/${avatarSrc}`} alt={fullName} />
				) : (
					<AvatarImage src={UserLogo} alt={fullName} />
				)}
				<AvatarFallback />
				{setAvatar && (
					<input
						type="file"
						className="absolute w-full h-full opacity-0 cursor-pointer right-0 bottom-0 left-0 top-0"
						accept="image/*"
						title="click to change avatar"
						onChange={handleFileUpload}
					/>
				)}
			</Avatar>
			<div>
				<div
					className={clsx('font-medium', {
						['text-lg']: sizeTitle === 'lg',
						['text-base']: sizeTitle === 'base',
						['text-md']: sizeTitle === 'md',
						['text-sm']: sizeTitle === 'sm',
					})}
				>
					{fullName}
				</div>
				{extraInfo && (
					<div className="text-sm text-muted-foreground">{extraInfo}</div>
				)}
			</div>
		</div>
	);
};

export default AvatarWithUserInfo;
