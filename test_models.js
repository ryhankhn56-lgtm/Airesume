import fs from 'fs';
const env = fs.readFileSync('.env', 'utf8');
const key = env.match(/VITE_GEMINI_API_KEY=(.*)/)[1].trim();

fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + key)
  .then(r => r.json())
  .then(d => {
    fs.writeFileSync('models_output.json', JSON.stringify(d, null, 2));
    console.log("Done");
  });
