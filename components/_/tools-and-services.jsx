export default function ToolsAndServices() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-3 sm:p-6 text-white mb-2 sm:mb-20">
        <h3 className="text-center text-2xl sm:text-3xl mb-4 sm:mb-10 sm:mt-4">Tools and Services</h3>
        {/* Donation List */}
        <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 max-w-xs p-6 mb-4 sm:flex-1/2 mx-2">
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center">Laser Cutting</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              We have multiple industrial laser cutters and an easy to access training program that can get anyone
              cutting in a flash.
            </p>
          </li>

          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 max-w-xs p-6 mb-4 sm:flex-1/2 mx-2">
            <span></span>
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center">Electronics</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              Soldering equipment, components, oscilloscopes, power supplies, lab equipment - we've got it all.
            </p>
          </li>

          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 max-w-xs p-6 mb-4 sm:flex-1/2 mx-2">
            <span></span>
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center">Hot Works</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              MIG/TIG/SMAW welding supplies, plasma cutting, and forging. If it gets metal hot, we've got it.
            </p>
          </li>

          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 max-w-xs p-6 mb-4 sm:flex-1/2 mx-2">
            <span></span>
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center">Wood Working</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              Table saw, router table, CNC mill, band saw, and lathe. Heavy machines for your next project.
            </p>
          </li>

          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 max-w-xs p-6 mb-4 sm:flex-1/2 mx-2">
            <span></span>
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center">3D Printing</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              Our DLP and FDM printers will print all the knicknacks you could possibly want.
            </p>
          </li>

          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 max-w-xs p-6 mb-4 sm:flex-1/2 mx-2">
            <span></span>
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center">Rehearsal Space</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">Rock out to your hearts content, day or night.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
