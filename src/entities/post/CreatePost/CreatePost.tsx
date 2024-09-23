import postsService, { inputPostType } from '@/shared/api/posts.service';
import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import AddImage from './AddImage/AddImage';
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
		},
	});

	const submitData = () => {
		mutation.mutate({ content: value, hidden: false });
	};

	return (
		<div className="mb-5 max-w-lg p-4 shadow-sm rounded-lg bg-card text-card-foreground border">
			<h3 className="text-xl font-bold mb-4">Create Post</h3>
			<Images images={images} setImages={setImages} />
			<Textarea
				placeholder="What's on your mind?"
				className="w-full h-24 mb-4"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<div className="flex justify-between items-center gap-5">
				<AddImage setImages={setImages} />
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setIsOpenedEmojiPanel(a => !a)}
				>
					<MdOutlineEmojiEmotions className="w-5 h-5 mr-2" />
					Emoji
				</Button>
				<Button
					className="flex w-full max-w-28 ml-auto"
					disabled={mutation.isLoading}
					onClick={submitData}
				>
					Post
				</Button>
			</div>
			<EmojiPicker
				open={isOpenedEmojiPanel}
				lazyLoadEmojis={true}
				onEmojiClick={value => {
					setValue(oldValue => oldValue + value.emoji);
				}}
			/>
		</div>
	);
};

export default CreatePost;
