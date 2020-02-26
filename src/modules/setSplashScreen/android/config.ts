const BASE = 900; // Deliberate size based on max iPhone height

const androidSplashImages = [
  {
    density: 'ldpi',
    size: {
      width:200, 
      height:320
    },
  },
  {
    density: 'mdpi',
    size: {
      width:320, 
      height:480
    },
  },
  {
    density: 'hdpi',
    size: {
      width:480, 
      height:720
    },
  },
  {
    density: 'xhdpi',
    size: {
      width:640, 
      height:960
    },
  },
  {
    density: 'xxhdpi',
    size: {
      width:960, 
      height:1440
    },
  },
  {
    density: 'xxxhdpi',
    size: {
      width:1280, 
      height:1960
    },
  },
];

export const config = {
  androidSplashImages,
};
