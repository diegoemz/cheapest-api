/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5246.0, "minX": 0.0, "maxY": 6264.0, "series": [{"data": [[0.0, 5246.0], [0.1, 5247.0], [0.2, 5247.0], [0.3, 5247.0], [0.4, 5247.0], [0.5, 5247.0], [0.6, 5248.0], [0.7, 5248.0], [0.8, 5248.0], [0.9, 5248.0], [1.0, 5248.0], [1.1, 5248.0], [1.2, 5249.0], [1.3, 5249.0], [1.4, 5249.0], [1.5, 5249.0], [1.6, 5249.0], [1.7, 5249.0], [1.8, 5249.0], [1.9, 5249.0], [2.0, 5250.0], [2.1, 5250.0], [2.2, 5250.0], [2.3, 5250.0], [2.4, 5250.0], [2.5, 5250.0], [2.6, 5250.0], [2.7, 5250.0], [2.8, 5250.0], [2.9, 5250.0], [3.0, 5251.0], [3.1, 5251.0], [3.2, 5251.0], [3.3, 5251.0], [3.4, 5251.0], [3.5, 5251.0], [3.6, 5251.0], [3.7, 5251.0], [3.8, 5251.0], [3.9, 5251.0], [4.0, 5251.0], [4.1, 5251.0], [4.2, 5252.0], [4.3, 5252.0], [4.4, 5252.0], [4.5, 5252.0], [4.6, 5252.0], [4.7, 5252.0], [4.8, 5252.0], [4.9, 5252.0], [5.0, 5252.0], [5.1, 5252.0], [5.2, 5252.0], [5.3, 5252.0], [5.4, 5253.0], [5.5, 5253.0], [5.6, 5253.0], [5.7, 5253.0], [5.8, 5253.0], [5.9, 5253.0], [6.0, 5253.0], [6.1, 5253.0], [6.2, 5253.0], [6.3, 5253.0], [6.4, 5253.0], [6.5, 5254.0], [6.6, 5254.0], [6.7, 5254.0], [6.8, 5254.0], [6.9, 5254.0], [7.0, 5254.0], [7.1, 5254.0], [7.2, 5254.0], [7.3, 5254.0], [7.4, 5255.0], [7.5, 5255.0], [7.6, 5255.0], [7.7, 5255.0], [7.8, 5255.0], [7.9, 5255.0], [8.0, 5255.0], [8.1, 5255.0], [8.2, 5255.0], [8.3, 5255.0], [8.4, 5256.0], [8.5, 5256.0], [8.6, 5256.0], [8.7, 5256.0], [8.8, 5256.0], [8.9, 5256.0], [9.0, 5256.0], [9.1, 5256.0], [9.2, 5256.0], [9.3, 5256.0], [9.4, 5256.0], [9.5, 5256.0], [9.6, 5256.0], [9.7, 5256.0], [9.8, 5257.0], [9.9, 5257.0], [10.0, 5257.0], [10.1, 5257.0], [10.2, 5257.0], [10.3, 5258.0], [10.4, 5258.0], [10.5, 5258.0], [10.6, 5258.0], [10.7, 5258.0], [10.8, 5258.0], [10.9, 5258.0], [11.0, 5258.0], [11.1, 5258.0], [11.2, 5258.0], [11.3, 5258.0], [11.4, 5258.0], [11.5, 5259.0], [11.6, 5259.0], [11.7, 5259.0], [11.8, 5259.0], [11.9, 5259.0], [12.0, 5259.0], [12.1, 5259.0], [12.2, 5259.0], [12.3, 5259.0], [12.4, 5259.0], [12.5, 5259.0], [12.6, 5259.0], [12.7, 5259.0], [12.8, 5260.0], [12.9, 5260.0], [13.0, 5260.0], [13.1, 5260.0], [13.2, 5260.0], [13.3, 5260.0], [13.4, 5260.0], [13.5, 5260.0], [13.6, 5260.0], [13.7, 5261.0], [13.8, 5261.0], [13.9, 5261.0], [14.0, 5261.0], [14.1, 5261.0], [14.2, 5261.0], [14.3, 5261.0], [14.4, 5261.0], [14.5, 5261.0], [14.6, 5261.0], [14.7, 5262.0], [14.8, 5262.0], [14.9, 5262.0], [15.0, 5262.0], [15.1, 5262.0], [15.2, 5262.0], [15.3, 5262.0], [15.4, 5262.0], [15.5, 5262.0], [15.6, 5262.0], [15.7, 5262.0], [15.8, 5262.0], [15.9, 5262.0], [16.0, 5263.0], [16.1, 5263.0], [16.2, 5263.0], [16.3, 5263.0], [16.4, 5263.0], [16.5, 5263.0], [16.6, 5263.0], [16.7, 5263.0], [16.8, 5263.0], [16.9, 5263.0], [17.0, 5263.0], [17.1, 5263.0], [17.2, 5263.0], [17.3, 5263.0], [17.4, 5263.0], [17.5, 5263.0], [17.6, 5263.0], [17.7, 5263.0], [17.8, 5263.0], [17.9, 5264.0], [18.0, 5264.0], [18.1, 5264.0], [18.2, 5264.0], [18.3, 5264.0], [18.4, 5264.0], [18.5, 5264.0], [18.6, 5264.0], [18.7, 5264.0], [18.8, 5264.0], [18.9, 5264.0], [19.0, 5264.0], [19.1, 5264.0], [19.2, 5264.0], [19.3, 5264.0], [19.4, 5264.0], [19.5, 5264.0], [19.6, 5264.0], [19.7, 5264.0], [19.8, 5264.0], [19.9, 5264.0], [20.0, 5264.0], [20.1, 5265.0], [20.2, 5265.0], [20.3, 5265.0], [20.4, 5265.0], [20.5, 5265.0], [20.6, 5265.0], [20.7, 5265.0], [20.8, 5265.0], [20.9, 5265.0], [21.0, 5265.0], [21.1, 5265.0], [21.2, 5265.0], [21.3, 5265.0], [21.4, 5265.0], [21.5, 5265.0], [21.6, 5265.0], [21.7, 5265.0], [21.8, 5265.0], [21.9, 5265.0], [22.0, 5265.0], [22.1, 5265.0], [22.2, 5266.0], [22.3, 5266.0], [22.4, 5266.0], [22.5, 5266.0], [22.6, 5266.0], [22.7, 5266.0], [22.8, 5266.0], [22.9, 5266.0], [23.0, 5266.0], [23.1, 5266.0], [23.2, 5266.0], [23.3, 5266.0], [23.4, 5266.0], [23.5, 5266.0], [23.6, 5266.0], [23.7, 5266.0], [23.8, 5266.0], [23.9, 5266.0], [24.0, 5266.0], [24.1, 5266.0], [24.2, 5266.0], [24.3, 5266.0], [24.4, 5266.0], [24.5, 5266.0], [24.6, 5266.0], [24.7, 5266.0], [24.8, 5267.0], [24.9, 5267.0], [25.0, 5267.0], [25.1, 5267.0], [25.2, 5267.0], [25.3, 5267.0], [25.4, 5267.0], [25.5, 5267.0], [25.6, 5267.0], [25.7, 5267.0], [25.8, 5267.0], [25.9, 5267.0], [26.0, 5267.0], [26.1, 5267.0], [26.2, 5267.0], [26.3, 5267.0], [26.4, 5267.0], [26.5, 5267.0], [26.6, 5267.0], [26.7, 5267.0], [26.8, 5267.0], [26.9, 5267.0], [27.0, 5267.0], [27.1, 5267.0], [27.2, 5268.0], [27.3, 5268.0], [27.4, 5268.0], [27.5, 5268.0], [27.6, 5268.0], [27.7, 5268.0], [27.8, 5268.0], [27.9, 5268.0], [28.0, 5268.0], [28.1, 5268.0], [28.2, 5268.0], [28.3, 5268.0], [28.4, 5268.0], [28.5, 5268.0], [28.6, 5268.0], [28.7, 5268.0], [28.8, 5268.0], [28.9, 5268.0], [29.0, 5268.0], [29.1, 5268.0], [29.2, 5268.0], [29.3, 5268.0], [29.4, 5268.0], [29.5, 5268.0], [29.6, 5269.0], [29.7, 5269.0], [29.8, 5269.0], [29.9, 5269.0], [30.0, 5269.0], [30.1, 5269.0], [30.2, 5269.0], [30.3, 5269.0], [30.4, 5269.0], [30.5, 5269.0], [30.6, 5269.0], [30.7, 5269.0], [30.8, 5269.0], [30.9, 5269.0], [31.0, 5269.0], [31.1, 5269.0], [31.2, 5269.0], [31.3, 5269.0], [31.4, 5269.0], [31.5, 5269.0], [31.6, 5269.0], [31.7, 5269.0], [31.8, 5269.0], [31.9, 5269.0], [32.0, 5269.0], [32.1, 5269.0], [32.2, 5269.0], [32.3, 5269.0], [32.4, 5269.0], [32.5, 5269.0], [32.6, 5269.0], [32.7, 5269.0], [32.8, 5270.0], [32.9, 5270.0], [33.0, 5270.0], [33.1, 5270.0], [33.2, 5270.0], [33.3, 5270.0], [33.4, 5270.0], [33.5, 5270.0], [33.6, 5270.0], [33.7, 5270.0], [33.8, 5270.0], [33.9, 5270.0], [34.0, 5270.0], [34.1, 5270.0], [34.2, 5270.0], [34.3, 5270.0], [34.4, 5270.0], [34.5, 5270.0], [34.6, 5270.0], [34.7, 5270.0], [34.8, 5270.0], [34.9, 5270.0], [35.0, 5270.0], [35.1, 5270.0], [35.2, 5270.0], [35.3, 5271.0], [35.4, 5271.0], [35.5, 5271.0], [35.6, 5271.0], [35.7, 5271.0], [35.8, 5271.0], [35.9, 5271.0], [36.0, 5271.0], [36.1, 5271.0], [36.2, 5271.0], [36.3, 5271.0], [36.4, 5271.0], [36.5, 5271.0], [36.6, 5271.0], [36.7, 5271.0], [36.8, 5271.0], [36.9, 5271.0], [37.0, 5271.0], [37.1, 5271.0], [37.2, 5271.0], [37.3, 5271.0], [37.4, 5271.0], [37.5, 5271.0], [37.6, 5271.0], [37.7, 5271.0], [37.8, 5271.0], [37.9, 5272.0], [38.0, 5272.0], [38.1, 5272.0], [38.2, 5272.0], [38.3, 5272.0], [38.4, 5272.0], [38.5, 5272.0], [38.6, 5272.0], [38.7, 5272.0], [38.8, 5272.0], [38.9, 5272.0], [39.0, 5272.0], [39.1, 5272.0], [39.2, 5272.0], [39.3, 5272.0], [39.4, 5272.0], [39.5, 5272.0], [39.6, 5272.0], [39.7, 5272.0], [39.8, 5272.0], [39.9, 5272.0], [40.0, 5272.0], [40.1, 5272.0], [40.2, 5272.0], [40.3, 5273.0], [40.4, 5273.0], [40.5, 5273.0], [40.6, 5273.0], [40.7, 5273.0], [40.8, 5273.0], [40.9, 5273.0], [41.0, 5273.0], [41.1, 5273.0], [41.2, 5273.0], [41.3, 5273.0], [41.4, 5273.0], [41.5, 5273.0], [41.6, 5273.0], [41.7, 5273.0], [41.8, 5273.0], [41.9, 5273.0], [42.0, 5273.0], [42.1, 5274.0], [42.2, 5274.0], [42.3, 5274.0], [42.4, 5274.0], [42.5, 5274.0], [42.6, 5274.0], [42.7, 5274.0], [42.8, 5274.0], [42.9, 5274.0], [43.0, 5274.0], [43.1, 5274.0], [43.2, 5274.0], [43.3, 5274.0], [43.4, 5274.0], [43.5, 5274.0], [43.6, 5274.0], [43.7, 5274.0], [43.8, 5275.0], [43.9, 5275.0], [44.0, 5275.0], [44.1, 5275.0], [44.2, 5275.0], [44.3, 5275.0], [44.4, 5275.0], [44.5, 5275.0], [44.6, 5275.0], [44.7, 5275.0], [44.8, 5275.0], [44.9, 5275.0], [45.0, 5275.0], [45.1, 5275.0], [45.2, 5275.0], [45.3, 5275.0], [45.4, 5275.0], [45.5, 5275.0], [45.6, 5276.0], [45.7, 5276.0], [45.8, 5276.0], [45.9, 5276.0], [46.0, 5276.0], [46.1, 5276.0], [46.2, 5276.0], [46.3, 5276.0], [46.4, 5276.0], [46.5, 5276.0], [46.6, 5276.0], [46.7, 5276.0], [46.8, 5276.0], [46.9, 5276.0], [47.0, 5276.0], [47.1, 5276.0], [47.2, 5276.0], [47.3, 5276.0], [47.4, 5276.0], [47.5, 5277.0], [47.6, 5277.0], [47.7, 5277.0], [47.8, 5277.0], [47.9, 5277.0], [48.0, 5277.0], [48.1, 5277.0], [48.2, 5277.0], [48.3, 5277.0], [48.4, 5277.0], [48.5, 5277.0], [48.6, 5277.0], [48.7, 5278.0], [48.8, 5278.0], [48.9, 5278.0], [49.0, 5278.0], [49.1, 5278.0], [49.2, 5278.0], [49.3, 5278.0], [49.4, 5278.0], [49.5, 5278.0], [49.6, 5278.0], [49.7, 5278.0], [49.8, 5278.0], [49.9, 5278.0], [50.0, 5278.0], [50.1, 5278.0], [50.2, 5278.0], [50.3, 5279.0], [50.4, 5279.0], [50.5, 5279.0], [50.6, 5279.0], [50.7, 5279.0], [50.8, 5279.0], [50.9, 5279.0], [51.0, 5279.0], [51.1, 5279.0], [51.2, 5279.0], [51.3, 5280.0], [51.4, 5280.0], [51.5, 5280.0], [51.6, 5280.0], [51.7, 5280.0], [51.8, 5280.0], [51.9, 5280.0], [52.0, 5280.0], [52.1, 5280.0], [52.2, 5280.0], [52.3, 5281.0], [52.4, 5281.0], [52.5, 5281.0], [52.6, 5281.0], [52.7, 5281.0], [52.8, 5281.0], [52.9, 5281.0], [53.0, 5281.0], [53.1, 5281.0], [53.2, 5281.0], [53.3, 5281.0], [53.4, 5281.0], [53.5, 5281.0], [53.6, 5282.0], [53.7, 5282.0], [53.8, 5282.0], [53.9, 5282.0], [54.0, 5282.0], [54.1, 5282.0], [54.2, 5282.0], [54.3, 5282.0], [54.4, 5282.0], [54.5, 5282.0], [54.6, 5282.0], [54.7, 5282.0], [54.8, 5283.0], [54.9, 5283.0], [55.0, 5283.0], [55.1, 5283.0], [55.2, 5283.0], [55.3, 5283.0], [55.4, 5283.0], [55.5, 5283.0], [55.6, 5283.0], [55.7, 5284.0], [55.8, 5284.0], [55.9, 5284.0], [56.0, 5284.0], [56.1, 5284.0], [56.2, 5284.0], [56.3, 5285.0], [56.4, 5285.0], [56.5, 5285.0], [56.6, 5285.0], [56.7, 5285.0], [56.8, 5285.0], [56.9, 5285.0], [57.0, 5286.0], [57.1, 5286.0], [57.2, 5286.0], [57.3, 5286.0], [57.4, 5286.0], [57.5, 5286.0], [57.6, 5286.0], [57.7, 5286.0], [57.8, 5286.0], [57.9, 5287.0], [58.0, 5287.0], [58.1, 5287.0], [58.2, 5287.0], [58.3, 5287.0], [58.4, 5287.0], [58.5, 5287.0], [58.6, 5287.0], [58.7, 5287.0], [58.8, 5288.0], [58.9, 5288.0], [59.0, 5288.0], [59.1, 5288.0], [59.2, 5288.0], [59.3, 5288.0], [59.4, 5288.0], [59.5, 5288.0], [59.6, 5288.0], [59.7, 5288.0], [59.8, 5289.0], [59.9, 5289.0], [60.0, 5289.0], [60.1, 5289.0], [60.2, 5289.0], [60.3, 5289.0], [60.4, 5290.0], [60.5, 5290.0], [60.6, 5290.0], [60.7, 5290.0], [60.8, 5290.0], [60.9, 5291.0], [61.0, 5291.0], [61.1, 5291.0], [61.2, 5291.0], [61.3, 5291.0], [61.4, 5291.0], [61.5, 5292.0], [61.6, 5292.0], [61.7, 5292.0], [61.8, 5292.0], [61.9, 5292.0], [62.0, 5292.0], [62.1, 5292.0], [62.2, 5293.0], [62.3, 5293.0], [62.4, 5293.0], [62.5, 5293.0], [62.6, 5293.0], [62.7, 5293.0], [62.8, 5293.0], [62.9, 5293.0], [63.0, 5293.0], [63.1, 5293.0], [63.2, 5293.0], [63.3, 5293.0], [63.4, 5294.0], [63.5, 5294.0], [63.6, 5294.0], [63.7, 5294.0], [63.8, 5294.0], [63.9, 5294.0], [64.0, 5294.0], [64.1, 5295.0], [64.2, 5295.0], [64.3, 5295.0], [64.4, 5295.0], [64.5, 5295.0], [64.6, 5295.0], [64.7, 5295.0], [64.8, 5295.0], [64.9, 5295.0], [65.0, 5295.0], [65.1, 5295.0], [65.2, 5295.0], [65.3, 5295.0], [65.4, 5295.0], [65.5, 5295.0], [65.6, 5296.0], [65.7, 5296.0], [65.8, 5296.0], [65.9, 5296.0], [66.0, 5296.0], [66.1, 5296.0], [66.2, 5296.0], [66.3, 5296.0], [66.4, 5296.0], [66.5, 5296.0], [66.6, 5296.0], [66.7, 5296.0], [66.8, 5296.0], [66.9, 5296.0], [67.0, 5296.0], [67.1, 5296.0], [67.2, 5297.0], [67.3, 5297.0], [67.4, 5297.0], [67.5, 5297.0], [67.6, 5297.0], [67.7, 5297.0], [67.8, 5297.0], [67.9, 5297.0], [68.0, 5297.0], [68.1, 5297.0], [68.2, 5298.0], [68.3, 5298.0], [68.4, 5298.0], [68.5, 5298.0], [68.6, 5298.0], [68.7, 5298.0], [68.8, 5298.0], [68.9, 5298.0], [69.0, 5298.0], [69.1, 5298.0], [69.2, 5298.0], [69.3, 5298.0], [69.4, 5298.0], [69.5, 5298.0], [69.6, 5298.0], [69.7, 5298.0], [69.8, 5298.0], [69.9, 5298.0], [70.0, 5299.0], [70.1, 5299.0], [70.2, 5299.0], [70.3, 5299.0], [70.4, 5299.0], [70.5, 5299.0], [70.6, 5299.0], [70.7, 5299.0], [70.8, 5299.0], [70.9, 5299.0], [71.0, 5299.0], [71.1, 5299.0], [71.2, 5299.0], [71.3, 5299.0], [71.4, 5299.0], [71.5, 5299.0], [71.6, 5299.0], [71.7, 5300.0], [71.8, 5300.0], [71.9, 5300.0], [72.0, 5300.0], [72.1, 5300.0], [72.2, 5300.0], [72.3, 5300.0], [72.4, 5300.0], [72.5, 5300.0], [72.6, 5300.0], [72.7, 5300.0], [72.8, 5300.0], [72.9, 5300.0], [73.0, 5301.0], [73.1, 5301.0], [73.2, 5301.0], [73.3, 5301.0], [73.4, 5301.0], [73.5, 5301.0], [73.6, 5301.0], [73.7, 5301.0], [73.8, 5301.0], [73.9, 5301.0], [74.0, 5301.0], [74.1, 5302.0], [74.2, 5302.0], [74.3, 5302.0], [74.4, 5302.0], [74.5, 5302.0], [74.6, 5302.0], [74.7, 5302.0], [74.8, 5302.0], [74.9, 5302.0], [75.0, 5302.0], [75.1, 5302.0], [75.2, 5302.0], [75.3, 5302.0], [75.4, 5302.0], [75.5, 5302.0], [75.6, 5303.0], [75.7, 5303.0], [75.8, 5303.0], [75.9, 5303.0], [76.0, 5303.0], [76.1, 5303.0], [76.2, 5303.0], [76.3, 5303.0], [76.4, 5303.0], [76.5, 5303.0], [76.6, 5303.0], [76.7, 5303.0], [76.8, 5304.0], [76.9, 5304.0], [77.0, 5304.0], [77.1, 5304.0], [77.2, 5304.0], [77.3, 5304.0], [77.4, 5304.0], [77.5, 5304.0], [77.6, 5304.0], [77.7, 5304.0], [77.8, 5305.0], [77.9, 5305.0], [78.0, 5305.0], [78.1, 5305.0], [78.2, 5305.0], [78.3, 5305.0], [78.4, 5305.0], [78.5, 5305.0], [78.6, 5305.0], [78.7, 5305.0], [78.8, 5305.0], [78.9, 5306.0], [79.0, 5306.0], [79.1, 5306.0], [79.2, 5306.0], [79.3, 5306.0], [79.4, 5306.0], [79.5, 5306.0], [79.6, 5306.0], [79.7, 5306.0], [79.8, 5306.0], [79.9, 5307.0], [80.0, 5307.0], [80.1, 5307.0], [80.2, 5307.0], [80.3, 5307.0], [80.4, 5307.0], [80.5, 5307.0], [80.6, 5308.0], [80.7, 5308.0], [80.8, 5308.0], [80.9, 5308.0], [81.0, 5308.0], [81.1, 5309.0], [81.2, 5309.0], [81.3, 5309.0], [81.4, 5309.0], [81.5, 5309.0], [81.6, 5309.0], [81.7, 5309.0], [81.8, 5309.0], [81.9, 5310.0], [82.0, 5310.0], [82.1, 5310.0], [82.2, 5310.0], [82.3, 5310.0], [82.4, 5311.0], [82.5, 5311.0], [82.6, 5311.0], [82.7, 5311.0], [82.8, 5311.0], [82.9, 5311.0], [83.0, 5311.0], [83.1, 5312.0], [83.2, 5313.0], [83.3, 5313.0], [83.4, 5313.0], [83.5, 5313.0], [83.6, 5313.0], [83.7, 5313.0], [83.8, 5313.0], [83.9, 5314.0], [84.0, 5314.0], [84.1, 5314.0], [84.2, 5314.0], [84.3, 5314.0], [84.4, 5314.0], [84.5, 5315.0], [84.6, 5315.0], [84.7, 5315.0], [84.8, 5315.0], [84.9, 5316.0], [85.0, 5316.0], [85.1, 5316.0], [85.2, 5316.0], [85.3, 5317.0], [85.4, 5317.0], [85.5, 5317.0], [85.6, 5317.0], [85.7, 5318.0], [85.8, 5318.0], [85.9, 5318.0], [86.0, 5318.0], [86.1, 5319.0], [86.2, 5319.0], [86.3, 5319.0], [86.4, 5319.0], [86.5, 5320.0], [86.6, 5320.0], [86.7, 5320.0], [86.8, 5321.0], [86.9, 5321.0], [87.0, 5321.0], [87.1, 5321.0], [87.2, 5322.0], [87.3, 5322.0], [87.4, 5322.0], [87.5, 5322.0], [87.6, 5322.0], [87.7, 5323.0], [87.8, 5323.0], [87.9, 5323.0], [88.0, 5323.0], [88.1, 5323.0], [88.2, 5323.0], [88.3, 5324.0], [88.4, 5324.0], [88.5, 5324.0], [88.6, 5324.0], [88.7, 5325.0], [88.8, 5326.0], [88.9, 5326.0], [89.0, 5327.0], [89.1, 5327.0], [89.2, 5327.0], [89.3, 5328.0], [89.4, 5328.0], [89.5, 5329.0], [89.6, 5329.0], [89.7, 5329.0], [89.8, 5329.0], [89.9, 5330.0], [90.0, 5330.0], [90.1, 5331.0], [90.2, 5331.0], [90.3, 5332.0], [90.4, 5332.0], [90.5, 5333.0], [90.6, 5333.0], [90.7, 5334.0], [90.8, 5334.0], [90.9, 5335.0], [91.0, 5335.0], [91.1, 5336.0], [91.2, 5336.0], [91.3, 5337.0], [91.4, 5337.0], [91.5, 5337.0], [91.6, 5338.0], [91.7, 5338.0], [91.8, 5338.0], [91.9, 5339.0], [92.0, 5339.0], [92.1, 5340.0], [92.2, 5340.0], [92.3, 5341.0], [92.4, 5341.0], [92.5, 5341.0], [92.6, 5342.0], [92.7, 5342.0], [92.8, 5343.0], [92.9, 5343.0], [93.0, 5344.0], [93.1, 5344.0], [93.2, 5345.0], [93.3, 5346.0], [93.4, 5346.0], [93.5, 5348.0], [93.6, 5348.0], [93.7, 5348.0], [93.8, 5349.0], [93.9, 5349.0], [94.0, 5350.0], [94.1, 5352.0], [94.2, 5352.0], [94.3, 5352.0], [94.4, 5353.0], [94.5, 5353.0], [94.6, 5353.0], [94.7, 5354.0], [94.8, 5354.0], [94.9, 5355.0], [95.0, 5355.0], [95.1, 5357.0], [95.2, 5358.0], [95.3, 5362.0], [95.4, 5362.0], [95.5, 5365.0], [95.6, 5366.0], [95.7, 5370.0], [95.8, 5371.0], [95.9, 5371.0], [96.0, 5372.0], [96.1, 5375.0], [96.2, 5375.0], [96.3, 5383.0], [96.4, 5384.0], [96.5, 5386.0], [96.6, 5389.0], [96.7, 5393.0], [96.8, 5395.0], [96.9, 5403.0], [97.0, 5408.0], [97.1, 5410.0], [97.2, 5416.0], [97.3, 5430.0], [97.4, 5433.0], [97.5, 5435.0], [97.6, 5439.0], [97.7, 5446.0], [97.8, 5450.0], [97.9, 5453.0], [98.0, 5474.0], [98.1, 5499.0], [98.2, 5541.0], [98.3, 5548.0], [98.4, 5556.0], [98.5, 5570.0], [98.6, 5589.0], [98.7, 5613.0], [98.8, 5639.0], [98.9, 5643.0], [99.0, 5692.0], [99.1, 5698.0], [99.2, 5800.0], [99.3, 5826.0], [99.4, 5843.0], [99.5, 5851.0], [99.6, 5934.0], [99.7, 6012.0], [99.8, 6115.0], [99.9, 6195.0]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 5200.0, "maxY": 1075.0, "series": [{"data": [[5300.0, 378.0], [5200.0, 1075.0], [5400.0, 19.0], [5500.0, 7.0], [5600.0, 8.0], [5800.0, 6.0], [5700.0, 1.0], [6000.0, 2.0], [6100.0, 2.0], [5900.0, 1.0], [6200.0, 1.0]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1500.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1500.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1500.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 101.45604395604406, "minX": 1.7923509E12, "maxY": 106.49019607843135, "series": [{"data": [[1.79235096E12, 101.45604395604406], [1.7923509E12, 106.49019607843135]], "isOverall": false, "label": "Fila 1500 hilos / 75 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235096E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 5248.0, "minX": 1.0, "maxY": 5663.333333333333, "series": [{"data": [[2.0, 5301.0], [3.0, 5283.0], [4.0, 5287.0], [5.0, 5282.0], [6.0, 5252.0], [7.0, 5295.0], [8.0, 5271.0], [10.0, 5271.5], [11.0, 5255.0], [12.0, 5295.0], [13.0, 5249.0], [14.0, 5262.0], [15.0, 5265.0], [16.0, 5270.0], [17.0, 5310.0], [18.0, 5250.0], [19.0, 5613.0], [20.0, 5269.0], [21.0, 5253.0], [22.0, 5264.0], [23.0, 5258.0], [24.0, 5252.0], [25.0, 5275.0], [26.0, 5254.0], [27.0, 5269.0], [28.0, 5263.0], [29.0, 5295.0], [30.0, 5269.0], [31.0, 5300.0], [33.0, 5263.0], [32.0, 5276.0], [35.0, 5287.0], [34.0, 5298.0], [37.0, 5270.0], [36.0, 5277.0], [39.0, 5273.0], [38.0, 5266.0], [41.0, 5299.0], [40.0, 5273.0], [43.0, 5301.0], [42.0, 5261.0], [45.0, 5251.0], [44.0, 5310.0], [47.0, 5297.0], [46.0, 5297.0], [49.0, 5266.0], [48.0, 5267.0], [51.0, 5250.0], [50.0, 5248.0], [53.0, 5265.0], [52.0, 5294.0], [55.0, 5263.0], [54.0, 5251.0], [57.0, 5264.0], [56.0, 5272.0], [59.0, 5268.0], [58.0, 5269.0], [61.0, 5278.0], [60.0, 5252.0], [63.0, 5266.0], [62.0, 5270.0], [67.0, 5261.0], [66.0, 5650.0], [65.0, 5265.0], [64.0, 5258.0], [71.0, 5300.0], [70.0, 5298.0], [69.0, 5265.0], [68.0, 5277.0], [75.0, 5268.0], [74.0, 5251.0], [73.0, 5268.0], [72.0, 5267.0], [79.0, 5265.0], [78.0, 5267.0], [77.0, 5297.0], [76.0, 5306.0], [83.0, 5265.0], [82.0, 5254.0], [81.0, 5268.0], [80.0, 5261.0], [87.0, 5274.0], [86.0, 5296.0], [85.0, 5262.0], [84.0, 5268.0], [91.0, 5272.0], [90.0, 5266.0], [89.0, 5256.0], [88.0, 5270.0], [95.0, 5306.0], [94.0, 5303.0], [93.0, 5255.0], [92.0, 5302.0], [99.0, 5289.0], [98.0, 5283.0], [97.0, 5277.0], [96.0, 5275.0], [103.0, 5273.0], [102.0, 5303.0], [101.0, 5271.0], [100.0, 5248.0], [106.0, 5277.743321718927], [107.0, 5309.397932816534], [105.0, 5250.111111111111], [104.0, 5310.0], [110.0, 5421.5], [109.0, 5438.35294117647], [111.0, 5663.333333333333], [108.0, 5341.287878787881], [113.0, 5630.4], [112.0, 5525.75], [114.0, 5391.0], [115.0, 5508.0], [116.0, 5615.4], [1.0, 5282.0]], "isOverall": false, "label": "POST venta", "isController": false}, {"data": [[102.82533333333329, 5296.227999999999]], "isOverall": false, "label": "POST venta-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 116.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3930.4, "minX": 1.7923509E12, "maxY": 16525.6, "series": [{"data": [[1.79235096E12, 16525.6], [1.7923509E12, 6174.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79235096E12, 10519.6], [1.7923509E12, 3930.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235096E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5290.794117647057, "minX": 1.7923509E12, "maxY": 5298.258241758236, "series": [{"data": [[1.79235096E12, 5298.258241758236], [1.7923509E12, 5290.794117647057]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235096E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5290.7573529411775, "minX": 1.7923509E12, "maxY": 5298.230769230766, "series": [{"data": [[1.79235096E12, 5298.230769230766], [1.7923509E12, 5290.7573529411775]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235096E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 166.95146520146508, "minX": 1.7923509E12, "maxY": 172.51960784313715, "series": [{"data": [[1.79235096E12, 166.95146520146508], [1.7923509E12, 172.51960784313715]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235096E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5246.0, "minX": 1.7923509E12, "maxY": 6264.0, "series": [{"data": [[1.79235096E12, 6195.0], [1.7923509E12, 6264.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79235096E12, 5246.0], [1.7923509E12, 5247.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79235096E12, 5335.0], [1.7923509E12, 5320.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79235096E12, 5715.369999999994], [1.7923509E12, 5470.489999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79235096E12, 5278.0], [1.7923509E12, 5278.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79235096E12, 5370.0], [1.7923509E12, 5341.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235096E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5273.0, "minX": 9.0, "maxY": 5353.5, "series": [{"data": [[9.0, 5273.0], [18.0, 5275.5], [19.0, 5278.0], [20.0, 5278.5], [10.0, 5282.5], [21.0, 5276.0], [22.0, 5281.0], [24.0, 5353.5], [13.0, 5292.0], [27.0, 5353.0], [15.0, 5299.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 5273.0, "minX": 9.0, "maxY": 5353.5, "series": [{"data": [[9.0, 5273.0], [18.0, 5275.5], [19.0, 5278.0], [20.0, 5278.5], [10.0, 5282.5], [21.0, 5276.0], [22.0, 5281.0], [24.0, 5353.5], [13.0, 5292.0], [27.0, 5353.0], [15.0, 5299.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.583333333333334, "minX": 1.7923509E12, "maxY": 16.416666666666668, "series": [{"data": [[1.79235096E12, 16.416666666666668], [1.7923509E12, 8.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235096E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.8, "minX": 1.7923509E12, "maxY": 18.2, "series": [{"data": [[1.79235096E12, 18.2], [1.7923509E12, 6.8]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235096E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.8, "minX": 1.7923509E12, "maxY": 18.2, "series": [{"data": [[1.79235096E12, 18.2], [1.7923509E12, 6.8]], "isOverall": false, "label": "POST venta-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235096E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.8, "minX": 1.7923509E12, "maxY": 18.2, "series": [{"data": [[1.79235096E12, 18.2], [1.7923509E12, 6.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235096E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

