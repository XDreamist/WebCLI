import * as chat from '@botpress/chat'

export default class Bot {
	constructor() {
		const webhookId = 'cff0689d-cfcf-4ff4-afcc-0020ab5eee5c';
		if (!webhookId) {
			throw new Error('WEBHOOK_ID is required');
		}

		this.apiUrl = `https://chat.botpress.cloud/${webhookId}`;

		this.initClient();
	}

	async initClient() {
		try {
			this.client = await chat.Client.connect({ apiUrl: this.apiUrl });
		}
		catch (error) {
			console.error('Error initializing client:', error);
		}
	}

	async sendMessage(userMessage) {
		try {
			if (!this.client) {
				throw new Error('Client is not initialized');
			}

			const { conversation } = await this.client.createConversation({});
			console.log('Conversation created:', conversation);

			await this.client.createMessage({
				conversationId: conversation.id,
				payload: {
					type: 'text',
					text: userMessage,
				},
			});
			console.log('Message sent:', userMessage);

			await new Promise((resolve) => setTimeout(resolve, 2000));

			const { messages } = await this.client.listConversationMessages({
				id: conversation.id,
			});
			console.log('Messages received:', messages);

			const sortedMessages = messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
			console.log('Sorted messages:', sortedMessages);

			if (sortedMessages.length < 2) {
				console.warn('Not enough messages received');
				return null;
			}

			const botResponse = sortedMessages[1];
			if (botResponse && botResponse.payload) {
				console.log("Bot's response:", botResponse.payload);
				return botResponse.payload.text;
			} else {
				console.warn('Bot response or payload is undefined');
				return null;
			}
		} catch (error) {
			console.error('Error sending message:', error);
			return null;
		}
	}
}