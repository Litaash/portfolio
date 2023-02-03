import { useEffect } from "react";

export default function PixelBackground() {
  useEffect(() => {
    const pixel = document.querySelectorAll<HTMLElement>('.pixel');;

    for (let i = 0; i < pixel.length; i++) {
      pixel[i].style.animationDelay = Math.ceil(Math.random()*30000)+'ms';
    }
  }, []);

  return (
    <>
      <div className='pixel-background'>
        <div className='pixel-background__wrapper'>
          {Array(60)
            .fill('pixel')
            .map((element, i) => (
              <div className='pixel' key={i} />
            ))}
        </div>
      </div>
    </>
  );
}
