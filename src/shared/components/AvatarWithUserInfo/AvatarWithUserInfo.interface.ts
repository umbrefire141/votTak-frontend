export interface IAVatarWithUserInfo {
	avatarSrc?: string;
	fullName: string;
	sizeTitle?: 'base' | 'md' | 'lg' | 'sm';
	direction?: 'column' | 'row';
	extraInfo?: string;
	setAvatar?: boolean;
	className?: string;
	avatarSize?: 'sm' | 'md' | 'lg' | 'xl';
}
