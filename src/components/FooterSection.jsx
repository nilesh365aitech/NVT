import logo from "../assets/nvtlogo.png"

export default function Footer() {
  return (
    <div style={{backgroundColor: "#26283B"}} className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1">
          <img className="h-20 -ml-10" src={logo} alt="Logo" />

            <p className="mb-2 text-sm">B-2, 2 Floor,</p>
            {/* <p className="mb-2 text-sm">Building, Address Line,</p> */}
            <p className="mb-6 text-sm ">Dogawan, Khargone</p>
            <p className="mb-2 text-sm">+91 6263573606</p>
            <p className="text-sm">+91 9753836623</p>
          </div>
          <div className="col-span-1  ml-8 mt-24">
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="">
              <li>
                <div href="#" className="hover:text-zinc-300 mb-4 ">
                  Services
                </div>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300 ">
                  Industries
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 ml-8 mt-24">
            <h3 className="font-semibold mb-4">Consulting</h3>
            <ul>
              <li>
                <div href="#" className="hover:text-zinc-300 mb-4">
                  Case Studies
                </div>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-300">
                  Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-red-700 mt-8 pt-8 text-sm">
          <div className="flex justify-between items-center">
            <p>All rights reserved.</p>
            <div>
              <a href="#" className="hover:text-zinc-300 mr-4">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-300">
                Cookie Policy
              </a>
            </div>
            <p>NVT Consulting 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
