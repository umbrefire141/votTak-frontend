import { apiServer } from '@/shared/consts/apiServer.const';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Link } from 'react-router-dom';
import { IPhotosComponent } from './Photos.interface';

const Photos = ({ photos }: IPhotosComponent) => {
	return (
		<Card className="card-hover">
			<CardHeader className="pb-3">
				<CardTitle className="text-base font-semibold">Photos</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-2">
				{photos.length > 0 ? (
					photos.slice(0, 4).map(photo => (
						<div key={photo.id} className="overflow-hidden rounded-lg">
							<img
								src={`${apiServer}/${photo.image}`}
								alt=""
								className="w-full h-24 object-cover transition-transform duration-300 hover:scale-110"
							/>
						</div>
					))
				) : (
					<div className="text-center w-full col-span-2 text-sm text-muted-foreground py-4">
						No photos yet
					</div>
				)}
				{photos.length > 4 && (
					<Link to="/photos" className="col-span-2">
						<Button variant="ghost" size="sm" className="w-full text-muted-foreground">
							See all photos
						</Button>
					</Link>
				)}
			</CardContent>
		</Card>
	);
};

export default Photos;
