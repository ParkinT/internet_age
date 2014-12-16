Router.map(function () {

  this.route('/', function()
             {
               this.render('chart', {
                 chart: function()
                 { return this.params; }
               });
             });
  /*
    'chart', { //custom chart
    path: '/',
    data: function() { return this.params; }
   })
   */
});
 