import dialogflow from 'dialogflow';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Dialogflow client with credentials from environment variables
const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

// Function to send a message to Dialogflow and get a response
export const sendMessageToDialogflow = async (message: string) => {
  // Generate a unique session ID
  const sessionId = uuidv4();
  const sessionPath = sessionClient.projectAgentSessionPath(
    process.env.DIALOGFLOW_PROJECT_ID as string,
    sessionId
  );

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
    const [response] = await sessionClient.detectIntent(request);
    const result = response.queryResult;
    return result?.fulfillmentText || 'No response from Dialogflow.';
  } catch (error) {
    console.error('Error communicating with Dialogflow:', error);
    return "Sorry, I couldn't process your request at the moment.";
  }
};
