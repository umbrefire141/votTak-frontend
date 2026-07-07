import postsService, { inputPostType } from '@/shared/api/posts.service';
import { Textarea } from '@/shared/ui/textarea';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Actions from './Actions/Actions';
import Images from './Images/Images';
import { IImageUrl } from './ImageUrl.interface';

const CreatePost = () => {
	const queryClient = useQueryClient();
	const [value, setValue] = useState('');
	const [isOpenedEmojiPanel, setIsOpenedEmojiPanel] = useState<boolean>(false);
	const [images, setImages] = useState<IImageUrl[]>([]);

	const mutation = useMutation({
		mutationFn: (newPost: inputPostType) => postsService.createPost(newPost),
		onSuccess: () => {
			queryClient.invalidateQueries('posts');
			setValue('');
			setImages([]);
		},
	});

	const submitData = () => {
		mutation.mutate({
			content: value,
			hidden: false,
			photoIds: images.map(({ id }) => id),
		});
	};

	return (
		<div className="mb-5 p-5 rounded-xl bg-card text-card-foreground border border-border/50 shadow-soft card-hover">
			<h3 className="text-lg font-bold mb-4 gradient-text">Create Post</h3>
			<Images images={images} setImages={setImages} />
			<Textarea
				placeholder="What's on your mind?"
				className="w-full min-h-[100px] mb-4 resize-none bg-muted/30 border-0 focus-visible:ring-1 focus-visible:ring-primary/20 rounded-lg"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<Actions
				isOpenedEmojiPanel={isOpenedEmojiPanel}
				mutation={mutation}
				setImages={setImages}
				setIsOpenedEmojiPanel={setIsOpenedEmojiPanel}
				setValue={setValue}
				submitData={submitData}
			/>
		</div>
	);
};

export default CreatePost;
