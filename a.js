
const axios = require('axios');

const url = 'https://techniosys-iiitdwd.vercel.app/';

async function checkWebsite() {
  const start = Date.now();

  try {
    const response = await axios.get(url, {
      timeout: 10000,
      validateStatus: () => true
    });

    console.log(
      `[${new Date().toLocaleTimeString()}]`,
      `HTTP ${response.status}`,
      `Response time: ${Date.now() - start} ms`
    );
  } catch (error) {
    console.log(
      `[${new Date().toLocaleTimeString()}]`,
      'Request failed:',
      error.code || error.message
    );
  }
}

async function main() {
  while (true) {
    await checkWebsite();
    await new Promise(resolve => setTimeout(resolve, 1));
  }
}

main();
