import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Function to request fullscreen
const requestFullscreen = () => {
  const element = document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

// Request fullscreen when the page loads
window.addEventListener('load', () => {
  // Small delay to ensure page is fully loaded
  setTimeout(() => {
    requestFullscreen();
  }, 100);
});

// Also try to go fullscreen on first user interaction if it failed initially
let hasTriedFullscreen = false;
const tryFullscreenOnInteraction = () => {
  if (!hasTriedFullscreen && !document.fullscreenElement) {
    hasTriedFullscreen = true;
    requestFullscreen();
  }
};

document.addEventListener('click', tryFullscreenOnInteraction);
document.addEventListener('keydown', tryFullscreenOnInteraction);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
