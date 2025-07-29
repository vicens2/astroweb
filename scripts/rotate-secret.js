// Utility script to generate a new secure middleware secret
// Run this script to generate a new secret and update your environment variables

function generateSecret() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const newSecret = generateSecret();
console.log('New middleware secret:');
console.log(`NETLIFY_MIDDLEWARE_SECRET=${newSecret}`);
console.log('\nPlease update your environment variables with this new secret.');
console.log('1. Add it to your local .env file');
console.log('2. Update it in your Netlify dashboard (Site settings > Build & deploy > Environment)');
console.log('3. If using CI/CD, update it in your deployment pipeline');
