import postsService from '@/shared/api/posts.service';
import { Button } from '@/shared/ui/button';
import { ChangeEvent } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { IAddImageComponent } from './AddImage.interface';

const AddImage = ({ setImages }: IAddImageComponent) => {
	const setImage = async (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const files = (e.target as HTMLInputElement).files;

		if (files) {
			const photo = await postsService.uploadImage(files[0]);
			setImages(prev => [
				...prev,
				{
					id: photo.id,
					name: photo.name,
					file: photo.image,
				},
			]);
		}
	};

	return (
		<Button variant="ghost" size="sm" className="relative gap-1.5 text-muted-foreground hover:text-foreground">
			<FaRegImage className="w-4 h-4" />
			Image
			<input
				type="file"
				className="absolute inset-0 opacity-0 cursor-pointer"
				accept="image/*"
				multiple={true}
				onChange={setImage}
			/>
		</Button>
	);
};

export default AddImage;
