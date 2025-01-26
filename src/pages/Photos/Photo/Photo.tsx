import photoService from '@/shared/api/photo.service';
import { apiServer } from '@/shared/consts/apiServer.const';
import { Button } from '@/shared/ui/button';
import { useQueryClient } from 'react-query';
import { IPhotoComponent } from './Photo.interface';

const Photo = ({ photo }: IPhotoComponent) => {
	const queryClient = useQueryClient();

	const removePhoto = async () => {
		await photoService.deletePhoto(photo.id);
		queryClient.invalidateQueries('photos');
	};

	return (
		<div key={photo.id} className="relative">
			<Button
				className="absolute top-2 right-1 w-2 h-3"
				variant="ghost"
				onClick={removePhoto}
			>
				X
			</Button>
			<img src={`${apiServer}/${photo.image}`} className="w-full h-full" />
		</div>
	);
};

export default Photo;
