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
		<div className="space-y-5">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold gradient-text">Photos</h2>
				<AddImage />
			</div>
			{photos && photos.length > 0 ? (
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
					{photos.map(photo => <Photo key={photo.id} photo={photo} />)}
				</div>
			) : (
				<div className="text-center py-16 text-muted-foreground">
					<p className="text-lg font-medium">No photos yet</p>
					<p className="text-sm mt-1">Upload your first photo to get started</p>
				</div>
			)}
		</div>
	);
}
