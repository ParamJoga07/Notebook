import notesbg from './images/notesbg.png'
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
       <div>
 <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
  <div className="flex items-center space-x-1 flex-shrink-0 text-white mr-6">
   <img src={notesbg} className="h-12 w-16 mr-4 mt-2 "alt="" />
   <span className="block mt-2 font-bold text-2xl font-serif cursor-pointer lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-4">NoteBook</span>
  </div>
  <div className="w-full block flex-grow  lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-2 font-bold text-xl font-serif lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
        Home
      </Link>
      <Link to="/about" className="block mt-2 font-bold text-xl font-serif lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
        About
      </Link>
      <Link to="#responsive-header" className="block mt-2 text-xl font-bold font-serif lg:inline-block lg:mt-0 text-teal-100 hover:text-white">
        Blog
      </Link>
    </div>
    <div>
        <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-white rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 r-5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-serif " placeholder="Search" />
    </div>
    <div>
      <Link to="/" className="inline-block text-sm ml-2 px-4 py-2.5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-teal-600 mt-1 font-serif lg:mt-0">Search</Link>
    </div>
    
  </div>
</nav>
<svg id="wave" style={{"transform":"rotate(180deg)","transition":"0.3s"}} version="1.1" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
			<stop offset="0%" stopColor="rgba(28.539, 180.168, 165.526, 1)"/>
			<stop offset="100%" stopColor="rgba(16.692, 173.338, 156.145, 1)"/>
		</linearGradient>
	</defs>
	<path style={{"transform":"translate(0, 0px)","opacity":"1"}} d="M0,90L48,85C96,80,192,70,288,63.3C384,57,480,53,576,45C672,37,768,23,864,28.3C960,33,1056,57,1152,65C1248,73,1344,67,1440,61.7C1536,57,1632,53,1728,43.3C1824,33,1920,17,2016,11.7C2112,7,2208,13,2304,28.3C2400,43,2496,67,2592,71.7C2688,77,2784,63,2880,53.3C2976,43,3072,37,3168,31.7C3264,27,3360,23,3456,31.7C3552,40,3648,60,3744,70C3840,80,3936,80,4032,66.7C4128,53,4224,27,4320,20C4416,13,4512,27,4608,33.3C4704,40,4800,40,4896,48.3C4992,57,5088,73,5184,66.7C5280,60,5376,30,5472,16.7C5568,3,5664,7,5760,21.7C5856,37,5952,63,6048,70C6144,77,6240,63,6336,55C6432,47,6528,43,6624,50C6720,57,6816,73,6864,81.7L6912,90L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" fill="url(#sw-gradient-0)"/>
</svg>


       </div>
    )
}

export default NavBar