var yearstotal;  //global scope

//global definition of the events to report
var events = [
        { name: 'google', details: {id: 'googleyears', title: 'Life with Google', label: 'Life with Google', before: 'Before Google', since: 'Since Google', colors: ['#00933B', '#F90101'], year: 1998 }},
        { name: 'linux', details: {id: 'linuxyears', title: 'Life with Linux', label: 'Life with Linux', before: 'Before Linux', since: 'Since Linux', colors: ['#000066', '#CC33FF'], year: 1991 }},
        { name: 'starwars', details: {id: 'starwarsyears', title: 'Life with Star Wars', label: 'Life with Star Wars', before: 'Before Star Wars', since: 'Since Star Wars', colors: ['#FFEEBE', '#FF0000'], year: 1977 }},
        { name: 'amazon', details: {id: 'amazonyears', title: 'Life with Amazon.com', label: 'Life with Amazon.com', before: 'Before Amazon.com', since: 'Amazon.com', colors: ['#000000', '#FF9900'], year: 1995 }},
        { name: 'dvd', details: {id: 'dvdyears', title: 'Life with DVD', label: 'Life with the DVD', before: 'Before DVD', since: 'Since DVD', colors: ['#838A8F', '#E9C922'], year: 1995 }},
        { name: 'twitter', details: {id: 'twitteryears', title: 'Life with Twitter', label: 'Life Tweeting', before: 'Before any Tweets', since: 'Since Twitter', colors: ['#fefefe', 'rgb(72,151,242)'], year: 2006 }},
        { name: 'facebook', details: {id: 'facebookyears', title: 'Life with Facebook', label: 'Life with Facebook', before: 'Before Facebook', since: 'Since Facebook', colors: ['#f7f7f7', '#3b5998'], year: 2006 }},
        { name: 'mobilephones', details: {id: 'mobilephonesyears', title: 'No Mobile Phones were available', label: 'Life with Mobile Phones', before: 'No Mobile Phones', since: 'Since Mobile Phones', colors: ['#F5DEB3', '#2E8B57'], year: 1979 }},
        { name: 'iphone', details: {id: 'iphoneyears', title: 'Life with the iPhone', label: 'Life with the iPhone', before: 'Before the iPhone', since: 'Since iPhones', colors: ['#8E8E93', '#5AC8FA'], year: 2007 }},
         { name: 'dand', details: {id: 'dandyears', title: 'Life with Dungeons and Dragons (TSR)', label: 'Dungeons and Dragons (TSR)', before: 'Before D & D', since: 'Since D & D', colors: ['rgb(180,9,17)', 'rgb(203,145,35)'], year: 1974 }},
         { name: 'vhs', details: {id: 'vhsyears', title: 'Life with Video Home System', label: 'Life with VHS Tape', before: 'Before VHS', since: 'Since VHS', colors: ['#9D97D7', '#837EB1'], year: 1976 }}
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

        //display custom chart - if it exists
        if ('undefined' !== typeof custom_chart)
        {
          var name = ((typeof custom_chart.title === 'string') ? custom_chart.title : "Untitled").replace(/[^\w]/g, ' ');  //eliminate invalid characters
          var year = (!isNaN(parseInt(custom_chart.year))) ? custom_chart.year : birthdate;
          displayChart(name.replace(/[\s]+/g, '-') + 'years', name, name, chartData(yearstotal, 'Before ' + name, 'Since ' + name, '#505060', '#f55fD6', year), true);
        } else {
          //this one is ALWAYS displayed first
          displayChart('internetyears', 'Internet in Life', 'Life with Internet', chartData(yearstotal, 'Without Internet', 'With Internet', '#55BF3B', '#DDDF0D', 1991), true);
        }
        
        for (var e = 0; e < events.length; e++)
        {
          displayChart(events[e].details.id, events[e].details.title, events[e].details.label, chartData(yearstotal, events[e].details.before, events[e].details.since, events[e].details.colors[0], events[e].details.colors[1], events[e].details.year));
        }

        $('#date-form').remove();
        $('.site-footer').fadeIn(2.0);

      })
  });
  
  Template.chart.helpers({
    chart_details: function() { return custom_chart; }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}

Router.route('chart', {
  path: '/chart/:title/:year',
  data: function() {
    custom_chart = this.params;
  }
});

Router.route('root', {
  path: '/'
});

