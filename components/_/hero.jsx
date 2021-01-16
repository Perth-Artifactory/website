import ButtonBlock1 from './button-block-1';
import ButtonBlock2 from './button-block-2';

export default function Hero() {
  return (
    <>
      {/* Container */}
      <div>
        {/* Image Container */}
        <div className="block bg-primary-1 p-4 text-white mb-2 sm:mb-4">
          {/* Image */}
          <img className="block w-full h-auto" src="https://via.placeholder.com/640x480" alt="" />
        </div>
        {/* Call to Actions */}
        <div>
          <ButtonBlock1 />
          <ButtonBlock2 />
        </div>
      </div>
    </>
  );
}
