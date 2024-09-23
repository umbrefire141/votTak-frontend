import { IChat } from '@/shared/types/Chat.interface';
import axios from '@/shared/utils/axios';
import { IChatDto, IChatService } from './chat.interface';

export const CHAT = 'chat';

class ChatService implements IChatService {
	async createChat(data: IChatDto): Promise<void> {
		await axios.post(`${CHAT}`, data);
	}

	async getChats(): Promise<IChat[]> {
		const { data } = await axios.get(`${CHAT}`);
		return data;
	}

	async getChat(id: number): Promise<IChat> {
		const { data } = await axios.get(`${CHAT}/${id}`);
		return data;
	}
}

export default new ChatService();
