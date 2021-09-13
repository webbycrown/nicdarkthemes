import React from 'react';

export const Header = () => {
	return(
      <header className="w-full z-40 py-3 md:py-6 bg-dark z-10 relative z-10">
            <div className="container sm:flex justify-between ">
                <div className="w-full sm:w-auto flex items-center relative z-10 justify-between">
                    <a href="index.html" className="mr-3 md:max-w-auto sm:mr-0 hover:opacity-80">
                        <img src="./assets/img/hotel-logo.png" alt="Logo" width="170" />
                    </a>
                    <a href="#" className="sm:hidden toggle-menu bg-blue-500 rounded-full py-2 px-3 w-12 h-12 hover:text-white">
                        <span className="w-100 block bg-white h-h3 my-1 transition-all transform"></span>
                        <span className="w-100 block bg-white h-h3 my-1 transition-all transform"></span>
                        <span className="w-100 block bg-white h-h3 my-1 transition-all transform"></span>
                    </a>
                </div>
                <div className="main-menu hidden sm:flex pt-pt80 z-1 px-7 py-5 sm:px-0 sm:pt-0 sm:py-0 items-center z-9 absolute top-0 left-0 w-full bg-dark   sm:bg-transparent mh:h-auto sm:w-auto sm:static">
                    <div className="h-full sm:h-auto flex items-center sm:justify-center sm:block">
                        <ul className="items-center font-roboto font-light tracking-wider text-sm text-gray leading-none justify-end block sm:flex">
                            <li className="relative py-3 sm:p-0 active"><a href="#" className="border-b-2 border-gray py-2 text-white hover:text-white">Home</a></li>
                            <li className="relative py-3 sm:p-0 sm:ml-6 md:ml-12"><a href="#" className="border-b-2 border-transparent py-2 hover:text-white">Rooms </a></li>
                            <li className="relative py-3 sm:p-0 sm:ml-6 md:ml-12"><a href="#" className="border-b-2 border-transparent py-2 hover:text-white">About Us</a></li>
                            <li className="relative py-3 sm:p-0 sm:ml-6 md:ml-12"><a href="#" className="border-b-2 border-transparent py-2 hover:text-white">Pages</a></li>
                            <li className="relative py-3 sm:p-0 sm:ml-6 md:ml-12"><a href="#" className="border-b-2 border-transparent py-2 hover:text-white">News</a></li>
                            <li className="relative py-3 sm:p-0 sm:ml-6 md:ml-12"><a href="#" className="border-b-2 border-transparent py-2 hover:text-white">Contact</a></li>
                            <li className="relative py-3 sm:p-0 sm:ml-6 md:ml-12"><a href="#" className="btn btn-primary px-5 py-2 bg-white text-dark hover:bg-theme">Book Now</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
	);
}