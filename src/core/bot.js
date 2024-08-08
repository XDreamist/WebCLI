import * as chat from '@botpress/chat'

const main = async () => {
  
  const webhookId = 'cff0689d-cfcf-4ff4-afcc-0020ab5eee5c'
  if (!webhookId) {
    throw new Error('WEBHOOK_ID is required')
  }

  const apiUrl = `https://chat.botpress.cloud/${webhookId}`

  // 0. connect and create a user
  const client = await chat.Client.connect({ apiUrl })

  // 1. create a conversation
  const { conversation } = await client.createConversation({})

  // 2. send a message
  await client.createMessage({
    conversationId: conversation.id,
    payload: {
      type: 'text',
      text: 'Who are you',
    },
  })

  // 3. sleep for a bit
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // 4. list messages
  const { messages } = await client.listConversationMessages({
    id: conversation.id,
  })

  // Sort messages by createdAt
  const sortedMessages = messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

  // console.log(sortedMessages)
  const botResponse = sortedMessages[1]
  console.log("Bot's response:", botResponse.payload)
}

void main()
  .then(() => {
    console.log('done')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })