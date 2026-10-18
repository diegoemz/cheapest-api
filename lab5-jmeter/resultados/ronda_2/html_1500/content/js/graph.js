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
        data: {"result": {"minY": 4738.0, "minX": 0.0, "maxY": 5925.0, "series": [{"data": [[0.0, 4738.0], [0.1, 4739.0], [0.2, 4741.0], [0.3, 4741.0], [0.4, 4742.0], [0.5, 4743.0], [0.6, 4743.0], [0.7, 4743.0], [0.8, 4743.0], [0.9, 4744.0], [1.0, 4744.0], [1.1, 4744.0], [1.2, 4745.0], [1.3, 4745.0], [1.4, 4745.0], [1.5, 4745.0], [1.6, 4745.0], [1.7, 4745.0], [1.8, 4746.0], [1.9, 4746.0], [2.0, 4746.0], [2.1, 4746.0], [2.2, 4746.0], [2.3, 4746.0], [2.4, 4746.0], [2.5, 4747.0], [2.6, 4747.0], [2.7, 4747.0], [2.8, 4747.0], [2.9, 4747.0], [3.0, 4747.0], [3.1, 4747.0], [3.2, 4747.0], [3.3, 4747.0], [3.4, 4747.0], [3.5, 4747.0], [3.6, 4748.0], [3.7, 4748.0], [3.8, 4748.0], [3.9, 4748.0], [4.0, 4748.0], [4.1, 4748.0], [4.2, 4748.0], [4.3, 4748.0], [4.4, 4748.0], [4.5, 4748.0], [4.6, 4749.0], [4.7, 4749.0], [4.8, 4749.0], [4.9, 4749.0], [5.0, 4749.0], [5.1, 4749.0], [5.2, 4749.0], [5.3, 4749.0], [5.4, 4749.0], [5.5, 4749.0], [5.6, 4750.0], [5.7, 4750.0], [5.8, 4750.0], [5.9, 4750.0], [6.0, 4750.0], [6.1, 4750.0], [6.2, 4751.0], [6.3, 4751.0], [6.4, 4751.0], [6.5, 4751.0], [6.6, 4751.0], [6.7, 4751.0], [6.8, 4751.0], [6.9, 4751.0], [7.0, 4751.0], [7.1, 4751.0], [7.2, 4752.0], [7.3, 4752.0], [7.4, 4752.0], [7.5, 4752.0], [7.6, 4753.0], [7.7, 4753.0], [7.8, 4753.0], [7.9, 4753.0], [8.0, 4753.0], [8.1, 4753.0], [8.2, 4753.0], [8.3, 4753.0], [8.4, 4753.0], [8.5, 4753.0], [8.6, 4754.0], [8.7, 4754.0], [8.8, 4754.0], [8.9, 4754.0], [9.0, 4754.0], [9.1, 4754.0], [9.2, 4754.0], [9.3, 4755.0], [9.4, 4755.0], [9.5, 4755.0], [9.6, 4755.0], [9.7, 4755.0], [9.8, 4755.0], [9.9, 4755.0], [10.0, 4755.0], [10.1, 4755.0], [10.2, 4755.0], [10.3, 4756.0], [10.4, 4756.0], [10.5, 4756.0], [10.6, 4756.0], [10.7, 4756.0], [10.8, 4756.0], [10.9, 4756.0], [11.0, 4756.0], [11.1, 4756.0], [11.2, 4756.0], [11.3, 4756.0], [11.4, 4756.0], [11.5, 4756.0], [11.6, 4757.0], [11.7, 4757.0], [11.8, 4757.0], [11.9, 4757.0], [12.0, 4757.0], [12.1, 4757.0], [12.2, 4757.0], [12.3, 4757.0], [12.4, 4757.0], [12.5, 4757.0], [12.6, 4757.0], [12.7, 4757.0], [12.8, 4758.0], [12.9, 4758.0], [13.0, 4758.0], [13.1, 4758.0], [13.2, 4758.0], [13.3, 4758.0], [13.4, 4758.0], [13.5, 4758.0], [13.6, 4758.0], [13.7, 4758.0], [13.8, 4758.0], [13.9, 4758.0], [14.0, 4758.0], [14.1, 4758.0], [14.2, 4758.0], [14.3, 4759.0], [14.4, 4759.0], [14.5, 4759.0], [14.6, 4759.0], [14.7, 4759.0], [14.8, 4759.0], [14.9, 4759.0], [15.0, 4759.0], [15.1, 4759.0], [15.2, 4759.0], [15.3, 4759.0], [15.4, 4759.0], [15.5, 4759.0], [15.6, 4759.0], [15.7, 4759.0], [15.8, 4759.0], [15.9, 4759.0], [16.0, 4759.0], [16.1, 4759.0], [16.2, 4759.0], [16.3, 4759.0], [16.4, 4760.0], [16.5, 4760.0], [16.6, 4760.0], [16.7, 4760.0], [16.8, 4760.0], [16.9, 4760.0], [17.0, 4760.0], [17.1, 4760.0], [17.2, 4760.0], [17.3, 4760.0], [17.4, 4760.0], [17.5, 4760.0], [17.6, 4760.0], [17.7, 4760.0], [17.8, 4760.0], [17.9, 4760.0], [18.0, 4760.0], [18.1, 4760.0], [18.2, 4760.0], [18.3, 4760.0], [18.4, 4760.0], [18.5, 4760.0], [18.6, 4760.0], [18.7, 4760.0], [18.8, 4760.0], [18.9, 4760.0], [19.0, 4761.0], [19.1, 4761.0], [19.2, 4761.0], [19.3, 4761.0], [19.4, 4761.0], [19.5, 4761.0], [19.6, 4761.0], [19.7, 4761.0], [19.8, 4761.0], [19.9, 4761.0], [20.0, 4761.0], [20.1, 4761.0], [20.2, 4762.0], [20.3, 4762.0], [20.4, 4762.0], [20.5, 4762.0], [20.6, 4762.0], [20.7, 4762.0], [20.8, 4762.0], [20.9, 4762.0], [21.0, 4762.0], [21.1, 4762.0], [21.2, 4762.0], [21.3, 4762.0], [21.4, 4762.0], [21.5, 4762.0], [21.6, 4762.0], [21.7, 4762.0], [21.8, 4762.0], [21.9, 4762.0], [22.0, 4762.0], [22.1, 4762.0], [22.2, 4763.0], [22.3, 4763.0], [22.4, 4763.0], [22.5, 4763.0], [22.6, 4763.0], [22.7, 4763.0], [22.8, 4763.0], [22.9, 4763.0], [23.0, 4763.0], [23.1, 4763.0], [23.2, 4763.0], [23.3, 4763.0], [23.4, 4763.0], [23.5, 4763.0], [23.6, 4763.0], [23.7, 4763.0], [23.8, 4763.0], [23.9, 4763.0], [24.0, 4763.0], [24.1, 4763.0], [24.2, 4763.0], [24.3, 4763.0], [24.4, 4764.0], [24.5, 4764.0], [24.6, 4764.0], [24.7, 4764.0], [24.8, 4764.0], [24.9, 4764.0], [25.0, 4764.0], [25.1, 4764.0], [25.2, 4764.0], [25.3, 4764.0], [25.4, 4764.0], [25.5, 4764.0], [25.6, 4764.0], [25.7, 4764.0], [25.8, 4764.0], [25.9, 4764.0], [26.0, 4764.0], [26.1, 4764.0], [26.2, 4764.0], [26.3, 4764.0], [26.4, 4764.0], [26.5, 4764.0], [26.6, 4764.0], [26.7, 4764.0], [26.8, 4765.0], [26.9, 4765.0], [27.0, 4765.0], [27.1, 4765.0], [27.2, 4765.0], [27.3, 4765.0], [27.4, 4765.0], [27.5, 4765.0], [27.6, 4765.0], [27.7, 4765.0], [27.8, 4765.0], [27.9, 4765.0], [28.0, 4765.0], [28.1, 4765.0], [28.2, 4765.0], [28.3, 4765.0], [28.4, 4765.0], [28.5, 4765.0], [28.6, 4765.0], [28.7, 4765.0], [28.8, 4765.0], [28.9, 4766.0], [29.0, 4766.0], [29.1, 4766.0], [29.2, 4766.0], [29.3, 4766.0], [29.4, 4766.0], [29.5, 4766.0], [29.6, 4766.0], [29.7, 4766.0], [29.8, 4766.0], [29.9, 4766.0], [30.0, 4766.0], [30.1, 4766.0], [30.2, 4766.0], [30.3, 4766.0], [30.4, 4766.0], [30.5, 4766.0], [30.6, 4766.0], [30.7, 4766.0], [30.8, 4766.0], [30.9, 4766.0], [31.0, 4766.0], [31.1, 4766.0], [31.2, 4767.0], [31.3, 4767.0], [31.4, 4767.0], [31.5, 4767.0], [31.6, 4767.0], [31.7, 4767.0], [31.8, 4767.0], [31.9, 4767.0], [32.0, 4767.0], [32.1, 4767.0], [32.2, 4767.0], [32.3, 4767.0], [32.4, 4767.0], [32.5, 4767.0], [32.6, 4767.0], [32.7, 4767.0], [32.8, 4767.0], [32.9, 4767.0], [33.0, 4768.0], [33.1, 4768.0], [33.2, 4768.0], [33.3, 4768.0], [33.4, 4768.0], [33.5, 4768.0], [33.6, 4768.0], [33.7, 4768.0], [33.8, 4768.0], [33.9, 4768.0], [34.0, 4768.0], [34.1, 4768.0], [34.2, 4768.0], [34.3, 4768.0], [34.4, 4768.0], [34.5, 4769.0], [34.6, 4769.0], [34.7, 4769.0], [34.8, 4769.0], [34.9, 4769.0], [35.0, 4769.0], [35.1, 4769.0], [35.2, 4769.0], [35.3, 4769.0], [35.4, 4769.0], [35.5, 4769.0], [35.6, 4769.0], [35.7, 4769.0], [35.8, 4769.0], [35.9, 4769.0], [36.0, 4769.0], [36.1, 4769.0], [36.2, 4770.0], [36.3, 4770.0], [36.4, 4770.0], [36.5, 4770.0], [36.6, 4770.0], [36.7, 4770.0], [36.8, 4770.0], [36.9, 4770.0], [37.0, 4770.0], [37.1, 4770.0], [37.2, 4770.0], [37.3, 4770.0], [37.4, 4770.0], [37.5, 4770.0], [37.6, 4770.0], [37.7, 4770.0], [37.8, 4770.0], [37.9, 4770.0], [38.0, 4770.0], [38.1, 4770.0], [38.2, 4771.0], [38.3, 4771.0], [38.4, 4771.0], [38.5, 4771.0], [38.6, 4771.0], [38.7, 4771.0], [38.8, 4771.0], [38.9, 4771.0], [39.0, 4771.0], [39.1, 4771.0], [39.2, 4771.0], [39.3, 4771.0], [39.4, 4771.0], [39.5, 4771.0], [39.6, 4772.0], [39.7, 4772.0], [39.8, 4772.0], [39.9, 4772.0], [40.0, 4772.0], [40.1, 4772.0], [40.2, 4772.0], [40.3, 4772.0], [40.4, 4772.0], [40.5, 4772.0], [40.6, 4772.0], [40.7, 4772.0], [40.8, 4772.0], [40.9, 4772.0], [41.0, 4772.0], [41.1, 4772.0], [41.2, 4772.0], [41.3, 4772.0], [41.4, 4772.0], [41.5, 4772.0], [41.6, 4773.0], [41.7, 4773.0], [41.8, 4773.0], [41.9, 4773.0], [42.0, 4773.0], [42.1, 4773.0], [42.2, 4773.0], [42.3, 4773.0], [42.4, 4773.0], [42.5, 4773.0], [42.6, 4773.0], [42.7, 4773.0], [42.8, 4773.0], [42.9, 4773.0], [43.0, 4773.0], [43.1, 4773.0], [43.2, 4774.0], [43.3, 4774.0], [43.4, 4774.0], [43.5, 4774.0], [43.6, 4774.0], [43.7, 4774.0], [43.8, 4774.0], [43.9, 4774.0], [44.0, 4774.0], [44.1, 4775.0], [44.2, 4775.0], [44.3, 4775.0], [44.4, 4775.0], [44.5, 4775.0], [44.6, 4775.0], [44.7, 4775.0], [44.8, 4775.0], [44.9, 4775.0], [45.0, 4775.0], [45.1, 4775.0], [45.2, 4775.0], [45.3, 4775.0], [45.4, 4775.0], [45.5, 4775.0], [45.6, 4775.0], [45.7, 4775.0], [45.8, 4775.0], [45.9, 4775.0], [46.0, 4776.0], [46.1, 4776.0], [46.2, 4776.0], [46.3, 4776.0], [46.4, 4776.0], [46.5, 4776.0], [46.6, 4776.0], [46.7, 4777.0], [46.8, 4777.0], [46.9, 4777.0], [47.0, 4777.0], [47.1, 4777.0], [47.2, 4777.0], [47.3, 4777.0], [47.4, 4777.0], [47.5, 4777.0], [47.6, 4777.0], [47.7, 4777.0], [47.8, 4777.0], [47.9, 4777.0], [48.0, 4777.0], [48.1, 4777.0], [48.2, 4777.0], [48.3, 4778.0], [48.4, 4778.0], [48.5, 4778.0], [48.6, 4778.0], [48.7, 4778.0], [48.8, 4778.0], [48.9, 4778.0], [49.0, 4778.0], [49.1, 4778.0], [49.2, 4779.0], [49.3, 4779.0], [49.4, 4779.0], [49.5, 4779.0], [49.6, 4779.0], [49.7, 4779.0], [49.8, 4779.0], [49.9, 4779.0], [50.0, 4780.0], [50.1, 4780.0], [50.2, 4780.0], [50.3, 4780.0], [50.4, 4780.0], [50.5, 4780.0], [50.6, 4780.0], [50.7, 4780.0], [50.8, 4781.0], [50.9, 4781.0], [51.0, 4781.0], [51.1, 4781.0], [51.2, 4781.0], [51.3, 4781.0], [51.4, 4781.0], [51.5, 4781.0], [51.6, 4781.0], [51.7, 4781.0], [51.8, 4781.0], [51.9, 4782.0], [52.0, 4782.0], [52.1, 4782.0], [52.2, 4782.0], [52.3, 4782.0], [52.4, 4782.0], [52.5, 4782.0], [52.6, 4782.0], [52.7, 4783.0], [52.8, 4783.0], [52.9, 4783.0], [53.0, 4783.0], [53.1, 4783.0], [53.2, 4783.0], [53.3, 4783.0], [53.4, 4783.0], [53.5, 4783.0], [53.6, 4783.0], [53.7, 4784.0], [53.8, 4784.0], [53.9, 4784.0], [54.0, 4784.0], [54.1, 4784.0], [54.2, 4784.0], [54.3, 4785.0], [54.4, 4785.0], [54.5, 4785.0], [54.6, 4785.0], [54.7, 4785.0], [54.8, 4785.0], [54.9, 4785.0], [55.0, 4785.0], [55.1, 4785.0], [55.2, 4786.0], [55.3, 4786.0], [55.4, 4786.0], [55.5, 4786.0], [55.6, 4786.0], [55.7, 4786.0], [55.8, 4786.0], [55.9, 4786.0], [56.0, 4787.0], [56.1, 4787.0], [56.2, 4787.0], [56.3, 4787.0], [56.4, 4788.0], [56.5, 4788.0], [56.6, 4788.0], [56.7, 4788.0], [56.8, 4788.0], [56.9, 4788.0], [57.0, 4788.0], [57.1, 4788.0], [57.2, 4789.0], [57.3, 4789.0], [57.4, 4789.0], [57.5, 4789.0], [57.6, 4790.0], [57.7, 4790.0], [57.8, 4790.0], [57.9, 4790.0], [58.0, 4790.0], [58.1, 4790.0], [58.2, 4790.0], [58.3, 4790.0], [58.4, 4790.0], [58.5, 4790.0], [58.6, 4790.0], [58.7, 4790.0], [58.8, 4791.0], [58.9, 4791.0], [59.0, 4791.0], [59.1, 4791.0], [59.2, 4791.0], [59.3, 4791.0], [59.4, 4791.0], [59.5, 4791.0], [59.6, 4791.0], [59.7, 4792.0], [59.8, 4792.0], [59.9, 4792.0], [60.0, 4792.0], [60.1, 4792.0], [60.2, 4792.0], [60.3, 4792.0], [60.4, 4792.0], [60.5, 4793.0], [60.6, 4793.0], [60.7, 4793.0], [60.8, 4793.0], [60.9, 4793.0], [61.0, 4793.0], [61.1, 4793.0], [61.2, 4793.0], [61.3, 4793.0], [61.4, 4793.0], [61.5, 4793.0], [61.6, 4793.0], [61.7, 4793.0], [61.8, 4793.0], [61.9, 4793.0], [62.0, 4794.0], [62.1, 4794.0], [62.2, 4794.0], [62.3, 4794.0], [62.4, 4794.0], [62.5, 4794.0], [62.6, 4794.0], [62.7, 4794.0], [62.8, 4794.0], [62.9, 4794.0], [63.0, 4794.0], [63.1, 4794.0], [63.2, 4794.0], [63.3, 4794.0], [63.4, 4795.0], [63.5, 4795.0], [63.6, 4795.0], [63.7, 4795.0], [63.8, 4795.0], [63.9, 4795.0], [64.0, 4795.0], [64.1, 4795.0], [64.2, 4795.0], [64.3, 4795.0], [64.4, 4795.0], [64.5, 4795.0], [64.6, 4795.0], [64.7, 4795.0], [64.8, 4795.0], [64.9, 4796.0], [65.0, 4796.0], [65.1, 4796.0], [65.2, 4796.0], [65.3, 4796.0], [65.4, 4796.0], [65.5, 4796.0], [65.6, 4796.0], [65.7, 4796.0], [65.8, 4796.0], [65.9, 4797.0], [66.0, 4797.0], [66.1, 4797.0], [66.2, 4797.0], [66.3, 4797.0], [66.4, 4797.0], [66.5, 4797.0], [66.6, 4797.0], [66.7, 4797.0], [66.8, 4798.0], [66.9, 4798.0], [67.0, 4798.0], [67.1, 4798.0], [67.2, 4798.0], [67.3, 4798.0], [67.4, 4798.0], [67.5, 4798.0], [67.6, 4798.0], [67.7, 4798.0], [67.8, 4798.0], [67.9, 4798.0], [68.0, 4799.0], [68.1, 4799.0], [68.2, 4799.0], [68.3, 4799.0], [68.4, 4799.0], [68.5, 4799.0], [68.6, 4799.0], [68.7, 4799.0], [68.8, 4799.0], [68.9, 4799.0], [69.0, 4800.0], [69.1, 4800.0], [69.2, 4800.0], [69.3, 4800.0], [69.4, 4800.0], [69.5, 4800.0], [69.6, 4800.0], [69.7, 4800.0], [69.8, 4800.0], [69.9, 4800.0], [70.0, 4801.0], [70.1, 4801.0], [70.2, 4801.0], [70.3, 4801.0], [70.4, 4801.0], [70.5, 4801.0], [70.6, 4801.0], [70.7, 4801.0], [70.8, 4802.0], [70.9, 4802.0], [71.0, 4802.0], [71.1, 4802.0], [71.2, 4802.0], [71.3, 4802.0], [71.4, 4802.0], [71.5, 4802.0], [71.6, 4802.0], [71.7, 4802.0], [71.8, 4803.0], [71.9, 4803.0], [72.0, 4803.0], [72.1, 4803.0], [72.2, 4803.0], [72.3, 4804.0], [72.4, 4804.0], [72.5, 4804.0], [72.6, 4804.0], [72.7, 4804.0], [72.8, 4804.0], [72.9, 4804.0], [73.0, 4804.0], [73.1, 4804.0], [73.2, 4804.0], [73.3, 4804.0], [73.4, 4804.0], [73.5, 4804.0], [73.6, 4805.0], [73.7, 4805.0], [73.8, 4805.0], [73.9, 4805.0], [74.0, 4805.0], [74.1, 4805.0], [74.2, 4806.0], [74.3, 4806.0], [74.4, 4806.0], [74.5, 4806.0], [74.6, 4807.0], [74.7, 4807.0], [74.8, 4807.0], [74.9, 4807.0], [75.0, 4807.0], [75.1, 4807.0], [75.2, 4807.0], [75.3, 4808.0], [75.4, 4808.0], [75.5, 4808.0], [75.6, 4808.0], [75.7, 4808.0], [75.8, 4809.0], [75.9, 4809.0], [76.0, 4809.0], [76.1, 4809.0], [76.2, 4809.0], [76.3, 4809.0], [76.4, 4809.0], [76.5, 4810.0], [76.6, 4810.0], [76.7, 4810.0], [76.8, 4810.0], [76.9, 4810.0], [77.0, 4811.0], [77.1, 4811.0], [77.2, 4811.0], [77.3, 4811.0], [77.4, 4811.0], [77.5, 4811.0], [77.6, 4811.0], [77.7, 4811.0], [77.8, 4812.0], [77.9, 4812.0], [78.0, 4812.0], [78.1, 4812.0], [78.2, 4812.0], [78.3, 4813.0], [78.4, 4813.0], [78.5, 4814.0], [78.6, 4814.0], [78.7, 4815.0], [78.8, 4815.0], [78.9, 4815.0], [79.0, 4816.0], [79.1, 4816.0], [79.2, 4816.0], [79.3, 4816.0], [79.4, 4816.0], [79.5, 4816.0], [79.6, 4816.0], [79.7, 4816.0], [79.8, 4817.0], [79.9, 4817.0], [80.0, 4818.0], [80.1, 4818.0], [80.2, 4818.0], [80.3, 4818.0], [80.4, 4819.0], [80.5, 4819.0], [80.6, 4819.0], [80.7, 4819.0], [80.8, 4820.0], [80.9, 4821.0], [81.0, 4821.0], [81.1, 4821.0], [81.2, 4821.0], [81.3, 4821.0], [81.4, 4822.0], [81.5, 4822.0], [81.6, 4822.0], [81.7, 4822.0], [81.8, 4823.0], [81.9, 4823.0], [82.0, 4823.0], [82.1, 4823.0], [82.2, 4824.0], [82.3, 4824.0], [82.4, 4825.0], [82.5, 4825.0], [82.6, 4825.0], [82.7, 4826.0], [82.8, 4826.0], [82.9, 4826.0], [83.0, 4827.0], [83.1, 4827.0], [83.2, 4827.0], [83.3, 4827.0], [83.4, 4827.0], [83.5, 4827.0], [83.6, 4828.0], [83.7, 4828.0], [83.8, 4829.0], [83.9, 4829.0], [84.0, 4830.0], [84.1, 4830.0], [84.2, 4831.0], [84.3, 4831.0], [84.4, 4831.0], [84.5, 4831.0], [84.6, 4831.0], [84.7, 4832.0], [84.8, 4833.0], [84.9, 4833.0], [85.0, 4834.0], [85.1, 4835.0], [85.2, 4835.0], [85.3, 4836.0], [85.4, 4836.0], [85.5, 4837.0], [85.6, 4837.0], [85.7, 4838.0], [85.8, 4838.0], [85.9, 4839.0], [86.0, 4839.0], [86.1, 4839.0], [86.2, 4839.0], [86.3, 4840.0], [86.4, 4840.0], [86.5, 4841.0], [86.6, 4842.0], [86.7, 4843.0], [86.8, 4843.0], [86.9, 4845.0], [87.0, 4845.0], [87.1, 4846.0], [87.2, 4846.0], [87.3, 4848.0], [87.4, 4848.0], [87.5, 4849.0], [87.6, 4850.0], [87.7, 4851.0], [87.8, 4851.0], [87.9, 4852.0], [88.0, 4852.0], [88.1, 4853.0], [88.2, 4853.0], [88.3, 4854.0], [88.4, 4854.0], [88.5, 4855.0], [88.6, 4855.0], [88.7, 4856.0], [88.8, 4856.0], [88.9, 4859.0], [89.0, 4859.0], [89.1, 4861.0], [89.2, 4861.0], [89.3, 4863.0], [89.4, 4863.0], [89.5, 4864.0], [89.6, 4865.0], [89.7, 4865.0], [89.8, 4866.0], [89.9, 4867.0], [90.0, 4868.0], [90.1, 4869.0], [90.2, 4871.0], [90.3, 4874.0], [90.4, 4874.0], [90.5, 4875.0], [90.6, 4876.0], [90.7, 4879.0], [90.8, 4880.0], [90.9, 4883.0], [91.0, 4884.0], [91.1, 4889.0], [91.2, 4890.0], [91.3, 4892.0], [91.4, 4896.0], [91.5, 4897.0], [91.6, 4899.0], [91.7, 4900.0], [91.8, 4901.0], [91.9, 4906.0], [92.0, 4911.0], [92.1, 4914.0], [92.2, 4916.0], [92.3, 4922.0], [92.4, 4923.0], [92.5, 4931.0], [92.6, 4932.0], [92.7, 4933.0], [92.8, 4933.0], [92.9, 4939.0], [93.0, 4941.0], [93.1, 4945.0], [93.2, 4948.0], [93.3, 4948.0], [93.4, 4951.0], [93.5, 4951.0], [93.6, 4953.0], [93.7, 4953.0], [93.8, 4959.0], [93.9, 4965.0], [94.0, 4968.0], [94.1, 4970.0], [94.2, 4972.0], [94.3, 4973.0], [94.4, 4990.0], [94.5, 4994.0], [94.6, 5005.0], [94.7, 5008.0], [94.8, 5030.0], [94.9, 5033.0], [95.0, 5042.0], [95.1, 5043.0], [95.2, 5057.0], [95.3, 5059.0], [95.4, 5060.0], [95.5, 5065.0], [95.6, 5079.0], [95.7, 5083.0], [95.8, 5090.0], [95.9, 5092.0], [96.0, 5111.0], [96.1, 5112.0], [96.2, 5129.0], [96.3, 5131.0], [96.4, 5140.0], [96.5, 5162.0], [96.6, 5169.0], [96.7, 5171.0], [96.8, 5188.0], [96.9, 5198.0], [97.0, 5211.0], [97.1, 5250.0], [97.2, 5256.0], [97.3, 5261.0], [97.4, 5278.0], [97.5, 5285.0], [97.6, 5307.0], [97.7, 5316.0], [97.8, 5326.0], [97.9, 5344.0], [98.0, 5387.0], [98.1, 5419.0], [98.2, 5427.0], [98.3, 5428.0], [98.4, 5745.0], [98.5, 5746.0], [98.6, 5754.0], [98.7, 5756.0], [98.8, 5760.0], [98.9, 5762.0], [99.0, 5768.0], [99.1, 5776.0], [99.2, 5780.0], [99.3, 5783.0], [99.4, 5792.0], [99.5, 5802.0], [99.6, 5824.0], [99.7, 5829.0], [99.8, 5872.0], [99.9, 5873.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4700.0, "maxY": 1034.0, "series": [{"data": [[4800.0, 340.0], [4700.0, 1034.0], [4900.0, 44.0], [5100.0, 15.0], [5000.0, 21.0], [5200.0, 9.0], [5300.0, 8.0], [5400.0, 5.0], [5700.0, 16.0], [5800.0, 7.0], [5900.0, 1.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 90.94423320659058, "minX": 1.7923527E12, "maxY": 97.24331926863563, "series": [{"data": [[1.7923527E12, 97.24331926863563], [1.79235276E12, 90.94423320659058]], "isOverall": false, "label": "Fila 1500 hilos / 75 s", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235276E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4739.0, "minX": 1.0, "maxY": 5300.0, "series": [{"data": [[2.0, 4775.0], [3.0, 4794.0], [4.0, 4794.0], [5.0, 4739.0], [6.0, 4795.0], [7.0, 4795.0], [8.0, 4757.0], [9.0, 4747.0], [10.0, 4760.0], [11.0, 4797.0], [12.0, 4751.0], [13.0, 4759.0], [14.0, 4793.0], [15.0, 4758.0], [16.0, 4792.0], [17.0, 4758.0], [18.0, 4761.0], [19.0, 4756.0], [20.0, 4758.0], [21.0, 4786.0], [22.0, 4762.0], [23.0, 4762.0], [24.0, 4761.0], [25.0, 4795.0], [26.0, 4770.0], [27.0, 4765.0], [28.0, 4766.0], [29.0, 4775.0], [30.0, 4764.0], [33.0, 4782.0], [32.0, 5297.5], [35.0, 4766.0], [34.0, 4762.0], [37.0, 4792.0], [36.0, 4784.0], [39.0, 4768.0], [38.0, 4791.0], [41.0, 4786.0], [40.0, 5300.0], [43.0, 4782.0], [42.0, 4744.0], [45.0, 4749.0], [44.0, 4794.0], [47.0, 4790.0], [46.0, 4761.0], [49.0, 5111.0], [48.0, 4768.0], [51.0, 5198.0], [50.0, 4796.0], [53.0, 5079.0], [52.0, 4798.0], [55.0, 4932.0], [54.0, 4764.0], [57.0, 4773.0], [56.0, 4747.0], [59.0, 4758.0], [58.0, 4765.0], [61.0, 4764.0], [60.0, 4766.0], [63.0, 4765.0], [62.0, 4756.0], [67.0, 4772.0], [66.0, 4756.0], [65.0, 4794.0], [64.0, 4765.0], [71.0, 4764.0], [70.0, 4749.0], [69.0, 4754.0], [68.0, 4756.0], [75.0, 4767.0], [74.0, 4765.0], [73.0, 4779.0], [72.0, 4764.0], [79.0, 4755.0], [78.0, 4791.0], [77.0, 4795.0], [76.0, 4748.0], [83.0, 4798.0], [82.0, 4764.0], [81.0, 4752.0], [80.0, 4772.0], [87.0, 4757.0], [86.0, 4746.0], [85.0, 4798.0], [84.0, 4763.0], [91.0, 4755.0], [90.0, 4773.0], [89.0, 4755.0], [88.0, 4758.0], [95.0, 4770.058823529413], [94.0, 4782.0], [93.0, 4837.0], [92.0, 4800.0], [99.0, 4913.970588235295], [98.0, 4854.666666666669], [97.0, 4827.021164021164], [96.0, 4780.794407894735], [100.0, 4920.949152542372], [103.0, 4911.8], [101.0, 4919.8823529411775], [102.0, 4924.058823529412], [104.0, 4955.5], [1.0, 4843.0]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}, {"data": [[93.93000000000005, 4820.184666666675]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 104.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6849.3, "minX": 1.7923527E12, "maxY": 13623.4, "series": [{"data": [[1.7923527E12, 12276.6], [1.79235276E12, 13623.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7923527E12, 6849.3], [1.79235276E12, 7600.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235276E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4810.598225602029, "minX": 1.7923527E12, "maxY": 4830.822784810129, "series": [{"data": [[1.7923527E12, 4830.822784810129], [1.79235276E12, 4810.598225602029]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235276E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4810.572877059567, "minX": 1.7923527E12, "maxY": 4830.76652601969, "series": [{"data": [[1.7923527E12, 4830.76652601969], [1.79235276E12, 4810.572877059567]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235276E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 190.83776932826362, "minX": 1.7923527E12, "maxY": 208.33895921237695, "series": [{"data": [[1.7923527E12, 208.33895921237695], [1.79235276E12, 190.83776932826362]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235276E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4738.0, "minX": 1.7923527E12, "maxY": 5925.0, "series": [{"data": [[1.7923527E12, 5925.0], [1.79235276E12, 5873.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7923527E12, 4741.0], [1.79235276E12, 4738.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7923527E12, 4921.0], [1.79235276E12, 4853.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7923527E12, 5779.64], [1.79235276E12, 5754.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7923527E12, 4781.0], [1.79235276E12, 4777.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7923527E12, 5122.4], [1.79235276E12, 4948.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235276E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4769.0, "minX": 8.0, "maxY": 4810.5, "series": [{"data": [[8.0, 4810.5], [16.0, 4789.5], [17.0, 4779.5], [18.0, 4774.5], [19.0, 4779.0], [20.0, 4778.0], [21.0, 4776.0], [22.0, 4786.0], [23.0, 4778.0], [24.0, 4793.0], [15.0, 4769.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4769.0, "minX": 8.0, "maxY": 4810.5, "series": [{"data": [[8.0, 4810.5], [16.0, 4789.5], [17.0, 4779.5], [18.0, 4774.0], [19.0, 4779.0], [20.0, 4778.0], [21.0, 4776.0], [22.0, 4785.5], [23.0, 4778.0], [24.0, 4793.0], [15.0, 4769.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.55, "minX": 1.7923527E12, "maxY": 13.45, "series": [{"data": [[1.7923527E12, 13.45], [1.79235276E12, 11.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235276E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.85, "minX": 1.7923527E12, "maxY": 13.15, "series": [{"data": [[1.7923527E12, 11.85], [1.79235276E12, 13.15]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79235276E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.85, "minX": 1.7923527E12, "maxY": 13.15, "series": [{"data": [[1.7923527E12, 11.85], [1.79235276E12, 13.15]], "isOverall": false, "label": "POST venta (pending_stock_confirmation)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235276E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.85, "minX": 1.7923527E12, "maxY": 13.15, "series": [{"data": [[1.7923527E12, 11.85], [1.79235276E12, 13.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79235276E12, "title": "Total Transactions Per Second"}},
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

