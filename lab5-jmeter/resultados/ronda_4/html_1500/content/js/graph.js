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
        data: {"result": {"minY": 242.0, "minX": 0.0, "maxY": 5203.0, "series": [{"data": [[0.0, 242.0], [0.1, 246.0], [0.2, 248.0], [0.3, 249.0], [0.4, 249.0], [0.5, 249.0], [0.6, 250.0], [0.7, 250.0], [0.8, 251.0], [0.9, 251.0], [1.0, 253.0], [1.1, 253.0], [1.2, 255.0], [1.3, 255.0], [1.4, 255.0], [1.5, 256.0], [1.6, 257.0], [1.7, 257.0], [1.8, 257.0], [1.9, 257.0], [2.0, 258.0], [2.1, 258.0], [2.2, 258.0], [2.3, 259.0], [2.4, 259.0], [2.5, 260.0], [2.6, 260.0], [2.7, 260.0], [2.8, 260.0], [2.9, 261.0], [3.0, 261.0], [3.1, 261.0], [3.2, 261.0], [3.3, 261.0], [3.4, 262.0], [3.5, 262.0], [3.6, 262.0], [3.7, 262.0], [3.8, 263.0], [3.9, 263.0], [4.0, 263.0], [4.1, 263.0], [4.2, 264.0], [4.3, 264.0], [4.4, 264.0], [4.5, 264.0], [4.6, 265.0], [4.7, 265.0], [4.8, 265.0], [4.9, 265.0], [5.0, 265.0], [5.1, 265.0], [5.2, 265.0], [5.3, 265.0], [5.4, 266.0], [5.5, 266.0], [5.6, 266.0], [5.7, 266.0], [5.8, 267.0], [5.9, 267.0], [6.0, 267.0], [6.1, 267.0], [6.2, 267.0], [6.3, 267.0], [6.4, 267.0], [6.5, 268.0], [6.6, 268.0], [6.7, 268.0], [6.8, 268.0], [6.9, 268.0], [7.0, 268.0], [7.1, 268.0], [7.2, 268.0], [7.3, 268.0], [7.4, 268.0], [7.5, 269.0], [7.6, 269.0], [7.7, 269.0], [7.8, 270.0], [7.9, 270.0], [8.0, 270.0], [8.1, 270.0], [8.2, 270.0], [8.3, 270.0], [8.4, 270.0], [8.5, 271.0], [8.6, 271.0], [8.7, 271.0], [8.8, 271.0], [8.9, 271.0], [9.0, 272.0], [9.1, 272.0], [9.2, 272.0], [9.3, 272.0], [9.4, 272.0], [9.5, 272.0], [9.6, 273.0], [9.7, 273.0], [9.8, 273.0], [9.9, 273.0], [10.0, 273.0], [10.1, 274.0], [10.2, 274.0], [10.3, 274.0], [10.4, 274.0], [10.5, 275.0], [10.6, 275.0], [10.7, 275.0], [10.8, 275.0], [10.9, 275.0], [11.0, 276.0], [11.1, 276.0], [11.2, 276.0], [11.3, 276.0], [11.4, 276.0], [11.5, 277.0], [11.6, 277.0], [11.7, 277.0], [11.8, 277.0], [11.9, 277.0], [12.0, 278.0], [12.1, 278.0], [12.2, 278.0], [12.3, 278.0], [12.4, 278.0], [12.5, 278.0], [12.6, 278.0], [12.7, 278.0], [12.8, 279.0], [12.9, 279.0], [13.0, 279.0], [13.1, 279.0], [13.2, 279.0], [13.3, 279.0], [13.4, 280.0], [13.5, 280.0], [13.6, 280.0], [13.7, 280.0], [13.8, 280.0], [13.9, 280.0], [14.0, 280.0], [14.1, 280.0], [14.2, 280.0], [14.3, 281.0], [14.4, 281.0], [14.5, 282.0], [14.6, 282.0], [14.7, 282.0], [14.8, 282.0], [14.9, 282.0], [15.0, 282.0], [15.1, 282.0], [15.2, 282.0], [15.3, 282.0], [15.4, 282.0], [15.5, 283.0], [15.6, 283.0], [15.7, 283.0], [15.8, 283.0], [15.9, 283.0], [16.0, 283.0], [16.1, 283.0], [16.2, 284.0], [16.3, 284.0], [16.4, 284.0], [16.5, 284.0], [16.6, 284.0], [16.7, 284.0], [16.8, 284.0], [16.9, 284.0], [17.0, 284.0], [17.1, 284.0], [17.2, 285.0], [17.3, 285.0], [17.4, 285.0], [17.5, 285.0], [17.6, 285.0], [17.7, 285.0], [17.8, 285.0], [17.9, 286.0], [18.0, 286.0], [18.1, 286.0], [18.2, 286.0], [18.3, 286.0], [18.4, 286.0], [18.5, 286.0], [18.6, 286.0], [18.7, 287.0], [18.8, 287.0], [18.9, 287.0], [19.0, 287.0], [19.1, 287.0], [19.2, 287.0], [19.3, 288.0], [19.4, 288.0], [19.5, 288.0], [19.6, 288.0], [19.7, 289.0], [19.8, 289.0], [19.9, 289.0], [20.0, 289.0], [20.1, 289.0], [20.2, 289.0], [20.3, 289.0], [20.4, 289.0], [20.5, 290.0], [20.6, 290.0], [20.7, 290.0], [20.8, 290.0], [20.9, 290.0], [21.0, 291.0], [21.1, 291.0], [21.2, 291.0], [21.3, 291.0], [21.4, 291.0], [21.5, 291.0], [21.6, 291.0], [21.7, 292.0], [21.8, 292.0], [21.9, 292.0], [22.0, 292.0], [22.1, 292.0], [22.2, 292.0], [22.3, 292.0], [22.4, 292.0], [22.5, 293.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 294.0], [23.3, 294.0], [23.4, 294.0], [23.5, 294.0], [23.6, 294.0], [23.7, 294.0], [23.8, 294.0], [23.9, 294.0], [24.0, 295.0], [24.1, 295.0], [24.2, 295.0], [24.3, 295.0], [24.4, 295.0], [24.5, 295.0], [24.6, 295.0], [24.7, 296.0], [24.8, 296.0], [24.9, 296.0], [25.0, 296.0], [25.1, 296.0], [25.2, 296.0], [25.3, 296.0], [25.4, 296.0], [25.5, 297.0], [25.6, 297.0], [25.7, 297.0], [25.8, 297.0], [25.9, 297.0], [26.0, 297.0], [26.1, 297.0], [26.2, 298.0], [26.3, 298.0], [26.4, 298.0], [26.5, 298.0], [26.6, 298.0], [26.7, 298.0], [26.8, 298.0], [26.9, 299.0], [27.0, 299.0], [27.1, 299.0], [27.2, 299.0], [27.3, 299.0], [27.4, 299.0], [27.5, 299.0], [27.6, 299.0], [27.7, 299.0], [27.8, 299.0], [27.9, 300.0], [28.0, 300.0], [28.1, 300.0], [28.2, 300.0], [28.3, 301.0], [28.4, 301.0], [28.5, 301.0], [28.6, 301.0], [28.7, 301.0], [28.8, 301.0], [28.9, 301.0], [29.0, 301.0], [29.1, 301.0], [29.2, 301.0], [29.3, 301.0], [29.4, 301.0], [29.5, 301.0], [29.6, 302.0], [29.7, 302.0], [29.8, 302.0], [29.9, 302.0], [30.0, 302.0], [30.1, 302.0], [30.2, 302.0], [30.3, 303.0], [30.4, 303.0], [30.5, 303.0], [30.6, 303.0], [30.7, 303.0], [30.8, 303.0], [30.9, 303.0], [31.0, 303.0], [31.1, 303.0], [31.2, 303.0], [31.3, 304.0], [31.4, 304.0], [31.5, 304.0], [31.6, 304.0], [31.7, 304.0], [31.8, 304.0], [31.9, 304.0], [32.0, 304.0], [32.1, 305.0], [32.2, 305.0], [32.3, 305.0], [32.4, 305.0], [32.5, 305.0], [32.6, 305.0], [32.7, 305.0], [32.8, 305.0], [32.9, 306.0], [33.0, 306.0], [33.1, 306.0], [33.2, 306.0], [33.3, 306.0], [33.4, 306.0], [33.5, 306.0], [33.6, 306.0], [33.7, 306.0], [33.8, 306.0], [33.9, 306.0], [34.0, 307.0], [34.1, 307.0], [34.2, 307.0], [34.3, 307.0], [34.4, 307.0], [34.5, 307.0], [34.6, 307.0], [34.7, 307.0], [34.8, 308.0], [34.9, 308.0], [35.0, 308.0], [35.1, 308.0], [35.2, 308.0], [35.3, 308.0], [35.4, 309.0], [35.5, 309.0], [35.6, 309.0], [35.7, 309.0], [35.8, 309.0], [35.9, 309.0], [36.0, 309.0], [36.1, 309.0], [36.2, 310.0], [36.3, 310.0], [36.4, 310.0], [36.5, 310.0], [36.6, 311.0], [36.7, 311.0], [36.8, 311.0], [36.9, 311.0], [37.0, 311.0], [37.1, 311.0], [37.2, 311.0], [37.3, 312.0], [37.4, 312.0], [37.5, 312.0], [37.6, 312.0], [37.7, 312.0], [37.8, 312.0], [37.9, 312.0], [38.0, 313.0], [38.1, 313.0], [38.2, 313.0], [38.3, 313.0], [38.4, 313.0], [38.5, 313.0], [38.6, 314.0], [38.7, 314.0], [38.8, 314.0], [38.9, 314.0], [39.0, 314.0], [39.1, 314.0], [39.2, 314.0], [39.3, 314.0], [39.4, 314.0], [39.5, 314.0], [39.6, 315.0], [39.7, 315.0], [39.8, 315.0], [39.9, 315.0], [40.0, 315.0], [40.1, 315.0], [40.2, 315.0], [40.3, 316.0], [40.4, 316.0], [40.5, 316.0], [40.6, 316.0], [40.7, 316.0], [40.8, 317.0], [40.9, 317.0], [41.0, 317.0], [41.1, 317.0], [41.2, 317.0], [41.3, 317.0], [41.4, 317.0], [41.5, 317.0], [41.6, 317.0], [41.7, 318.0], [41.8, 318.0], [41.9, 318.0], [42.0, 318.0], [42.1, 318.0], [42.2, 318.0], [42.3, 318.0], [42.4, 318.0], [42.5, 319.0], [42.6, 319.0], [42.7, 319.0], [42.8, 319.0], [42.9, 319.0], [43.0, 319.0], [43.1, 319.0], [43.2, 320.0], [43.3, 320.0], [43.4, 320.0], [43.5, 320.0], [43.6, 320.0], [43.7, 320.0], [43.8, 320.0], [43.9, 320.0], [44.0, 321.0], [44.1, 321.0], [44.2, 321.0], [44.3, 321.0], [44.4, 321.0], [44.5, 321.0], [44.6, 322.0], [44.7, 322.0], [44.8, 322.0], [44.9, 322.0], [45.0, 322.0], [45.1, 322.0], [45.2, 322.0], [45.3, 323.0], [45.4, 323.0], [45.5, 323.0], [45.6, 323.0], [45.7, 323.0], [45.8, 324.0], [45.9, 324.0], [46.0, 324.0], [46.1, 324.0], [46.2, 324.0], [46.3, 325.0], [46.4, 325.0], [46.5, 325.0], [46.6, 325.0], [46.7, 325.0], [46.8, 325.0], [46.9, 326.0], [47.0, 326.0], [47.1, 326.0], [47.2, 326.0], [47.3, 326.0], [47.4, 326.0], [47.5, 326.0], [47.6, 326.0], [47.7, 327.0], [47.8, 327.0], [47.9, 327.0], [48.0, 328.0], [48.1, 328.0], [48.2, 328.0], [48.3, 328.0], [48.4, 328.0], [48.5, 329.0], [48.6, 329.0], [48.7, 329.0], [48.8, 329.0], [48.9, 329.0], [49.0, 329.0], [49.1, 329.0], [49.2, 329.0], [49.3, 330.0], [49.4, 330.0], [49.5, 330.0], [49.6, 330.0], [49.7, 330.0], [49.8, 331.0], [49.9, 331.0], [50.0, 331.0], [50.1, 331.0], [50.2, 331.0], [50.3, 331.0], [50.4, 332.0], [50.5, 332.0], [50.6, 332.0], [50.7, 332.0], [50.8, 332.0], [50.9, 332.0], [51.0, 332.0], [51.1, 332.0], [51.2, 333.0], [51.3, 333.0], [51.4, 333.0], [51.5, 333.0], [51.6, 333.0], [51.7, 333.0], [51.8, 333.0], [51.9, 334.0], [52.0, 334.0], [52.1, 334.0], [52.2, 335.0], [52.3, 335.0], [52.4, 335.0], [52.5, 335.0], [52.6, 335.0], [52.7, 336.0], [52.8, 336.0], [52.9, 336.0], [53.0, 336.0], [53.1, 336.0], [53.2, 337.0], [53.3, 337.0], [53.4, 337.0], [53.5, 337.0], [53.6, 338.0], [53.7, 338.0], [53.8, 338.0], [53.9, 338.0], [54.0, 338.0], [54.1, 338.0], [54.2, 339.0], [54.3, 339.0], [54.4, 339.0], [54.5, 339.0], [54.6, 339.0], [54.7, 340.0], [54.8, 340.0], [54.9, 340.0], [55.0, 340.0], [55.1, 340.0], [55.2, 341.0], [55.3, 341.0], [55.4, 341.0], [55.5, 341.0], [55.6, 342.0], [55.7, 342.0], [55.8, 342.0], [55.9, 342.0], [56.0, 343.0], [56.1, 343.0], [56.2, 344.0], [56.3, 344.0], [56.4, 344.0], [56.5, 344.0], [56.6, 345.0], [56.7, 345.0], [56.8, 345.0], [56.9, 345.0], [57.0, 345.0], [57.1, 345.0], [57.2, 346.0], [57.3, 346.0], [57.4, 346.0], [57.5, 346.0], [57.6, 346.0], [57.7, 346.0], [57.8, 346.0], [57.9, 347.0], [58.0, 347.0], [58.1, 347.0], [58.2, 347.0], [58.3, 347.0], [58.4, 347.0], [58.5, 348.0], [58.6, 348.0], [58.7, 348.0], [58.8, 348.0], [58.9, 348.0], [59.0, 349.0], [59.1, 349.0], [59.2, 349.0], [59.3, 349.0], [59.4, 349.0], [59.5, 350.0], [59.6, 350.0], [59.7, 350.0], [59.8, 350.0], [59.9, 350.0], [60.0, 350.0], [60.1, 351.0], [60.2, 351.0], [60.3, 351.0], [60.4, 351.0], [60.5, 351.0], [60.6, 351.0], [60.7, 352.0], [60.8, 352.0], [60.9, 352.0], [61.0, 352.0], [61.1, 352.0], [61.2, 352.0], [61.3, 352.0], [61.4, 353.0], [61.5, 353.0], [61.6, 353.0], [61.7, 353.0], [61.8, 353.0], [61.9, 353.0], [62.0, 354.0], [62.1, 354.0], [62.2, 354.0], [62.3, 354.0], [62.4, 354.0], [62.5, 355.0], [62.6, 355.0], [62.7, 355.0], [62.8, 355.0], [62.9, 355.0], [63.0, 356.0], [63.1, 356.0], [63.2, 356.0], [63.3, 356.0], [63.4, 357.0], [63.5, 357.0], [63.6, 357.0], [63.7, 357.0], [63.8, 358.0], [63.9, 358.0], [64.0, 358.0], [64.1, 358.0], [64.2, 359.0], [64.3, 359.0], [64.4, 359.0], [64.5, 360.0], [64.6, 360.0], [64.7, 360.0], [64.8, 361.0], [64.9, 361.0], [65.0, 362.0], [65.1, 362.0], [65.2, 362.0], [65.3, 362.0], [65.4, 363.0], [65.5, 363.0], [65.6, 363.0], [65.7, 364.0], [65.8, 364.0], [65.9, 364.0], [66.0, 365.0], [66.1, 365.0], [66.2, 366.0], [66.3, 366.0], [66.4, 366.0], [66.5, 366.0], [66.6, 367.0], [66.7, 367.0], [66.8, 367.0], [66.9, 367.0], [67.0, 367.0], [67.1, 367.0], [67.2, 368.0], [67.3, 368.0], [67.4, 368.0], [67.5, 368.0], [67.6, 369.0], [67.7, 369.0], [67.8, 369.0], [67.9, 369.0], [68.0, 371.0], [68.1, 371.0], [68.2, 372.0], [68.3, 372.0], [68.4, 372.0], [68.5, 373.0], [68.6, 373.0], [68.7, 373.0], [68.8, 373.0], [68.9, 374.0], [69.0, 374.0], [69.1, 374.0], [69.2, 374.0], [69.3, 374.0], [69.4, 375.0], [69.5, 376.0], [69.6, 376.0], [69.7, 376.0], [69.8, 376.0], [69.9, 377.0], [70.0, 377.0], [70.1, 377.0], [70.2, 377.0], [70.3, 377.0], [70.4, 377.0], [70.5, 377.0], [70.6, 378.0], [70.7, 378.0], [70.8, 379.0], [70.9, 379.0], [71.0, 379.0], [71.1, 381.0], [71.2, 381.0], [71.3, 381.0], [71.4, 382.0], [71.5, 382.0], [71.6, 382.0], [71.7, 384.0], [71.8, 384.0], [71.9, 384.0], [72.0, 385.0], [72.1, 385.0], [72.2, 386.0], [72.3, 386.0], [72.4, 386.0], [72.5, 387.0], [72.6, 387.0], [72.7, 387.0], [72.8, 387.0], [72.9, 388.0], [73.0, 388.0], [73.1, 388.0], [73.2, 389.0], [73.3, 389.0], [73.4, 389.0], [73.5, 389.0], [73.6, 389.0], [73.7, 390.0], [73.8, 390.0], [73.9, 391.0], [74.0, 391.0], [74.1, 391.0], [74.2, 392.0], [74.3, 392.0], [74.4, 392.0], [74.5, 393.0], [74.6, 393.0], [74.7, 393.0], [74.8, 394.0], [74.9, 394.0], [75.0, 395.0], [75.1, 395.0], [75.2, 395.0], [75.3, 396.0], [75.4, 396.0], [75.5, 397.0], [75.6, 397.0], [75.7, 398.0], [75.8, 398.0], [75.9, 400.0], [76.0, 400.0], [76.1, 400.0], [76.2, 401.0], [76.3, 402.0], [76.4, 402.0], [76.5, 402.0], [76.6, 402.0], [76.7, 403.0], [76.8, 403.0], [76.9, 404.0], [77.0, 404.0], [77.1, 405.0], [77.2, 406.0], [77.3, 406.0], [77.4, 406.0], [77.5, 407.0], [77.6, 407.0], [77.7, 408.0], [77.8, 408.0], [77.9, 409.0], [78.0, 409.0], [78.1, 410.0], [78.2, 411.0], [78.3, 411.0], [78.4, 412.0], [78.5, 413.0], [78.6, 413.0], [78.7, 414.0], [78.8, 415.0], [78.9, 415.0], [79.0, 416.0], [79.1, 416.0], [79.2, 417.0], [79.3, 417.0], [79.4, 418.0], [79.5, 420.0], [79.6, 421.0], [79.7, 422.0], [79.8, 424.0], [79.9, 426.0], [80.0, 426.0], [80.1, 427.0], [80.2, 427.0], [80.3, 427.0], [80.4, 428.0], [80.5, 429.0], [80.6, 429.0], [80.7, 431.0], [80.8, 431.0], [80.9, 432.0], [81.0, 432.0], [81.1, 433.0], [81.2, 433.0], [81.3, 434.0], [81.4, 434.0], [81.5, 435.0], [81.6, 436.0], [81.7, 437.0], [81.8, 437.0], [81.9, 437.0], [82.0, 438.0], [82.1, 439.0], [82.2, 440.0], [82.3, 441.0], [82.4, 441.0], [82.5, 442.0], [82.6, 442.0], [82.7, 443.0], [82.8, 444.0], [82.9, 445.0], [83.0, 446.0], [83.1, 449.0], [83.2, 449.0], [83.3, 451.0], [83.4, 451.0], [83.5, 455.0], [83.6, 455.0], [83.7, 457.0], [83.8, 457.0], [83.9, 458.0], [84.0, 459.0], [84.1, 459.0], [84.2, 460.0], [84.3, 460.0], [84.4, 461.0], [84.5, 462.0], [84.6, 463.0], [84.7, 466.0], [84.8, 466.0], [84.9, 467.0], [85.0, 468.0], [85.1, 469.0], [85.2, 469.0], [85.3, 469.0], [85.4, 470.0], [85.5, 471.0], [85.6, 472.0], [85.7, 476.0], [85.8, 477.0], [85.9, 480.0], [86.0, 480.0], [86.1, 482.0], [86.2, 483.0], [86.3, 483.0], [86.4, 483.0], [86.5, 485.0], [86.6, 486.0], [86.7, 490.0], [86.8, 491.0], [86.9, 491.0], [87.0, 492.0], [87.1, 494.0], [87.2, 496.0], [87.3, 497.0], [87.4, 497.0], [87.5, 498.0], [87.6, 498.0], [87.7, 499.0], [87.8, 502.0], [87.9, 504.0], [88.0, 504.0], [88.1, 508.0], [88.2, 510.0], [88.3, 515.0], [88.4, 515.0], [88.5, 517.0], [88.6, 518.0], [88.7, 521.0], [88.8, 523.0], [88.9, 525.0], [89.0, 525.0], [89.1, 532.0], [89.2, 536.0], [89.3, 536.0], [89.4, 537.0], [89.5, 540.0], [89.6, 540.0], [89.7, 543.0], [89.8, 544.0], [89.9, 552.0], [90.0, 556.0], [90.1, 559.0], [90.2, 560.0], [90.3, 562.0], [90.4, 566.0], [90.5, 571.0], [90.6, 575.0], [90.7, 579.0], [90.8, 580.0], [90.9, 581.0], [91.0, 581.0], [91.1, 588.0], [91.2, 590.0], [91.3, 594.0], [91.4, 598.0], [91.5, 601.0], [91.6, 603.0], [91.7, 619.0], [91.8, 622.0], [91.9, 633.0], [92.0, 654.0], [92.1, 655.0], [92.2, 673.0], [92.3, 682.0], [92.4, 688.0], [92.5, 697.0], [92.6, 714.0], [92.7, 715.0], [92.8, 731.0], [92.9, 743.0], [93.0, 796.0], [93.1, 837.0], [93.2, 872.0], [93.3, 887.0], [93.4, 904.0], [93.5, 935.0], [93.6, 997.0], [93.7, 1028.0], [93.8, 1096.0], [93.9, 1104.0], [94.0, 1264.0], [94.1, 1268.0], [94.2, 1298.0], [94.3, 1306.0], [94.4, 1314.0], [94.5, 1330.0], [94.6, 1394.0], [94.7, 1505.0], [94.8, 1512.0], [94.9, 1589.0], [95.0, 1856.0], [95.1, 4763.0], [95.2, 4768.0], [95.3, 4774.0], [95.4, 4780.0], [95.5, 4781.0], [95.6, 4782.0], [95.7, 4788.0], [95.8, 4791.0], [95.9, 4792.0], [96.0, 4794.0], [96.1, 4798.0], [96.2, 4800.0], [96.3, 4803.0], [96.4, 4806.0], [96.5, 4808.0], [96.6, 4813.0], [96.7, 4813.0], [96.8, 4816.0], [96.9, 4818.0], [97.0, 4822.0], [97.1, 4822.0], [97.2, 4823.0], [97.3, 4829.0], [97.4, 4839.0], [97.5, 4842.0], [97.6, 4846.0], [97.7, 4853.0], [97.8, 4854.0], [97.9, 4855.0], [98.0, 4856.0], [98.1, 4857.0], [98.2, 4866.0], [98.3, 4870.0], [98.4, 4876.0], [98.5, 4890.0], [98.6, 4903.0], [98.7, 4905.0], [98.8, 4941.0], [98.9, 4945.0], [99.0, 5000.0], [99.1, 5006.0], [99.2, 5021.0], [99.3, 5042.0], [99.4, 5046.0], [99.5, 5058.0], [99.6, 5099.0], [99.7, 5104.0], [99.8, 5149.0], [99.9, 5172.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 720.0, "series": [{"data": [[600.0, 16.0], [700.0, 8.0], [200.0, 418.0], [800.0, 5.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 2.0], [300.0, 720.0], [1200.0, 4.0], [4700.0, 17.0], [4800.0, 36.0], [4900.0, 6.0], [5000.0, 10.0], [5100.0, 4.0], [1300.0, 6.0], [5200.0, 1.0], [1500.0, 4.0], [400.0, 178.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 56.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 80.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1316.0, "series": [{"data": [[0.0, 1316.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 104.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 80.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.975083056478409, "minX": 1.79235624E12, "maxY": 16.277777777777782, "series": [{"data": [[1.79235636E12, 16.277777777777782], [1.7923563E12, 7.975083056478409], [1.79235624E12, 8.03846153846154]], "isOverall": false, "label": "Fila 1500 hilos / 75 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 300.9740259740261, "minX": 2.0, "maxY": 5203.0, "series": [{"data": [[2.0, 4958.0], [3.0, 4853.0], [5.0, 1434.0], [6.0, 300.9740259740261], [7.0, 339.23462414578563], [8.0, 386.4710424710421], [9.0, 449.96], [10.0, 466.7570093457943], [11.0, 549.171875], [12.0, 620.725], [13.0, 720.3000000000002], [14.0, 848.5], [15.0, 878.4736842105265], [16.0, 1405.0], [17.0, 2127.666666666667], [19.0, 4963.0], [20.0, 4778.0], [22.0, 4826.5], [23.0, 4805.0], [24.0, 4816.0], [25.0, 4768.0], [26.0, 4808.0], [28.0, 4831.0], [29.0, 4780.0], [30.0, 4823.0], [31.0, 4813.0], [33.0, 4823.0], [32.0, 4855.0], [35.0, 4818.0], [34.0, 4856.0], [37.0, 4810.0], [36.0, 4870.0], [39.0, 4915.5], [43.0, 4903.0], [42.0, 5045.333333333333], [45.0, 5124.0], [47.0, 5203.0], [46.0, 5172.0], [48.0, 5104.0], [51.0, 4898.0], [50.0, 5032.0], [53.0, 4763.0], [52.0, 4814.0], [55.0, 4812.5], [57.0, 4866.0], [56.0, 4822.0], [59.0, 4857.0], [58.0, 4792.0], [60.0, 4803.0], [63.0, 4905.0], [62.0, 4849.0], [67.0, 4798.0], [66.0, 4774.0], [65.0, 4794.0], [64.0, 4853.0], [71.0, 4860.0], [70.0, 4829.0], [69.0, 4871.0], [68.0, 4822.0], [74.0, 4816.5], [72.0, 4782.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}, {"data": [[9.470666666666684, 588.890666666667]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 74.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 250.46666666666667, "minX": 1.79235624E12, "maxY": 20789.066666666666, "series": [{"data": [[1.79235636E12, 4662.0], [1.7923563E12, 20789.066666666666], [1.79235624E12, 448.93333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79235636E12, 2601.0], [1.7923563E12, 11598.533333333333], [1.79235624E12, 250.46666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.61538461538464, "minX": 1.79235624E12, "maxY": 1607.8148148148152, "series": [{"data": [[1.79235636E12, 1607.8148148148152], [1.7923563E12, 366.6843853820594], [1.79235624E12, 297.61538461538464]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 297.50000000000006, "minX": 1.79235624E12, "maxY": 1607.7925925925927, "series": [{"data": [[1.79235636E12, 1607.7925925925927], [1.7923563E12, 366.64867109634537], [1.79235624E12, 297.50000000000006]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 181.6538461538462, "minX": 1.79235624E12, "maxY": 226.17037037037042, "series": [{"data": [[1.79235636E12, 226.17037037037042], [1.7923563E12, 222.1569767441863], [1.79235624E12, 181.6538461538462]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 242.0, "minX": 1.79235624E12, "maxY": 5203.0, "series": [{"data": [[1.79235636E12, 5203.0], [1.7923563E12, 1856.0], [1.79235624E12, 455.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79235636E12, 255.0], [1.7923563E12, 242.0], [1.79235624E12, 258.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79235636E12, 4865.4], [1.7923563E12, 469.0], [1.79235624E12, 403.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79235636E12, 5155.67], [1.7923563E12, 1305.6000000000004], [1.79235624E12, 455.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79235636E12, 403.0], [1.7923563E12, 324.0], [1.79235624E12, 278.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79235636E12, 5006.9], [1.7923563E12, 581.0], [1.79235624E12, 447.65]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 274.0, "minX": 5.0, "maxY": 4945.0, "series": [{"data": [[10.0, 304.5], [12.0, 4825.5], [13.0, 299.0], [14.0, 2694.0], [15.0, 274.0], [16.0, 301.5], [17.0, 429.0], [18.0, 334.0], [19.0, 349.5], [20.0, 308.0], [5.0, 4945.0], [21.0, 324.0], [22.0, 319.5], [23.0, 414.5], [24.0, 339.0], [25.0, 336.0], [26.0, 2770.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 274.0, "minX": 5.0, "maxY": 4944.0, "series": [{"data": [[10.0, 304.5], [12.0, 4825.5], [13.0, 299.0], [14.0, 2693.5], [15.0, 274.0], [16.0, 301.5], [17.0, 429.0], [18.0, 334.0], [19.0, 349.5], [20.0, 308.0], [5.0, 4944.0], [21.0, 324.0], [22.0, 319.5], [23.0, 414.5], [24.0, 339.0], [25.0, 336.0], [26.0, 2770.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.79235624E12, "maxY": 20.0, "series": [{"data": [[1.79235636E12, 4.4], [1.7923563E12, 20.0], [1.79235624E12, 0.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235636E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.79235624E12, "maxY": 20.066666666666666, "series": [{"data": [[1.79235636E12, 4.5], [1.7923563E12, 20.066666666666666], [1.79235624E12, 0.43333333333333335]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.79235624E12, "maxY": 20.066666666666666, "series": [{"data": [[1.79235636E12, 4.5], [1.7923563E12, 20.066666666666666], [1.79235624E12, 0.43333333333333335]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.79235624E12, "maxY": 20.066666666666666, "series": [{"data": [[1.79235636E12, 4.5], [1.7923563E12, 20.066666666666666], [1.79235624E12, 0.43333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235636E12, "title": "Total Transactions Per Second"}},
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

