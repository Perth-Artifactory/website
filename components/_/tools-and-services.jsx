export default function ToolsAndServices() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-3 sm:p-4 text-maintext mb-5 sm:mb-10">
        <h3 className="text-center text-2xl sm:text-3xl mb-4 sm:mb-10 sm:mt-4 text-header">Tools and Services</h3>
        {/* Donation List */}
        <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">

          {/* Laser Cutting */}
          <li className="block border-2 border-secondary-2 max-w-lg p-4 mb-4 sm:flex-1/3 mx-2">
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center text-highlight-1">Laser Cutting</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              We have multiple industrial laser cutters and an easy to access training program that can get anyone
              cutting in a flash.
            </p>
          </li>

          {/* Electronics */}
          <li className="block border-2 border-secondary-2 max-w-lg p-4 mb-4 sm:flex-1/3 mx-2">
              {/* Donation Title */}
            <span className="block w-100 mb-4 text-center text-highlight-1">Electronics Lab</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              Soldering equipment, components, oscilloscopes, power supplies, lab equipment - we've got it all.
            </p>
          </li>

          {/* Metal Working */}
          <li className="block border-2 border-secondary-2 max-w-lg p-4 mb-4 sm:flex-1/3 mx-2">
              {/* Donation Title */}
            <span className="block w-100 mb-4 text-center text-highlight-1">Metal Working</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              MIG/TIG/SMAW welding supplies, plasma cutter, forge, and foundry. If it gets metal hot, we've got it.
            </p>
          </li>

          {/* Wood Working */}
          <li className="block border-2 border-secondary-2 max-w-lg p-4 mb-4 sm:flex-1/3 mx-2">
              {/* Donation Title */}
            <span className="block w-100 mb-4 text-center text-highlight-1">Wood Working</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              Table saw, router table, CNC mill, band saw, and lathe. Heavy machines for your next project.
            </p>
          </li>

          {/* 3D Printing */}
          <li className="block border-2 border-secondary-2 max-w-lg p-4 mb-4 sm:flex-1/3 mx-2">
            {/* Donation Title */}
            <span className="block w-100 mb-4 text-center text-highlight-1">3D Printing</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">
              Our DLP and FDM printers will print all the knick-knacks you could possibly want. Want to print things for tabletop games? They can do that too!
            </p>
          </li>

          {/* Rehearsal Space */}
          <li className="block border-2 border-secondary-2 max-w-lg p-4 mb-4 sm:flex-1/3 mx-2">
              {/* Donation Title */}
            <span className="block w-100 mb-4 text-center text-highlight-1">Rehearsal Space</span>
            {/* Donation Description */}
            <p className="block w-100 text-center text-sm">Rock out to your hearts content, day or night. Treated room with PA to suit up to a four piece.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
