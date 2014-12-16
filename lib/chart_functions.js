chartData = function(yearstotal, beforeName, afterName, beforeColor, afterColor, eventYear)
{
  const BEFORE = 0;
  const AFTER = 1;
  var eventYears = new Date().getFullYear() - eventYear;
  var data = $.extend(true, [], genericChartData); //JQuery extend (with the 'true' parameter) performs a value copy
  data[BEFORE].name = Math.min(eventYears, yearstotal) == yearstotal ? 'Entire Life' : beforeName;
  data[BEFORE].y = yearstotal - eventYears;
  data[BEFORE].color = beforeColor;
  data[AFTER].name = afterName;
  data[AFTER].y = Math.min(eventYears, yearstotal);
  data[AFTER].color = afterColor;
  return data;
}

displayChart = function (id, name, title, data, displayInitially)
{
  var chartInfo = $.extend(true, {}, genericChartInfo);      
  chartInfo.series[0].data = data; 
  chartInfo.series[0].name = name;
  chartInfo.title.text = title; 

      $(".page-wrap").append("<span id='" + id + "'></span>");
      $("#" + id).highcharts(chartInfo);

    if ((typeof displayInitially !== 'undefined') && (displayInitially)) //default parameter is false
    {
      $("#" + id).children().css("display", "block");
    } else {
      showYears(id, chartInfo);
    }
}

showYears = function(id, chartInfo)
{
  console.log(chartInfo);
  $("#" + id).append("<span class='years-activate' title='" + displayRatio(chartInfo) + "'><input type='checkbox'>" + chartInfo.title.text + "</input>");  
  $('.years-activate').on('click', function()
  {
    $($(this).parent()).children('.highcharts-container').fadeIn('500');
    $('.years-activate').css("top", $('.years-activate').css("top") - 400);
    $(this).remove();
  });
}

displayRatio = function(chartInfo)
{
  return chartInfo.series[0].data[1].y + " years " + chartInfo.series[0].data[0].name + " - Click to view chart";
}