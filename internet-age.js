var yearstotal;  //global scope

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

      var events = {  //title is not displayed, I think
        internet : {id: 'internetyears', title: 'Internet in Life', label: 'Life with Internet', before: 'Without Internet', since: 'With Internet', colors: ['#55BF3B', '#DDDF0D'], year: 1991 },
        google : {id: 'googleyears', title: 'Life with Google', label: 'Life with Google', before: 'Before Google', since: 'Since Google', colors: ['#00933B', '#F90101'], year: 1998 },
        linux : {id: 'linuxyears', title: 'Life with Linux', label: 'Life with Linux', before: 'Before Linux', since: 'Since Linux', colors: ['#000066', '#CC33FF'], year: 1991 },
        starwars : {id: 'starwarsyears', title: 'Life with Star Wars', label: 'Life with Star Wars', before: 'Before Star Wars', since: 'Since Star Wars', colors: ['#FFEEBE', '#FF0000'], year: 1977 },
        amazon : {id: 'amazonyears', title: 'Life with Amazon.com', label: 'Life with Amazon.com', before: 'Before Amazon.com', since: 'Amazon.com', colors: ['#000000', '#FF9900'], year: 1995 },
        twitter : {id: 'twitteryears', title: 'Life with Twitter', label: 'Life Tweeting', before: 'Before any Tweets', since: 'Since Twitter', colors: ['#fefefe', 'rgb(72,151,242)'], year: 2006 },
        facebook : {id: 'facebookyears', title: 'Life with Facebook', label: 'Life with Facebook', before: 'Before Facebook', since: 'Since Facebook', colors: ['#f7f7f7', '#3b5998'], year: 2006 },
        mobilephones : {id: 'mobilephonesyears', title: 'No Mobile Phones were available', label: 'Life with Mobile Phones', before: 'No Mobile Phones', since: 'Since Mobile Phones', colors: ['#F5DEB3', '#2E8B57'], year: 1979 },
        iphone : {id: 'iphoneyears', title: 'Life with the iPhone', label: 'Life with the iPhone', before: 'Before the iPhone', since: 'Since iPhones', colors: ['#8E8E93', '#5AC8FA'], year: 2007 },
         dand : {id: 'dandyears', title: 'Life with Dungeons and Dragons (TSR)', label: 'Before D&D', before: 'Before D & D', since: 'Since D & D', colors: ['rgb(180,9,17)', 'rgb(203,145,35)'], year: 1974 }
     };

    //this one is ALWAYS displayed first
      displayChart(events['internet'].id, events['internet'].title, events['internet'].label, chartData(yearstotal, events['internet'].before, events['internet'].since, events['internet'].colors[0], events['internet'].colors[1], events['internet'].year), true);

      displayChart(events['google'].id, events['google'].title, events['google'].label, chartData(yearstotal, events['google'].before, events['google'].since, events['google'].colors[0], events['google'].colors[1], events['google'].year));

      displayChart(events['linux'].id, events['linux'].title, events['linux'].label, chartData(yearstotal, events['linux'].before, events['linux'].since, events['linux'].colors[0], events['linux'].colors[1], events['linux'].year));

      displayChart(events['amazon'].id, events['amazon'].title, events['amazon'].label, chartData(yearstotal, events['amazon'].before, events['amazon'].since, events['amazon'].colors[0], events['amazon'].colors[1], events['amazon'].year));

      displayChart(events['twitter'].id, events['twitter'].title, events['twitter'].label, chartData(yearstotal, events['twitter'].before, events['twitter'].since, events['twitter'].colors[0], events['twitter'].colors[1], events['twitter'].year));

      displayChart(events['facebook'].id, events['facebook'].title, events['facebook'].label, chartData(yearstotal, events['facebook'].before, events['facebook'].since, events['facebook'].colors[0], events['facebook'].colors[1], events['facebook'].year));

        displayChart(events['mobilephones'].id, events['mobilephones'].title, events['mobilephones'].label, chartData(yearstotal, events['mobilephones'].before, events['mobilephones'].since, events['mobilephones'].colors[0], events['mobilephones'].colors[1], events['mobilephones'].year));

      displayChart(events['iphone'].id, events['iphone'].title, events['iphone'].label, chartData(yearstotal, events['iphone'].before, events['iphone'].since, events['iphone'].colors[0], events['iphone'].colors[1], events['iphone'].year));
      
        displayChart(events['starwars'].id, events['starwars'].title, events['starwars'].label, chartData(yearstotal, events['starwars'].before, events['starwars'].since, events['starwars'].colors[0], events['starwars'].colors[1], events['starwars'].year));
      
      displayChart(events['dand'].id, events['dand'].title, events['dand'].label, chartData(yearstotal, events['dand'].before, events['dand'].since, events['dand'].colors[0], events['dand'].colors[1], events['dand'].year));
      
        //VHS
        //DVD
        
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