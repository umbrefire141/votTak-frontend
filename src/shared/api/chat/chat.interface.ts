import { IChat } from '@/shared/types/Chat.interface';

export interface IChatService {
	createChat(data: IChatDto): Promise<void>;
	getChats(): Promise<IChat[]>;
	getChat(id: number): Promise<IChat>;
}

export interface IChatDto {
	name: string;
	receiver_uuids: string[];
	message: string;
}
