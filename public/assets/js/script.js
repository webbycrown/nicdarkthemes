
(function ($) {
    nicdarkthemes = {
        init: function() {

            this.all_slider();
            this.general_open();
            

        },

        all_slider: function() {
            console.log('test');
            setTimeout(function(){
                var swiper = new Swiper(".home-hiro-slider .mySwiper", {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    speed: 1500,
                    effect: "fade",
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                });
                var swiper2 = new Swiper(".home-hiro-slider .mySwiper2", {
                    spaceBetween: 0,
                //direction: "vertical",
                //effect: "fade",
                speed: 1500,
                pagination: {
                  el: ".home-hiro-slider .swiper-pagination",
                  clickable: true,
              },
              thumbs: {
                  swiper: swiper,
              },
          });


                $("#nd_booking_open_calendar_from").click(function () {
                    $("#nd_booking_archive_form_date_range_from_picker  .ui-datepicker-inline").attr("style", 'display:block !important' );
                    $("#nd_booking_date_number_to_front_picker .ui-datepicker-inline").attr("style", 'display:none !important' );
                });
                $("#nd_booking_open_calendar_to").click(function () {
                    $("#nd_booking_date_number_to_front_picker .ui-datepicker-inline").attr("style", 'display:block !important' );
                    $("#nd_booking_archive_form_date_range_from_picker  .ui-datepicker-inline").attr("style", 'display:none !important' );
                });
                $( "#nd_booking_archive_form_date_range_from_picker" ).datepicker({
                  defaultDate: "+1w",
                  minDate: 0,                 
                  altField: "#nd_booking_date_month_from",
                  altFormat: "M",
                  firstDay: 0,
                  dateFormat: "mm/dd/yy",
                  monthNames: ["January","February","March","April","May","June", "July","August","September","October","November","December"],
                  monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                  dayNamesMin: ["SU","MO","TU","WE","TH","FR", "SA"],
                  nextText: "NEXT",
                  prevText: "PREV",
                  changeMonth: false,
                  numberOfMonths: 1,
                  onSelect: function() {                              
                    var minDate = $(this).datepicker("getDate");
                    var newMin = new Date(minDate.setDate(minDate.getDate() + 1));
                    $( "#nd_booking_date_number_to_front_picker" ).datepicker( "option", "minDate", newMin );
                    $("#nd_booking_archive_form_date_range_from_picker  .ui-datepicker-inline").attr("style", 'display:none !important' );
                    var nd_booking_input_date_from = $( "#nd_booking_archive_form_date_range_from_picker" ).val();

                    var nd_booking_date_number_from = nd_booking_input_date_from.substring(3, 5);

                    $( "#nd_booking_date_number_from" ).val(nd_booking_date_number_from);

                    var nd_booking_input_date_to = $( "#nd_booking_date_number_to_front_picker" ).val();                    
                    var nd_booking_date_number_to = nd_booking_input_date_to.substring(3, 5);

                    $( "#nd_booking_date_number_to" ).val(nd_booking_date_number_to);

                    $( "#nd_booking_date_number_from_front" ).text(nd_booking_date_number_from);
                    var nd_booking_date_month_from = $( "#nd_booking_date_month_from" ).val();
                    $( "#nd_booking_date_month_from_front" ).text(nd_booking_date_month_from);                    
                    $( "#nd_booking_date_number_to_front" ).text(nd_booking_date_number_to);
                    var nd_booking_date_month_to = $( "#nd_booking_date_month_to" ).val();
                    $( "#nd_booking_date_month_to_front" ).text(nd_booking_date_month_to);

                }
            });

                $( "#nd_booking_date_number_to_front_picker" ).datepicker({
                  defaultDate: "+1w",
                  altField: "#nd_booking_date_month_to",
                  altFormat: "M",
                  minDate: "+1d",
                  monthNames: ["January","February","March","April","May","June", "July","August","September","October","November","December"],
                  monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                  dayNamesMin: ["SU","MO","TU","WE","TH","FR", "SA"],
                  nextText: "NEXT",
                  prevText: "PREV",
                  changeMonth: false,
                  firstDay: 0,
                  dateFormat: "mm/dd/yy",
                  numberOfMonths: 1,
                  onSelect: function() {   

                    var nd_booking_input_date_from = $( "#nd_booking_archive_form_date_range_from_picker" ).val();

                    var nd_booking_date_number_from = nd_booking_input_date_from.substring(3, 5);
                    $( "#nd_booking_date_number_from" ).val(nd_booking_date_number_from);
                    var nd_booking_input_date_to = $( "#nd_booking_date_number_to_front_picker" ).val();
                    var nd_booking_date_number_to = nd_booking_input_date_to.substring(3, 5);

                    $( "#nd_booking_date_number_to" ).val(nd_booking_date_number_to);
                    $("#nd_booking_date_number_to_front_picker .ui-datepicker-inline").attr("style", 'display:none !important' );
                    $( "#nd_booking_date_number_from_front" ).text(nd_booking_date_number_from);
                    var nd_booking_date_month_from = $( "#nd_booking_date_month_from" ).val();
                    $( "#nd_booking_date_month_from_front" ).text(nd_booking_date_month_from);

                    $( "#nd_booking_date_number_to_front" ).text(nd_booking_date_number_to);
                    var nd_booking_date_month_to = $( "#nd_booking_date_month_to" ).val();
                    $( "#nd_booking_date_month_to_front" ).text(nd_booking_date_month_to);

                }
            });

                $("#nd_booking_archive_form_date_range_from_picker").datepicker("setDate", "+0");
                $("#nd_booking_date_number_to_front_picker").datepicker("setDate", "+1");

                function nd_booking_get_nights(){
                  var nd_booking_archive_form_date_range_from = $("#nd_booking_archive_form_date_range_from").val();
                  var nd_booking_archive_form_date_range_to = $("#nd_booking_date_number_to_front_picker").val();
                  var nd_booking_start = new Date(nd_booking_archive_form_date_range_from);
                  var nd_booking_end = new Date(nd_booking_archive_form_date_range_to);
                  var nd_booking_nights_number = (nd_booking_end - nd_booking_start) / 1000 / 60 / 60 / 24; 
                  $( ".nd_booking_nights_number" ).text(nd_booking_nights_number); 
              }

              function get_short_month_name( month_no ){                
                var short_month_obj = { 0 : "Jan", 1: "Feb", 2: "Mar", 3 : "Apr", 4 : "Maj", 5 : "Jun", 6 : "Jul", 7 : "Aug", 8 : "Sep", 9 : "Oct", 10 : "Nov", 11 : "Dec" };                
                return short_month_obj[month_no];
            }

            $(".nd_booking_guests_increase").click(function() {
                var value = $(".nd_booking_guests_number").text();
                value++;
                $(".nd_booking_guests_number").text(value);
                $("#nd_booking_archive_form_guests").val(value);
            }); 

            $(".nd_booking_guests_decrease").click(function() {
                var value = $(".nd_booking_guests_number").text();

                if ( value > 1 ) {
                  value--;
                  $(".nd_booking_guests_number").text(value);
                  $("#nd_booking_archive_form_guests").val(value);
              }

          }); 
            var check_in_date = jQuery('#nd_booking_archive_form_date_range_from_picker').datepicker('getDate');
            if (check_in_date !== null) {  
              jQuery('#nd_booking_date_number_from_front').text(check_in_date.getDate());                
              jQuery('#nd_booking_date_number_from').val(check_in_date.getDate());                
              
              $( "#nd_booking_date_month_from_front" ).text(get_short_month_name( check_in_date.getMonth() ));                  
              $( "#nd_booking_date_month_from" ).val(get_short_month_name( check_in_date.getMonth() ));                  

          }
          var check_in_out = jQuery('#nd_booking_date_number_to_front_picker').datepicker('getDate');
          if (check_in_out !== null) {             
            jQuery('#nd_booking_date_number_to_front').text(check_in_out.getDate());  
            jQuery('#nd_booking_date_number_to').val(check_in_out.getDate());      

            $( "#nd_booking_date_month_to_front" ).text(get_short_month_name( check_in_out.getMonth() ));                  
            $( "#nd_booking_date_month_to" ).val(get_short_month_name( check_in_out.getMonth() ));                        
        }

    },1000);
},
general_open: function() {
   $("body").on('click', '.toggle-menu', function () {
    $(".main-menu").slideToggle();
    $(this).toggleClass('menu-active');
    $('body').toggleClass('menu-open');
});



}

};
nicdarkthemes.init();

})(jQuery);






