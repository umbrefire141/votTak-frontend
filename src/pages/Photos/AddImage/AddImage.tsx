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
		<Button className="relative cursor-pointer gap-2" variant="outline">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
				<path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
				<path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.422.064.852.142 1.284.235a9.437 9.437 0 0 1 3.422 1.813 9.467 9.467 0 0 1 2.375 3.463 10.107 10.107 0 0 1 .458 2.79c.039.675-.02 1.352-.174 2.01a9.47 9.47 0 0 1-1.808 3.512 9.494 9.494 0 0 1-3.306 2.54 9.387 9.387 0 0 1-4.07.833 9.386 9.386 0 0 1-4.07-.834 9.494 9.494 0 0 1-3.306-2.539 9.47 9.47 0 0 1-1.808-3.512 10.107 10.107 0 0 1-.174-2.01c0-.971.156-1.91.458-2.79a9.467 9.467 0 0 1 2.375-3.463 9.437 9.437 0 0 1 3.422-1.813c.432-.093.862-.171 1.284-.235.465-.067.87-.327 1.11-.71l.822-1.317a1.924 1.924 0 0 1 2.331-1.39ZM6 12.75a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" clipRule="evenodd" />
			</svg>
			Add photo
			<input
				type="file"
				className="absolute inset-0 opacity-0 cursor-pointer"
				accept="image/*"
				multiple={false}
				onChange={setImage}
				ref={ref}
			/>
		</Button>
	);
};

export default AddImage;
