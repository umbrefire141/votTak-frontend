import UserLogo from '@/app/media/user_logo.png';
import { apiServer } from '@/shared/consts/apiServer.const';
import { useUserStore } from '@/shared/model/user.store';
import usersService from '@/shared/api/users/users.service';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { useRef, useState } from 'react';

export default function FormAvatar() {
	const { user, getMe } = useUserStore();
	const [preview, setPreview] = useState<string | null>(null);
	const [isUploading, setIsUploading] = useState(false);
	const fileRef = useRef<HTMLInputElement>(null);

	const handleFileSelect = async (file: File) => {
		const objectUrl = URL.createObjectURL(file);
		setPreview(objectUrl);

		const formData = new FormData();
		formData.append('avatar', file);

		setIsUploading(true);
		try {
			await usersService.setAvatar(formData);
			await getMe();
		} catch {
		} finally {
			setIsUploading(false);
			setPreview(null);
			URL.revokeObjectURL(objectUrl);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) handleFileSelect(file);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		const file = e.dataTransfer.files?.[0];
		if (file) handleFileSelect(file);
	};

	const handleDragOver = (e: React.DragEvent) => e.preventDefault();

	const currentSrc = preview || (user?.avatar?.photo?.image ? `${apiServer}/${user.avatar.photo.image}` : UserLogo);
	const initials = user ? `${user.firstname?.[0] ?? ''}${user.lastname?.[0] ?? ''}` : '';

	return (
		<Card className="card-hover">
			<CardHeader>
				<CardTitle className="text-lg font-semibold">Profile Picture</CardTitle>
				<CardDescription className="text-sm">
					Upload a new avatar. Click or drag an image onto the area below.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col items-center gap-5">
					<div
						onDrop={handleDrop}
						onDragOver={handleDragOver}
						onClick={() => fileRef.current?.click()}
						className="relative group cursor-pointer"
					>
						<Avatar className="w-28 h-28 ring-4 ring-border/50 transition-all duration-200 group-hover:ring-primary/30 group-hover:shadow-soft-lg">
							<AvatarImage src={currentSrc} alt="Avatar" className="object-cover" />
							<AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
								{initials}
							</AvatarFallback>
						</Avatar>
						<div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
							<div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
									<path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
									<path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.422.064.852.142 1.284.235a9.437 9.437 0 0 1 3.422 1.813 9.467 9.467 0 0 1 2.375 3.463 10.107 10.107 0 0 1 .458 2.79c.039.675-.02 1.352-.174 2.01a9.47 9.47 0 0 1-1.808 3.512 9.494 9.494 0 0 1-3.306 2.54 9.387 9.387 0 0 1-4.07.833 9.386 9.386 0 0 1-4.07-.834 9.494 9.494 0 0 1-3.306-2.539 9.47 9.47 0 0 1-1.808-3.512 10.107 10.107 0 0 1-.174-2.01c0-.971.156-1.91.458-2.79a9.467 9.467 0 0 1 2.375-3.463 9.437 9.437 0 0 1 3.422-1.813c.432-.093.862-.171 1.284-.235.465-.067.87-.327 1.11-.71l.822-1.317a1.924 1.924 0 0 1 2.331-1.39ZM6 12.75a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" clipRule="evenodd" />
								</svg>
							</div>
						</div>
					</div>
					<input
						ref={fileRef}
						type="file"
						accept="image/*"
						className="hidden"
						onChange={handleChange}
					/>
					<Button
						variant="outline"
						size="sm"
						disabled={isUploading}
						onClick={() => fileRef.current?.click()}
						className="gap-2"
					>
						{isUploading ? (
							<svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
								<path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
								<path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.422.064.852.142 1.284.235a9.437 9.437 0 0 1 3.422 1.813 9.467 9.467 0 0 1 2.375 3.463 10.107 10.107 0 0 1 .458 2.79c.039.675-.02 1.352-.174 2.01a9.47 9.47 0 0 1-1.808 3.512 9.494 9.494 0 0 1-3.306 2.54 9.387 9.387 0 0 1-4.07.833 9.386 9.386 0 0 1-4.07-.834 9.494 9.494 0 0 1-3.306-2.539 9.47 9.47 0 0 1-1.808-3.512 10.107 10.107 0 0 1-.174-2.01c0-.971.156-1.91.458-2.79a9.467 9.467 0 0 1 2.375-3.463 9.437 9.437 0 0 1 3.422-1.813c.432-.093.862-.171 1.284-.235.465-.067.87-.327 1.11-.71l.822-1.317a1.924 1.924 0 0 1 2.331-1.39ZM6 12.75a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" clipRule="evenodd" />
							</svg>
						)}
						{isUploading ? 'Uploading...' : 'Choose Image'}
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
