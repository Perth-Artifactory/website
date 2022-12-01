import ButtonBlock1 from './button-block-1';
import ButtonBlock2 from './button-block-2';

export default function Hero() {
  return (
    <>
      {/* Container */}
      <div>
        {/* Call to Actions */}
        <div>
          <ButtonBlock1 groupedBelow={true} />
          <ButtonBlock2 />
        </div>
      </div>
    </>
  );
}
