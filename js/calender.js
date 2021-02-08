
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});    

myEvents = [
  { 
    id: "required-id-1",
    name: "New Year", 
    date: "Wed Jan 01 2021 00:00:00 GMT-0800 (Pacific Standard Time)", 
    type: "holiday", 
    everyYear: true 
  },
  { 
    id: "required-id-2",
    name: "Valentine's Day", 
    date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
    type: "holiday", 
    everyYear: true,
    color: "#222"
  },
  { 
    id: "required-id-3",
    name: "Custom Date", 
    badge: "08/03 - 08/05",
    date: "August/03/2020", 
    description: "Description here",
    type: "event"
  }
  // more events here
]



$('#evoCalendar').evoCalendar({
  calendarEvents: myEvents
 
});

