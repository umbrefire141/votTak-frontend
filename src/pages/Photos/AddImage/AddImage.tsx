import photoService from '@/shared/api/photo.service';
import { Button } from '@/shared/ui/button';
import { ChangeEvent } from 'react';
import { useQueryClient } from 'react-query';

const AddImage = () => {
	const queryClient = useQueryClient();

	const setImage = async (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const files = (e.target as HTMLInputElement).files;

		if (files) {
			await photoService.uploadImage(files[0]);
			queryClient.invalidateQueries('photos');
		}
	};

	return (
		<div className="mb-3">
			<Button className="relative cursor-pointer">
				Add photo
				<input
					type="file"
					className="absolute opacity-0 left-0 top-0 right-0 bottom-0 cursor-pointer"
					accept="image/*"
					multiple={false}
					onChange={setImage}
				/>
			</Button>
		</div>
	);
};

export default AddImage;
