ZC.LICENSE=["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];let chartConfig = {
                                type: 'hbar3d',
                                background: "transparent",
                                '3dAspect': {
                                  depth: 15,
                                  true3d: false,
                                  yAngle: 10,
                                },
                                backgroundColor: 'transparent',
                                stacked: true,
                                title: {
                                  text: 'Number of Orders',
                                  backgroundColor: 'transparent',
                                  fontColor: '#000000',
                                  fontWeight: 'normal'
                                },
                                legend: {
                                  margin: '12% auto auto auto',
                                  backgroundColor: 'transparent',
                                  borderWidth: '0px',
                                  item: {
                                    fontColor: '#acbad0'
                                  },
                                  layout: 'float',
                                  marker: {
                                    borderColor: '#fff'
                                  },
                                  toggleAction: 'remove',
                                  shadow: false
                                },
                                plot: {
                                  alpha: 0.9,
                                  barWidth: '25px'
                                },
                                plotarea: {
                                  margin: '25% 5% 20% 15%',
                                  backgroundColor: 'transparent'
                                },
                                scaleX: {
                                  values: ['Bajio','Centro','Noreste','Noroeste','Norte','Occidente','Sureste'],
                                  backgroundColor: '#000066',
                                  guide: {
                                    lineColor: '#D0D0D0'
                                  },
                                  item: {
                                    fontColor: '#000000',
                                    offsetX: '-5%'
                                  },
                                  tick: {
                                    lineColor: '#6e82a1'
                                  }
                                },
                                scaleY: {
                                  backgroundColor: '#ccccff',
                                  guide: {
                                    lineColor: '#fff'
                                  },
                                  item: {
                                    fontColor: '#000000'
                                  },
                                  label: {
                                    text: '',
                                    fontColor: '#acbad0',
                                    fontWeight: 'normal',
                                    offsetY: '5%'
                                  },
                                  tick: {
                                    lineColor: '#6e82a1'
                                  }
                                },
                                tooltip: {
                                  text: '%t / %k = %v<br>%k Total = %total',
                                  borderColor: '#ffffff',
                                  borderWidth: '1px',
                                  fontColor: '#000000'
                                },
                                series: [
                                  {
                                    text: 'Orders',
                                    values: [27.0,188.0,19.4,19.8,6.7,39.8,22.8,7.6],
                                    backgroundColor: '#1a66ff'
                                  },
                                  {
                                    text: 'Sells',
                                    values: [36.9,281.5,26.7,31.0,8.7,59.1,34.5,13.7],
                                    backgroundColor: '#b3b3b3'
                                  },
                                  {
                                    text: 'Avg Sells',
                                    values: [1.4,1.5,1.4,1.6,1.3,1.5,1.5,1.8],
                                    backgroundColor: '#ffd633'
                                  }
                                  
                                ]
                              };
                              
                              zingchart.render({
                                id: 'myChart',
                                data: chartConfig
                              });