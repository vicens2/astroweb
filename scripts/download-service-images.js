const fs = require('fs');
const path = require('path');
const https = require('https');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images/servicios');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Service images to download (using placeholder URLs - replace with your actual image URLs)
const images = [
  {
    name: 'boda.jpg',
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'empresarial.jpg',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'eventos.jpg',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'sesiones.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }
];

// Function to download an image
function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, image.name);
    const file = fs.createWriteStream(filePath);
    
    https.get(image.url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${image.name}`);
        resolve();
      });
    }).on('error', error => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${image.name}:`, error.message);
      reject(error);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  try {
    for (const image of images) {
      await downloadImage(image);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Run the download
downloadAllImages();
