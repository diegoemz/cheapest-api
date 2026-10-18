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
        data: {"result": {"minY": 72.0, "minX": 0.0, "maxY": 3666.0, "series": [{"data": [[0.0, 72.0], [0.1, 73.0], [0.2, 74.0], [0.3, 74.0], [0.4, 74.0], [0.5, 74.0], [0.6, 74.0], [0.7, 74.0], [0.8, 75.0], [0.9, 75.0], [1.0, 75.0], [1.1, 75.0], [1.2, 75.0], [1.3, 75.0], [1.4, 75.0], [1.5, 75.0], [1.6, 75.0], [1.7, 75.0], [1.8, 76.0], [1.9, 76.0], [2.0, 76.0], [2.1, 76.0], [2.2, 76.0], [2.3, 76.0], [2.4, 76.0], [2.5, 76.0], [2.6, 76.0], [2.7, 76.0], [2.8, 76.0], [2.9, 76.0], [3.0, 76.0], [3.1, 77.0], [3.2, 77.0], [3.3, 77.0], [3.4, 77.0], [3.5, 77.0], [3.6, 77.0], [3.7, 77.0], [3.8, 77.0], [3.9, 77.0], [4.0, 77.0], [4.1, 77.0], [4.2, 77.0], [4.3, 77.0], [4.4, 77.0], [4.5, 77.0], [4.6, 78.0], [4.7, 78.0], [4.8, 78.0], [4.9, 78.0], [5.0, 78.0], [5.1, 78.0], [5.2, 78.0], [5.3, 78.0], [5.4, 78.0], [5.5, 78.0], [5.6, 78.0], [5.7, 78.0], [5.8, 78.0], [5.9, 78.0], [6.0, 78.0], [6.1, 78.0], [6.2, 78.0], [6.3, 78.0], [6.4, 79.0], [6.5, 79.0], [6.6, 79.0], [6.7, 79.0], [6.8, 79.0], [6.9, 79.0], [7.0, 79.0], [7.1, 79.0], [7.2, 79.0], [7.3, 79.0], [7.4, 79.0], [7.5, 79.0], [7.6, 79.0], [7.7, 79.0], [7.8, 79.0], [7.9, 79.0], [8.0, 79.0], [8.1, 79.0], [8.2, 79.0], [8.3, 79.0], [8.4, 79.0], [8.5, 79.0], [8.6, 79.0], [8.7, 79.0], [8.8, 79.0], [8.9, 79.0], [9.0, 80.0], [9.1, 80.0], [9.2, 80.0], [9.3, 80.0], [9.4, 80.0], [9.5, 80.0], [9.6, 80.0], [9.7, 80.0], [9.8, 80.0], [9.9, 80.0], [10.0, 80.0], [10.1, 80.0], [10.2, 80.0], [10.3, 80.0], [10.4, 80.0], [10.5, 80.0], [10.6, 80.0], [10.7, 80.0], [10.8, 80.0], [10.9, 80.0], [11.0, 80.0], [11.1, 80.0], [11.2, 80.0], [11.3, 80.0], [11.4, 80.0], [11.5, 80.0], [11.6, 80.0], [11.7, 80.0], [11.8, 80.0], [11.9, 80.0], [12.0, 80.0], [12.1, 81.0], [12.2, 81.0], [12.3, 81.0], [12.4, 81.0], [12.5, 81.0], [12.6, 81.0], [12.7, 81.0], [12.8, 81.0], [12.9, 81.0], [13.0, 81.0], [13.1, 81.0], [13.2, 81.0], [13.3, 81.0], [13.4, 81.0], [13.5, 81.0], [13.6, 81.0], [13.7, 81.0], [13.8, 81.0], [13.9, 81.0], [14.0, 81.0], [14.1, 81.0], [14.2, 81.0], [14.3, 81.0], [14.4, 81.0], [14.5, 81.0], [14.6, 81.0], [14.7, 81.0], [14.8, 81.0], [14.9, 81.0], [15.0, 81.0], [15.1, 81.0], [15.2, 81.0], [15.3, 82.0], [15.4, 82.0], [15.5, 82.0], [15.6, 82.0], [15.7, 82.0], [15.8, 82.0], [15.9, 82.0], [16.0, 82.0], [16.1, 82.0], [16.2, 82.0], [16.3, 82.0], [16.4, 82.0], [16.5, 82.0], [16.6, 82.0], [16.7, 82.0], [16.8, 82.0], [16.9, 82.0], [17.0, 82.0], [17.1, 82.0], [17.2, 82.0], [17.3, 82.0], [17.4, 82.0], [17.5, 82.0], [17.6, 82.0], [17.7, 82.0], [17.8, 82.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 82.0], [18.3, 82.0], [18.4, 82.0], [18.5, 82.0], [18.6, 82.0], [18.7, 83.0], [18.8, 83.0], [18.9, 83.0], [19.0, 83.0], [19.1, 83.0], [19.2, 83.0], [19.3, 83.0], [19.4, 83.0], [19.5, 83.0], [19.6, 83.0], [19.7, 83.0], [19.8, 83.0], [19.9, 83.0], [20.0, 83.0], [20.1, 83.0], [20.2, 83.0], [20.3, 83.0], [20.4, 83.0], [20.5, 83.0], [20.6, 83.0], [20.7, 83.0], [20.8, 83.0], [20.9, 83.0], [21.0, 83.0], [21.1, 83.0], [21.2, 83.0], [21.3, 83.0], [21.4, 83.0], [21.5, 83.0], [21.6, 83.0], [21.7, 83.0], [21.8, 84.0], [21.9, 84.0], [22.0, 84.0], [22.1, 84.0], [22.2, 84.0], [22.3, 84.0], [22.4, 84.0], [22.5, 84.0], [22.6, 84.0], [22.7, 84.0], [22.8, 84.0], [22.9, 84.0], [23.0, 84.0], [23.1, 84.0], [23.2, 84.0], [23.3, 84.0], [23.4, 84.0], [23.5, 84.0], [23.6, 84.0], [23.7, 84.0], [23.8, 84.0], [23.9, 84.0], [24.0, 84.0], [24.1, 84.0], [24.2, 84.0], [24.3, 84.0], [24.4, 84.0], [24.5, 85.0], [24.6, 85.0], [24.7, 85.0], [24.8, 85.0], [24.9, 85.0], [25.0, 85.0], [25.1, 85.0], [25.2, 85.0], [25.3, 85.0], [25.4, 85.0], [25.5, 85.0], [25.6, 85.0], [25.7, 85.0], [25.8, 85.0], [25.9, 85.0], [26.0, 85.0], [26.1, 85.0], [26.2, 85.0], [26.3, 85.0], [26.4, 85.0], [26.5, 85.0], [26.6, 85.0], [26.7, 85.0], [26.8, 85.0], [26.9, 85.0], [27.0, 85.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 86.0], [27.6, 86.0], [27.7, 86.0], [27.8, 86.0], [27.9, 86.0], [28.0, 86.0], [28.1, 86.0], [28.2, 86.0], [28.3, 86.0], [28.4, 86.0], [28.5, 86.0], [28.6, 86.0], [28.7, 86.0], [28.8, 86.0], [28.9, 86.0], [29.0, 86.0], [29.1, 86.0], [29.2, 87.0], [29.3, 87.0], [29.4, 87.0], [29.5, 87.0], [29.6, 87.0], [29.7, 87.0], [29.8, 87.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 87.0], [30.4, 87.0], [30.5, 87.0], [30.6, 87.0], [30.7, 87.0], [30.8, 87.0], [30.9, 87.0], [31.0, 88.0], [31.1, 88.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 88.0], [31.6, 88.0], [31.7, 88.0], [31.8, 88.0], [31.9, 88.0], [32.0, 88.0], [32.1, 88.0], [32.2, 88.0], [32.3, 88.0], [32.4, 88.0], [32.5, 89.0], [32.6, 89.0], [32.7, 89.0], [32.8, 89.0], [32.9, 89.0], [33.0, 89.0], [33.1, 89.0], [33.2, 89.0], [33.3, 89.0], [33.4, 89.0], [33.5, 89.0], [33.6, 89.0], [33.7, 89.0], [33.8, 89.0], [33.9, 89.0], [34.0, 89.0], [34.1, 89.0], [34.2, 89.0], [34.3, 90.0], [34.4, 90.0], [34.5, 90.0], [34.6, 90.0], [34.7, 90.0], [34.8, 90.0], [34.9, 90.0], [35.0, 90.0], [35.1, 90.0], [35.2, 90.0], [35.3, 90.0], [35.4, 90.0], [35.5, 90.0], [35.6, 90.0], [35.7, 90.0], [35.8, 90.0], [35.9, 91.0], [36.0, 91.0], [36.1, 91.0], [36.2, 91.0], [36.3, 91.0], [36.4, 91.0], [36.5, 91.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 91.0], [37.0, 91.0], [37.1, 91.0], [37.2, 91.0], [37.3, 91.0], [37.4, 91.0], [37.5, 91.0], [37.6, 91.0], [37.7, 91.0], [37.8, 92.0], [37.9, 92.0], [38.0, 92.0], [38.1, 92.0], [38.2, 92.0], [38.3, 92.0], [38.4, 92.0], [38.5, 92.0], [38.6, 92.0], [38.7, 92.0], [38.8, 92.0], [38.9, 92.0], [39.0, 92.0], [39.1, 92.0], [39.2, 92.0], [39.3, 92.0], [39.4, 92.0], [39.5, 92.0], [39.6, 93.0], [39.7, 93.0], [39.8, 93.0], [39.9, 93.0], [40.0, 93.0], [40.1, 93.0], [40.2, 93.0], [40.3, 93.0], [40.4, 93.0], [40.5, 93.0], [40.6, 93.0], [40.7, 93.0], [40.8, 93.0], [40.9, 93.0], [41.0, 93.0], [41.1, 93.0], [41.2, 94.0], [41.3, 94.0], [41.4, 94.0], [41.5, 94.0], [41.6, 94.0], [41.7, 94.0], [41.8, 94.0], [41.9, 94.0], [42.0, 94.0], [42.1, 94.0], [42.2, 94.0], [42.3, 94.0], [42.4, 94.0], [42.5, 94.0], [42.6, 94.0], [42.7, 94.0], [42.8, 95.0], [42.9, 95.0], [43.0, 95.0], [43.1, 95.0], [43.2, 95.0], [43.3, 95.0], [43.4, 95.0], [43.5, 95.0], [43.6, 95.0], [43.7, 95.0], [43.8, 95.0], [43.9, 95.0], [44.0, 95.0], [44.1, 95.0], [44.2, 96.0], [44.3, 96.0], [44.4, 96.0], [44.5, 96.0], [44.6, 96.0], [44.7, 96.0], [44.8, 96.0], [44.9, 96.0], [45.0, 96.0], [45.1, 96.0], [45.2, 96.0], [45.3, 96.0], [45.4, 97.0], [45.5, 97.0], [45.6, 97.0], [45.7, 97.0], [45.8, 97.0], [45.9, 97.0], [46.0, 97.0], [46.1, 97.0], [46.2, 97.0], [46.3, 97.0], [46.4, 98.0], [46.5, 98.0], [46.6, 98.0], [46.7, 98.0], [46.8, 98.0], [46.9, 98.0], [47.0, 98.0], [47.1, 98.0], [47.2, 98.0], [47.3, 98.0], [47.4, 99.0], [47.5, 99.0], [47.6, 99.0], [47.7, 99.0], [47.8, 99.0], [47.9, 99.0], [48.0, 99.0], [48.1, 99.0], [48.2, 99.0], [48.3, 100.0], [48.4, 100.0], [48.5, 100.0], [48.6, 100.0], [48.7, 100.0], [48.8, 100.0], [48.9, 100.0], [49.0, 100.0], [49.1, 100.0], [49.2, 101.0], [49.3, 101.0], [49.4, 101.0], [49.5, 101.0], [49.6, 101.0], [49.7, 101.0], [49.8, 101.0], [49.9, 101.0], [50.0, 102.0], [50.1, 102.0], [50.2, 102.0], [50.3, 102.0], [50.4, 102.0], [50.5, 102.0], [50.6, 102.0], [50.7, 103.0], [50.8, 103.0], [50.9, 103.0], [51.0, 103.0], [51.1, 103.0], [51.2, 103.0], [51.3, 103.0], [51.4, 104.0], [51.5, 104.0], [51.6, 104.0], [51.7, 104.0], [51.8, 104.0], [51.9, 104.0], [52.0, 104.0], [52.1, 105.0], [52.2, 105.0], [52.3, 105.0], [52.4, 105.0], [52.5, 105.0], [52.6, 105.0], [52.7, 106.0], [52.8, 106.0], [52.9, 106.0], [53.0, 106.0], [53.1, 106.0], [53.2, 106.0], [53.3, 106.0], [53.4, 107.0], [53.5, 107.0], [53.6, 107.0], [53.7, 107.0], [53.8, 107.0], [53.9, 108.0], [54.0, 108.0], [54.1, 108.0], [54.2, 108.0], [54.3, 108.0], [54.4, 108.0], [54.5, 109.0], [54.6, 109.0], [54.7, 109.0], [54.8, 109.0], [54.9, 109.0], [55.0, 109.0], [55.1, 110.0], [55.2, 110.0], [55.3, 110.0], [55.4, 110.0], [55.5, 110.0], [55.6, 110.0], [55.7, 110.0], [55.8, 111.0], [55.9, 111.0], [56.0, 111.0], [56.1, 111.0], [56.2, 111.0], [56.3, 111.0], [56.4, 112.0], [56.5, 112.0], [56.6, 112.0], [56.7, 112.0], [56.8, 112.0], [56.9, 112.0], [57.0, 113.0], [57.1, 113.0], [57.2, 113.0], [57.3, 113.0], [57.4, 113.0], [57.5, 114.0], [57.6, 114.0], [57.7, 114.0], [57.8, 114.0], [57.9, 114.0], [58.0, 115.0], [58.1, 115.0], [58.2, 115.0], [58.3, 115.0], [58.4, 115.0], [58.5, 115.0], [58.6, 116.0], [58.7, 116.0], [58.8, 116.0], [58.9, 116.0], [59.0, 117.0], [59.1, 117.0], [59.2, 117.0], [59.3, 117.0], [59.4, 117.0], [59.5, 118.0], [59.6, 118.0], [59.7, 118.0], [59.8, 118.0], [59.9, 119.0], [60.0, 119.0], [60.1, 119.0], [60.2, 119.0], [60.3, 120.0], [60.4, 120.0], [60.5, 120.0], [60.6, 120.0], [60.7, 121.0], [60.8, 121.0], [60.9, 121.0], [61.0, 122.0], [61.1, 122.0], [61.2, 122.0], [61.3, 122.0], [61.4, 123.0], [61.5, 123.0], [61.6, 123.0], [61.7, 123.0], [61.8, 124.0], [61.9, 124.0], [62.0, 124.0], [62.1, 124.0], [62.2, 125.0], [62.3, 125.0], [62.4, 126.0], [62.5, 126.0], [62.6, 126.0], [62.7, 127.0], [62.8, 127.0], [62.9, 127.0], [63.0, 128.0], [63.1, 128.0], [63.2, 129.0], [63.3, 129.0], [63.4, 130.0], [63.5, 130.0], [63.6, 131.0], [63.7, 132.0], [63.8, 132.0], [63.9, 133.0], [64.0, 133.0], [64.1, 134.0], [64.2, 135.0], [64.3, 135.0], [64.4, 136.0], [64.5, 137.0], [64.6, 138.0], [64.7, 138.0], [64.8, 139.0], [64.9, 140.0], [65.0, 141.0], [65.1, 142.0], [65.2, 143.0], [65.3, 145.0], [65.4, 146.0], [65.5, 148.0], [65.6, 149.0], [65.7, 151.0], [65.8, 153.0], [65.9, 156.0], [66.0, 158.0], [66.1, 160.0], [66.2, 162.0], [66.3, 165.0], [66.4, 166.0], [66.5, 168.0], [66.6, 169.0], [66.7, 171.0], [66.8, 172.0], [66.9, 173.0], [67.0, 174.0], [67.1, 175.0], [67.2, 176.0], [67.3, 177.0], [67.4, 178.0], [67.5, 179.0], [67.6, 180.0], [67.7, 181.0], [67.8, 182.0], [67.9, 183.0], [68.0, 184.0], [68.1, 185.0], [68.2, 186.0], [68.3, 188.0], [68.4, 189.0], [68.5, 190.0], [68.6, 191.0], [68.7, 192.0], [68.8, 193.0], [68.9, 194.0], [69.0, 196.0], [69.1, 197.0], [69.2, 198.0], [69.3, 199.0], [69.4, 200.0], [69.5, 202.0], [69.6, 203.0], [69.7, 204.0], [69.8, 205.0], [69.9, 206.0], [70.0, 207.0], [70.1, 209.0], [70.2, 209.0], [70.3, 210.0], [70.4, 211.0], [70.5, 213.0], [70.6, 215.0], [70.7, 216.0], [70.8, 218.0], [70.9, 220.0], [71.0, 222.0], [71.1, 224.0], [71.2, 226.0], [71.3, 231.0], [71.4, 235.0], [71.5, 243.0], [71.6, 254.0], [71.7, 258.0], [71.8, 263.0], [71.9, 266.0], [72.0, 269.0], [72.1, 271.0], [72.2, 273.0], [72.3, 275.0], [72.4, 277.0], [72.5, 279.0], [72.6, 281.0], [72.7, 282.0], [72.8, 284.0], [72.9, 286.0], [73.0, 287.0], [73.1, 288.0], [73.2, 289.0], [73.3, 291.0], [73.4, 292.0], [73.5, 293.0], [73.6, 294.0], [73.7, 295.0], [73.8, 297.0], [73.9, 298.0], [74.0, 300.0], [74.1, 301.0], [74.2, 303.0], [74.3, 304.0], [74.4, 306.0], [74.5, 307.0], [74.6, 308.0], [74.7, 310.0], [74.8, 312.0], [74.9, 314.0], [75.0, 317.0], [75.1, 319.0], [75.2, 322.0], [75.3, 324.0], [75.4, 328.0], [75.5, 333.0], [75.6, 342.0], [75.7, 352.0], [75.8, 361.0], [75.9, 366.0], [76.0, 370.0], [76.1, 373.0], [76.2, 376.0], [76.3, 378.0], [76.4, 381.0], [76.5, 382.0], [76.6, 384.0], [76.7, 386.0], [76.8, 388.0], [76.9, 389.0], [77.0, 391.0], [77.1, 392.0], [77.2, 394.0], [77.3, 395.0], [77.4, 397.0], [77.5, 398.0], [77.6, 400.0], [77.7, 401.0], [77.8, 403.0], [77.9, 404.0], [78.0, 405.0], [78.1, 407.0], [78.2, 409.0], [78.3, 411.0], [78.4, 413.0], [78.5, 415.0], [78.6, 417.0], [78.7, 419.0], [78.8, 421.0], [78.9, 423.0], [79.0, 427.0], [79.1, 432.0], [79.2, 439.0], [79.3, 453.0], [79.4, 461.0], [79.5, 465.0], [79.6, 470.0], [79.7, 473.0], [79.8, 475.0], [79.9, 479.0], [80.0, 481.0], [80.1, 484.0], [80.2, 486.0], [80.3, 487.0], [80.4, 489.0], [80.5, 491.0], [80.6, 492.0], [80.7, 494.0], [80.8, 496.0], [80.9, 498.0], [81.0, 499.0], [81.1, 501.0], [81.2, 503.0], [81.3, 506.0], [81.4, 508.0], [81.5, 512.0], [81.6, 516.0], [81.7, 519.0], [81.8, 525.0], [81.9, 536.0], [82.0, 554.0], [82.1, 560.0], [82.2, 569.0], [82.3, 574.0], [82.4, 579.0], [82.5, 583.0], [82.6, 585.0], [82.7, 588.0], [82.8, 590.0], [82.9, 592.0], [83.0, 594.0], [83.1, 596.0], [83.2, 598.0], [83.3, 601.0], [83.4, 603.0], [83.5, 604.0], [83.6, 606.0], [83.7, 608.0], [83.8, 610.0], [83.9, 612.0], [84.0, 615.0], [84.1, 618.0], [84.2, 620.0], [84.3, 623.0], [84.4, 626.0], [84.5, 631.0], [84.6, 644.0], [84.7, 658.0], [84.8, 667.0], [84.9, 670.0], [85.0, 673.0], [85.1, 677.0], [85.2, 679.0], [85.3, 681.0], [85.4, 683.0], [85.5, 685.0], [85.6, 688.0], [85.7, 690.0], [85.8, 692.0], [85.9, 694.0], [86.0, 697.0], [86.1, 699.0], [86.2, 700.0], [86.3, 702.0], [86.4, 704.0], [86.5, 706.0], [86.6, 709.0], [86.7, 712.0], [86.8, 714.0], [86.9, 717.0], [87.0, 720.0], [87.1, 723.0], [87.2, 729.0], [87.3, 743.0], [87.4, 760.0], [87.5, 769.0], [87.6, 774.0], [87.7, 780.0], [87.8, 783.0], [87.9, 786.0], [88.0, 789.0], [88.1, 792.0], [88.2, 795.0], [88.3, 797.0], [88.4, 800.0], [88.5, 802.0], [88.6, 806.0], [88.7, 809.0], [88.8, 813.0], [88.9, 816.0], [89.0, 822.0], [89.1, 828.0], [89.2, 841.0], [89.3, 866.0], [89.4, 872.0], [89.5, 878.0], [89.6, 882.0], [89.7, 886.0], [89.8, 890.0], [89.9, 892.0], [90.0, 897.0], [90.1, 901.0], [90.2, 905.0], [90.3, 910.0], [90.4, 918.0], [90.5, 930.0], [90.6, 964.0], [90.7, 983.0], [90.8, 991.0], [90.9, 997.0], [91.0, 1002.0], [91.1, 1007.0], [91.2, 1012.0], [91.3, 1016.0], [91.4, 1022.0], [91.5, 1027.0], [91.6, 1048.0], [91.7, 1063.0], [91.8, 1071.0], [91.9, 1076.0], [92.0, 1080.0], [92.1, 1084.0], [92.2, 1088.0], [92.3, 1092.0], [92.4, 1097.0], [92.5, 1100.0], [92.6, 1104.0], [92.7, 1106.0], [92.8, 1111.0], [92.9, 1114.0], [93.0, 1118.0], [93.1, 1120.0], [93.2, 1123.0], [93.3, 1131.0], [93.4, 1140.0], [93.5, 1151.0], [93.6, 1160.0], [93.7, 1166.0], [93.8, 1175.0], [93.9, 1179.0], [94.0, 1184.0], [94.1, 1187.0], [94.2, 1191.0], [94.3, 1195.0], [94.4, 1199.0], [94.5, 1202.0], [94.6, 1206.0], [94.7, 1211.0], [94.8, 1216.0], [94.9, 1221.0], [95.0, 1229.0], [95.1, 1236.0], [95.2, 1245.0], [95.3, 1262.0], [95.4, 1271.0], [95.5, 1282.0], [95.6, 1287.0], [95.7, 1291.0], [95.8, 1297.0], [95.9, 1303.0], [96.0, 1307.0], [96.1, 1315.0], [96.2, 1323.0], [96.3, 1338.0], [96.4, 1370.0], [96.5, 1380.0], [96.6, 1388.0], [96.7, 1395.0], [96.8, 1401.0], [96.9, 1407.0], [97.0, 1416.0], [97.1, 1436.0], [97.2, 1471.0], [97.3, 1485.0], [97.4, 1493.0], [97.5, 1499.0], [97.6, 1506.0], [97.7, 1530.0], [97.8, 1562.0], [97.9, 1584.0], [98.0, 1594.0], [98.1, 1604.0], [98.2, 1611.0], [98.3, 1622.0], [98.4, 1666.0], [98.5, 1690.0], [98.6, 1716.0], [98.7, 1798.0], [98.8, 1860.0], [98.9, 1908.0], [99.0, 1971.0], [99.1, 2004.0], [99.2, 2077.0], [99.3, 2105.0], [99.4, 2256.0], [99.5, 2476.0], [99.6, 2619.0], [99.7, 2772.0], [99.8, 2909.0], [99.9, 3296.0]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 13808.0, "series": [{"data": [[0.0, 13808.0], [600.0, 830.0], [700.0, 646.0], [800.0, 479.0], [900.0, 250.0], [1000.0, 440.0], [1100.0, 560.0], [1200.0, 402.0], [1300.0, 269.0], [1400.0, 208.0], [1500.0, 157.0], [100.0, 6028.0], [1600.0, 138.0], [1700.0, 47.0], [1800.0, 49.0], [1900.0, 59.0], [2000.0, 55.0], [2100.0, 23.0], [2200.0, 21.0], [2300.0, 9.0], [2400.0, 13.0], [2500.0, 20.0], [2600.0, 21.0], [2700.0, 22.0], [2800.0, 16.0], [2900.0, 9.0], [3000.0, 7.0], [3100.0, 7.0], [200.0, 1326.0], [3200.0, 11.0], [3300.0, 18.0], [3400.0, 5.0], [3500.0, 3.0], [3600.0, 2.0], [300.0, 1032.0], [400.0, 985.0], [500.0, 630.0]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 708.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16843.0, "series": [{"data": [[0.0, 6369.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4685.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 708.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 16843.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 63.84073107049612, "minX": 1.79235684E12, "maxY": 149.80916523235717, "series": [{"data": [[1.79235684E12, 63.84073107049612], [1.79235696E12, 149.21081383947325], [1.7923569E12, 149.80916523235717]], "isOverall": false, "label": "Saturacion 150 hilos / 120 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235696E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 75.0, "minX": 1.0, "maxY": 2417.0, "series": [{"data": [[2.0, 594.0], [4.0, 614.5], [10.0, 552.5454545454545], [11.0, 215.5], [12.0, 149.33333333333334], [13.0, 164.25], [15.0, 375.16666666666663], [16.0, 418.0], [17.0, 397.0], [18.0, 263.6666666666667], [19.0, 519.8], [20.0, 670.0], [21.0, 537.0], [23.0, 573.0], [24.0, 631.0], [25.0, 635.5714285714286], [26.0, 658.0], [27.0, 703.25], [28.0, 617.5], [29.0, 601.6666666666666], [30.0, 588.0], [31.0, 471.6666666666667], [33.0, 487.8823529411764], [34.0, 455.1428571428571], [35.0, 441.6666666666667], [36.0, 564.25], [37.0, 422.25], [38.0, 450.4000000000001], [39.0, 510.5], [40.0, 511.0], [41.0, 571.6666666666666], [42.0, 585.0], [43.0, 614.6], [44.0, 675.5], [45.0, 658.0], [46.0, 672.0], [48.0, 597.5], [49.0, 707.5], [51.0, 565.6666666666666], [53.0, 881.6666666666666], [52.0, 593.0], [54.0, 814.1111111111112], [55.0, 979.25], [56.0, 1078.75], [57.0, 602.4], [59.0, 962.375], [60.0, 793.2], [61.0, 614.0], [62.0, 847.5], [63.0, 875.5], [64.0, 1090.2666666666667], [65.0, 876.6666666666667], [66.0, 827.3333333333334], [67.0, 852.25], [68.0, 873.4444444444445], [70.0, 753.2], [71.0, 784.0], [69.0, 690.0], [72.0, 738.1666666666666], [74.0, 704.1111111111111], [75.0, 668.3333333333334], [76.0, 782.0833333333334], [78.0, 797.0], [79.0, 788.0], [77.0, 625.0], [80.0, 827.8], [81.0, 907.0], [82.0, 885.4545454545455], [83.0, 681.0], [84.0, 912.5], [85.0, 966.8888888888889], [86.0, 1094.0], [87.0, 668.5], [88.0, 1063.75], [91.0, 1297.5], [90.0, 608.0], [89.0, 605.0], [92.0, 1388.25], [95.0, 1127.6666666666667], [94.0, 562.0], [93.0, 594.3333333333334], [96.0, 1489.75], [97.0, 1355.5], [98.0, 1389.8], [99.0, 745.0], [100.0, 1361.4285714285713], [101.0, 1261.875], [102.0, 912.3333333333333], [103.0, 1245.0909090909092], [104.0, 1118.0], [105.0, 1130.25], [106.0, 1108.857142857143], [107.0, 1063.0000000000002], [108.0, 1286.3333333333333], [110.0, 811.4444444444443], [111.0, 704.3333333333333], [112.0, 822.5], [113.0, 636.5], [114.0, 818.6666666666667], [115.0, 1138.5], [116.0, 1063.3], [117.0, 1170.7142857142856], [118.0, 1236.8], [119.0, 708.75], [121.0, 1332.9], [122.0, 1435.1818181818182], [123.0, 1609.0], [120.0, 114.0], [124.0, 1496.0], [125.0, 493.0], [127.0, 82.0], [126.0, 85.0], [130.0, 1475.4], [131.0, 983.0], [132.0, 1455.25], [133.0, 1783.7], [134.0, 1031.5], [135.0, 188.0], [129.0, 84.0], [128.0, 329.42857142857144], [136.0, 1550.5], [139.0, 1570.5], [140.0, 1860.2], [141.0, 1893.3333333333333], [142.0, 1775.25], [143.0, 1613.6666666666665], [138.0, 79.0], [137.0, 89.0], [144.0, 2417.0], [146.0, 734.5], [147.0, 826.7142857142858], [148.0, 1370.0], [150.0, 293.1927853129588], [149.0, 75.0], [1.0, 967.0]], "isOverall": false, "label": "POST venta", "isController": false}, {"data": [[148.35944764901257, 307.443174270233]], "isOverall": false, "label": "POST venta-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3293.8, "minX": 1.79235684E12, "maxY": 122790.8, "series": [{"data": [[1.79235684E12, 5796.066666666667], [1.79235696E12, 111987.51666666666], [1.7923569E12, 120022.18333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79235684E12, 3293.8], [1.79235696E12, 122790.8], [1.7923569E12, 119918.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235696E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 237.3445860764808, "minX": 1.79235684E12, "maxY": 880.0678851174933, "series": [{"data": [[1.79235684E12, 880.0678851174933], [1.79235696E12, 237.3445860764808], [1.7923569E12, 363.4925415949531]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235696E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 237.3392632021275, "minX": 1.79235684E12, "maxY": 880.0365535248035, "series": [{"data": [[1.79235684E12, 880.0365535248035], [1.79235696E12, 237.3392632021275], [1.7923569E12, 363.48608720596553]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235696E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.639865527384788, "minX": 1.79235684E12, "maxY": 46.443864229764976, "series": [{"data": [[1.79235684E12, 46.443864229764976], [1.79235696E12, 0.639865527384788], [1.7923569E12, 2.142785427423984]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235696E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 97.0, "minX": 1.79235684E12, "maxY": 3666.0, "series": [{"data": [[1.79235684E12, 1760.0], [1.79235696E12, 1867.0], [1.7923569E12, 3666.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79235684E12, 116.0], [1.79235696E12, 97.0], [1.7923569E12, 98.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79235684E12, 1421.6000000000001], [1.79235696E12, 1115.0], [1.7923569E12, 1476.1000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79235684E12, 1664.6799999999994], [1.79235696E12, 1609.0], [1.7923569E12, 2900.2199999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79235684E12, 844.0], [1.79235696E12, 335.0], [1.7923569E12, 506.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79235684E12, 1500.6], [1.79235696E12, 1249.3999999999996], [1.7923569E12, 1928.6500000000005]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235696E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 81.0, "minX": 28.0, "maxY": 2795.0, "series": [{"data": [[28.0, 1949.5], [31.0, 2795.0], [33.0, 686.5], [35.0, 2533.0], [47.0, 1015.0], [49.0, 509.0], [52.0, 578.5], [65.0, 1375.0], [68.0, 613.5], [74.0, 1824.5], [73.0, 1998.0], [80.0, 800.0], [89.0, 1402.0], [94.0, 1135.0], [93.0, 1360.0], [96.0, 1292.5], [102.0, 1824.5], [104.0, 1213.0], [110.0, 1796.0], [115.0, 1597.0], [126.0, 1277.0], [131.0, 1492.0], [133.0, 1081.0], [129.0, 1594.0], [144.0, 1289.0], [146.0, 494.0], [151.0, 557.0], [158.0, 807.0], [160.0, 1079.5], [164.0, 453.0], [167.0, 997.5], [172.0, 1118.0], [175.0, 713.0], [177.0, 276.0], [184.0, 1195.0], [197.0, 599.0], [198.0, 511.5], [192.0, 730.0], [201.0, 285.0], [212.0, 1175.0], [208.0, 1224.0], [226.0, 216.5], [236.0, 278.0], [234.0, 266.0], [232.0, 192.0], [239.0, 513.5], [247.0, 185.0], [253.0, 118.0], [255.0, 210.0], [261.0, 277.0], [265.0, 136.0], [263.0, 235.0], [268.0, 256.5], [269.0, 216.0], [270.0, 697.0], [256.0, 117.0], [257.0, 184.5], [274.0, 911.0], [282.0, 122.5], [273.0, 682.0], [278.0, 783.0], [276.0, 130.0], [286.0, 117.0], [277.0, 181.0], [292.0, 135.0], [300.0, 109.0], [290.0, 207.0], [298.0, 116.0], [297.0, 115.0], [295.0, 120.0], [296.0, 317.5], [299.0, 188.0], [314.0, 605.0], [311.0, 118.0], [306.0, 824.0], [304.0, 116.0], [309.0, 127.0], [307.0, 569.0], [316.0, 385.0], [333.0, 148.0], [327.0, 613.0], [335.0, 484.5], [324.0, 271.0], [323.0, 209.5], [330.0, 317.0], [325.0, 465.0], [334.0, 190.0], [331.0, 552.0], [346.0, 415.0], [341.0, 480.0], [336.0, 283.0], [355.0, 679.0], [362.0, 610.0], [356.0, 627.0], [353.0, 621.5], [370.0, 692.5], [378.0, 699.0], [390.0, 788.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[104.0, 97.0], [115.0, 83.5], [129.0, 88.0], [146.0, 94.0], [151.0, 84.0], [158.0, 86.0], [164.0, 97.0], [167.0, 85.0], [172.0, 83.5], [175.0, 83.0], [177.0, 87.0], [184.0, 84.0], [197.0, 81.0], [198.0, 89.0], [192.0, 94.0], [201.0, 88.0], [212.0, 100.0], [208.0, 84.0], [226.0, 82.0], [236.0, 84.0], [234.0, 87.0], [232.0, 88.0], [239.0, 87.0], [247.0, 93.0], [253.0, 86.0], [255.0, 81.0], [261.0, 86.0], [265.0, 83.0], [263.0, 87.0], [268.0, 90.0], [269.0, 88.0], [270.0, 87.0], [256.0, 83.0], [257.0, 92.0], [274.0, 84.0], [282.0, 86.0], [273.0, 87.0], [278.0, 85.0], [276.0, 85.0], [286.0, 85.0], [277.0, 90.0], [292.0, 89.0], [300.0, 84.0], [290.0, 90.0], [298.0, 86.0], [297.0, 87.0], [295.0, 90.0], [296.0, 86.0], [299.0, 86.0], [314.0, 88.0], [311.0, 84.0], [306.0, 82.0], [304.0, 85.0], [309.0, 86.0], [307.0, 89.0], [316.0, 83.0], [333.0, 84.0], [327.0, 86.5], [335.0, 84.0], [324.0, 88.0], [323.0, 86.0], [330.0, 92.0], [325.0, 89.0], [334.0, 94.0], [331.0, 91.0], [346.0, 84.0], [341.0, 84.5], [336.0, 88.0], [355.0, 89.0], [362.0, 85.0], [356.0, 87.0], [353.0, 91.0], [370.0, 84.0], [378.0, 91.0], [390.0, 93.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 390.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 81.0, "minX": 28.0, "maxY": 2795.0, "series": [{"data": [[28.0, 1949.5], [31.0, 2795.0], [33.0, 686.5], [35.0, 2533.0], [47.0, 1015.0], [49.0, 509.0], [52.0, 578.5], [65.0, 1375.0], [68.0, 613.5], [74.0, 1824.5], [73.0, 1998.0], [80.0, 800.0], [89.0, 1402.0], [94.0, 1135.0], [93.0, 1360.0], [96.0, 1292.5], [102.0, 1824.5], [104.0, 1213.0], [110.0, 1796.0], [115.0, 1597.0], [126.0, 1277.0], [131.0, 1492.0], [133.0, 1081.0], [129.0, 1594.0], [144.0, 1289.0], [146.0, 494.0], [151.0, 557.0], [158.0, 807.0], [160.0, 1079.5], [164.0, 453.0], [167.0, 997.5], [172.0, 1118.0], [175.0, 712.5], [177.0, 276.0], [184.0, 1195.0], [197.0, 599.0], [198.0, 511.5], [192.0, 730.0], [201.0, 285.0], [212.0, 1175.0], [208.0, 1224.0], [226.0, 216.5], [236.0, 278.0], [234.0, 266.0], [232.0, 192.0], [239.0, 513.5], [247.0, 185.0], [253.0, 118.0], [255.0, 210.0], [261.0, 277.0], [265.0, 136.0], [263.0, 235.0], [268.0, 256.5], [269.0, 216.0], [270.0, 697.0], [256.0, 117.0], [257.0, 184.5], [274.0, 911.0], [282.0, 122.5], [273.0, 682.0], [278.0, 783.0], [276.0, 130.0], [286.0, 117.0], [277.0, 181.0], [292.0, 135.0], [300.0, 109.0], [290.0, 207.0], [298.0, 116.0], [297.0, 115.0], [295.0, 120.0], [296.0, 317.5], [299.0, 188.0], [314.0, 605.0], [311.0, 118.0], [306.0, 824.0], [304.0, 116.0], [309.0, 127.0], [307.0, 569.0], [316.0, 385.0], [333.0, 148.0], [327.0, 613.0], [335.0, 484.5], [324.0, 271.0], [323.0, 209.5], [330.0, 317.0], [325.0, 465.0], [334.0, 190.0], [331.0, 552.0], [346.0, 415.0], [341.0, 480.0], [336.0, 283.0], [355.0, 679.0], [362.0, 610.0], [356.0, 627.0], [353.0, 621.5], [370.0, 692.5], [378.0, 699.0], [390.0, 788.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[104.0, 97.0], [115.0, 83.5], [129.0, 88.0], [146.0, 94.0], [151.0, 84.0], [158.0, 86.0], [164.0, 97.0], [167.0, 85.0], [172.0, 83.5], [175.0, 83.0], [177.0, 87.0], [184.0, 84.0], [197.0, 81.0], [198.0, 89.0], [192.0, 94.0], [201.0, 88.0], [212.0, 100.0], [208.0, 84.0], [226.0, 82.0], [236.0, 84.0], [234.0, 87.0], [232.0, 88.0], [239.0, 87.0], [247.0, 93.0], [253.0, 86.0], [255.0, 81.0], [261.0, 86.0], [265.0, 83.0], [263.0, 87.0], [268.0, 90.0], [269.0, 88.0], [270.0, 87.0], [256.0, 83.0], [257.0, 92.0], [274.0, 84.0], [282.0, 86.0], [273.0, 87.0], [278.0, 85.0], [276.0, 85.0], [286.0, 85.0], [277.0, 90.0], [292.0, 89.0], [300.0, 84.0], [290.0, 90.0], [298.0, 86.0], [297.0, 87.0], [295.0, 90.0], [296.0, 86.0], [299.0, 86.0], [314.0, 88.0], [311.0, 84.0], [306.0, 82.0], [304.0, 85.0], [309.0, 86.0], [307.0, 89.0], [316.0, 83.0], [333.0, 84.0], [327.0, 86.5], [335.0, 84.0], [324.0, 88.0], [323.0, 86.0], [330.0, 92.0], [325.0, 89.0], [334.0, 94.0], [331.0, 91.0], [346.0, 84.0], [341.0, 84.5], [336.0, 88.0], [355.0, 89.0], [362.0, 85.0], [356.0, 87.0], [353.0, 91.0], [370.0, 84.0], [378.0, 91.0], [390.0, 93.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 390.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.216666666666667, "minX": 1.79235684E12, "maxY": 237.46666666666667, "series": [{"data": [[1.79235684E12, 8.216666666666667], [1.79235696E12, 237.46666666666667], [1.7923569E12, 231.06666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235696E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.79235684E12, "maxY": 149.65, "series": [{"data": [[1.79235684E12, 6.383333333333334], [1.79235696E12, 88.18333333333334], [1.7923569E12, 101.46666666666667]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.79235696E12, 0.13333333333333333], [1.7923569E12, 0.016666666666666666]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.79235696E12, 149.65], [1.7923569E12, 130.91666666666666]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235696E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.383333333333334, "minX": 1.79235684E12, "maxY": 149.78333333333333, "series": [{"data": [[1.79235696E12, 149.78333333333333], [1.7923569E12, 130.93333333333334]], "isOverall": false, "label": "POST venta-failure", "isController": false}, {"data": [[1.79235684E12, 6.383333333333334], [1.79235696E12, 88.18333333333334], [1.7923569E12, 101.46666666666667]], "isOverall": false, "label": "POST venta-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235696E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.383333333333334, "minX": 1.79235684E12, "maxY": 149.78333333333333, "series": [{"data": [[1.79235684E12, 6.383333333333334], [1.79235696E12, 88.18333333333334], [1.7923569E12, 101.46666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79235696E12, 149.78333333333333], [1.7923569E12, 130.93333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235696E12, "title": "Total Transactions Per Second"}},
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

