var yearstotal;  //global scope

//global definition of the events to report
var events = [
        { name: 'google', details: {id: 'googleyears', title: 'Life with Google', label: 'Life with Google', before: 'Before Google', since: 'Since Google', colors: ['#00933B', '#F90101'], year: 1998 }},
        { name: 'linux', details: {id: 'linuxyears', title: 'Life with Linux', label: 'Life with Linux', before: 'Before Linux', since: 'Since Linux', colors: ['#000066', '#CC33FF'], year: 1991 }},
        { name: 'starwars', details: {id: 'starwarsyears', title: 'Life with Star Wars', label: 'Life with Star Wars', before: 'Before Star Wars', since: 'Since Star Wars', colors: ['#FFEEBE', '#FF0000'], year: 1977 }},
        { name: 'amazon', details: {id: 'amazonyears', title: 'Life with Amazon.com', label: 'Life with Amazon.com', before: 'Before Amazon.com', since: 'Amazon.com', colors: ['#000000', '#FF9900'], year: 1995 }},
        { name: 'dvd', details: {id: 'dvdyears', title: 'Life with DVD', label: 'DVD', before: 'Before DVD', since: 'Since DVD', colors: ['#838A8F', '#E9C922'], year: 1995 }},
        { name: 'twitter', details: {id: 'twitteryears', title: 'Life with Twitter', label: 'Life Tweeting', before: 'Before any Tweets', since: 'Since Twitter', colors: ['#fefefe', 'rgb(72,151,242)'], year: 2006 }},
        { name: 'facebook', details: {id: 'facebookyears', title: 'Life with Facebook', label: 'Life with Facebook', before: 'Before Facebook', since: 'Since Facebook', colors: ['#f7f7f7', '#3b5998'], year: 2006 }},
        { name: 'mobilephones', details: {id: 'mobilephonesyears', title: 'No Mobile Phones were available', label: 'Life with Mobile Phones', before: 'No Mobile Phones', since: 'Since Mobile Phones', colors: ['#F5DEB3', '#2E8B57'], year: 1979 }},
        { name: 'iphone', details: {id: 'iphoneyears', title: 'Life with the iPhone', label: 'Life with the iPhone', before: 'Before the iPhone', since: 'Since iPhones', colors: ['#8E8E93', '#5AC8FA'], year: 2007 }},
         { name: 'dand', details: {id: 'dandyears', title: 'Life with Dungeons and Dragons (TSR)', label: 'Dungeons and Dragons (TSR)', before: 'Before D & D', since: 'Since D & D', colors: ['rgb(180,9,17)', 'rgb(203,145,35)'], year: 1974 }},
         { name: 'vhs', details: {id: 'vhsyears', title: 'Life with Video Home System', label: 'VHS Tape', before: 'Before VHS', since: 'Since VHS', colors: ['#9D97D7', '#837EB1'], year: 1976 }}
     ];

if (Meteor.isClient) {
  const EPOCH = 1991;  // birth of the Internet
  const THISYEAR = new Date().getFullYear();

  var years = new Array("CHOOSE");
  y = THISYEAR;
  var oldest = y - 100;
  while (y-oldest)
  {
    years.push(--y);
  }

  $(document).ready(function()
  {
      $.each(years, function (id, option) {
        $('#birth-year').append($('<option></option>').val(option).html(option));
      });
      $('#birth-year').append($('<option></option>').val(oldest).html('EARLIER'));
    
      //register event handler
      $("#birth-year").change(function() {
        
      var birthdate = event.target.value;
      yearstotal = THISYEAR - birthdate;

      //this one is ALWAYS displayed first
      displayChart('internetyears', 'Internet in Life', 'Life with Internet', chartData(yearstotal, 'Without Internet', 'With Internet', '#55BF3B', '#DDDF0D', 1991), true);

    for (var e = 0; e < events.length; e++)
    {
      displayChart(events[e].details.id, events[e].details.title, events[e].details.label, chartData(yearstotal, events[e].details.before, events[e].details.since, events[e].details.colors[0], events[e].details.colors[1], events[e].details.year));
    }
        
      $('#date-form').fadeOut(2.0);
      $('.site-footer').fadeIn(2.0);
        
    })
  });
  
  //custom chart : based on route.query.params
  Template.chart.rendered = function()
  {

  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}



/*   THIS IS A BETTER CHART FORMAT TO USE
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Portion(s) of your life that included Internet Technology'
        },
        subtitle: {
            text: 'EREH TXET NI LLIF'
        },
        xAxis: {
            categories: ['Internet', 'Google', 'iPad', 'iPhone', 'Star Wars'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});
*/