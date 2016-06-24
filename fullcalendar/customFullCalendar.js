function customFullCalendar() {
    $('#cal').bind("pageshow", function() {
       

        $('#calendar').fullCalendar({
            defaultDate: '2016-06-12',
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-06-01'
                },
                {
                    title: 'Long Event',
                    start: '2016-06-07',
                    end: '2016-06-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-06-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-06-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2016-06-11',
                    end: '2016-06-13'
                },
                {
                    title: 'Meeting',
                    start: '2016-06-12T10:30:00',
                    end: '2016-06-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2016-06-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2016-06-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2016-06-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2016-06-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2016-06-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2016-06-28'
                }
            ]
        });


        // $('#calendar').fullCalendar({
        //     monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        //     dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
        //     header: {
        //         left: 'prev,next today',
        //         center: 'title',
        //         right: ''
        //     },
        //     events: 'https://www.google.com/calendar/feeds/xxxxxxxxxx/public/basic',                  
        //     eventClick: function(event) {
        //         window.open(event.url, 'gcalevent', 'width=700,height=600');
        //         return false;
        //     },
        //     loading: function(bool) {
        //         if (bool) {
        //             $('#loading').show();
        //         }else{
        //             $('#loading').hide();
        //         }
        //     }                   
        // });    


                    
    });    
}


customFullCalendar();
