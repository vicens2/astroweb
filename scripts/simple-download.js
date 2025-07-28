const https = require('https');
const fs = require('fs');
const path = require('path');

// Ensure the servicios directory exists
const dir = path.join(__dirname, '../public/images/servicios');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Image URLs and their corresponding filenames
const images = [
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    filename: 'boda.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    filename: 'empresarial.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    filename: 'eventos.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    filename: 'sesiones.jpg'
  }
];

// Function to download a single image
function downloadImage(url, filename) {
  const file = fs.createWriteStream(path.join(dir, filename));
  
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });  
  }).on('error', (err) => {
    fs.unlink(filename);
    console.error(`Error downloading ${filename}:`, err.message);
  });
}

// Download all images
images.forEach(img => {
  console.log(`Starting download of ${img.filename}...`);
  downloadImage(img.url, img.filename);
});

console.log('All downloads started in the background. Check the directory for downloaded files.');
