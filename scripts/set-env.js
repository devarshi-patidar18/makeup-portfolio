const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'environments', 'environment.ts');

const production = (process.env.PRODUCTION === 'true') || (process.env.CONTEXT === 'production') || false;

const content = `export const environment = {
  production: ${production},
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID || ''}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY || ''}',
  apiUrl: '${process.env.API_URL || ''}'
};
`;

fs.writeFileSync(targetPath, content, { encoding: 'utf8' });
console.log('Wrote environment to', targetPath);
