import { IFile } from '@/shared/types/File.interface';
import { Button } from '@/shared/ui/button';
import { ChangeEvent, useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import { v4 } from 'uuid';
import { IAddImageComponent } from './AddImage.interface';

const AddImage = ({ setImages }: IAddImageComponent) => {
	const [, setValue] = useState<IFile>();

	const setImage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const files = (e.target as HTMLInputElement).files;

		if (files) {
			setValue(files[0]);
			setImages(prev => [
				...prev,
				{
					uuid: v4(),
					name: files[0].name,
					file: URL.createObjectURL(files[0]),
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
