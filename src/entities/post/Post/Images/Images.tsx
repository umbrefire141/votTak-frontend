import photoService from '@/shared/api/photo.service';
import { apiServer } from '@/shared/consts/apiServer.const';
import { Button } from '@/shared/ui/button';
import { IImagesProps } from './Images.interface';

const Images = ({ images, setImages, isEdit = false }: IImagesProps) => {
	return (
		<div className="mb-3 grid grid-cols-3 gap-4">
			{images.map(image => (
				<div className="relative group" key={image.id}>
					{isEdit && (
						<Button
							variant="outline"
							size="icon"
							className="group-hover:opacity-100 opacity-0 transition-opacity absolute z-50 top-[-10px] right-[-10px] w-7 h-7"
							onClick={async () => {
								setImages(images =>
									images.filter(
										a => !a.id.toString().includes(String(image.id))
									)
								);
								await photoService.deletePhoto(image.id);
							}}
						>
							X
						</Button>
					)}

					<img
						src={`${apiServer}/${image.image}`}
						alt={image.name}
						className="w-full h-full"
					/>
				</div>
			))}
		</div>
	);
};

export default Images;
