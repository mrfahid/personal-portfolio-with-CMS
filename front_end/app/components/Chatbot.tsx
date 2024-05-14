import dialogflow from 'dialogflow'

// Initialize Dialogflow client
const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    client_email: 'YOUR_CLIENT_EMAIL',
    private_key: 'YOUR_PRIVATE_KEY',
  },
});
const sessionPath = sessionClient.sessionPath('YOUR_PROJECT_ID', 'SESSION_ID');

// Function to send a message to Dialogflow and get a response
export const sendMessageToDialogflow = async (message: string) => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  } catch (error) {
    console.error('Error communicating with Dialogflow:', error);
    return 'Sorry, I couldn\'t process your request at the moment.';
  }
};
