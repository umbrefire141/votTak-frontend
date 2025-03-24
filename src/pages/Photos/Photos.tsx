import photoService from '@/shared/api/photo.service';
import { useQuery } from 'react-query';
import AddImage from './AddImage/AddImage';
import Photo from './Photo/Photo';

export default function PhotosPage() {
	const { data: photos } = useQuery({
		queryFn: () => photoService.getPhotos(),
		queryKey: ['photos'],
	});

	return (
		<div>
			<div className="mb-3">
				<AddImage />
			</div>
			<div className="grid grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{photos ? (
					photos.map(photo => <Photo key={photo.id} photo={photo} />)
				) : (
					<div>No photos</div>
				)}
			</div>
		</div>
	);
}
