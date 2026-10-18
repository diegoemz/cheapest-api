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
        data: {"result": {"minY": 254.0, "minX": 0.0, "maxY": 2561.0, "series": [{"data": [[0.0, 254.0], [0.1, 254.0], [0.2, 257.0], [0.3, 257.0], [0.4, 258.0], [0.5, 258.0], [0.6, 258.0], [0.7, 258.0], [0.8, 258.0], [0.9, 258.0], [1.0, 259.0], [1.1, 259.0], [1.2, 261.0], [1.3, 261.0], [1.4, 261.0], [1.5, 261.0], [1.6, 261.0], [1.7, 261.0], [1.8, 262.0], [1.9, 262.0], [2.0, 262.0], [2.1, 262.0], [2.2, 262.0], [2.3, 262.0], [2.4, 263.0], [2.5, 263.0], [2.6, 264.0], [2.7, 264.0], [2.8, 264.0], [2.9, 264.0], [3.0, 265.0], [3.1, 265.0], [3.2, 266.0], [3.3, 266.0], [3.4, 266.0], [3.5, 266.0], [3.6, 266.0], [3.7, 266.0], [3.8, 266.0], [3.9, 266.0], [4.0, 267.0], [4.1, 267.0], [4.2, 267.0], [4.3, 267.0], [4.4, 268.0], [4.5, 268.0], [4.6, 268.0], [4.7, 268.0], [4.8, 268.0], [4.9, 268.0], [5.0, 269.0], [5.1, 269.0], [5.2, 270.0], [5.3, 270.0], [5.4, 270.0], [5.5, 270.0], [5.6, 270.0], [5.7, 270.0], [5.8, 270.0], [5.9, 270.0], [6.0, 270.0], [6.1, 270.0], [6.2, 271.0], [6.3, 271.0], [6.4, 271.0], [6.5, 271.0], [6.6, 271.0], [6.7, 271.0], [6.8, 271.0], [6.9, 271.0], [7.0, 271.0], [7.1, 271.0], [7.2, 272.0], [7.3, 272.0], [7.4, 272.0], [7.5, 272.0], [7.6, 272.0], [7.7, 272.0], [7.8, 272.0], [7.9, 272.0], [8.0, 272.0], [8.1, 272.0], [8.2, 272.0], [8.3, 272.0], [8.4, 272.0], [8.5, 272.0], [8.6, 272.0], [8.7, 272.0], [8.8, 272.0], [8.9, 272.0], [9.0, 272.0], [9.1, 272.0], [9.2, 272.0], [9.3, 272.0], [9.4, 272.0], [9.5, 272.0], [9.6, 273.0], [9.7, 273.0], [9.8, 273.0], [9.9, 273.0], [10.0, 273.0], [10.1, 273.0], [10.2, 273.0], [10.3, 273.0], [10.4, 274.0], [10.5, 274.0], [10.6, 274.0], [10.7, 274.0], [10.8, 275.0], [10.9, 275.0], [11.0, 275.0], [11.1, 275.0], [11.2, 275.0], [11.3, 275.0], [11.4, 275.0], [11.5, 275.0], [11.6, 275.0], [11.7, 276.0], [11.8, 276.0], [11.9, 276.0], [12.0, 276.0], [12.1, 276.0], [12.2, 276.0], [12.3, 276.0], [12.4, 276.0], [12.5, 276.0], [12.6, 276.0], [12.7, 277.0], [12.8, 277.0], [12.9, 277.0], [13.0, 277.0], [13.1, 277.0], [13.2, 277.0], [13.3, 277.0], [13.4, 277.0], [13.5, 277.0], [13.6, 277.0], [13.7, 277.0], [13.8, 278.0], [13.9, 278.0], [14.0, 278.0], [14.1, 278.0], [14.2, 278.0], [14.3, 278.0], [14.4, 278.0], [14.5, 278.0], [14.6, 278.0], [14.7, 278.0], [14.8, 278.0], [14.9, 278.0], [15.0, 278.0], [15.1, 278.0], [15.2, 278.0], [15.3, 279.0], [15.4, 279.0], [15.5, 279.0], [15.6, 279.0], [15.7, 279.0], [15.8, 279.0], [15.9, 279.0], [16.0, 279.0], [16.1, 279.0], [16.2, 279.0], [16.3, 279.0], [16.4, 279.0], [16.5, 279.0], [16.6, 279.0], [16.7, 279.0], [16.8, 279.0], [16.9, 279.0], [17.0, 279.0], [17.1, 279.0], [17.2, 279.0], [17.3, 279.0], [17.4, 279.0], [17.5, 280.0], [17.6, 280.0], [17.7, 280.0], [17.8, 280.0], [17.9, 280.0], [18.0, 280.0], [18.1, 281.0], [18.2, 281.0], [18.3, 281.0], [18.4, 281.0], [18.5, 281.0], [18.6, 281.0], [18.7, 281.0], [18.8, 281.0], [18.9, 281.0], [19.0, 281.0], [19.1, 281.0], [19.2, 281.0], [19.3, 281.0], [19.4, 281.0], [19.5, 281.0], [19.6, 281.0], [19.7, 282.0], [19.8, 282.0], [19.9, 282.0], [20.0, 282.0], [20.1, 282.0], [20.2, 282.0], [20.3, 282.0], [20.4, 282.0], [20.5, 282.0], [20.6, 282.0], [20.7, 282.0], [20.8, 282.0], [20.9, 282.0], [21.0, 282.0], [21.1, 282.0], [21.2, 282.0], [21.3, 282.0], [21.4, 282.0], [21.5, 283.0], [21.6, 283.0], [21.7, 283.0], [21.8, 283.0], [21.9, 283.0], [22.0, 283.0], [22.1, 283.0], [22.2, 283.0], [22.3, 283.0], [22.4, 283.0], [22.5, 284.0], [22.6, 284.0], [22.7, 284.0], [22.8, 284.0], [22.9, 284.0], [23.0, 284.0], [23.1, 284.0], [23.2, 284.0], [23.3, 284.0], [23.4, 284.0], [23.5, 284.0], [23.6, 284.0], [23.7, 284.0], [23.8, 284.0], [23.9, 285.0], [24.0, 285.0], [24.1, 285.0], [24.2, 285.0], [24.3, 285.0], [24.4, 285.0], [24.5, 285.0], [24.6, 285.0], [24.7, 286.0], [24.8, 286.0], [24.9, 286.0], [25.0, 286.0], [25.1, 286.0], [25.2, 286.0], [25.3, 286.0], [25.4, 286.0], [25.5, 286.0], [25.6, 286.0], [25.7, 286.0], [25.8, 286.0], [25.9, 287.0], [26.0, 287.0], [26.1, 287.0], [26.2, 287.0], [26.3, 287.0], [26.4, 287.0], [26.5, 287.0], [26.6, 287.0], [26.7, 287.0], [26.8, 287.0], [26.9, 287.0], [27.0, 287.0], [27.1, 287.0], [27.2, 287.0], [27.3, 287.0], [27.4, 287.0], [27.5, 288.0], [27.6, 288.0], [27.7, 288.0], [27.8, 288.0], [27.9, 288.0], [28.0, 288.0], [28.1, 288.0], [28.2, 288.0], [28.3, 288.0], [28.4, 288.0], [28.5, 288.0], [28.6, 288.0], [28.7, 288.0], [28.8, 288.0], [28.9, 289.0], [29.0, 289.0], [29.1, 289.0], [29.2, 289.0], [29.3, 289.0], [29.4, 289.0], [29.5, 289.0], [29.6, 289.0], [29.7, 289.0], [29.8, 289.0], [29.9, 289.0], [30.0, 289.0], [30.1, 290.0], [30.2, 290.0], [30.3, 290.0], [30.4, 290.0], [30.5, 290.0], [30.6, 290.0], [30.7, 290.0], [30.8, 290.0], [30.9, 291.0], [31.0, 291.0], [31.1, 291.0], [31.2, 291.0], [31.3, 291.0], [31.4, 291.0], [31.5, 292.0], [31.6, 292.0], [31.7, 292.0], [31.8, 292.0], [31.9, 292.0], [32.0, 292.0], [32.1, 292.0], [32.2, 292.0], [32.3, 292.0], [32.4, 292.0], [32.5, 293.0], [32.6, 293.0], [32.7, 293.0], [32.8, 293.0], [32.9, 293.0], [33.0, 293.0], [33.1, 293.0], [33.2, 294.0], [33.3, 294.0], [33.4, 294.0], [33.5, 294.0], [33.6, 294.0], [33.7, 294.0], [33.8, 294.0], [33.9, 294.0], [34.0, 294.0], [34.1, 294.0], [34.2, 295.0], [34.3, 295.0], [34.4, 295.0], [34.5, 295.0], [34.6, 295.0], [34.7, 295.0], [34.8, 295.0], [34.9, 295.0], [35.0, 295.0], [35.1, 295.0], [35.2, 295.0], [35.3, 295.0], [35.4, 295.0], [35.5, 295.0], [35.6, 295.0], [35.7, 295.0], [35.8, 295.0], [35.9, 295.0], [36.0, 296.0], [36.1, 296.0], [36.2, 296.0], [36.3, 296.0], [36.4, 296.0], [36.5, 296.0], [36.6, 297.0], [36.7, 297.0], [36.8, 297.0], [36.9, 297.0], [37.0, 297.0], [37.1, 297.0], [37.2, 297.0], [37.3, 297.0], [37.4, 298.0], [37.5, 298.0], [37.6, 298.0], [37.7, 298.0], [37.8, 298.0], [37.9, 298.0], [38.0, 298.0], [38.1, 298.0], [38.2, 298.0], [38.3, 298.0], [38.4, 299.0], [38.5, 299.0], [38.6, 299.0], [38.7, 299.0], [38.8, 299.0], [38.9, 299.0], [39.0, 300.0], [39.1, 300.0], [39.2, 301.0], [39.3, 301.0], [39.4, 301.0], [39.5, 302.0], [39.6, 302.0], [39.7, 303.0], [39.8, 303.0], [39.9, 303.0], [40.0, 303.0], [40.1, 303.0], [40.2, 303.0], [40.3, 303.0], [40.4, 303.0], [40.5, 304.0], [40.6, 304.0], [40.7, 305.0], [40.8, 305.0], [40.9, 305.0], [41.0, 305.0], [41.1, 307.0], [41.2, 307.0], [41.3, 307.0], [41.4, 307.0], [41.5, 307.0], [41.6, 307.0], [41.7, 307.0], [41.8, 307.0], [41.9, 308.0], [42.0, 308.0], [42.1, 308.0], [42.2, 308.0], [42.3, 308.0], [42.4, 308.0], [42.5, 309.0], [42.6, 309.0], [42.7, 310.0], [42.8, 310.0], [42.9, 310.0], [43.0, 310.0], [43.1, 310.0], [43.2, 310.0], [43.3, 311.0], [43.4, 311.0], [43.5, 311.0], [43.6, 311.0], [43.7, 311.0], [43.8, 311.0], [43.9, 311.0], [44.0, 311.0], [44.1, 312.0], [44.2, 312.0], [44.3, 312.0], [44.4, 312.0], [44.5, 312.0], [44.6, 312.0], [44.7, 312.0], [44.8, 312.0], [44.9, 312.0], [45.0, 312.0], [45.1, 312.0], [45.2, 312.0], [45.3, 313.0], [45.4, 313.0], [45.5, 313.0], [45.6, 313.0], [45.7, 313.0], [45.8, 313.0], [45.9, 314.0], [46.0, 314.0], [46.1, 314.0], [46.2, 314.0], [46.3, 314.0], [46.4, 314.0], [46.5, 314.0], [46.6, 314.0], [46.7, 314.0], [46.8, 314.0], [46.9, 314.0], [47.0, 314.0], [47.1, 314.0], [47.2, 314.0], [47.3, 315.0], [47.4, 315.0], [47.5, 315.0], [47.6, 315.0], [47.7, 315.0], [47.8, 315.0], [47.9, 315.0], [48.0, 315.0], [48.1, 315.0], [48.2, 315.0], [48.3, 317.0], [48.4, 317.0], [48.5, 317.0], [48.6, 317.0], [48.7, 317.0], [48.8, 317.0], [48.9, 317.0], [49.0, 317.0], [49.1, 318.0], [49.2, 318.0], [49.3, 318.0], [49.4, 318.0], [49.5, 319.0], [49.6, 319.0], [49.7, 319.0], [49.8, 319.0], [49.9, 319.0], [50.0, 319.0], [50.1, 320.0], [50.2, 320.0], [50.3, 320.0], [50.4, 320.0], [50.5, 320.0], [50.6, 320.0], [50.7, 320.0], [50.8, 320.0], [50.9, 321.0], [51.0, 321.0], [51.1, 321.0], [51.2, 321.0], [51.3, 321.0], [51.4, 321.0], [51.5, 322.0], [51.6, 322.0], [51.7, 322.0], [51.8, 322.0], [51.9, 323.0], [52.0, 323.0], [52.1, 323.0], [52.2, 323.0], [52.3, 323.0], [52.4, 323.0], [52.5, 323.0], [52.6, 323.0], [52.7, 323.0], [52.8, 323.0], [52.9, 324.0], [53.0, 324.0], [53.1, 324.0], [53.2, 325.0], [53.3, 325.0], [53.4, 325.0], [53.5, 326.0], [53.6, 326.0], [53.7, 326.0], [53.8, 326.0], [53.9, 327.0], [54.0, 327.0], [54.1, 327.0], [54.2, 327.0], [54.3, 327.0], [54.4, 327.0], [54.5, 328.0], [54.6, 328.0], [54.7, 328.0], [54.8, 328.0], [54.9, 328.0], [55.0, 328.0], [55.1, 328.0], [55.2, 329.0], [55.3, 329.0], [55.4, 329.0], [55.5, 330.0], [55.6, 330.0], [55.7, 331.0], [55.8, 331.0], [55.9, 332.0], [56.0, 332.0], [56.1, 333.0], [56.2, 333.0], [56.3, 333.0], [56.4, 333.0], [56.5, 336.0], [56.6, 336.0], [56.7, 336.0], [56.8, 336.0], [56.9, 336.0], [57.0, 336.0], [57.1, 337.0], [57.2, 337.0], [57.3, 337.0], [57.4, 337.0], [57.5, 337.0], [57.6, 337.0], [57.7, 337.0], [57.8, 337.0], [57.9, 337.0], [58.0, 337.0], [58.1, 338.0], [58.2, 338.0], [58.3, 339.0], [58.4, 339.0], [58.5, 340.0], [58.6, 340.0], [58.7, 340.0], [58.8, 340.0], [58.9, 340.0], [59.0, 340.0], [59.1, 341.0], [59.2, 341.0], [59.3, 341.0], [59.4, 341.0], [59.5, 342.0], [59.6, 342.0], [59.7, 344.0], [59.8, 344.0], [59.9, 344.0], [60.0, 344.0], [60.1, 345.0], [60.2, 345.0], [60.3, 346.0], [60.4, 346.0], [60.5, 346.0], [60.6, 346.0], [60.7, 347.0], [60.8, 347.0], [60.9, 348.0], [61.0, 348.0], [61.1, 349.0], [61.2, 349.0], [61.3, 349.0], [61.4, 349.0], [61.5, 350.0], [61.6, 350.0], [61.7, 351.0], [61.8, 351.0], [61.9, 351.0], [62.0, 351.0], [62.1, 352.0], [62.2, 352.0], [62.3, 353.0], [62.4, 353.0], [62.5, 353.0], [62.6, 353.0], [62.7, 354.0], [62.8, 354.0], [62.9, 355.0], [63.0, 355.0], [63.1, 356.0], [63.2, 356.0], [63.3, 356.0], [63.4, 356.0], [63.5, 357.0], [63.6, 357.0], [63.7, 361.0], [63.8, 361.0], [63.9, 361.0], [64.0, 361.0], [64.1, 361.0], [64.2, 361.0], [64.3, 364.0], [64.4, 364.0], [64.5, 365.0], [64.6, 365.0], [64.7, 366.0], [64.8, 366.0], [64.9, 369.0], [65.0, 369.0], [65.1, 370.0], [65.2, 370.0], [65.3, 371.0], [65.4, 371.0], [65.5, 371.0], [65.6, 371.0], [65.7, 371.0], [65.8, 371.0], [65.9, 374.0], [66.0, 374.0], [66.1, 374.0], [66.2, 374.0], [66.3, 374.0], [66.4, 374.0], [66.5, 375.0], [66.6, 375.0], [66.7, 375.0], [66.8, 375.0], [66.9, 376.0], [67.0, 376.0], [67.1, 380.0], [67.2, 380.0], [67.3, 380.0], [67.4, 380.0], [67.5, 382.0], [67.6, 382.0], [67.7, 385.0], [67.8, 385.0], [67.9, 387.0], [68.0, 387.0], [68.1, 389.0], [68.2, 389.0], [68.3, 395.0], [68.4, 395.0], [68.5, 396.0], [68.6, 396.0], [68.7, 397.0], [68.8, 397.0], [68.9, 398.0], [69.0, 398.0], [69.1, 398.0], [69.2, 398.0], [69.3, 398.0], [69.4, 398.0], [69.5, 398.0], [69.6, 398.0], [69.7, 402.0], [69.8, 402.0], [69.9, 403.0], [70.0, 403.0], [70.1, 405.0], [70.2, 405.0], [70.3, 407.0], [70.4, 407.0], [70.5, 409.0], [70.6, 409.0], [70.7, 411.0], [70.8, 411.0], [70.9, 411.0], [71.0, 411.0], [71.1, 413.0], [71.2, 413.0], [71.3, 415.0], [71.4, 415.0], [71.5, 417.0], [71.6, 417.0], [71.7, 417.0], [71.8, 417.0], [71.9, 421.0], [72.0, 421.0], [72.1, 428.0], [72.2, 428.0], [72.3, 428.0], [72.4, 428.0], [72.5, 430.0], [72.6, 430.0], [72.7, 431.0], [72.8, 431.0], [72.9, 431.0], [73.0, 431.0], [73.1, 433.0], [73.2, 433.0], [73.3, 433.0], [73.4, 433.0], [73.5, 441.0], [73.6, 441.0], [73.7, 447.0], [73.8, 447.0], [73.9, 448.0], [74.0, 448.0], [74.1, 451.0], [74.2, 451.0], [74.3, 454.0], [74.4, 454.0], [74.5, 458.0], [74.6, 458.0], [74.7, 462.0], [74.8, 462.0], [74.9, 463.0], [75.0, 463.0], [75.1, 473.0], [75.2, 473.0], [75.3, 485.0], [75.4, 485.0], [75.5, 491.0], [75.6, 491.0], [75.7, 505.0], [75.8, 505.0], [75.9, 509.0], [76.0, 509.0], [76.1, 509.0], [76.2, 509.0], [76.3, 511.0], [76.4, 511.0], [76.5, 515.0], [76.6, 515.0], [76.7, 529.0], [76.8, 529.0], [76.9, 532.0], [77.0, 532.0], [77.1, 533.0], [77.2, 533.0], [77.3, 533.0], [77.4, 533.0], [77.5, 534.0], [77.6, 534.0], [77.7, 536.0], [77.8, 536.0], [77.9, 542.0], [78.0, 542.0], [78.1, 549.0], [78.2, 549.0], [78.3, 553.0], [78.4, 553.0], [78.5, 553.0], [78.6, 553.0], [78.7, 559.0], [78.8, 559.0], [78.9, 560.0], [79.0, 560.0], [79.1, 561.0], [79.2, 561.0], [79.3, 573.0], [79.4, 573.0], [79.5, 575.0], [79.6, 575.0], [79.7, 576.0], [79.8, 576.0], [79.9, 580.0], [80.0, 580.0], [80.1, 585.0], [80.2, 585.0], [80.3, 609.0], [80.4, 609.0], [80.5, 612.0], [80.6, 612.0], [80.7, 624.0], [80.8, 624.0], [80.9, 633.0], [81.0, 633.0], [81.1, 635.0], [81.2, 635.0], [81.3, 637.0], [81.4, 637.0], [81.5, 645.0], [81.6, 645.0], [81.7, 648.0], [81.8, 648.0], [81.9, 652.0], [82.0, 652.0], [82.1, 654.0], [82.2, 654.0], [82.3, 669.0], [82.4, 669.0], [82.5, 683.0], [82.6, 683.0], [82.7, 689.0], [82.8, 689.0], [82.9, 696.0], [83.0, 696.0], [83.1, 699.0], [83.2, 699.0], [83.3, 713.0], [83.4, 713.0], [83.5, 733.0], [83.6, 733.0], [83.7, 734.0], [83.8, 734.0], [83.9, 742.0], [84.0, 742.0], [84.1, 744.0], [84.2, 744.0], [84.3, 758.0], [84.4, 758.0], [84.5, 768.0], [84.6, 768.0], [84.7, 771.0], [84.8, 771.0], [84.9, 771.0], [85.0, 771.0], [85.1, 795.0], [85.2, 795.0], [85.3, 814.0], [85.4, 814.0], [85.5, 821.0], [85.6, 821.0], [85.7, 843.0], [85.8, 843.0], [85.9, 872.0], [86.0, 872.0], [86.1, 901.0], [86.2, 901.0], [86.3, 943.0], [86.4, 943.0], [86.5, 972.0], [86.6, 972.0], [86.7, 987.0], [86.8, 987.0], [86.9, 995.0], [87.0, 995.0], [87.1, 1031.0], [87.2, 1031.0], [87.3, 1043.0], [87.4, 1043.0], [87.5, 1064.0], [87.6, 1064.0], [87.7, 1080.0], [87.8, 1080.0], [87.9, 1098.0], [88.0, 1098.0], [88.1, 1104.0], [88.2, 1104.0], [88.3, 1146.0], [88.4, 1146.0], [88.5, 1146.0], [88.6, 1146.0], [88.7, 1158.0], [88.8, 1158.0], [88.9, 1183.0], [89.0, 1183.0], [89.1, 1222.0], [89.2, 1222.0], [89.3, 1257.0], [89.4, 1257.0], [89.5, 1271.0], [89.6, 1271.0], [89.7, 1278.0], [89.8, 1278.0], [89.9, 1285.0], [90.0, 1285.0], [90.1, 1291.0], [90.2, 1291.0], [90.3, 1294.0], [90.4, 1294.0], [90.5, 1297.0], [90.6, 1297.0], [90.7, 1299.0], [90.8, 1299.0], [90.9, 1299.0], [91.0, 1299.0], [91.1, 1300.0], [91.2, 1300.0], [91.3, 1320.0], [91.4, 1320.0], [91.5, 1324.0], [91.6, 1324.0], [91.7, 1326.0], [91.8, 1326.0], [91.9, 1351.0], [92.0, 1351.0], [92.1, 1356.0], [92.2, 1356.0], [92.3, 1356.0], [92.4, 1356.0], [92.5, 1359.0], [92.6, 1359.0], [92.7, 1370.0], [92.8, 1370.0], [92.9, 1373.0], [93.0, 1373.0], [93.1, 1394.0], [93.2, 1394.0], [93.3, 1449.0], [93.4, 1449.0], [93.5, 1462.0], [93.6, 1462.0], [93.7, 1464.0], [93.8, 1464.0], [93.9, 1480.0], [94.0, 1480.0], [94.1, 1528.0], [94.2, 1528.0], [94.3, 1536.0], [94.4, 1536.0], [94.5, 1555.0], [94.6, 1555.0], [94.7, 1564.0], [94.8, 1564.0], [94.9, 1574.0], [95.0, 1574.0], [95.1, 1575.0], [95.2, 1575.0], [95.3, 1579.0], [95.4, 1579.0], [95.5, 1596.0], [95.6, 1596.0], [95.7, 1608.0], [95.8, 1608.0], [95.9, 1665.0], [96.0, 1665.0], [96.1, 1746.0], [96.2, 1746.0], [96.3, 1770.0], [96.4, 1770.0], [96.5, 1774.0], [96.6, 1774.0], [96.7, 1793.0], [96.8, 1793.0], [96.9, 1804.0], [97.0, 1804.0], [97.1, 1835.0], [97.2, 1835.0], [97.3, 1854.0], [97.4, 1854.0], [97.5, 1866.0], [97.6, 1866.0], [97.7, 1960.0], [97.8, 1960.0], [97.9, 1994.0], [98.0, 1994.0], [98.1, 2024.0], [98.2, 2024.0], [98.3, 2233.0], [98.4, 2233.0], [98.5, 2265.0], [98.6, 2265.0], [98.7, 2268.0], [98.8, 2268.0], [98.9, 2279.0], [99.0, 2279.0], [99.1, 2320.0], [99.2, 2320.0], [99.3, 2354.0], [99.4, 2354.0], [99.5, 2388.0], [99.6, 2388.0], [99.7, 2469.0], [99.8, 2469.0], [99.9, 2561.0], [100.0, 2561.0]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 195.0, "series": [{"data": [[2300.0, 3.0], [2200.0, 4.0], [600.0, 15.0], [2400.0, 1.0], [2500.0, 1.0], [700.0, 10.0], [200.0, 195.0], [800.0, 4.0], [900.0, 5.0], [1000.0, 5.0], [1100.0, 5.0], [300.0, 153.0], [1200.0, 10.0], [1300.0, 11.0], [1400.0, 4.0], [1500.0, 8.0], [400.0, 30.0], [1600.0, 2.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 2.0], [500.0, 23.0], [2000.0, 1.0]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 378.0, "series": [{"data": [[0.0, 378.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 92.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 30.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.4296875000000004, "minX": 1.79235804E12, "maxY": 6.266129032258064, "series": [{"data": [[1.7923581E12, 6.266129032258064], [1.79235804E12, 3.4296875000000004]], "isOverall": false, "label": "Fila 500 hilos / 50 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7923581E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 285.1309523809525, "minX": 1.0, "maxY": 2233.0, "series": [{"data": [[8.0, 626.0], [2.0, 1770.0], [9.0, 835.9333333333334], [10.0, 1130.7777777777778], [11.0, 863.5263157894735], [3.0, 285.1309523809525], [12.0, 1080.916666666667], [13.0, 826.4545454545455], [14.0, 970.7], [15.0, 1180.8], [4.0, 389.03571428571445], [16.0, 827.6666666666666], [1.0, 2233.0], [19.0, 1137.25], [5.0, 482.8157894736843], [20.0, 1694.0], [6.0, 720.7575757575759], [7.0, 924.5294117647057]], "isOverall": false, "label": "POST venta", "isController": false}, {"data": [[5.540000000000003, 517.8940000000002]], "isOverall": false, "label": "POST venta-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1233.0666666666666, "minX": 1.79235804E12, "maxY": 5629.6, "series": [{"data": [[1.7923581E12, 5629.6], [1.79235804E12, 1937.0666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7923581E12, 3583.6], [1.79235804E12, 1233.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7923581E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 296.0624999999999, "minX": 1.79235804E12, "maxY": 594.2231182795699, "series": [{"data": [[1.7923581E12, 594.2231182795699], [1.79235804E12, 296.0624999999999]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7923581E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 295.93750000000017, "minX": 1.79235804E12, "maxY": 594.1747311827955, "series": [{"data": [[1.7923581E12, 594.1747311827955], [1.79235804E12, 295.93750000000017]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7923581E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 175.17968749999997, "minX": 1.79235804E12, "maxY": 377.60483870967744, "series": [{"data": [[1.7923581E12, 377.60483870967744], [1.79235804E12, 175.17968749999997]], "isOverall": false, "label": "POST venta", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7923581E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.79235804E12, "maxY": 2561.0, "series": [{"data": [[1.7923581E12, 2561.0], [1.79235804E12, 553.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7923581E12, 257.0], [1.79235804E12, 254.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7923581E12, 1366.6999999999998], [1.79235804E12, 322.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7923581E12, 2363.1799999999994], [1.79235804E12, 547.4899999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7923581E12, 351.0], [1.79235804E12, 287.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7923581E12, 1771.3999999999999], [1.79235804E12, 347.29999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7923581E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 1272.0, "series": [{"data": [[8.0, 325.5], [2.0, 1122.0], [9.0, 482.5], [10.0, 295.0], [11.0, 491.5], [12.0, 403.5], [14.0, 606.0], [15.0, 512.0], [4.0, 381.0], [1.0, 1272.0], [5.0, 634.0], [23.0, 683.0], [6.0, 455.0], [7.0, 733.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 295.0, "minX": 1.0, "maxY": 1272.0, "series": [{"data": [[8.0, 325.5], [2.0, 1122.0], [9.0, 482.5], [10.0, 295.0], [11.0, 491.5], [12.0, 403.5], [14.0, 606.0], [15.0, 512.0], [4.0, 381.0], [1.0, 1272.0], [5.0, 634.0], [23.0, 683.0], [6.0, 455.0], [7.0, 733.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.79235804E12, "maxY": 6.15, "series": [{"data": [[1.7923581E12, 6.15], [1.79235804E12, 2.183333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7923581E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.1333333333333333, "minX": 1.79235804E12, "maxY": 6.2, "series": [{"data": [[1.7923581E12, 6.2], [1.79235804E12, 2.1333333333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7923581E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.1333333333333333, "minX": 1.79235804E12, "maxY": 6.2, "series": [{"data": [[1.7923581E12, 6.2], [1.79235804E12, 2.1333333333333333]], "isOverall": false, "label": "POST venta-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7923581E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.1333333333333333, "minX": 1.79235804E12, "maxY": 6.2, "series": [{"data": [[1.7923581E12, 6.2], [1.79235804E12, 2.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7923581E12, "title": "Total Transactions Per Second"}},
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

