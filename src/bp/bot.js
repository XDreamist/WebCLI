import { Client } from '@botpress/chat'

const myWebhookId = 'cff0689d-cfcf-4ff4-afcc-0020ab5eee5c'
const userKey = 'my-user-key

const client = new Client({
  apiUrl: `https://chat.botpress.cloud/${myWebhookId}`,
  headers: {
    'x-user-key': userKey
  }
})

void client.listConversationMessages({}).then(({ messages }) => {
    console.log('Received messages:', messages);
});