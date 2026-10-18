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
        data: {"result": {"minY": 245.0, "minX": 0.0, "maxY": 5250.0, "series": [{"data": [[0.0, 245.0], [0.1, 245.0], [0.2, 247.0], [0.3, 247.0], [0.4, 248.0], [0.5, 249.0], [0.6, 251.0], [0.7, 251.0], [0.8, 253.0], [0.9, 253.0], [1.0, 253.0], [1.1, 253.0], [1.2, 253.0], [1.3, 253.0], [1.4, 254.0], [1.5, 254.0], [1.6, 255.0], [1.7, 255.0], [1.8, 256.0], [1.9, 257.0], [2.0, 257.0], [2.1, 257.0], [2.2, 257.0], [2.3, 257.0], [2.4, 258.0], [2.5, 258.0], [2.6, 258.0], [2.7, 258.0], [2.8, 259.0], [2.9, 259.0], [3.0, 259.0], [3.1, 259.0], [3.2, 259.0], [3.3, 259.0], [3.4, 260.0], [3.5, 260.0], [3.6, 260.0], [3.7, 260.0], [3.8, 260.0], [3.9, 260.0], [4.0, 260.0], [4.1, 260.0], [4.2, 261.0], [4.3, 261.0], [4.4, 261.0], [4.5, 261.0], [4.6, 261.0], [4.7, 261.0], [4.8, 261.0], [4.9, 261.0], [5.0, 262.0], [5.1, 262.0], [5.2, 262.0], [5.3, 262.0], [5.4, 262.0], [5.5, 262.0], [5.6, 262.0], [5.7, 262.0], [5.8, 263.0], [5.9, 263.0], [6.0, 263.0], [6.1, 263.0], [6.2, 263.0], [6.3, 263.0], [6.4, 263.0], [6.5, 263.0], [6.6, 263.0], [6.7, 263.0], [6.8, 264.0], [6.9, 264.0], [7.0, 264.0], [7.1, 264.0], [7.2, 264.0], [7.3, 264.0], [7.4, 264.0], [7.5, 264.0], [7.6, 264.0], [7.7, 265.0], [7.8, 265.0], [7.9, 265.0], [8.0, 265.0], [8.1, 265.0], [8.2, 265.0], [8.3, 265.0], [8.4, 265.0], [8.5, 265.0], [8.6, 266.0], [8.7, 266.0], [8.8, 266.0], [8.9, 266.0], [9.0, 266.0], [9.1, 266.0], [9.2, 266.0], [9.3, 266.0], [9.4, 266.0], [9.5, 267.0], [9.6, 267.0], [9.7, 267.0], [9.8, 267.0], [9.9, 267.0], [10.0, 267.0], [10.1, 267.0], [10.2, 268.0], [10.3, 268.0], [10.4, 268.0], [10.5, 268.0], [10.6, 268.0], [10.7, 268.0], [10.8, 268.0], [10.9, 268.0], [11.0, 268.0], [11.1, 268.0], [11.2, 268.0], [11.3, 268.0], [11.4, 268.0], [11.5, 268.0], [11.6, 268.0], [11.7, 268.0], [11.8, 268.0], [11.9, 269.0], [12.0, 269.0], [12.1, 269.0], [12.2, 269.0], [12.3, 269.0], [12.4, 269.0], [12.5, 269.0], [12.6, 269.0], [12.7, 269.0], [12.8, 270.0], [12.9, 270.0], [13.0, 270.0], [13.1, 270.0], [13.2, 270.0], [13.3, 270.0], [13.4, 270.0], [13.5, 270.0], [13.6, 271.0], [13.7, 271.0], [13.8, 271.0], [13.9, 271.0], [14.0, 271.0], [14.1, 271.0], [14.2, 271.0], [14.3, 271.0], [14.4, 272.0], [14.5, 272.0], [14.6, 272.0], [14.7, 272.0], [14.8, 272.0], [14.9, 272.0], [15.0, 272.0], [15.1, 272.0], [15.2, 272.0], [15.3, 272.0], [15.4, 272.0], [15.5, 272.0], [15.6, 272.0], [15.7, 272.0], [15.8, 273.0], [15.9, 273.0], [16.0, 273.0], [16.1, 273.0], [16.2, 273.0], [16.3, 273.0], [16.4, 273.0], [16.5, 273.0], [16.6, 273.0], [16.7, 273.0], [16.8, 273.0], [16.9, 273.0], [17.0, 273.0], [17.1, 273.0], [17.2, 273.0], [17.3, 273.0], [17.4, 273.0], [17.5, 274.0], [17.6, 274.0], [17.7, 274.0], [17.8, 274.0], [17.9, 274.0], [18.0, 274.0], [18.1, 274.0], [18.2, 274.0], [18.3, 274.0], [18.4, 274.0], [18.5, 274.0], [18.6, 274.0], [18.7, 274.0], [18.8, 275.0], [18.9, 275.0], [19.0, 275.0], [19.1, 275.0], [19.2, 275.0], [19.3, 275.0], [19.4, 275.0], [19.5, 275.0], [19.6, 275.0], [19.7, 275.0], [19.8, 276.0], [19.9, 276.0], [20.0, 276.0], [20.1, 276.0], [20.2, 276.0], [20.3, 276.0], [20.4, 277.0], [20.5, 277.0], [20.6, 277.0], [20.7, 277.0], [20.8, 277.0], [20.9, 277.0], [21.0, 277.0], [21.1, 277.0], [21.2, 277.0], [21.3, 277.0], [21.4, 278.0], [21.5, 278.0], [21.6, 278.0], [21.7, 278.0], [21.8, 278.0], [21.9, 278.0], [22.0, 278.0], [22.1, 278.0], [22.2, 279.0], [22.3, 279.0], [22.4, 279.0], [22.5, 279.0], [22.6, 279.0], [22.7, 279.0], [22.8, 279.0], [22.9, 279.0], [23.0, 279.0], [23.1, 280.0], [23.2, 280.0], [23.3, 280.0], [23.4, 280.0], [23.5, 280.0], [23.6, 280.0], [23.7, 280.0], [23.8, 280.0], [23.9, 280.0], [24.0, 280.0], [24.1, 280.0], [24.2, 280.0], [24.3, 281.0], [24.4, 281.0], [24.5, 281.0], [24.6, 281.0], [24.7, 281.0], [24.8, 281.0], [24.9, 281.0], [25.0, 281.0], [25.1, 282.0], [25.2, 282.0], [25.3, 282.0], [25.4, 282.0], [25.5, 282.0], [25.6, 282.0], [25.7, 282.0], [25.8, 282.0], [25.9, 282.0], [26.0, 282.0], [26.1, 282.0], [26.2, 283.0], [26.3, 283.0], [26.4, 283.0], [26.5, 283.0], [26.6, 283.0], [26.7, 283.0], [26.8, 283.0], [26.9, 283.0], [27.0, 284.0], [27.1, 284.0], [27.2, 284.0], [27.3, 284.0], [27.4, 284.0], [27.5, 284.0], [27.6, 284.0], [27.7, 284.0], [27.8, 284.0], [27.9, 285.0], [28.0, 285.0], [28.1, 285.0], [28.2, 285.0], [28.3, 285.0], [28.4, 285.0], [28.5, 285.0], [28.6, 285.0], [28.7, 285.0], [28.8, 285.0], [28.9, 285.0], [29.0, 286.0], [29.1, 286.0], [29.2, 286.0], [29.3, 286.0], [29.4, 286.0], [29.5, 286.0], [29.6, 286.0], [29.7, 286.0], [29.8, 287.0], [29.9, 287.0], [30.0, 287.0], [30.1, 287.0], [30.2, 287.0], [30.3, 287.0], [30.4, 287.0], [30.5, 288.0], [30.6, 288.0], [30.7, 288.0], [30.8, 288.0], [30.9, 288.0], [31.0, 288.0], [31.1, 288.0], [31.2, 289.0], [31.3, 289.0], [31.4, 289.0], [31.5, 289.0], [31.6, 290.0], [31.7, 290.0], [31.8, 290.0], [31.9, 290.0], [32.0, 290.0], [32.1, 290.0], [32.2, 291.0], [32.3, 291.0], [32.4, 291.0], [32.5, 291.0], [32.6, 291.0], [32.7, 291.0], [32.8, 291.0], [32.9, 291.0], [33.0, 292.0], [33.1, 292.0], [33.2, 292.0], [33.3, 292.0], [33.4, 292.0], [33.5, 292.0], [33.6, 292.0], [33.7, 292.0], [33.8, 292.0], [33.9, 293.0], [34.0, 293.0], [34.1, 293.0], [34.2, 293.0], [34.3, 293.0], [34.4, 294.0], [34.5, 294.0], [34.6, 294.0], [34.7, 294.0], [34.8, 294.0], [34.9, 294.0], [35.0, 294.0], [35.1, 294.0], [35.2, 295.0], [35.3, 295.0], [35.4, 295.0], [35.5, 295.0], [35.6, 295.0], [35.7, 295.0], [35.8, 295.0], [35.9, 295.0], [36.0, 295.0], [36.1, 295.0], [36.2, 295.0], [36.3, 296.0], [36.4, 296.0], [36.5, 296.0], [36.6, 296.0], [36.7, 296.0], [36.8, 296.0], [36.9, 296.0], [37.0, 296.0], [37.1, 296.0], [37.2, 296.0], [37.3, 296.0], [37.4, 297.0], [37.5, 297.0], [37.6, 297.0], [37.7, 297.0], [37.8, 297.0], [37.9, 297.0], [38.0, 297.0], [38.1, 297.0], [38.2, 297.0], [38.3, 297.0], [38.4, 297.0], [38.5, 297.0], [38.6, 298.0], [38.7, 298.0], [38.8, 298.0], [38.9, 298.0], [39.0, 298.0], [39.1, 298.0], [39.2, 298.0], [39.3, 298.0], [39.4, 298.0], [39.5, 298.0], [39.6, 298.0], [39.7, 299.0], [39.8, 299.0], [39.9, 299.0], [40.0, 299.0], [40.1, 299.0], [40.2, 299.0], [40.3, 299.0], [40.4, 299.0], [40.5, 299.0], [40.6, 299.0], [40.7, 300.0], [40.8, 300.0], [40.9, 300.0], [41.0, 300.0], [41.1, 300.0], [41.2, 300.0], [41.3, 300.0], [41.4, 300.0], [41.5, 300.0], [41.6, 300.0], [41.7, 300.0], [41.8, 301.0], [41.9, 301.0], [42.0, 301.0], [42.1, 301.0], [42.2, 301.0], [42.3, 301.0], [42.4, 301.0], [42.5, 301.0], [42.6, 301.0], [42.7, 301.0], [42.8, 302.0], [42.9, 302.0], [43.0, 302.0], [43.1, 302.0], [43.2, 302.0], [43.3, 302.0], [43.4, 302.0], [43.5, 303.0], [43.6, 303.0], [43.7, 303.0], [43.8, 303.0], [43.9, 304.0], [44.0, 304.0], [44.1, 304.0], [44.2, 304.0], [44.3, 304.0], [44.4, 304.0], [44.5, 304.0], [44.6, 304.0], [44.7, 304.0], [44.8, 304.0], [44.9, 304.0], [45.0, 305.0], [45.1, 305.0], [45.2, 305.0], [45.3, 305.0], [45.4, 305.0], [45.5, 305.0], [45.6, 305.0], [45.7, 305.0], [45.8, 305.0], [45.9, 306.0], [46.0, 306.0], [46.1, 306.0], [46.2, 306.0], [46.3, 306.0], [46.4, 306.0], [46.5, 306.0], [46.6, 306.0], [46.7, 306.0], [46.8, 306.0], [46.9, 307.0], [47.0, 307.0], [47.1, 307.0], [47.2, 307.0], [47.3, 307.0], [47.4, 307.0], [47.5, 308.0], [47.6, 308.0], [47.7, 308.0], [47.8, 308.0], [47.9, 308.0], [48.0, 308.0], [48.1, 309.0], [48.2, 309.0], [48.3, 309.0], [48.4, 309.0], [48.5, 309.0], [48.6, 309.0], [48.7, 309.0], [48.8, 309.0], [48.9, 309.0], [49.0, 309.0], [49.1, 309.0], [49.2, 309.0], [49.3, 310.0], [49.4, 310.0], [49.5, 310.0], [49.6, 310.0], [49.7, 310.0], [49.8, 310.0], [49.9, 310.0], [50.0, 310.0], [50.1, 310.0], [50.2, 311.0], [50.3, 311.0], [50.4, 311.0], [50.5, 311.0], [50.6, 311.0], [50.7, 311.0], [50.8, 311.0], [50.9, 311.0], [51.0, 311.0], [51.1, 311.0], [51.2, 311.0], [51.3, 311.0], [51.4, 312.0], [51.5, 312.0], [51.6, 312.0], [51.7, 312.0], [51.8, 312.0], [51.9, 312.0], [52.0, 312.0], [52.1, 313.0], [52.2, 313.0], [52.3, 313.0], [52.4, 313.0], [52.5, 313.0], [52.6, 313.0], [52.7, 313.0], [52.8, 313.0], [52.9, 313.0], [53.0, 314.0], [53.1, 314.0], [53.2, 314.0], [53.3, 314.0], [53.4, 314.0], [53.5, 314.0], [53.6, 314.0], [53.7, 314.0], [53.8, 314.0], [53.9, 314.0], [54.0, 314.0], [54.1, 314.0], [54.2, 314.0], [54.3, 314.0], [54.4, 315.0], [54.5, 315.0], [54.6, 315.0], [54.7, 315.0], [54.8, 315.0], [54.9, 315.0], [55.0, 315.0], [55.1, 315.0], [55.2, 316.0], [55.3, 316.0], [55.4, 316.0], [55.5, 316.0], [55.6, 316.0], [55.7, 316.0], [55.8, 316.0], [55.9, 316.0], [56.0, 316.0], [56.1, 316.0], [56.2, 317.0], [56.3, 317.0], [56.4, 317.0], [56.5, 317.0], [56.6, 317.0], [56.7, 317.0], [56.8, 317.0], [56.9, 317.0], [57.0, 317.0], [57.1, 317.0], [57.2, 317.0], [57.3, 318.0], [57.4, 318.0], [57.5, 318.0], [57.6, 318.0], [57.7, 318.0], [57.8, 318.0], [57.9, 318.0], [58.0, 318.0], [58.1, 318.0], [58.2, 318.0], [58.3, 318.0], [58.4, 318.0], [58.5, 318.0], [58.6, 319.0], [58.7, 319.0], [58.8, 319.0], [58.9, 319.0], [59.0, 319.0], [59.1, 319.0], [59.2, 319.0], [59.3, 319.0], [59.4, 320.0], [59.5, 320.0], [59.6, 320.0], [59.7, 320.0], [59.8, 320.0], [59.9, 320.0], [60.0, 320.0], [60.1, 320.0], [60.2, 320.0], [60.3, 320.0], [60.4, 320.0], [60.5, 321.0], [60.6, 321.0], [60.7, 321.0], [60.8, 321.0], [60.9, 321.0], [61.0, 321.0], [61.1, 321.0], [61.2, 321.0], [61.3, 322.0], [61.4, 322.0], [61.5, 322.0], [61.6, 322.0], [61.7, 322.0], [61.8, 322.0], [61.9, 322.0], [62.0, 322.0], [62.1, 323.0], [62.2, 323.0], [62.3, 323.0], [62.4, 323.0], [62.5, 323.0], [62.6, 323.0], [62.7, 323.0], [62.8, 323.0], [62.9, 323.0], [63.0, 323.0], [63.1, 323.0], [63.2, 324.0], [63.3, 324.0], [63.4, 324.0], [63.5, 324.0], [63.6, 324.0], [63.7, 324.0], [63.8, 324.0], [63.9, 325.0], [64.0, 325.0], [64.1, 325.0], [64.2, 325.0], [64.3, 325.0], [64.4, 325.0], [64.5, 325.0], [64.6, 326.0], [64.7, 326.0], [64.8, 326.0], [64.9, 326.0], [65.0, 326.0], [65.1, 326.0], [65.2, 327.0], [65.3, 327.0], [65.4, 327.0], [65.5, 327.0], [65.6, 327.0], [65.7, 327.0], [65.8, 327.0], [65.9, 327.0], [66.0, 327.0], [66.1, 327.0], [66.2, 328.0], [66.3, 328.0], [66.4, 328.0], [66.5, 328.0], [66.6, 328.0], [66.7, 328.0], [66.8, 328.0], [66.9, 328.0], [67.0, 329.0], [67.1, 329.0], [67.2, 329.0], [67.3, 329.0], [67.4, 329.0], [67.5, 329.0], [67.6, 329.0], [67.7, 329.0], [67.8, 330.0], [67.9, 330.0], [68.0, 330.0], [68.1, 330.0], [68.2, 331.0], [68.3, 331.0], [68.4, 331.0], [68.5, 331.0], [68.6, 331.0], [68.7, 331.0], [68.8, 331.0], [68.9, 332.0], [69.0, 332.0], [69.1, 332.0], [69.2, 332.0], [69.3, 332.0], [69.4, 332.0], [69.5, 333.0], [69.6, 333.0], [69.7, 333.0], [69.8, 333.0], [69.9, 333.0], [70.0, 333.0], [70.1, 333.0], [70.2, 334.0], [70.3, 334.0], [70.4, 334.0], [70.5, 334.0], [70.6, 334.0], [70.7, 334.0], [70.8, 334.0], [70.9, 334.0], [71.0, 335.0], [71.1, 335.0], [71.2, 335.0], [71.3, 335.0], [71.4, 335.0], [71.5, 335.0], [71.6, 335.0], [71.7, 336.0], [71.8, 336.0], [71.9, 336.0], [72.0, 336.0], [72.1, 336.0], [72.2, 336.0], [72.3, 336.0], [72.4, 337.0], [72.5, 337.0], [72.6, 337.0], [72.7, 337.0], [72.8, 337.0], [72.9, 338.0], [73.0, 338.0], [73.1, 338.0], [73.2, 339.0], [73.3, 339.0], [73.4, 339.0], [73.5, 339.0], [73.6, 340.0], [73.7, 340.0], [73.8, 340.0], [73.9, 340.0], [74.0, 340.0], [74.1, 340.0], [74.2, 341.0], [74.3, 341.0], [74.4, 341.0], [74.5, 342.0], [74.6, 342.0], [74.7, 342.0], [74.8, 342.0], [74.9, 342.0], [75.0, 343.0], [75.1, 343.0], [75.2, 343.0], [75.3, 343.0], [75.4, 343.0], [75.5, 343.0], [75.6, 344.0], [75.7, 345.0], [75.8, 345.0], [75.9, 346.0], [76.0, 346.0], [76.1, 346.0], [76.2, 346.0], [76.3, 347.0], [76.4, 347.0], [76.5, 347.0], [76.6, 347.0], [76.7, 348.0], [76.8, 348.0], [76.9, 349.0], [77.0, 349.0], [77.1, 349.0], [77.2, 349.0], [77.3, 350.0], [77.4, 350.0], [77.5, 351.0], [77.6, 351.0], [77.7, 352.0], [77.8, 352.0], [77.9, 352.0], [78.0, 352.0], [78.1, 353.0], [78.2, 353.0], [78.3, 353.0], [78.4, 353.0], [78.5, 353.0], [78.6, 353.0], [78.7, 354.0], [78.8, 354.0], [78.9, 354.0], [79.0, 355.0], [79.1, 355.0], [79.2, 355.0], [79.3, 356.0], [79.4, 356.0], [79.5, 356.0], [79.6, 356.0], [79.7, 356.0], [79.8, 357.0], [79.9, 357.0], [80.0, 357.0], [80.1, 357.0], [80.2, 357.0], [80.3, 358.0], [80.4, 359.0], [80.5, 359.0], [80.6, 359.0], [80.7, 359.0], [80.8, 359.0], [80.9, 360.0], [81.0, 360.0], [81.1, 361.0], [81.2, 361.0], [81.3, 361.0], [81.4, 362.0], [81.5, 363.0], [81.6, 363.0], [81.7, 363.0], [81.8, 363.0], [81.9, 364.0], [82.0, 364.0], [82.1, 364.0], [82.2, 365.0], [82.3, 365.0], [82.4, 365.0], [82.5, 365.0], [82.6, 365.0], [82.7, 366.0], [82.8, 366.0], [82.9, 367.0], [83.0, 367.0], [83.1, 368.0], [83.2, 368.0], [83.3, 368.0], [83.4, 368.0], [83.5, 368.0], [83.6, 368.0], [83.7, 369.0], [83.8, 369.0], [83.9, 369.0], [84.0, 369.0], [84.1, 370.0], [84.2, 370.0], [84.3, 370.0], [84.4, 371.0], [84.5, 372.0], [84.6, 372.0], [84.7, 372.0], [84.8, 373.0], [84.9, 374.0], [85.0, 375.0], [85.1, 375.0], [85.2, 376.0], [85.3, 376.0], [85.4, 377.0], [85.5, 377.0], [85.6, 378.0], [85.7, 378.0], [85.8, 379.0], [85.9, 380.0], [86.0, 380.0], [86.1, 381.0], [86.2, 382.0], [86.3, 383.0], [86.4, 383.0], [86.5, 385.0], [86.6, 385.0], [86.7, 387.0], [86.8, 388.0], [86.9, 389.0], [87.0, 389.0], [87.1, 390.0], [87.2, 393.0], [87.3, 394.0], [87.4, 395.0], [87.5, 395.0], [87.6, 396.0], [87.7, 396.0], [87.8, 397.0], [87.9, 398.0], [88.0, 398.0], [88.1, 400.0], [88.2, 401.0], [88.3, 402.0], [88.4, 403.0], [88.5, 405.0], [88.6, 406.0], [88.7, 407.0], [88.8, 407.0], [88.9, 411.0], [89.0, 411.0], [89.1, 412.0], [89.2, 413.0], [89.3, 413.0], [89.4, 414.0], [89.5, 414.0], [89.6, 415.0], [89.7, 416.0], [89.8, 416.0], [89.9, 419.0], [90.0, 419.0], [90.1, 420.0], [90.2, 420.0], [90.3, 421.0], [90.4, 423.0], [90.5, 425.0], [90.6, 427.0], [90.7, 427.0], [90.8, 428.0], [90.9, 432.0], [91.0, 434.0], [91.1, 437.0], [91.2, 441.0], [91.3, 445.0], [91.4, 445.0], [91.5, 450.0], [91.6, 453.0], [91.7, 456.0], [91.8, 461.0], [91.9, 462.0], [92.0, 464.0], [92.1, 471.0], [92.2, 475.0], [92.3, 475.0], [92.4, 478.0], [92.5, 491.0], [92.6, 505.0], [92.7, 506.0], [92.8, 511.0], [92.9, 519.0], [93.0, 561.0], [93.1, 568.0], [93.2, 581.0], [93.3, 588.0], [93.4, 664.0], [93.5, 669.0], [93.6, 695.0], [93.7, 695.0], [93.8, 721.0], [93.9, 723.0], [94.0, 789.0], [94.1, 818.0], [94.2, 860.0], [94.3, 891.0], [94.4, 1064.0], [94.5, 1226.0], [94.6, 1269.0], [94.7, 1271.0], [94.8, 1301.0], [94.9, 1304.0], [95.0, 1321.0], [95.1, 1327.0], [95.2, 1347.0], [95.3, 1352.0], [95.4, 1405.0], [95.5, 1488.0], [95.6, 4772.0], [95.7, 4774.0], [95.8, 4779.0], [95.9, 4787.0], [96.0, 4789.0], [96.1, 4790.0], [96.2, 4800.0], [96.3, 4803.0], [96.4, 4808.0], [96.5, 4817.0], [96.6, 4819.0], [96.7, 4820.0], [96.8, 4825.0], [96.9, 4826.0], [97.0, 4827.0], [97.1, 4827.0], [97.2, 4830.0], [97.3, 4830.0], [97.4, 4832.0], [97.5, 4832.0], [97.6, 4835.0], [97.7, 4838.0], [97.8, 4844.0], [97.9, 4847.0], [98.0, 4850.0], [98.1, 4852.0], [98.2, 4854.0], [98.3, 4869.0], [98.4, 4870.0], [98.5, 4870.0], [98.6, 4874.0], [98.7, 4874.0], [98.8, 4876.0], [98.9, 4876.0], [99.0, 4884.0], [99.1, 4885.0], [99.2, 4898.0], [99.3, 4906.0], [99.4, 4944.0], [99.5, 4948.0], [99.6, 4997.0], [99.7, 5032.0], [99.8, 5201.0], [99.9, 5202.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 711.0, "series": [{"data": [[600.0, 6.0], [700.0, 5.0], [200.0, 610.0], [800.0, 4.0], [1000.0, 2.0], [300.0, 711.0], [1200.0, 5.0], [4800.0, 46.0], [4700.0, 9.0], [4900.0, 6.0], [5000.0, 1.0], [5100.0, 1.0], [1300.0, 9.0], [5200.0, 3.0], [1400.0, 2.0], [400.0, 67.0], [1700.0, 1.0], [500.0, 12.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1388.0, "series": [{"data": [[0.0, 1388.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 45.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 67.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.912499999999995, "minX": 1.79235438E12, "maxY": 9.637209302325571, "series": [{"data": [[1.79235444E12, 9.637209302325571], [1.79235438E12, 6.912499999999995]], "isOverall": false, "label": "Fila 1500 hilos / 75 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235444E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 256.5, "minX": 1.0, "maxY": 5202.0, "series": [{"data": [[3.0, 4846.0], [4.0, 4906.0], [5.0, 256.5], [6.0, 304.7806451612902], [7.0, 322.04973357015933], [8.0, 381.6775700934583], [9.0, 457.5411764705881], [10.0, 647.0], [11.0, 646.4482758620688], [12.0, 508.8666666666667], [13.0, 1370.8181818181818], [14.0, 1039.875], [15.0, 918.6], [16.0, 1594.2], [17.0, 1303.1666666666665], [18.0, 4876.0], [19.0, 4854.0], [20.0, 4898.0], [21.0, 4790.0], [22.0, 5202.0], [23.0, 4789.0], [24.0, 4774.0], [25.0, 4820.0], [26.0, 4869.0], [27.0, 4892.0], [28.0, 4838.0], [29.0, 4876.0], [30.0, 4778.0], [31.0, 4819.0], [33.0, 4852.0], [35.0, 4870.0], [34.0, 4830.0], [37.0, 4872.0], [36.0, 4827.0], [39.0, 4874.0], [38.0, 4832.0], [41.0, 4793.0], [40.0, 4844.0], [43.0, 4817.0], [42.0, 4830.0], [45.0, 4835.0], [44.0, 4808.0], [47.0, 4852.0], [46.0, 4826.0], [49.0, 4849.5], [50.0, 4772.0], [53.0, 4779.0], [52.0, 4836.0], [55.0, 4850.0], [54.0, 4827.0], [56.0, 4854.0], [59.0, 4800.0], [58.0, 5048.5], [60.0, 4808.0], [66.0, 4964.666666666667], [1.0, 5201.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}, {"data": [[8.474666666666657, 531.6959999999993]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 66.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6165.333333333333, "minX": 1.79235438E12, "maxY": 14849.333333333334, "series": [{"data": [[1.79235444E12, 14849.333333333334], [1.79235438E12, 11050.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79235444E12, 8284.666666666666], [1.79235438E12, 6165.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235444E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 312.3984375, "minX": 1.79235438E12, "maxY": 694.8941860465117, "series": [{"data": [[1.79235444E12, 694.8941860465117], [1.79235438E12, 312.3984375]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235444E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 312.35468749999995, "minX": 1.79235438E12, "maxY": 694.8744186046507, "series": [{"data": [[1.79235444E12, 694.8744186046507], [1.79235438E12, 312.35468749999995]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235444E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 191.20937500000005, "minX": 1.79235438E12, "maxY": 217.27093023255802, "series": [{"data": [[1.79235444E12, 217.27093023255802], [1.79235438E12, 191.20937500000005]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235444E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 245.0, "minX": 1.79235438E12, "maxY": 5250.0, "series": [{"data": [[1.79235444E12, 5250.0], [1.79235438E12, 1321.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79235444E12, 245.0], [1.79235438E12, 245.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79235444E12, 786.5999999999995], [1.79235438E12, 349.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79235444E12, 4945.5599999999995], [1.79235438E12, 660.5600000000027]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79235444E12, 320.5], [1.79235438E12, 299.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79235444E12, 4827.95], [1.79235438E12, 375.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 301.0, "minX": 11.0, "maxY": 4838.0, "series": [{"data": [[16.0, 3002.5], [17.0, 310.0], [18.0, 316.5], [19.0, 311.0], [20.0, 301.0], [21.0, 306.0], [22.0, 322.5], [11.0, 4838.0], [23.0, 306.0], [24.0, 376.0], [14.0, 320.5], [15.0, 332.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 301.0, "minX": 11.0, "maxY": 4838.0, "series": [{"data": [[16.0, 3002.5], [17.0, 310.0], [18.0, 316.5], [19.0, 311.0], [20.0, 301.0], [21.0, 306.0], [22.0, 322.5], [11.0, 4838.0], [23.0, 306.0], [24.0, 376.0], [14.0, 320.5], [15.0, 332.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.766666666666667, "minX": 1.79235438E12, "maxY": 14.233333333333333, "series": [{"data": [[1.79235444E12, 14.233333333333333], [1.79235438E12, 10.766666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235444E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.666666666666666, "minX": 1.79235438E12, "maxY": 14.333333333333334, "series": [{"data": [[1.79235444E12, 14.333333333333334], [1.79235438E12, 10.666666666666666]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235444E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.666666666666666, "minX": 1.79235438E12, "maxY": 14.333333333333334, "series": [{"data": [[1.79235444E12, 14.333333333333334], [1.79235438E12, 10.666666666666666]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235444E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.666666666666666, "minX": 1.79235438E12, "maxY": 14.333333333333334, "series": [{"data": [[1.79235444E12, 14.333333333333334], [1.79235438E12, 10.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235444E12, "title": "Total Transactions Per Second"}},
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

