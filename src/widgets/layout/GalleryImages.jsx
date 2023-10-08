import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = Array.from({ length: 43 }, (_, i) => ({ url: `/img/finals/${i + 1}.JPG` }));


const MySlider = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderWidth = Math.min(0.8 * windowWidth, 1230);
  const sliderHeight = Math.min(0.5 * sliderWidth, 504);

  return (
    <SimpleImageSlider
      width={sliderWidth}
      height={sliderHeight}
      images={images}
      // showBullets={true}
      showNavs={true}
      slideDuration={0.5}
      autoPlay={true}
      autoPlayDelay={2}
    />
  );
}

export default MySlider;
