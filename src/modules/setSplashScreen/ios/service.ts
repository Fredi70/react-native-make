import { addIosImageSetContents, EImageSetType } from '../../../services/ios/service';
import { generateResizedAssets } from '../../../services/image.processing';
import { config } from './config';
import { EResizeMode } from '../../../services/type';

export const addIosSplashScreen = async (
  imageSource: string,
  backgroundColor: string,
  resizeMode?: EResizeMode
) => {
  try {
    const iosSplashImageFolder = addIosImageSetContents('LaunchImage', EImageSetType.LAUNCH_IMAGE);
    await generateIosSplashImages(imageSource, iosSplashImageFolder);
  } catch (err) {
    console.log(err);
  }
};

const generateIosSplashImages = (imageSource: string, iosSplashImageFolder: string) => {
  return Promise.all(
    config.iosSplashImage.map(({size, device})=>generateResizedAssets(
      imageSource,
      `${iosSplashImageFolder}/splash@${device}.png`,
      size.width,
      size.height,
      {
        fit: 'fill',
      }
    ))
  );
};
