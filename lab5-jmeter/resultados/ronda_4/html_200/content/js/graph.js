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
        data: {"result": {"minY": 254.0, "minX": 0.0, "maxY": 5092.0, "series": [{"data": [[0.0, 254.0], [0.1, 254.0], [0.2, 254.0], [0.3, 254.0], [0.4, 254.0], [0.5, 256.0], [0.6, 256.0], [0.7, 256.0], [0.8, 256.0], [0.9, 256.0], [1.0, 259.0], [1.1, 259.0], [1.2, 259.0], [1.3, 259.0], [1.4, 259.0], [1.5, 260.0], [1.6, 260.0], [1.7, 260.0], [1.8, 260.0], [1.9, 260.0], [2.0, 261.0], [2.1, 261.0], [2.2, 261.0], [2.3, 261.0], [2.4, 261.0], [2.5, 262.0], [2.6, 262.0], [2.7, 262.0], [2.8, 262.0], [2.9, 262.0], [3.0, 267.0], [3.1, 267.0], [3.2, 267.0], [3.3, 267.0], [3.4, 267.0], [3.5, 267.0], [3.6, 267.0], [3.7, 267.0], [3.8, 267.0], [3.9, 267.0], [4.0, 268.0], [4.1, 268.0], [4.2, 268.0], [4.3, 268.0], [4.4, 268.0], [4.5, 269.0], [4.6, 269.0], [4.7, 269.0], [4.8, 269.0], [4.9, 269.0], [5.0, 269.0], [5.1, 269.0], [5.2, 269.0], [5.3, 269.0], [5.4, 269.0], [5.5, 269.0], [5.6, 269.0], [5.7, 269.0], [5.8, 269.0], [5.9, 269.0], [6.0, 270.0], [6.1, 270.0], [6.2, 270.0], [6.3, 270.0], [6.4, 270.0], [6.5, 270.0], [6.6, 270.0], [6.7, 270.0], [6.8, 270.0], [6.9, 270.0], [7.0, 270.0], [7.1, 270.0], [7.2, 270.0], [7.3, 270.0], [7.4, 270.0], [7.5, 271.0], [7.6, 271.0], [7.7, 271.0], [7.8, 271.0], [7.9, 271.0], [8.0, 271.0], [8.1, 271.0], [8.2, 271.0], [8.3, 271.0], [8.4, 271.0], [8.5, 272.0], [8.6, 272.0], [8.7, 272.0], [8.8, 272.0], [8.9, 272.0], [9.0, 273.0], [9.1, 273.0], [9.2, 273.0], [9.3, 273.0], [9.4, 273.0], [9.5, 273.0], [9.6, 273.0], [9.7, 273.0], [9.8, 273.0], [9.9, 273.0], [10.0, 273.0], [10.1, 273.0], [10.2, 273.0], [10.3, 273.0], [10.4, 273.0], [10.5, 273.0], [10.6, 273.0], [10.7, 273.0], [10.8, 273.0], [10.9, 273.0], [11.0, 274.0], [11.1, 274.0], [11.2, 274.0], [11.3, 274.0], [11.4, 274.0], [11.5, 274.0], [11.6, 274.0], [11.7, 274.0], [11.8, 274.0], [11.9, 274.0], [12.0, 274.0], [12.1, 274.0], [12.2, 274.0], [12.3, 274.0], [12.4, 274.0], [12.5, 275.0], [12.6, 275.0], [12.7, 275.0], [12.8, 275.0], [12.9, 275.0], [13.0, 275.0], [13.1, 275.0], [13.2, 275.0], [13.3, 275.0], [13.4, 275.0], [13.5, 277.0], [13.6, 277.0], [13.7, 277.0], [13.8, 277.0], [13.9, 277.0], [14.0, 277.0], [14.1, 277.0], [14.2, 277.0], [14.3, 277.0], [14.4, 277.0], [14.5, 277.0], [14.6, 277.0], [14.7, 277.0], [14.8, 277.0], [14.9, 277.0], [15.0, 278.0], [15.1, 278.0], [15.2, 278.0], [15.3, 278.0], [15.4, 278.0], [15.5, 278.0], [15.6, 278.0], [15.7, 278.0], [15.8, 278.0], [15.9, 278.0], [16.0, 278.0], [16.1, 278.0], [16.2, 278.0], [16.3, 278.0], [16.4, 278.0], [16.5, 279.0], [16.6, 279.0], [16.7, 279.0], [16.8, 279.0], [16.9, 279.0], [17.0, 280.0], [17.1, 280.0], [17.2, 280.0], [17.3, 280.0], [17.4, 280.0], [17.5, 280.0], [17.6, 280.0], [17.7, 280.0], [17.8, 280.0], [17.9, 280.0], [18.0, 280.0], [18.1, 280.0], [18.2, 280.0], [18.3, 280.0], [18.4, 280.0], [18.5, 280.0], [18.6, 280.0], [18.7, 280.0], [18.8, 280.0], [18.9, 280.0], [19.0, 280.0], [19.1, 280.0], [19.2, 280.0], [19.3, 280.0], [19.4, 280.0], [19.5, 281.0], [19.6, 281.0], [19.7, 281.0], [19.8, 281.0], [19.9, 281.0], [20.0, 282.0], [20.1, 282.0], [20.2, 282.0], [20.3, 282.0], [20.4, 282.0], [20.5, 282.0], [20.6, 282.0], [20.7, 282.0], [20.8, 282.0], [20.9, 282.0], [21.0, 282.0], [21.1, 282.0], [21.2, 282.0], [21.3, 282.0], [21.4, 282.0], [21.5, 282.0], [21.6, 282.0], [21.7, 282.0], [21.8, 282.0], [21.9, 282.0], [22.0, 282.0], [22.1, 282.0], [22.2, 282.0], [22.3, 282.0], [22.4, 282.0], [22.5, 283.0], [22.6, 283.0], [22.7, 283.0], [22.8, 283.0], [22.9, 283.0], [23.0, 283.0], [23.1, 283.0], [23.2, 283.0], [23.3, 283.0], [23.4, 283.0], [23.5, 283.0], [23.6, 283.0], [23.7, 283.0], [23.8, 283.0], [23.9, 283.0], [24.0, 283.0], [24.1, 283.0], [24.2, 283.0], [24.3, 283.0], [24.4, 283.0], [24.5, 285.0], [24.6, 285.0], [24.7, 285.0], [24.8, 285.0], [24.9, 285.0], [25.0, 285.0], [25.1, 285.0], [25.2, 285.0], [25.3, 285.0], [25.4, 285.0], [25.5, 285.0], [25.6, 285.0], [25.7, 285.0], [25.8, 285.0], [25.9, 285.0], [26.0, 287.0], [26.1, 287.0], [26.2, 287.0], [26.3, 287.0], [26.4, 287.0], [26.5, 287.0], [26.6, 287.0], [26.7, 287.0], [26.8, 287.0], [26.9, 287.0], [27.0, 287.0], [27.1, 287.0], [27.2, 287.0], [27.3, 287.0], [27.4, 287.0], [27.5, 287.0], [27.6, 287.0], [27.7, 287.0], [27.8, 287.0], [27.9, 287.0], [28.0, 287.0], [28.1, 287.0], [28.2, 287.0], [28.3, 287.0], [28.4, 287.0], [28.5, 289.0], [28.6, 289.0], [28.7, 289.0], [28.8, 289.0], [28.9, 289.0], [29.0, 289.0], [29.1, 289.0], [29.2, 289.0], [29.3, 289.0], [29.4, 289.0], [29.5, 290.0], [29.6, 290.0], [29.7, 290.0], [29.8, 290.0], [29.9, 290.0], [30.0, 290.0], [30.1, 290.0], [30.2, 290.0], [30.3, 290.0], [30.4, 290.0], [30.5, 291.0], [30.6, 291.0], [30.7, 291.0], [30.8, 291.0], [30.9, 291.0], [31.0, 291.0], [31.1, 291.0], [31.2, 291.0], [31.3, 291.0], [31.4, 291.0], [31.5, 293.0], [31.6, 293.0], [31.7, 293.0], [31.8, 293.0], [31.9, 293.0], [32.0, 294.0], [32.1, 294.0], [32.2, 294.0], [32.3, 294.0], [32.4, 294.0], [32.5, 294.0], [32.6, 294.0], [32.7, 294.0], [32.8, 294.0], [32.9, 294.0], [33.0, 294.0], [33.1, 294.0], [33.2, 294.0], [33.3, 294.0], [33.4, 294.0], [33.5, 295.0], [33.6, 295.0], [33.7, 295.0], [33.8, 295.0], [33.9, 295.0], [34.0, 296.0], [34.1, 296.0], [34.2, 296.0], [34.3, 296.0], [34.4, 296.0], [34.5, 296.0], [34.6, 296.0], [34.7, 296.0], [34.8, 296.0], [34.9, 296.0], [35.0, 297.0], [35.1, 297.0], [35.2, 297.0], [35.3, 297.0], [35.4, 297.0], [35.5, 297.0], [35.6, 297.0], [35.7, 297.0], [35.8, 297.0], [35.9, 297.0], [36.0, 299.0], [36.1, 299.0], [36.2, 299.0], [36.3, 299.0], [36.4, 299.0], [36.5, 301.0], [36.6, 301.0], [36.7, 301.0], [36.8, 301.0], [36.9, 301.0], [37.0, 301.0], [37.1, 301.0], [37.2, 301.0], [37.3, 301.0], [37.4, 301.0], [37.5, 301.0], [37.6, 301.0], [37.7, 301.0], [37.8, 301.0], [37.9, 301.0], [38.0, 301.0], [38.1, 301.0], [38.2, 301.0], [38.3, 301.0], [38.4, 301.0], [38.5, 302.0], [38.6, 302.0], [38.7, 302.0], [38.8, 302.0], [38.9, 302.0], [39.0, 303.0], [39.1, 303.0], [39.2, 303.0], [39.3, 303.0], [39.4, 303.0], [39.5, 304.0], [39.6, 304.0], [39.7, 304.0], [39.8, 304.0], [39.9, 304.0], [40.0, 304.0], [40.1, 304.0], [40.2, 304.0], [40.3, 304.0], [40.4, 304.0], [40.5, 305.0], [40.6, 305.0], [40.7, 305.0], [40.8, 305.0], [40.9, 305.0], [41.0, 306.0], [41.1, 306.0], [41.2, 306.0], [41.3, 306.0], [41.4, 306.0], [41.5, 306.0], [41.6, 306.0], [41.7, 306.0], [41.8, 306.0], [41.9, 306.0], [42.0, 306.0], [42.1, 306.0], [42.2, 306.0], [42.3, 306.0], [42.4, 306.0], [42.5, 306.0], [42.6, 306.0], [42.7, 306.0], [42.8, 306.0], [42.9, 306.0], [43.0, 307.0], [43.1, 307.0], [43.2, 307.0], [43.3, 307.0], [43.4, 307.0], [43.5, 308.0], [43.6, 308.0], [43.7, 308.0], [43.8, 308.0], [43.9, 308.0], [44.0, 308.0], [44.1, 308.0], [44.2, 308.0], [44.3, 308.0], [44.4, 308.0], [44.5, 309.0], [44.6, 309.0], [44.7, 309.0], [44.8, 309.0], [44.9, 309.0], [45.0, 309.0], [45.1, 309.0], [45.2, 309.0], [45.3, 309.0], [45.4, 309.0], [45.5, 311.0], [45.6, 311.0], [45.7, 311.0], [45.8, 311.0], [45.9, 311.0], [46.0, 311.0], [46.1, 311.0], [46.2, 311.0], [46.3, 311.0], [46.4, 311.0], [46.5, 311.0], [46.6, 311.0], [46.7, 311.0], [46.8, 311.0], [46.9, 311.0], [47.0, 311.0], [47.1, 311.0], [47.2, 311.0], [47.3, 311.0], [47.4, 311.0], [47.5, 311.0], [47.6, 311.0], [47.7, 311.0], [47.8, 311.0], [47.9, 311.0], [48.0, 311.0], [48.1, 311.0], [48.2, 311.0], [48.3, 311.0], [48.4, 311.0], [48.5, 312.0], [48.6, 312.0], [48.7, 312.0], [48.8, 312.0], [48.9, 312.0], [49.0, 312.0], [49.1, 312.0], [49.2, 312.0], [49.3, 312.0], [49.4, 312.0], [49.5, 313.0], [49.6, 313.0], [49.7, 313.0], [49.8, 313.0], [49.9, 313.0], [50.0, 313.0], [50.1, 313.0], [50.2, 313.0], [50.3, 313.0], [50.4, 313.0], [50.5, 314.0], [50.6, 314.0], [50.7, 314.0], [50.8, 314.0], [50.9, 314.0], [51.0, 314.0], [51.1, 314.0], [51.2, 314.0], [51.3, 314.0], [51.4, 314.0], [51.5, 314.0], [51.6, 314.0], [51.7, 314.0], [51.8, 314.0], [51.9, 314.0], [52.0, 316.0], [52.1, 316.0], [52.2, 316.0], [52.3, 316.0], [52.4, 316.0], [52.5, 318.0], [52.6, 318.0], [52.7, 318.0], [52.8, 318.0], [52.9, 318.0], [53.0, 321.0], [53.1, 321.0], [53.2, 321.0], [53.3, 321.0], [53.4, 321.0], [53.5, 322.0], [53.6, 322.0], [53.7, 322.0], [53.8, 322.0], [53.9, 322.0], [54.0, 322.0], [54.1, 322.0], [54.2, 322.0], [54.3, 322.0], [54.4, 322.0], [54.5, 324.0], [54.6, 324.0], [54.7, 324.0], [54.8, 324.0], [54.9, 324.0], [55.0, 325.0], [55.1, 325.0], [55.2, 325.0], [55.3, 325.0], [55.4, 325.0], [55.5, 326.0], [55.6, 326.0], [55.7, 326.0], [55.8, 326.0], [55.9, 326.0], [56.0, 330.0], [56.1, 330.0], [56.2, 330.0], [56.3, 330.0], [56.4, 330.0], [56.5, 335.0], [56.6, 335.0], [56.7, 335.0], [56.8, 335.0], [56.9, 335.0], [57.0, 340.0], [57.1, 340.0], [57.2, 340.0], [57.3, 340.0], [57.4, 340.0], [57.5, 346.0], [57.6, 346.0], [57.7, 346.0], [57.8, 346.0], [57.9, 346.0], [58.0, 352.0], [58.1, 352.0], [58.2, 352.0], [58.3, 352.0], [58.4, 352.0], [58.5, 353.0], [58.6, 353.0], [58.7, 353.0], [58.8, 353.0], [58.9, 353.0], [59.0, 363.0], [59.1, 363.0], [59.2, 363.0], [59.3, 363.0], [59.4, 363.0], [59.5, 365.0], [59.6, 365.0], [59.7, 365.0], [59.8, 365.0], [59.9, 365.0], [60.0, 370.0], [60.1, 370.0], [60.2, 370.0], [60.3, 370.0], [60.4, 370.0], [60.5, 371.0], [60.6, 371.0], [60.7, 371.0], [60.8, 371.0], [60.9, 371.0], [61.0, 372.0], [61.1, 372.0], [61.2, 372.0], [61.3, 372.0], [61.4, 372.0], [61.5, 377.0], [61.6, 377.0], [61.7, 377.0], [61.8, 377.0], [61.9, 377.0], [62.0, 387.0], [62.1, 387.0], [62.2, 387.0], [62.3, 387.0], [62.4, 387.0], [62.5, 390.0], [62.6, 390.0], [62.7, 390.0], [62.8, 390.0], [62.9, 390.0], [63.0, 391.0], [63.1, 391.0], [63.2, 391.0], [63.3, 391.0], [63.4, 391.0], [63.5, 399.0], [63.6, 399.0], [63.7, 399.0], [63.8, 399.0], [63.9, 399.0], [64.0, 400.0], [64.1, 400.0], [64.2, 400.0], [64.3, 400.0], [64.4, 400.0], [64.5, 405.0], [64.6, 405.0], [64.7, 405.0], [64.8, 405.0], [64.9, 405.0], [65.0, 414.0], [65.1, 414.0], [65.2, 414.0], [65.3, 414.0], [65.4, 414.0], [65.5, 416.0], [65.6, 416.0], [65.7, 416.0], [65.8, 416.0], [65.9, 416.0], [66.0, 422.0], [66.1, 422.0], [66.2, 422.0], [66.3, 422.0], [66.4, 422.0], [66.5, 424.0], [66.6, 424.0], [66.7, 424.0], [66.8, 424.0], [66.9, 424.0], [67.0, 445.0], [67.1, 445.0], [67.2, 445.0], [67.3, 445.0], [67.4, 445.0], [67.5, 461.0], [67.6, 461.0], [67.7, 461.0], [67.8, 461.0], [67.9, 461.0], [68.0, 465.0], [68.1, 465.0], [68.2, 465.0], [68.3, 465.0], [68.4, 465.0], [68.5, 935.0], [68.6, 935.0], [68.7, 935.0], [68.8, 935.0], [68.9, 935.0], [69.0, 1280.0], [69.1, 1280.0], [69.2, 1280.0], [69.3, 1280.0], [69.4, 1280.0], [69.5, 1290.0], [69.6, 1290.0], [69.7, 1290.0], [69.8, 1290.0], [69.9, 1290.0], [70.0, 1416.0], [70.1, 1416.0], [70.2, 1416.0], [70.3, 1416.0], [70.4, 1416.0], [70.5, 4757.0], [70.6, 4757.0], [70.7, 4757.0], [70.8, 4757.0], [70.9, 4757.0], [71.0, 4758.0], [71.1, 4758.0], [71.2, 4758.0], [71.3, 4758.0], [71.4, 4758.0], [71.5, 4760.0], [71.6, 4760.0], [71.7, 4760.0], [71.8, 4760.0], [71.9, 4760.0], [72.0, 4760.0], [72.1, 4760.0], [72.2, 4760.0], [72.3, 4760.0], [72.4, 4760.0], [72.5, 4761.0], [72.6, 4761.0], [72.7, 4761.0], [72.8, 4761.0], [72.9, 4761.0], [73.0, 4762.0], [73.1, 4762.0], [73.2, 4762.0], [73.3, 4762.0], [73.4, 4762.0], [73.5, 4764.0], [73.6, 4764.0], [73.7, 4764.0], [73.8, 4764.0], [73.9, 4764.0], [74.0, 4765.0], [74.1, 4765.0], [74.2, 4765.0], [74.3, 4765.0], [74.4, 4765.0], [74.5, 4765.0], [74.6, 4765.0], [74.7, 4765.0], [74.8, 4765.0], [74.9, 4765.0], [75.0, 4767.0], [75.1, 4767.0], [75.2, 4767.0], [75.3, 4767.0], [75.4, 4767.0], [75.5, 4767.0], [75.6, 4767.0], [75.7, 4767.0], [75.8, 4767.0], [75.9, 4767.0], [76.0, 4767.0], [76.1, 4767.0], [76.2, 4767.0], [76.3, 4767.0], [76.4, 4767.0], [76.5, 4769.0], [76.6, 4769.0], [76.7, 4769.0], [76.8, 4769.0], [76.9, 4769.0], [77.0, 4770.0], [77.1, 4770.0], [77.2, 4770.0], [77.3, 4770.0], [77.4, 4770.0], [77.5, 4771.0], [77.6, 4771.0], [77.7, 4771.0], [77.8, 4771.0], [77.9, 4771.0], [78.0, 4771.0], [78.1, 4771.0], [78.2, 4771.0], [78.3, 4771.0], [78.4, 4771.0], [78.5, 4775.0], [78.6, 4775.0], [78.7, 4775.0], [78.8, 4775.0], [78.9, 4775.0], [79.0, 4775.0], [79.1, 4775.0], [79.2, 4775.0], [79.3, 4775.0], [79.4, 4775.0], [79.5, 4775.0], [79.6, 4775.0], [79.7, 4775.0], [79.8, 4775.0], [79.9, 4775.0], [80.0, 4776.0], [80.1, 4776.0], [80.2, 4776.0], [80.3, 4776.0], [80.4, 4776.0], [80.5, 4776.0], [80.6, 4776.0], [80.7, 4776.0], [80.8, 4776.0], [80.9, 4776.0], [81.0, 4776.0], [81.1, 4776.0], [81.2, 4776.0], [81.3, 4776.0], [81.4, 4776.0], [81.5, 4777.0], [81.6, 4777.0], [81.7, 4777.0], [81.8, 4777.0], [81.9, 4777.0], [82.0, 4778.0], [82.1, 4778.0], [82.2, 4778.0], [82.3, 4778.0], [82.4, 4778.0], [82.5, 4778.0], [82.6, 4778.0], [82.7, 4778.0], [82.8, 4778.0], [82.9, 4778.0], [83.0, 4778.0], [83.1, 4778.0], [83.2, 4778.0], [83.3, 4778.0], [83.4, 4778.0], [83.5, 4778.0], [83.6, 4778.0], [83.7, 4778.0], [83.8, 4778.0], [83.9, 4778.0], [84.0, 4779.0], [84.1, 4779.0], [84.2, 4779.0], [84.3, 4779.0], [84.4, 4779.0], [84.5, 4780.0], [84.6, 4780.0], [84.7, 4780.0], [84.8, 4780.0], [84.9, 4780.0], [85.0, 4780.0], [85.1, 4780.0], [85.2, 4780.0], [85.3, 4780.0], [85.4, 4780.0], [85.5, 4781.0], [85.6, 4781.0], [85.7, 4781.0], [85.8, 4781.0], [85.9, 4781.0], [86.0, 4783.0], [86.1, 4783.0], [86.2, 4783.0], [86.3, 4783.0], [86.4, 4783.0], [86.5, 4783.0], [86.6, 4783.0], [86.7, 4783.0], [86.8, 4783.0], [86.9, 4783.0], [87.0, 4784.0], [87.1, 4784.0], [87.2, 4784.0], [87.3, 4784.0], [87.4, 4784.0], [87.5, 4784.0], [87.6, 4784.0], [87.7, 4784.0], [87.8, 4784.0], [87.9, 4784.0], [88.0, 4785.0], [88.1, 4785.0], [88.2, 4785.0], [88.3, 4785.0], [88.4, 4785.0], [88.5, 4786.0], [88.6, 4786.0], [88.7, 4786.0], [88.8, 4786.0], [88.9, 4786.0], [89.0, 4788.0], [89.1, 4788.0], [89.2, 4788.0], [89.3, 4788.0], [89.4, 4788.0], [89.5, 4788.0], [89.6, 4788.0], [89.7, 4788.0], [89.8, 4788.0], [89.9, 4788.0], [90.0, 4788.0], [90.1, 4788.0], [90.2, 4788.0], [90.3, 4788.0], [90.4, 4788.0], [90.5, 4789.0], [90.6, 4789.0], [90.7, 4789.0], [90.8, 4789.0], [90.9, 4789.0], [91.0, 4793.0], [91.1, 4793.0], [91.2, 4793.0], [91.3, 4793.0], [91.4, 4793.0], [91.5, 4795.0], [91.6, 4795.0], [91.7, 4795.0], [91.8, 4795.0], [91.9, 4795.0], [92.0, 4796.0], [92.1, 4796.0], [92.2, 4796.0], [92.3, 4796.0], [92.4, 4796.0], [92.5, 4805.0], [92.6, 4805.0], [92.7, 4805.0], [92.8, 4805.0], [92.9, 4805.0], [93.0, 4809.0], [93.1, 4809.0], [93.2, 4809.0], [93.3, 4809.0], [93.4, 4809.0], [93.5, 4809.0], [93.6, 4809.0], [93.7, 4809.0], [93.8, 4809.0], [93.9, 4809.0], [94.0, 4813.0], [94.1, 4813.0], [94.2, 4813.0], [94.3, 4813.0], [94.4, 4813.0], [94.5, 4814.0], [94.6, 4814.0], [94.7, 4814.0], [94.8, 4814.0], [94.9, 4814.0], [95.0, 4815.0], [95.1, 4815.0], [95.2, 4815.0], [95.3, 4815.0], [95.4, 4815.0], [95.5, 4817.0], [95.6, 4817.0], [95.7, 4817.0], [95.8, 4817.0], [95.9, 4817.0], [96.0, 4819.0], [96.1, 4819.0], [96.2, 4819.0], [96.3, 4819.0], [96.4, 4819.0], [96.5, 4821.0], [96.6, 4821.0], [96.7, 4821.0], [96.8, 4821.0], [96.9, 4821.0], [97.0, 4823.0], [97.1, 4823.0], [97.2, 4823.0], [97.3, 4823.0], [97.4, 4823.0], [97.5, 4825.0], [97.6, 4825.0], [97.7, 4825.0], [97.8, 4825.0], [97.9, 4825.0], [98.0, 4829.0], [98.1, 4829.0], [98.2, 4829.0], [98.3, 4829.0], [98.4, 4829.0], [98.5, 4830.0], [98.6, 4830.0], [98.7, 4830.0], [98.8, 4830.0], [98.9, 4830.0], [99.0, 4838.0], [99.1, 4838.0], [99.2, 4838.0], [99.3, 4838.0], [99.4, 4838.0], [99.5, 5092.0], [99.6, 5092.0], [99.7, 5092.0], [99.8, 5092.0], [99.9, 5092.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 73.0, "series": [{"data": [[300.0, 55.0], [1200.0, 2.0], [4700.0, 44.0], [4800.0, 14.0], [5000.0, 1.0], [1400.0, 1.0], [200.0, 73.0], [400.0, 9.0], [900.0, 1.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 137.0, "series": [{"data": [[0.0, 137.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 59.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 15.279999999999998, "minX": 1.79235618E12, "maxY": 15.279999999999998, "series": [{"data": [[1.79235618E12, 15.279999999999998]], "isOverall": false, "label": "Fila 200 hilos / 20 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235618E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 262.0, "minX": 1.0, "maxY": 5092.0, "series": [{"data": [[2.0, 4778.0], [3.0, 381.5909090909091], [4.0, 460.78723404255317], [5.0, 554.9583333333334], [6.0, 1236.2], [7.0, 1700.0], [8.0, 4786.0], [9.0, 4829.0], [10.0, 4775.0], [11.0, 4825.0], [12.0, 4793.0], [13.0, 4814.0], [14.0, 4783.0], [15.0, 4809.0], [16.0, 4784.0], [17.0, 4813.0], [18.0, 4781.0], [19.0, 4776.0], [20.0, 4767.0], [21.0, 4777.0], [22.0, 4771.0], [23.0, 4778.0], [24.0, 307.0], [25.0, 4778.0], [26.0, 4778.0], [27.0, 262.0], [28.0, 308.0], [29.0, 2523.5], [30.0, 2516.0], [31.0, 370.0], [33.0, 2531.0], [32.0, 4778.0], [35.0, 1797.6666666666667], [34.0, 277.0], [37.0, 2547.0], [36.0, 4761.0], [39.0, 1793.0], [38.0, 2545.0], [41.0, 4776.0], [40.0, 2519.0], [43.0, 4795.0], [42.0, 2551.0], [45.0, 268.0], [44.0, 2552.5], [47.0, 4765.0], [46.0, 1790.3333333333333], [48.0, 4453.0], [49.0, 4807.0], [1.0, 5092.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}, {"data": [[15.279999999999998, 1649.1550000000002]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 49.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1926.6666666666667, "minX": 1.79235618E12, "maxY": 3453.3333333333335, "series": [{"data": [[1.79235618E12, 3453.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79235618E12, 1926.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235618E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1649.1550000000002, "minX": 1.79235618E12, "maxY": 1649.1550000000002, "series": [{"data": [[1.79235618E12, 1649.1550000000002]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235618E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1649.0700000000002, "minX": 1.79235618E12, "maxY": 1649.0700000000002, "series": [{"data": [[1.79235618E12, 1649.0700000000002]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235618E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 199.80499999999995, "minX": 1.79235618E12, "maxY": 199.80499999999995, "series": [{"data": [[1.79235618E12, 199.80499999999995]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235618E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.79235618E12, "maxY": 5092.0, "series": [{"data": [[1.79235618E12, 5092.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79235618E12, 254.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79235618E12, 4788.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79235618E12, 4837.92]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79235618E12, 313.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79235618E12, 4814.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 274.5, "minX": 3.0, "maxY": 4821.0, "series": [{"data": [[8.0, 274.5], [9.0, 317.5], [19.0, 4760.0], [10.0, 312.5], [20.0, 2542.0], [11.0, 301.0], [3.0, 4821.0], [13.0, 4770.0], [7.0, 4771.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 274.5, "minX": 3.0, "maxY": 4821.0, "series": [{"data": [[8.0, 274.5], [9.0, 317.5], [19.0, 4760.0], [10.0, 312.5], [20.0, 2542.0], [11.0, 301.0], [3.0, 4821.0], [13.0, 4770.0], [7.0, 4771.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235618E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235618E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235618E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235618E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235618E12, 3.3333333333333335]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235618E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235618E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235618E12, 3.3333333333333335]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235618E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.79235618E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.79235618E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235618E12, "title": "Total Transactions Per Second"}},
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

