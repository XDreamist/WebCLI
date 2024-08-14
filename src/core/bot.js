import * as chat from '@botpress/chat'

export default class Bot {
	constructor() {
		const webhookId = 'cff0689d-cfcf-4ff4-afcc-0020ab5eee5c';
		if (!webhookId) {
			throw new Error('WEBHOOK_ID is required');
		}

		this.apiUrl = `https://chat.botpress.cloud/${webhookId}`;
		this.messageCount = -1;

		this.botId = "user_01J4RY1H7KP46FCPCBN2CC1QHR";
		this.botMessages = [];

		this.initConversation();
	}

	async initConversation() {
		try {
			this.client = await chat.Client.connect({ apiUrl: this.apiUrl });

			if (!this.client) {
				throw new Error('Client is not initialized');
			}

			const { conversation } = await this.client.createConversation({});
			this.conversation = conversation;
		}
		catch (error) {
			console.error('Error initializing client:', error);
		}
	}

	async sendMessage(userMessage) {
		try {
			if (!this.conversation) {
				throw new Error('No conversation started !');
			}

			await this.client.createMessage({
				conversationId: this.conversation.id,
				payload: {
					type: 'text',
					text: userMessage,
				},
			});
			this.messageCount++;
			console.log('Message sent:', userMessage);

			return await this.receiveLatestMessage();

		} catch (error) {
			console.error('Error sending message:', error);
			return null;
		}
	}

	async receiveLatestMessage() {
		try {
			const pollInterval = 1000;
			const timeout = 30000;
			const startTime = Date.now();

			while (Date.now() - startTime < timeout) {
				const { messages } = await this.client.listConversationMessages({
					id: this.conversation.id,
				});

				const sortedMessages = messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
				this.botMessages = [];

				for (let msg in sortedMessages) {
					if (sortedMessages[msg].userId === this.botId) {
						this.botMessages.push(sortedMessages[msg]);
					}
				}

				if (this.botMessages.length > this.messageCount) {
					const botResponse = this.botMessages[this.botMessages.length - 1];

					if (botResponse?.payload) {
						console.log("Sorted messages:", sortedMessages);
						console.log("Bot's messages:", this.botMessages);
						console.log("Bot's response:", botResponse.payload);
						if (! botResponse.payload.text.startsWith("Hey! Let me find some information about")) return botResponse.payload.text;
					}
					else {
						console.warn('Bot response or payload is undefined');
						return null;
					}
				}

				await new Promise((resolve) => setTimeout(resolve, pollInterval));
			}

			console.warn('Timed out waiting for new message');
			return null;

		} catch (error) {
			console.error('Error receiving message:', error);
			return null;
		}
	}
}