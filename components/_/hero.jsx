import ButtonBlock1 from './button-block-1';
import ButtonBlock2 from './button-block-2';

export default function Hero() {
  return (
    <>
      {/* Container */}
      <div>
        {/* Image Container */}
        <div className="block bg-primary-1 p-6 text-white mb-2 sm:mb-20">
          {/* Image */}
          <img className="block w-full h-auto" src="assets/site/gallery/20190616_121402-hero.jpg" alt="" />
        </div>
        {/* Call to Actions */}
        <div>
          <ButtonBlock1 groupedBelow={true} />
          <ButtonBlock2 />
        </div>
      </div>
    </>
  );
}
