import React from 'react';
import './datepicker.css';

class Part_b extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    check_in_title : 'CHECK-IN',
    check_out_title : 'CHECK-OUT',
    guests_out_title : 'GUESTS',
    check_month : 'Sep',
    form_btn : 'CHECK AVAILABILITY'
    };

}
render(){
    const formbg = {
      backgroundColor: "#000",
    };
    const title = {
      color: "red",
    };
    const countTitle = {
      color: "white",
    };
    const btn = {
      color: "white",
      backgroundColor: "blue",
    };
    const line = {
      borderColor: "#222",
    };
    return(
            <section>
                <div className="px-3 max-w-400 sm:max-w-770 relative z-10 mx-auto relative z-1 py-5 mt-0 sm:mb-20 sm:-mt-60">
                    <form className="sm:flex bg-white" action="http://localhost:3000/themes/hotel/wp/demo/hotel/search/" method="get"  style={formbg}>
                        <div className="grid sm:grid-cols-3 sm:w-3/4 p-4 sm:p-8">
                            <div className="text-center relative py-4 cursor-pointer sm:py-0" id="nd_booking_open_calendar_from">
                                <h6 className="text-gray text-12sm uppercase tracking-widest mb-1"  style={title}>{this.state.check_in_title}</h6>
                                <div className="flex justify-center items-center">
                                    <h2 className="text-8xl font-gilda text-dark leading-none font-semibold" style={countTitle}><span id="nd_booking_archive_form_date_range_from_picker"><span id="nd_booking_date_number_from_front">09</span></span></h2>
                                    <div className="text-center ml-3">
                                        <h6 id="nd_booking_date_month_from_front" className="text-gray font-gilda text-12sm tracking-wider leading-normal mb-2" style={countTitle}>{this.state.check_month}</h6>
                                        <span><img src="./assets/img/icon-down-arrow-grey.svg" alt="" width="12" className="mx-auto" /></span>
                                    </div>
                                </div>
                                  <input type="hidden" id="nd_booking_date_month_from" className="hidden nd_booking_section nd_booking_margin_top_20" />
                                <input type="hidden" id="nd_booking_date_number_from" className="hidden nd_booking_section nd_booking_margin_top_20" />
                                <input placeholder="Check In" className="hidden nd_booking_section nd_booking_border_width_0_important nd_booking_padding_0_important nd_booking_height_0_important" type="text" name="nd_booking_archive_form_date_range_from" id="nd_booking_archive_form_date_range_from" />
                            </div>
                            <div className="text-center relative py-4 cursor-pointer sm:py-0 sm:border-l-2 border-gray-100" id="nd_booking_open_calendar_to" style={line}>
                                <h6 className="text-gray text-12sm uppercase tracking-widest mb-1" style={title}>{this.state.check_out_title}</h6>
                                <div className="flex justify-center items-center">
                                    <h2 className="text-8xl font-gilda text-dark leading-none font-semibold" style={countTitle}><span id="nd_booking_date_number_to_front_picker"><span id="nd_booking_date_number_to_front">10</span></span></h2>
                                    <div className="text-center ml-3">
                                        <h6 id="nd_booking_date_month_to_front" className="text-gray font-gilda text-12sm tracking-wider leading-normal mb-2" style={countTitle}>{this.state.check_month}</h6>
                                        <span><img src="./assets/img/icon-down-arrow-grey.svg" alt="" width="12" className="mx-auto" /></span>
                                    </div>
                                </div>
                                <input type="hidden" id="nd_booking_date_month_to" className="hidden nd_booking_section nd_booking_margin_top_20" />
                                <input type="hidden" id="nd_booking_date_number_to" className="hidden nd_booking_section nd_booking_margin_top_20" />
                                <input placeholder="Check Out" className="hidden nd_booking_section nd_booking_border_width_0_important nd_booking_padding_0_important nd_booking_height_0_important" type="text" name="nd_booking_archive_form_date_range_to" id="nd_booking_archive_form_date_range_to"/>
                            </div>
                            <div className="text-center relative py-4 cursor-pointer sm:py-0 sm:border-l-2 border-gray-100" style={line}>
                                <h6 className="text-gray text-12sm uppercase tracking-widest mb-1" style={title}>{this.state.guests_out_title}</h6>
                                <div className="flex justify-center items-center">
                                    <h2 className="text-8xl font-gilda text-dark leading-none nd_booking_font_size_50 nd_booking_color_greydark nd_booking_guests_number nd_booking_font_weight_bold" style={countTitle}>1</h2>
                                    <div className="text-center ml-3">
                                        <span className="p-1 block nd_booking_section"><img src="./assets/img/icon-down-arrow-grey.svg" alt="" width="12" className="nd_booking_float_right nd_booking_guests_increase nd_booking_cursor_pointer mx-auto transform rotate-180" /></span>
                                        <span className="p-1 block nd_booking_section"><img src="./assets/img/icon-down-arrow-grey.svg" alt="" width="12" className="nd_booking_float_right nd_booking_guests_decrease nd_booking_cursor_pointer mx-auto" /></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="sm:w-3/12">
                            <button type="submit" className="w-full bg-dark h-full py-10 sm:py-5 px-10 text-center font-normal text-white btn text-12sm" style={btn}>{this.state.form_btn}</button>
                        </div>

                        
                    </form>
                </div>
            </section>
        );
}
}


export default Part_b;