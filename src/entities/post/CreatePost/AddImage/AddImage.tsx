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
		<Button variant="ghost" size="sm" className="relative">
			<FaRegImage className="w-5 h-5 mr-2" />
			Add image
			<input
				type="file"
				className="absolute opacity-0 left-0 top-0 right-0 bottom-0 cursor-pointer"
				accept="image/*"
				multiple={true}
				onChange={setImage}
			/>
		</Button>
	);
};

export default AddImage;
