import React from 'react';


export const Part_a = () => {
	const Hero_title_line_one = 'ENJOY A LUXURY';
	const Hero_title_line_two = 'EXPERIENCE';
	const Hero_sub_title = 'LUXURY HOTEL & BEST RESORT';
	const Hero_btn = 'ROOMS E SUITES';
	return(
		
            <section className="home-hiro-slider relative pt-14 pb-14 sm:pt-28 sm:pb-80">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="swiper mySwiper h-full">
                        <div className="swiper-wrapper h-full">
                            <div className="swiper-slide h-full">
                                <div className="px-3 bg-center h-full relative bg-no-repeat bg-cover py-28 text-center" style={{ background: 'url(/assets/img/hero-img1.jpg)' }}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-dark opacity-30 z-0"></div>
                                </div>
                            </div>
                            <div className="swiper-slide h-full">
                                <div className="px-3 bg-center h-full relative bg-no-repeat bg-cover py-28 text-center" style={{ background: 'url(/assets/img/hotel-img4.jpeg)' }}>
                                    <div className="w-full h-full absolute top-0 left-0 bg-dark opacity-30 z-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="px-3 relative text-center">
                            <div className="relative z-1 mb-5 sm:mb-10">
                                <h6 className="text-white text-12sm uppercase tracking-widest">{Hero_sub_title} </h6>
                                <div className="w-30px bg-white block mt-4 sm:mt-7 mb-5 sm:mb-10 mx-auto h-h1px"></div>
                                <h1 className="font-gilda text-4xl sm:text-8xl md:text-9xl text-white uppercase mb-7 leading-tight font-semibold">{Hero_title_line_one}<br/> {Hero_title_line_two}</h1>
                                <a href="#" className="btn border-2 border-white text-white hover:bg-white hover:text-dark">{Hero_btn}</a>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="px-3 relative text-center">
                            <div className="relative z-1 sm:mb-10">
                                <h6 className="text-white text-12sm uppercase tracking-widest">{Hero_sub_title} </h6>
                                <div className="w-30px bg-white block mt-4 sm:mt-7 mb-5 sm:mb-10 mx-auto h-h1px"></div>
                                <h1 className="font-gilda text-4xl sm:text-8xl md:text-9xl text-white uppercase mb-7 leading-tight font-semibold">{Hero_title_line_one}<br/> {Hero_title_line_two}</h1>
                                <a href="#" className="btn border-2 border-white text-white hover:bg-white hover:text-dark">{Hero_btn}</a>
                            </div>
                        </div>
                    </div>
                  </div>
                  
                </div>
            <div className="swiper-pagination mb-3"></div>
        </section>

	);
}