import { Button } from '@/shared/ui/button';
import { IImagesComponent } from './Images.interface';

const Images = ({ images, setImages }: IImagesComponent) => {
	return (
		<div className="mb-3 grid grid-cols-3 gap-4">
			{images.map(image => (
				<div className="relative group" key={image.uuid}>
					<Button
						variant="outline"
						size="icon"
						className="group-hover:opacity-100 opacity-0 transition-opacity absolute z-50 top-[-10px] right-[-10px] w-7 h-7"
						onClick={() => {
							setImages(images =>
								images.filter(a => !a.uuid.includes(image.uuid))
							);
						}}
					>
						X
					</Button>
					<img src={image.file} alt={image.name} className="w-full h-full" />
				</div>
			))}
		</div>
	);
};

export default Images;
