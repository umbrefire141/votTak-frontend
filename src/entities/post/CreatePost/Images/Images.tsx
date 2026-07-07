import photoService from '@/shared/api/photo.service';
import { apiServer } from '@/shared/consts/apiServer.const';
import { IImagesComponent } from './Images.interface';

const Images = ({ images, setImages }: IImagesComponent) => {
	return (
		<div className="mb-3 grid grid-cols-3 gap-3">
			{images.map(image => (
				<div className="relative group overflow-hidden rounded-lg" key={image.id}>
					<button
						className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-red-500"
						onClick={async () => {
							setImages(images =>
								images.filter(a => !a.id.toString().includes(String(image.id)))
							);
							await photoService.deletePhoto(image.id);
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
							<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
						</svg>
					</button>
					<img
						src={`${apiServer}/${image.file}`}
						alt={image.name}
						className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			))}
		</div>
	);
};

export default Images;
