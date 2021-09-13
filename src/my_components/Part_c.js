import React from 'react';

export const Part_c = () => {
	const section_two_sub_title = 'HOTEL BAYVIEW';
	const section_two_title = 'Relax in our Resort';
	const section_two_des = 'Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis.';
	const section_two_btn = 'ABOUT US';
	
	return(
            <section className="py-10 sm:py-20">
                <div className="container">
                    <div className="grid items-center gap-4 sm:grid-cols-2">
                        <div className="text-center md:px-10 pb-5 sm:py-10">
                            <h6 className="text-gray text-sm uppercase tracking-widest mb-4 sm:mb-7">{section_two_sub_title}</h6>
                            <h2 className="font-gilda text-8xl md:text-10xl text-dark mb-5 sm:mb-10 leading-none font-normal">{section_two_title}</h2>
                            <p className="text-sm text-gray mb-5 sm:mb-10 leading-loose tracking-wider">{section_two_des}</p>
                            <a href="#" className="btn btn-primary">{section_two_btn}</a>
                        </div>
                        <div>
                            <div className="w-3/4 ml-7 md:ml-14"><img src="./assets/img/hotel-img4.jpeg" alt="" /></div>
                            <div className="w-3/5 -mt-40 md:-mt-48 mr-0 ml-auto"><img src="./assets/img/hotel-img1.jpeg" alt="" /></div>
                            <div className="w-3/4 -mt-20 md:-mt-64"><img src="./assets/img/hotel-img3.jpeg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
		);
}