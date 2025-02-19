import photoService from '@/shared/api/photo.service';
import { Button } from '@/shared/ui/button';
import { ChangeEvent, useRef } from 'react';
import { useQueryClient } from 'react-query';

const AddImage = () => {
	const ref = useRef<HTMLInputElement>(null);

	const queryClient = useQueryClient();
	// Fix bug, which after two uploaded image the input file doesn't work properly
	const setImage = async (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const files = (e.target as HTMLInputElement).files;

		if (files && ref.current) {
			await photoService.uploadImage(files[0]);
			queryClient.invalidateQueries('photos');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			ref.current.value = null as any;
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
					ref={ref}
				/>
			</Button>
		</div>
	);
};

export default AddImage;
