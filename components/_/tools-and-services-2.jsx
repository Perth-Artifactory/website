export default function ToolsandServices2() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-6 pb-0 text-maintext mb-5 sm:mb-10">
        <h3 className="text-center text-2xl mb-4 mt-6 mb-10 sm:text-3xl sm:mb-10 sm:mt-4 text-header">Upcoming Events</h3>
        {/* Donation List */}
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">

          {/* Lasers */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/tools/laser.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Laser Cutting</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                We have multiple industrial laser cutters and an easy to access training program that can get anyone cutting in a flash.
              </p>
            </a>
          </li>

          {/* 3D Printing */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/tools/3d.png" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">3D Printing</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Our DLP and FDM printers will print all the knick-knacks you could possibly want. Want to print things for tabletop games? They can do that too!
              </p>
            </a>
          </li>

          {/* Metal Working */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/tools/welding.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Metal Working</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                MIG/TIG/SMAW welding supplies, bridgeport mill, metal bandsaw, plasma cutter, forge, and foundry. If it's made for metal, we've got it.
              </p>
            </a>
          </li>


          {/* PentaNet */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/tools/soldering.png" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Electronics Lab</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Soldering and reflow equipment, multimeters, oscilloscopes, hand tools, power supplies, basic components, and more.
              </p>
            </a>
          </li>

          {/* LAN */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/tools/woodwork.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Wood Working</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                Tackle some bigger projects with a table saw, router table, CNC mill, band saw, or lathe. Plus all your hand power tools like drills, drivers, circular saws, trim router, and multitool.
              </p>
            </a>
          </li>

          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/tools/rehearsal.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Rehearsal Room</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                Treated room with PA and limited backline, great for rehearsals, practice, or recording music and podcasts. Suits up to a four/five piece. Rock out to your hearts content, day or night.
              </p>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}
