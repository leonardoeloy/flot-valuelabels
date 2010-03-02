/**
 * Value Labels Plugin for flot.
 * http://leonardoeloy.github.com/flot-valuelabels
 *
 * Using canvas.fillText instead of divs, which is better for printing - by Leonardo Eloy, March 2010.
 *
 * Original homepage: http://sites.google.com/site/petrsstuff/projects/flotvallab
 * Released under the MIT license by Petr Blahos, December 2009.
 */
(function ($) {
    var options = {
        valueLabels: {
	    show: false,
            showLastValue: false // Use this to show the label only for the last value in the series
        }
    };
    
    function init(plot) {
        plot.hooks.draw.push(function (plot, ctx) {
	    if (!plot.getOptions().valueLabels.show) return;
            
            var showLastValue = plot.getOptions().valueLabels.showLastValue;
            var ctx = plot.getCanvas().getContext("2d");
	    $.each(plot.getData(), function(ii, series) {
                    series.seriesIndex = ii;
		    var last_val = null;
		    var last_x = -1000;
		    var last_y = -1000;
		    for (var i = 0; i < series.data.length; ++i) {
			if (series.data[i] == null)  continue;
			if (showLastValue && i != series.data.length-1) continue;

			var x = series.data[i][0], y = series.data[i][1];
			if (x < series.xaxis.min || x > series.xaxis.max || y < series.yaxis.min || y > series.yaxis.max)
			    continue;
			var val = y;

			if (series.valueLabelFunc) {
				val = series.valueLabelFunc({ series: series, seriesIndex: ii, index: i });
			}
			val = ""+val;

			if (val!=last_val || i==series.data.length-1) {
				var xx = series.xaxis.p2c(x)+plot.getPlotOffset().left;
				var yy = series.yaxis.p2c(y)-12+plot.getPlotOffset().top;
				if (Math.abs(yy-last_y)>20 || last_x<xx) {
					last_val = val;
					last_x = xx + val.length*8;
					last_y = yy;
                                        
                                        // Little 5 px padding here helps the number to get
                                        // closer to points
                                        x_pos = xx;
                                        y_pos = yy+6;

                                        // If the value is on the top of the canvas, we need
                                        // to push it down a little
                                        if (yy <= 0) y_pos = 18;
                                        // The same happens with the x axis
                                        if (xx >= plot.width()) x_pos = plot.width();

                                        ctx.fillText(val, x_pos, y_pos);
				}
			}
		    }
		});
        });
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'valueLabels',
        version: '1.1'
    });
})(jQuery);

