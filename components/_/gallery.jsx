export default function Gallery() {
  return (
    <>
      {/* Container */}
      <div className="flex flex-col align-center mb-2 sm:mb-20 bg-primary-1 p-6">
        {/* Image Container */}
        <div className="block w-100 mb-2 sm:mb-20">
          <img
            className="border-2 border-highlight-1 mx-auto sm:border-3 md:border-4 lg:border-5"
            src="https://via.placeholder.com/640x480"
            alt="Gallery Image"
            id="gallery-large-image"
          />
        </div>
        {/* Mini Image Container */}
        <div className="block w-100">
          {/* Image List */}
          <ul className="flex flex-wrap">
            <li className="block w-1/2 p-2 md:w-1/3">
              {/* Image */}
              <img
                className="block w-100 h-auto cursor-pointer "
                src="https://via.placeholder.com/640x480/123456"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-2 md:w-1/3">
              <img
                className="block w-100 h-auto cursor-pointer "
                src="https://via.placeholder.com/640x480/234561"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-2 md:w-1/3">
              <img
                className="block w-100 h-auto cursor-pointer "
                src="https://via.placeholder.com/640x480/345612"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-2 md:w-1/3">
              <img
                className="block w-100 h-auto cursor-pointer "
                src="https://via.placeholder.com/640x480/456123"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-2 md:w-1/3">
              <img
                className="block w-100 h-auto cursor-pointer "
                src="https://via.placeholder.com/640x480/561234"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-2 md:w-1/3">
              <img
                className="block w-100 h-auto cursor-pointer "
                src="https://via.placeholder.com/640x480/612345"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function alternateImage(e) {
  document.getElementById('gallery-large-image').src = e.src;
}
