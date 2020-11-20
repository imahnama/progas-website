// Gatsby settings for the environment variables
require('dotenv').config();

const { API_KEY, APP_USERNAME } = process.env;

// Connect to AT API
const credentials = {
  apiKey: API_KEY,
  username: APP_USERNAME,
};
const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS;

// Our Netlify function
exports.handler = async (event, context) => {
  let response;
  let data = JSON.parse(event.body);
  let { phone } = data;
  let phoneArray = Array.from(phone);
  phoneArray[0] = '+254';
  const phoneNumber = phoneArray.join('');
  const options = {
    to: [`${phoneNumber}`],
    message:
      'Thank You! Our call center opens at 7am and a member of our team will be in touch within an hour of opening.',
  };

  try {
    response = await sms.send(options);
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
};
