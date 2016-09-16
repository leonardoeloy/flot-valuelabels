<h3>Documentation</h3>
For documentation have a look to the [wiki](https://github.com/winne27/flot-valuelabels/wiki).

<h3> New in version 1.7 </h3>
* Optionally use text labels instead of value labels.
* Provide minimized script file

<h3> New in version 1.6 </h3>
* Option top is replaced by above (top still works)
* new options for display label values in a box with customizable background-color and customizable border-color
    * useBackground: false, // set label into box with background color
    * backgroundColor: '#cccccc', // set backgroundColor like #FFCC00 or darkred
    * useBorder: false, // use a broder arround the label
    * borderColor: '#999999'
* shadowColor is customizable
* reverseAlignBelowZero as new option

<h3> New in version 1.5 </h3>
* new option valign - allows placing label on top, below, in the middle or on bottom (merged from [rockcockerham](http://www.github.com/rickcockerham))

<h3> New in Version 1.4 </h3>
* option decimals - rounds label values to specified decimals

<h3>Fixes in 1.3.5</h3>
* option useDecimalComma in some cases throwed an exception
* calculating min and max value crashed if series was empty

<h3>Fixes in 1.3.4</h3> 
(by [rockcockerham](http://www.github.com/rickcockerham))

* This will add the y value for each bar segment to a running total. The way it was before it would place the label where it would be if the bars weren't stacked.

* Threw in the ability to add x and y offsets for html rendering.

<h3>New in Version 1.3</h3>

* Implemented some new options (useDecimalComma, showMinValue, showMaxValue)
* changed some default values: align now defaults to center, hideSame now defaults to false
* documentation improved
* more examples of usage

<h3>Examples</h3>

![example](https://raw.githubusercontent.com/winne27/flot-valuelabels/master/example.png)

For the source code of this examples see [here](https://github.com/winne27/flot-valuelabels/blob/master/example.html).

<h4>Example for using valuelabels and orderBars together</h4>

![example](https://raw.githubusercontent.com/winne27/flot-valuelabels/master/example2.png)

You have to adjust the labels by the valuelabel options xoffset and yoffset.
For the source code of this examples see [here](https://github.com/winne27/flot-valuelabels/blob/master/example2.html).

<h4>Example for using text labels</h4>
![example](https://raw.githubusercontent.com/winne27/flot-valuelabels/master/example3.png)

Use option showTextLabel and deliver with the data object for every point array a text string as third entry.
For the source code of this examples see [here](https://github.com/winne27/flot-valuelabels/blob/master/example3.html).

<h3>More examples</h3>

A webpage with a lot of different valuelabels see [here](https://fehngarten.de/wetter/index.html)
