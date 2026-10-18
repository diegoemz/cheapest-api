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
        data: {"result": {"minY": 259.0, "minX": 0.0, "maxY": 4884.0, "series": [{"data": [[0.0, 259.0], [0.1, 259.0], [0.2, 259.0], [0.3, 259.0], [0.4, 259.0], [0.5, 259.0], [0.6, 259.0], [0.7, 259.0], [0.8, 259.0], [0.9, 259.0], [1.0, 265.0], [1.1, 265.0], [1.2, 265.0], [1.3, 265.0], [1.4, 265.0], [1.5, 267.0], [1.6, 267.0], [1.7, 267.0], [1.8, 267.0], [1.9, 267.0], [2.0, 269.0], [2.1, 269.0], [2.2, 269.0], [2.3, 269.0], [2.4, 269.0], [2.5, 270.0], [2.6, 270.0], [2.7, 270.0], [2.8, 270.0], [2.9, 270.0], [3.0, 272.0], [3.1, 272.0], [3.2, 272.0], [3.3, 272.0], [3.4, 272.0], [3.5, 274.0], [3.6, 274.0], [3.7, 274.0], [3.8, 274.0], [3.9, 274.0], [4.0, 274.0], [4.1, 274.0], [4.2, 274.0], [4.3, 274.0], [4.4, 274.0], [4.5, 274.0], [4.6, 274.0], [4.7, 274.0], [4.8, 274.0], [4.9, 274.0], [5.0, 276.0], [5.1, 276.0], [5.2, 276.0], [5.3, 276.0], [5.4, 276.0], [5.5, 276.0], [5.6, 276.0], [5.7, 276.0], [5.8, 276.0], [5.9, 276.0], [6.0, 278.0], [6.1, 278.0], [6.2, 278.0], [6.3, 278.0], [6.4, 278.0], [6.5, 281.0], [6.6, 281.0], [6.7, 281.0], [6.8, 281.0], [6.9, 281.0], [7.0, 282.0], [7.1, 282.0], [7.2, 282.0], [7.3, 282.0], [7.4, 282.0], [7.5, 282.0], [7.6, 282.0], [7.7, 282.0], [7.8, 282.0], [7.9, 282.0], [8.0, 282.0], [8.1, 282.0], [8.2, 282.0], [8.3, 282.0], [8.4, 282.0], [8.5, 283.0], [8.6, 283.0], [8.7, 283.0], [8.8, 283.0], [8.9, 283.0], [9.0, 285.0], [9.1, 285.0], [9.2, 285.0], [9.3, 285.0], [9.4, 285.0], [9.5, 292.0], [9.6, 292.0], [9.7, 292.0], [9.8, 292.0], [9.9, 292.0], [10.0, 293.0], [10.1, 293.0], [10.2, 293.0], [10.3, 293.0], [10.4, 293.0], [10.5, 294.0], [10.6, 294.0], [10.7, 294.0], [10.8, 294.0], [10.9, 294.0], [11.0, 295.0], [11.1, 295.0], [11.2, 295.0], [11.3, 295.0], [11.4, 295.0], [11.5, 295.0], [11.6, 295.0], [11.7, 295.0], [11.8, 295.0], [11.9, 295.0], [12.0, 296.0], [12.1, 296.0], [12.2, 296.0], [12.3, 296.0], [12.4, 296.0], [12.5, 297.0], [12.6, 297.0], [12.7, 297.0], [12.8, 297.0], [12.9, 297.0], [13.0, 299.0], [13.1, 299.0], [13.2, 299.0], [13.3, 299.0], [13.4, 299.0], [13.5, 301.0], [13.6, 301.0], [13.7, 301.0], [13.8, 301.0], [13.9, 301.0], [14.0, 301.0], [14.1, 301.0], [14.2, 301.0], [14.3, 301.0], [14.4, 301.0], [14.5, 303.0], [14.6, 303.0], [14.7, 303.0], [14.8, 303.0], [14.9, 303.0], [15.0, 306.0], [15.1, 306.0], [15.2, 306.0], [15.3, 306.0], [15.4, 306.0], [15.5, 308.0], [15.6, 308.0], [15.7, 308.0], [15.8, 308.0], [15.9, 308.0], [16.0, 308.0], [16.1, 308.0], [16.2, 308.0], [16.3, 308.0], [16.4, 308.0], [16.5, 308.0], [16.6, 308.0], [16.7, 308.0], [16.8, 308.0], [16.9, 308.0], [17.0, 308.0], [17.1, 308.0], [17.2, 308.0], [17.3, 308.0], [17.4, 308.0], [17.5, 309.0], [17.6, 309.0], [17.7, 309.0], [17.8, 309.0], [17.9, 309.0], [18.0, 310.0], [18.1, 310.0], [18.2, 310.0], [18.3, 310.0], [18.4, 310.0], [18.5, 310.0], [18.6, 310.0], [18.7, 310.0], [18.8, 310.0], [18.9, 310.0], [19.0, 311.0], [19.1, 311.0], [19.2, 311.0], [19.3, 311.0], [19.4, 311.0], [19.5, 312.0], [19.6, 312.0], [19.7, 312.0], [19.8, 312.0], [19.9, 312.0], [20.0, 312.0], [20.1, 312.0], [20.2, 312.0], [20.3, 312.0], [20.4, 312.0], [20.5, 314.0], [20.6, 314.0], [20.7, 314.0], [20.8, 314.0], [20.9, 314.0], [21.0, 315.0], [21.1, 315.0], [21.2, 315.0], [21.3, 315.0], [21.4, 315.0], [21.5, 316.0], [21.6, 316.0], [21.7, 316.0], [21.8, 316.0], [21.9, 316.0], [22.0, 316.0], [22.1, 316.0], [22.2, 316.0], [22.3, 316.0], [22.4, 316.0], [22.5, 317.0], [22.6, 317.0], [22.7, 317.0], [22.8, 317.0], [22.9, 317.0], [23.0, 317.0], [23.1, 317.0], [23.2, 317.0], [23.3, 317.0], [23.4, 317.0], [23.5, 318.0], [23.6, 318.0], [23.7, 318.0], [23.8, 318.0], [23.9, 318.0], [24.0, 318.0], [24.1, 318.0], [24.2, 318.0], [24.3, 318.0], [24.4, 318.0], [24.5, 319.0], [24.6, 319.0], [24.7, 319.0], [24.8, 319.0], [24.9, 319.0], [25.0, 319.0], [25.1, 319.0], [25.2, 319.0], [25.3, 319.0], [25.4, 319.0], [25.5, 319.0], [25.6, 319.0], [25.7, 319.0], [25.8, 319.0], [25.9, 319.0], [26.0, 319.0], [26.1, 319.0], [26.2, 319.0], [26.3, 319.0], [26.4, 319.0], [26.5, 319.0], [26.6, 319.0], [26.7, 319.0], [26.8, 319.0], [26.9, 319.0], [27.0, 321.0], [27.1, 321.0], [27.2, 321.0], [27.3, 321.0], [27.4, 321.0], [27.5, 321.0], [27.6, 321.0], [27.7, 321.0], [27.8, 321.0], [27.9, 321.0], [28.0, 322.0], [28.1, 322.0], [28.2, 322.0], [28.3, 322.0], [28.4, 322.0], [28.5, 322.0], [28.6, 322.0], [28.7, 322.0], [28.8, 322.0], [28.9, 322.0], [29.0, 323.0], [29.1, 323.0], [29.2, 323.0], [29.3, 323.0], [29.4, 323.0], [29.5, 323.0], [29.6, 323.0], [29.7, 323.0], [29.8, 323.0], [29.9, 323.0], [30.0, 324.0], [30.1, 324.0], [30.2, 324.0], [30.3, 324.0], [30.4, 324.0], [30.5, 324.0], [30.6, 324.0], [30.7, 324.0], [30.8, 324.0], [30.9, 324.0], [31.0, 325.0], [31.1, 325.0], [31.2, 325.0], [31.3, 325.0], [31.4, 325.0], [31.5, 325.0], [31.6, 325.0], [31.7, 325.0], [31.8, 325.0], [31.9, 325.0], [32.0, 325.0], [32.1, 325.0], [32.2, 325.0], [32.3, 325.0], [32.4, 325.0], [32.5, 325.0], [32.6, 325.0], [32.7, 325.0], [32.8, 325.0], [32.9, 325.0], [33.0, 325.0], [33.1, 325.0], [33.2, 325.0], [33.3, 325.0], [33.4, 325.0], [33.5, 326.0], [33.6, 326.0], [33.7, 326.0], [33.8, 326.0], [33.9, 326.0], [34.0, 326.0], [34.1, 326.0], [34.2, 326.0], [34.3, 326.0], [34.4, 326.0], [34.5, 327.0], [34.6, 327.0], [34.7, 327.0], [34.8, 327.0], [34.9, 327.0], [35.0, 327.0], [35.1, 327.0], [35.2, 327.0], [35.3, 327.0], [35.4, 327.0], [35.5, 327.0], [35.6, 327.0], [35.7, 327.0], [35.8, 327.0], [35.9, 327.0], [36.0, 327.0], [36.1, 327.0], [36.2, 327.0], [36.3, 327.0], [36.4, 327.0], [36.5, 327.0], [36.6, 327.0], [36.7, 327.0], [36.8, 327.0], [36.9, 327.0], [37.0, 327.0], [37.1, 327.0], [37.2, 327.0], [37.3, 327.0], [37.4, 327.0], [37.5, 327.0], [37.6, 327.0], [37.7, 327.0], [37.8, 327.0], [37.9, 327.0], [38.0, 328.0], [38.1, 328.0], [38.2, 328.0], [38.3, 328.0], [38.4, 328.0], [38.5, 328.0], [38.6, 328.0], [38.7, 328.0], [38.8, 328.0], [38.9, 328.0], [39.0, 328.0], [39.1, 328.0], [39.2, 328.0], [39.3, 328.0], [39.4, 328.0], [39.5, 330.0], [39.6, 330.0], [39.7, 330.0], [39.8, 330.0], [39.9, 330.0], [40.0, 330.0], [40.1, 330.0], [40.2, 330.0], [40.3, 330.0], [40.4, 330.0], [40.5, 331.0], [40.6, 331.0], [40.7, 331.0], [40.8, 331.0], [40.9, 331.0], [41.0, 331.0], [41.1, 331.0], [41.2, 331.0], [41.3, 331.0], [41.4, 331.0], [41.5, 331.0], [41.6, 331.0], [41.7, 331.0], [41.8, 331.0], [41.9, 331.0], [42.0, 332.0], [42.1, 332.0], [42.2, 332.0], [42.3, 332.0], [42.4, 332.0], [42.5, 332.0], [42.6, 332.0], [42.7, 332.0], [42.8, 332.0], [42.9, 332.0], [43.0, 334.0], [43.1, 334.0], [43.2, 334.0], [43.3, 334.0], [43.4, 334.0], [43.5, 334.0], [43.6, 334.0], [43.7, 334.0], [43.8, 334.0], [43.9, 334.0], [44.0, 334.0], [44.1, 334.0], [44.2, 334.0], [44.3, 334.0], [44.4, 334.0], [44.5, 334.0], [44.6, 334.0], [44.7, 334.0], [44.8, 334.0], [44.9, 334.0], [45.0, 336.0], [45.1, 336.0], [45.2, 336.0], [45.3, 336.0], [45.4, 336.0], [45.5, 336.0], [45.6, 336.0], [45.7, 336.0], [45.8, 336.0], [45.9, 336.0], [46.0, 336.0], [46.1, 336.0], [46.2, 336.0], [46.3, 336.0], [46.4, 336.0], [46.5, 338.0], [46.6, 338.0], [46.7, 338.0], [46.8, 338.0], [46.9, 338.0], [47.0, 338.0], [47.1, 338.0], [47.2, 338.0], [47.3, 338.0], [47.4, 338.0], [47.5, 339.0], [47.6, 339.0], [47.7, 339.0], [47.8, 339.0], [47.9, 339.0], [48.0, 339.0], [48.1, 339.0], [48.2, 339.0], [48.3, 339.0], [48.4, 339.0], [48.5, 339.0], [48.6, 339.0], [48.7, 339.0], [48.8, 339.0], [48.9, 339.0], [49.0, 340.0], [49.1, 340.0], [49.2, 340.0], [49.3, 340.0], [49.4, 340.0], [49.5, 340.0], [49.6, 340.0], [49.7, 340.0], [49.8, 340.0], [49.9, 340.0], [50.0, 342.0], [50.1, 342.0], [50.2, 342.0], [50.3, 342.0], [50.4, 342.0], [50.5, 343.0], [50.6, 343.0], [50.7, 343.0], [50.8, 343.0], [50.9, 343.0], [51.0, 346.0], [51.1, 346.0], [51.2, 346.0], [51.3, 346.0], [51.4, 346.0], [51.5, 346.0], [51.6, 346.0], [51.7, 346.0], [51.8, 346.0], [51.9, 346.0], [52.0, 347.0], [52.1, 347.0], [52.2, 347.0], [52.3, 347.0], [52.4, 347.0], [52.5, 347.0], [52.6, 347.0], [52.7, 347.0], [52.8, 347.0], [52.9, 347.0], [53.0, 348.0], [53.1, 348.0], [53.2, 348.0], [53.3, 348.0], [53.4, 348.0], [53.5, 348.0], [53.6, 348.0], [53.7, 348.0], [53.8, 348.0], [53.9, 348.0], [54.0, 349.0], [54.1, 349.0], [54.2, 349.0], [54.3, 349.0], [54.4, 349.0], [54.5, 349.0], [54.6, 349.0], [54.7, 349.0], [54.8, 349.0], [54.9, 349.0], [55.0, 350.0], [55.1, 350.0], [55.2, 350.0], [55.3, 350.0], [55.4, 350.0], [55.5, 350.0], [55.6, 350.0], [55.7, 350.0], [55.8, 350.0], [55.9, 350.0], [56.0, 352.0], [56.1, 352.0], [56.2, 352.0], [56.3, 352.0], [56.4, 352.0], [56.5, 353.0], [56.6, 353.0], [56.7, 353.0], [56.8, 353.0], [56.9, 353.0], [57.0, 353.0], [57.1, 353.0], [57.2, 353.0], [57.3, 353.0], [57.4, 353.0], [57.5, 356.0], [57.6, 356.0], [57.7, 356.0], [57.8, 356.0], [57.9, 356.0], [58.0, 356.0], [58.1, 356.0], [58.2, 356.0], [58.3, 356.0], [58.4, 356.0], [58.5, 356.0], [58.6, 356.0], [58.7, 356.0], [58.8, 356.0], [58.9, 356.0], [59.0, 358.0], [59.1, 358.0], [59.2, 358.0], [59.3, 358.0], [59.4, 358.0], [59.5, 360.0], [59.6, 360.0], [59.7, 360.0], [59.8, 360.0], [59.9, 360.0], [60.0, 361.0], [60.1, 361.0], [60.2, 361.0], [60.3, 361.0], [60.4, 361.0], [60.5, 362.0], [60.6, 362.0], [60.7, 362.0], [60.8, 362.0], [60.9, 362.0], [61.0, 363.0], [61.1, 363.0], [61.2, 363.0], [61.3, 363.0], [61.4, 363.0], [61.5, 363.0], [61.6, 363.0], [61.7, 363.0], [61.8, 363.0], [61.9, 363.0], [62.0, 366.0], [62.1, 366.0], [62.2, 366.0], [62.3, 366.0], [62.4, 366.0], [62.5, 366.0], [62.6, 366.0], [62.7, 366.0], [62.8, 366.0], [62.9, 366.0], [63.0, 369.0], [63.1, 369.0], [63.2, 369.0], [63.3, 369.0], [63.4, 369.0], [63.5, 371.0], [63.6, 371.0], [63.7, 371.0], [63.8, 371.0], [63.9, 371.0], [64.0, 371.0], [64.1, 371.0], [64.2, 371.0], [64.3, 371.0], [64.4, 371.0], [64.5, 374.0], [64.6, 374.0], [64.7, 374.0], [64.8, 374.0], [64.9, 374.0], [65.0, 375.0], [65.1, 375.0], [65.2, 375.0], [65.3, 375.0], [65.4, 375.0], [65.5, 375.0], [65.6, 375.0], [65.7, 375.0], [65.8, 375.0], [65.9, 375.0], [66.0, 377.0], [66.1, 377.0], [66.2, 377.0], [66.3, 377.0], [66.4, 377.0], [66.5, 379.0], [66.6, 379.0], [66.7, 379.0], [66.8, 379.0], [66.9, 379.0], [67.0, 380.0], [67.1, 380.0], [67.2, 380.0], [67.3, 380.0], [67.4, 380.0], [67.5, 380.0], [67.6, 380.0], [67.7, 380.0], [67.8, 380.0], [67.9, 380.0], [68.0, 380.0], [68.1, 380.0], [68.2, 380.0], [68.3, 380.0], [68.4, 380.0], [68.5, 384.0], [68.6, 384.0], [68.7, 384.0], [68.8, 384.0], [68.9, 384.0], [69.0, 387.0], [69.1, 387.0], [69.2, 387.0], [69.3, 387.0], [69.4, 387.0], [69.5, 389.0], [69.6, 389.0], [69.7, 389.0], [69.8, 389.0], [69.9, 389.0], [70.0, 395.0], [70.1, 395.0], [70.2, 395.0], [70.3, 395.0], [70.4, 395.0], [70.5, 400.0], [70.6, 400.0], [70.7, 400.0], [70.8, 400.0], [70.9, 400.0], [71.0, 401.0], [71.1, 401.0], [71.2, 401.0], [71.3, 401.0], [71.4, 401.0], [71.5, 405.0], [71.6, 405.0], [71.7, 405.0], [71.8, 405.0], [71.9, 405.0], [72.0, 410.0], [72.1, 410.0], [72.2, 410.0], [72.3, 410.0], [72.4, 410.0], [72.5, 413.0], [72.6, 413.0], [72.7, 413.0], [72.8, 413.0], [72.9, 413.0], [73.0, 415.0], [73.1, 415.0], [73.2, 415.0], [73.3, 415.0], [73.4, 415.0], [73.5, 415.0], [73.6, 415.0], [73.7, 415.0], [73.8, 415.0], [73.9, 415.0], [74.0, 416.0], [74.1, 416.0], [74.2, 416.0], [74.3, 416.0], [74.4, 416.0], [74.5, 434.0], [74.6, 434.0], [74.7, 434.0], [74.8, 434.0], [74.9, 434.0], [75.0, 435.0], [75.1, 435.0], [75.2, 435.0], [75.3, 435.0], [75.4, 435.0], [75.5, 437.0], [75.6, 437.0], [75.7, 437.0], [75.8, 437.0], [75.9, 437.0], [76.0, 462.0], [76.1, 462.0], [76.2, 462.0], [76.3, 462.0], [76.4, 462.0], [76.5, 464.0], [76.6, 464.0], [76.7, 464.0], [76.8, 464.0], [76.9, 464.0], [77.0, 466.0], [77.1, 466.0], [77.2, 466.0], [77.3, 466.0], [77.4, 466.0], [77.5, 615.0], [77.6, 615.0], [77.7, 615.0], [77.8, 615.0], [77.9, 615.0], [78.0, 688.0], [78.1, 688.0], [78.2, 688.0], [78.3, 688.0], [78.4, 688.0], [78.5, 712.0], [78.6, 712.0], [78.7, 712.0], [78.8, 712.0], [78.9, 712.0], [79.0, 750.0], [79.1, 750.0], [79.2, 750.0], [79.3, 750.0], [79.4, 750.0], [79.5, 772.0], [79.6, 772.0], [79.7, 772.0], [79.8, 772.0], [79.9, 772.0], [80.0, 1052.0], [80.1, 1052.0], [80.2, 1052.0], [80.3, 1052.0], [80.4, 1052.0], [80.5, 1316.0], [80.6, 1316.0], [80.7, 1316.0], [80.8, 1316.0], [80.9, 1316.0], [81.0, 4765.0], [81.1, 4765.0], [81.2, 4765.0], [81.3, 4765.0], [81.4, 4765.0], [81.5, 4767.0], [81.6, 4767.0], [81.7, 4767.0], [81.8, 4767.0], [81.9, 4767.0], [82.0, 4769.0], [82.1, 4769.0], [82.2, 4769.0], [82.3, 4769.0], [82.4, 4769.0], [82.5, 4771.0], [82.6, 4771.0], [82.7, 4771.0], [82.8, 4771.0], [82.9, 4771.0], [83.0, 4776.0], [83.1, 4776.0], [83.2, 4776.0], [83.3, 4776.0], [83.4, 4776.0], [83.5, 4776.0], [83.6, 4776.0], [83.7, 4776.0], [83.8, 4776.0], [83.9, 4776.0], [84.0, 4780.0], [84.1, 4780.0], [84.2, 4780.0], [84.3, 4780.0], [84.4, 4780.0], [84.5, 4782.0], [84.6, 4782.0], [84.7, 4782.0], [84.8, 4782.0], [84.9, 4782.0], [85.0, 4790.0], [85.1, 4790.0], [85.2, 4790.0], [85.3, 4790.0], [85.4, 4790.0], [85.5, 4794.0], [85.6, 4794.0], [85.7, 4794.0], [85.8, 4794.0], [85.9, 4794.0], [86.0, 4799.0], [86.1, 4799.0], [86.2, 4799.0], [86.3, 4799.0], [86.4, 4799.0], [86.5, 4801.0], [86.6, 4801.0], [86.7, 4801.0], [86.8, 4801.0], [86.9, 4801.0], [87.0, 4803.0], [87.1, 4803.0], [87.2, 4803.0], [87.3, 4803.0], [87.4, 4803.0], [87.5, 4803.0], [87.6, 4803.0], [87.7, 4803.0], [87.8, 4803.0], [87.9, 4803.0], [88.0, 4804.0], [88.1, 4804.0], [88.2, 4804.0], [88.3, 4804.0], [88.4, 4804.0], [88.5, 4806.0], [88.6, 4806.0], [88.7, 4806.0], [88.8, 4806.0], [88.9, 4806.0], [89.0, 4806.0], [89.1, 4806.0], [89.2, 4806.0], [89.3, 4806.0], [89.4, 4806.0], [89.5, 4807.0], [89.6, 4807.0], [89.7, 4807.0], [89.8, 4807.0], [89.9, 4807.0], [90.0, 4809.0], [90.1, 4809.0], [90.2, 4809.0], [90.3, 4809.0], [90.4, 4809.0], [90.5, 4810.0], [90.6, 4810.0], [90.7, 4810.0], [90.8, 4810.0], [90.9, 4810.0], [91.0, 4813.0], [91.1, 4813.0], [91.2, 4813.0], [91.3, 4813.0], [91.4, 4813.0], [91.5, 4814.0], [91.6, 4814.0], [91.7, 4814.0], [91.8, 4814.0], [91.9, 4814.0], [92.0, 4821.0], [92.1, 4821.0], [92.2, 4821.0], [92.3, 4821.0], [92.4, 4821.0], [92.5, 4821.0], [92.6, 4821.0], [92.7, 4821.0], [92.8, 4821.0], [92.9, 4821.0], [93.0, 4822.0], [93.1, 4822.0], [93.2, 4822.0], [93.3, 4822.0], [93.4, 4822.0], [93.5, 4824.0], [93.6, 4824.0], [93.7, 4824.0], [93.8, 4824.0], [93.9, 4824.0], [94.0, 4824.0], [94.1, 4824.0], [94.2, 4824.0], [94.3, 4824.0], [94.4, 4824.0], [94.5, 4827.0], [94.6, 4827.0], [94.7, 4827.0], [94.8, 4827.0], [94.9, 4827.0], [95.0, 4831.0], [95.1, 4831.0], [95.2, 4831.0], [95.3, 4831.0], [95.4, 4831.0], [95.5, 4831.0], [95.6, 4831.0], [95.7, 4831.0], [95.8, 4831.0], [95.9, 4831.0], [96.0, 4831.0], [96.1, 4831.0], [96.2, 4831.0], [96.3, 4831.0], [96.4, 4831.0], [96.5, 4834.0], [96.6, 4834.0], [96.7, 4834.0], [96.8, 4834.0], [96.9, 4834.0], [97.0, 4836.0], [97.1, 4836.0], [97.2, 4836.0], [97.3, 4836.0], [97.4, 4836.0], [97.5, 4838.0], [97.6, 4838.0], [97.7, 4838.0], [97.8, 4838.0], [97.9, 4838.0], [98.0, 4839.0], [98.1, 4839.0], [98.2, 4839.0], [98.3, 4839.0], [98.4, 4839.0], [98.5, 4840.0], [98.6, 4840.0], [98.7, 4840.0], [98.8, 4840.0], [98.9, 4840.0], [99.0, 4860.0], [99.1, 4860.0], [99.2, 4860.0], [99.3, 4860.0], [99.4, 4860.0], [99.5, 4884.0], [99.6, 4884.0], [99.7, 4884.0], [99.8, 4884.0], [99.9, 4884.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 114.0, "series": [{"data": [[300.0, 114.0], [600.0, 2.0], [4800.0, 27.0], [4700.0, 11.0], [1300.0, 1.0], [700.0, 3.0], [400.0, 14.0], [200.0, 27.0], [1000.0, 1.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 155.0, "series": [{"data": [[0.0, 155.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 38.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.090000000000001, "minX": 1.79235426E12, "maxY": 7.090000000000001, "series": [{"data": [[1.79235426E12, 7.090000000000001]], "isOverall": false, "label": "Fila 200 hilos / 20 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235426E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 398.9716981132074, "minX": 1.0, "maxY": 4860.0, "series": [{"data": [[33.0, 4831.0], [32.0, 4824.0], [2.0, 4834.0], [35.0, 4780.0], [34.0, 4767.0], [37.0, 4813.0], [36.0, 4765.0], [38.0, 4824.0], [3.0, 486.4090909090909], [4.0, 398.9716981132074], [5.0, 532.2857142857142], [6.0, 1268.0], [7.0, 1556.5], [8.0, 2546.5], [9.0, 4790.0], [10.0, 4782.0], [11.0, 4771.0], [12.0, 4840.0], [13.0, 4839.0], [14.0, 4860.0], [15.0, 4803.0], [16.0, 4836.0], [1.0, 4803.0], [17.0, 4799.0], [18.0, 4810.0], [19.0, 4776.0], [20.0, 4814.0], [21.0, 4806.0], [22.0, 4807.0], [23.0, 4804.0], [24.0, 4801.0], [25.0, 4794.0], [26.0, 4821.0], [27.0, 4831.0], [28.0, 4821.0], [29.0, 4822.0], [30.0, 4806.0], [31.0, 4831.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}, {"data": [[7.090000000000001, 1203.6399999999999]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 38.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1926.6666666666667, "minX": 1.79235426E12, "maxY": 3453.3333333333335, "series": [{"data": [[1.79235426E12, 3453.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79235426E12, 1926.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235426E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1203.6399999999999, "minX": 1.79235426E12, "maxY": 1203.6399999999999, "series": [{"data": [[1.79235426E12, 1203.6399999999999]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235426E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1203.5800000000002, "minX": 1.79235426E12, "maxY": 1203.5800000000002, "series": [{"data": [[1.79235426E12, 1203.5800000000002]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235426E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 214.76000000000005, "minX": 1.79235426E12, "maxY": 214.76000000000005, "series": [{"data": [[1.79235426E12, 214.76000000000005]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235426E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 259.0, "minX": 1.79235426E12, "maxY": 4884.0, "series": [{"data": [[1.79235426E12, 4884.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79235426E12, 259.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79235426E12, 4808.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79235426E12, 4859.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79235426E12, 341.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79235426E12, 4830.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 299.0, "minX": 1.0, "maxY": 4813.0, "series": [{"data": [[4.0, 363.5], [8.0, 299.0], [1.0, 4803.0], [9.0, 337.0], [10.0, 538.5], [11.0, 333.0], [12.0, 337.5], [7.0, 4813.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 299.0, "minX": 1.0, "maxY": 4813.0, "series": [{"data": [[4.0, 362.5], [8.0, 299.0], [1.0, 4803.0], [9.0, 337.0], [10.0, 538.5], [11.0, 333.0], [12.0, 337.5], [7.0, 4813.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235426E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235426E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235426E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235426E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235426E12, 3.3333333333333335]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235426E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235426E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235426E12, 3.3333333333333335]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235426E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235426E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235426E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235426E12, "title": "Total Transactions Per Second"}},
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

