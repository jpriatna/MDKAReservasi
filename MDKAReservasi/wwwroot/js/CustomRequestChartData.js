//const jokes = [
//  {
//    "categories": ["dev"],
//    "created_at": "2020-01-05 13:42:19.324003",
//    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//    "id": "elgv2wkvt8ioag6xywykbq",
//    "updated_at": "2020-01-05 13:42:19.324003",
//    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
//    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
//  },
//  {
//    "categories": ["dev"],
//    "created_at": "2020-01-05 13:42:19.324003",
//    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//    "id": "ae-78cogr-cb6x9hluwqtw",
//    "updated_at": "2020-01-05 13:42:19.324003",
//    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
//    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
//  }
//]

const waterfall = [
    {
        "color": ['#f17a52', '#03A9F4', '#04b9d5'],
        "axis": ['2020', 'Prodaction', 'Additional', 'Adjustment', '2021'],
        //"legend": ['Oil', 'Gas', 'Oil Equivalent'],
        "data": [
            {
                //"categoryLabel": '-',
                "data": [0, 900, 900, 900, 0]
            },
            {
                //"categoryLabel": '-',
                //"data": [900, 345, 393, '-', '-'],
                "data": [900, 345, 393, 400, 600],
            },
            //{
            //    //"categoryLabel": '-',
            //    "data": ['-', '-', '-', '-', '-'],
            //},
            //{
            //    //"categoryLabel": '-',
            //    "data": ['-', '-', '-', 108, 500]
            //},
        ],
    }
];


const projectdetail = [
    {
        "titlechart": 'Oil Production Profile',
        "color": ['#03A9F4', '#f17a52', '#444444',],
        "axislabel": "YEAR",
        "yaxislabel": "Rate, STB/Day",
        "axis": ['2019', '2029', '2039', '2049', '2059', '2069', '2079', '2089', '2099', '2109', '2119', '2129'],
        "legend": ['P90', 'P50', 'P10'],
        "data": [
            {
                "categoryLabel": 'P90',
                "data": [0, 10000, 8800, 7700, 6600, 5500, 4400, 3300, 2200, 1100],
            },
            {
                "categoryLabel": 'P50',
                "data": [0, 20000, 18000, 16000, 14000, 12000, 10000, 8000, 6000, 1100],
            },
            {
                "categoryLabel": 'P10',
                "data": [0, 30000, 26000, 22000, 18000, 14000, 10000, 6000, 2000, 1100]
            },
        ],
    }
];


const projectdetail2 = [
    {
        "titlechart": 'Gas Production Profile',
        "color": ['#03A9F4', '#f17a52', '#444444',],
        "axislabel": "YEAR",
        "yaxislabel": "Rate, MSCF/Day",
        "axis": ['2019', '2029', '2039', '2049', '2059', '2069', '2079', '2089', '2099', '2109', '2119', '2129'],
        "legend": ['P90', 'P50', 'P10'],
        "data": [
            {
                "categoryLabel": 'P90',
                "data": [0, 10000, 8800, 7700, 6600, 5500, 4400, 3300, 2200, 1100],
            },
            {
                "categoryLabel": 'P50',
                "data": [0, 20000, 18000, 16000, 14000, 12000, 10000, 8000, 6000, 1100],
            },
            {
                "categoryLabel": 'P10',
                "data": [0, 30000, 26000, 22000, 18000, 14000, 10000, 6000, 2000, 1100]
            },
        ],
    }
];


const projectdetail3 = [
    {
        "titlechart": 'Condensate + LPG Production Profile',
        "color": ['#03A9F4', '#f17a52', '#444444',],
        "axislabel": "YEAR",
        "yaxislabel": "Rate, STB/Day",
        "axis": ['2019', '2029', '2039', '2049', '2059', '2069', '2079', '2089', '2099', '2109', '2119', '2129'],
        "legend": ['P90', 'P50', 'P10'],
        "data": [
            {
                "categoryLabel": 'P90',
                "data": [0, 10000, 8800, 7700, 6600, 5500, 4400, 3300, 2200, 1100],
            },
            {
                "categoryLabel": 'P50',
                "data": [0, 20000, 18000, 16000, 14000, 12000, 10000, 8000, 6000, 1100],
            },
            {
                "categoryLabel": 'P10',
                "data": [0, 30000, 26000, 22000, 18000, 14000, 10000, 6000, 2000, 1100]
            },
        ],
    }
];

const projectdetail4 = [
    {
        "titlechart": 'Costing Profile(P50)',
        "color": ['#03A9F4', '#f17a52', '#444444',],
        "axislabel": "YEAR",
        "yaxislabel": "000', MYR or USD",
        "axis": ['2019', '2029', '2039', '2049', '2059', '2069', '2079', '2089', '2099', '2109', '2119', '2129'],
        "legend": ['OPEX', 'CAPEX', 'ABEX'],
        "data": [
            {
                "categoryLabel": 'OPEX',
                "data": [0, 10000, 8800, 7700, 6600, 5500, 4400, 3300, 2200, 1100],
            },
            {
                "categoryLabel": 'CAPEX',
                "data": [0, 20000, 18000, 16000, 14000, 12000, 10000, 8000, 6000, 1100],
            },
            {
                "categoryLabel": 'ABEX',
                "data": [0, 30000, 26000, 22000, 18000, 14000, 10000, 6000, 2000, 1100]
            },
        ],
    }
];

const grafic2 = [
    {
        "category": ['Rate PJBG I', 'Rate 1P', 'Rate 2P', 'Rate 3P', 'Cum PJBG I (>1P)', 'Cum 1P', 'Cum 2P', 'Cum 3P'],
        "axis": ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        "data": [
            {
                "name": 'Rate PJBG I',
                "type": 'bar',
                "color": "#ffbe0f",
                "width": 0,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 800, 800, 800, 400, 400, 400, 400]
            },
            {
                "name": 'Rate 1P',
                "type": 'line',
                "color": "#8c0000",
                "width": 8,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 800, 800, 800, 400, 400, 400, 400]
            },
            {
                "name": 'Rate 2P',
                "type": 'line',
                "color": "#bd2000",
                "width": 6,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 1000, 800, 800, 800, 400, 400, 400]
            },
            {
                "name": 'Rate 3P',
                "type": 'line',
                "color": "#fa1e0e",
                "width": 4,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 1000, 1000, 800, 800, 800, 400, 400]
            },
            {
                "name": 'Cum PJBG I (>1P)',
                "type": 'line',
                "color": "#ffbe0f",
                "width": 4,
                "typeline": 'solid',
                "data": [100, 200, 300, 400, 550, 650, 750, 850, 950, 1000]
            },
            {
                "name": 'Cum 1P',
                "type": 'line',
                "color": "#8c0000",
                "width": 5,
                "typeline": 'dashed',
                "data": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
            },
            {
                "name": 'Cum 2P',
                "type": 'line',
                "color": "#bd2000",
                "width": 3,
                "typeline": 'dashed',
                "data": [100, 200, 300, 400, 500, 670, 770, 870, 970, 1000]
            },
            {
                "name": 'Cum 3P',
                "type": 'line',
                "color": "#fa1e0e",
                "width": 2,
                "typeline": 'dashed',
                "data": [100, 200, 300, 400, 500, 690, 790, 890, 990, 1000]
            },
        ]
    }
]

const grafic3 = [
    {
        "category": ['Rate PJBG II', 'Rate 1P', 'Rate 2P', 'Rate 3P', 'Cum PJBG II (<1P)', 'Cum 1P', 'Cum 2P', 'Cum 3P'],
        "axis": ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        "data": [
            {
                "name": 'Rate PJBG II',
                "type": 'bar',
                "color": "#4d80e4",
                "width": 0,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 800, 800, 800, 400, 400, 400, 400]
            },
            {
                "name": 'Rate 1P',
                "type": 'line',
                "color": "#8c0000",
                "width": 8,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 800, 800, 800, 400, 400, 400, 400]
            },
            {
                "name": 'Rate 2P',
                "type": 'line',
                "color": "#bd2000",
                "width": 6,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 1000, 800, 800, 800, 400, 400, 400]
            },
            {
                "name": 'Rate 3P',
                "type": 'line',
                "color": "#fa1e0e",
                "width": 4,
                "typeline": 'solid',
                "data": [1000, 1000, 1000, 1000, 1000, 800, 800, 800, 400, 400]
            },
            {
                "name": 'Cum PJBG I (>1P)',
                "type": 'line',
                "color": "#4d80e4",
                "width": 4,
                "typeline": 'solid',
                "data": [100, 200, 300, 400, 550, 650, 750, 850, 950, 1000]
            },
            {
                "name": 'Cum 1P',
                "type": 'line',
                "color": "#8c0000",
                "width": 5,
                "typeline": 'dashed',
                "data": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
            },
            {
                "name": 'Cum 2P',
                "type": 'line',
                "color": "#bd2000",
                "width": 3,
                "typeline": 'dashed',
                "data": [100, 200, 300, 400, 500, 670, 770, 870, 970, 1000]
            },
            {
                "name": 'Cum 3P',
                "type": 'line',
                "color": "#fa1e0e",
                "width": 2,
                "typeline": 'dashed',
                "data": [100, 200, 300, 400, 500, 690, 790, 890, 990, 1000]
            },
        ]
    }
];

const grafic4 = [
    {
        "category": ['Kumprod 1.1.2019', 'Actual Production Jan-Oct', 'Forecast Production Nov-Dec', 'D', 'E'],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        "data": [
            {
                "name": 'Kumprod 1.1.2019',
                "data": [970, 1000, 970, 950, 930]
            },
            {
                "name": 'Actual Production Jan-Oct',
                "data": ['', '', '', '', 930, 900, 870, 850, 830]
            },
            {
                "name": 'Forecast Production Nov-Dec',
                "data": ['', '', '', '', '', '', '', '', 830, 800, 770, 750, 700]
            },
            {
                "name": 'D',
                "data": ['', '', '', '', '', '', '', '', '', '', '', '', 700, 650, 600, 550, 400]
            },
            {
                "name": 'E',
                "data": ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 400, 300, 200, 100, 0]
            },
            
        ]
    }
]

const grafic5 = [
    {
        "category": [
            'Lead',
            'Prospect',
            'Contingent Res. - Exploration in Progress (K7)',
            'Contingent Res. - Exploration End Stage (K6)',
            'Contingent Res. - Development Not Viable (K5)',
            'Contingent Res. - Development Unclarified (K4)',
            'Contingent Res. - Development On Hold (K3)',
            'Contingent Res. - Development Pending (K2)',
            'Undeveloped Reserves',
            'Existing Reserves (Baseline)'
        ],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038],
        "data": [
            {
                "name": 'Lead',
                //"z": 5,
                "z": 1,
                "data": [0, 0, 0, 0, 0, 0, 29200, 28200, 27200, 26200, 25200, 24200, 23200, 22200, 21200, 20200, 19200, 17000, 14500, 13000]
            },
            {
                "name": 'Prospect',
                //"z": 4,
                "z": 2,
                "data": [0, 0, 0, 0, 0, 0, 29100, 27500, 25000, 23000, 21000, 19000, 16500, 15500, 14000, 12500, 11000, 10000, 9500, 8000]
            },
            {
                "name": 'Contingent Res. - Exploration in Progress (K7)',
                //"z": 3,
                "z": 3,
                "data": [0, 0, 0, 0, 21510, 25000, 29000, 25500, 23000, 21000, 19000, 17000, 15000, 14000, 12500, 11000, 9500, 8500, 8000, 6500]
            },
            {
                "name": 'Contingent Res. - Exploration End Stage (K6)',
                //"z": 2,
                "z": 4,
                "data": [0, 0, 0, 0, 21510, 24500, 27500, 24000, 21500, 19500, 17500, 15500, 13500, 12500, 11000, 9500, 8000, 7000, 6500, 5000]
            },
            {
                "name": 'Contingent Res. - Development Not Viable (K5)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 21510, 23500, 25000, 22000, 20000, 18000, 16000, 14500, 12500, 11500, 10000, 8500, 7000, 6000, 5500, 4000]
            },

            {
                "name": 'Contingent Res. - Development Unclarified (K4)',
                //"z": 1,
                "z": 5,
                "data": [0, 27100, 24500, 23500, 21500, 22500, 23500, 21000, 19000, 17000, 15000, 13500, 11500, 10500, 9000, 7500, 6000, 5000, 4500, 3000]
            },
            {
                "name": 'Contingent Res. - Development On Hold (K3)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 20500, 21200, 22000, 20000, 18000, 16000, 14000, 12500, 10500, 9500, 8000, 6500, 5000, 4000, 3500, 2000]
            },
            {
                "name": 'Contingent Res. - Development Pending (K2)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 20100, 20100, 20500, 18500, 16500, 14500, 12500, 11000, 9000, 8000, 6500, 5000, 3500, 2500, 2000, 500]
            },
            {
                "name": 'Undeveloped Reserves',
                //"z": 1,
                "z": 5,
                "data": [30000, 27000, 23500, 22000, 20000, 16000, 12000, 11500, 11000, 10500, 10000, 9000, 7500, 6000, 4500, 3000, 2500, 2000, 1500, 0]
            },
            {
                "name": 'Existing Reserves (Baseline)',
                //"z": 1,
                "z": 5,
                "data": [30000, 25000, 21500, 20000, 18000, 14000, 10000, 9500, 9000, 8500, 8000, 7000, 5500, 4000, 2500, 1000, 0, 0, 0, 0]
            },
        ]
    }
]

const grafic6 = [
    {
        "category": [
            'Lead',
            'Prospect',
            'Contingent Res. - Exploration in Progress (K7)',
            'Contingent Res. - Exploration End Stage (K6)',
            'Contingent Res. - Development Not Viable (K5)',
            'Contingent Res. - Development Unclarified (K4)',
            'Contingent Res. - Development On Hold (K3)',
            'Contingent Res. - Development Pending (K2)',
            'Undeveloped Reserves',
            'Existing Reserves (Baseline)'
        ],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038],
        "data": [
            {
                "name": 'Lead',
                //"z": 5,
                "z": 1,
                "data": [0, 0, 0, 0, 0, 0, 200, 282, 340, 300, 252, 242, 232, 222, 212, 202, 192, 170, 145, 130]
            },
            {
                "name": 'Prospect',
                //"z": 4,
                "z": 2,
                "data": [0, 0, 0, 0, 0, 0, 200, 275, 320, 280, 210, 190, 165, 155, 140, 125, 110, 100, 95, 80]
            },
            {
                "name": 'Contingent Res. - Exploration in Progress (K7)',
                "z": 3,
                "data": [0, 0, 0, 0, 0, 0, 200, 260, 300, 260, 190, 170, 150, 140, 125, 110, 95, 85, 80, 65]
            },
            {
                "name": 'Contingent Res. - Exploration End Stage (K6)',
                //"z": 2,
                "z": 4,
                "data": [0, 0, 0, 0, 0, 0, 200, 240, 270, 240, 195, 180, 160, 150, 135, 120, 105, 95, 90, 75]
            },
            {
                "name": 'Contingent Res. - Development Not Viable (K5)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 0, 0, 200, 220, 240, 210, 175, 160, 140, 130, 115, 100, 85, 75, 70, 55]
            },

            {
                "name": 'Contingent Res. - Development Unclarified (K4)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 0, 0, 200, 210, 220, 170, 155, 140, 120, 110, 95, 80, 65, 55, 50, 35]
            },
            {
                "name": 'Contingent Res. - Development On Hold (K3)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 0, 0, 200, 200, 200, 160, 140, 125, 105, 95, 80, 65, 50, 40, 35, 20]
            },
            {
                "name": 'Contingent Res. - Development Pending (K2)',
                //"z": 1,
                "z": 5,
                "data": [0, 0, 0, 0, 201, 201, 205, 185, 165, 145, 125, 110, 90, 80, 65, 50, 35, 25, 20, 5]
            },
            {
                "name": 'Undeveloped Reserves',
                //"z": 1,
                "z": 5,
                "data": [300, 270, 235, 220, 200, 160, 120, 115, 110, 105, 100, 90, 75, 60, 45, 30, 25, 20, 15, 0]
            },
            {
                "name": 'Existing Reserves (Baseline)',
                //"z": 1,
                "z": 5,
                "data": [300, 250, 215, 200, 180, 140, 100, 95, 90, 85, 80, 70, 55, 40, 25, 10, 0, 0, 0, 0]
            },
        ]
    }
]

const grafic7 = [
    {
        "category": ['Akses Langsung', 'Pemasaran Email', 'Iklan Afiliasi', 'Iklan Video', 'Mesin Telusur', 'Baidu', 'Google', 'Bing', 'Lainnya'],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        "data": [
            {
                name: 'Akses Langsung',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320],
                stack: 'mesin pencari',
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //markLine: {
                //    lineStyle: {
                //        type: ''
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Pemasaran Email',
                type: 'bar',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210],
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //markLine: {
                //    lineStyle: {
                //        type: ''
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Iklan Afiliasi',
                type: 'bar',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310],
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //markLine: {
                //    lineStyle: {
                //        type: ''
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Iklan Video',
                type: 'bar',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410],
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //markLine: {
                //    lineStyle: {
                //        type: ''
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Mesin Telusur',
                type: 'bar',
                stack: 'mesin pencari',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                    focus: 'series'
                },
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //MEMBUAT GARIS ANTARA BAR
                //markLine: {
                //    lineStyle: {
                //        type: 'dashed'
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Baidu',
                type: 'bar',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [620, 732, 701, 734, 1090, 1130, 1120],
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //markLine: {
                //    lineStyle: {
                //        type: ''
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Google',
                type: 'bar',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 290, 230, 220],
                barWidth: 50,
                lineStyle: {
                    type: ''
                },
                //markLine: {
                //    lineStyle: {
                //        type: ''
                //    },
                //    data: [
                //        [{ type: 'min' }, { type: 'max' }]
                //    ]
                //}
            },
            {
                name: 'Bing',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74, 190, 130, 110],
                barWidth: 50,
                lineStyle: {
                    type: 'dashed'
                },
                //https://echarts.apache.org/en/option.html#series-line.markLine.data
                markLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                    data: [
                        [{ type: 'average' }]
                    ]
                }
            },
            {
                name: 'Lainnya',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84, 109, 110, 120],
                barWidth: 40,
                lineStyle: {
                    type: ''
                },
                markLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                    //data: [
                    //    [{ type: 'min' }, { type: 'max' }]
                    //]
                }
            }
        ]
    }
];

const grafic8 = [
    {
        "category": ['Akses Langsung', 'Pemasaran Email', 'Iklan Afiliasi', 'Iklan Video', 'Mesin Telusur', 'Baidu', 'Google', 'Bing', 'Lainnya'],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        "data": [
            {
                name: 'Akses Langsung',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320],
                stack: 'mesin pencari',
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Pemasaran Email',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Iklan Afiliasi',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Iklan Video',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Mesin Telusur',
                type: 'line',
                stack: 'mesin pencari',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                    focus: 'series'
                },
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Baidu',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [620, 732, 701, 734, 1090, 1130, 1120],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Google',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 290, 230, 220],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'Bing',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74, 190, 130, 110],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                },
                //https://echarts.apache.org/en/option.html#series-line.markLine.data
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    },
                    data: [
                        [{ type: 'average' }]
                    ]
                }
            },
            {
                name: 'Lainnya',
                type: 'line',
                stack: 'mesin pencari',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84, 109, 110, 120],
                barWidth: 40,
                lineStyle: {
                    type: 'solid'
                },
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    }
                }
            }
        ]
    }
];

//pie chart
const grafic9 = [
    {
        "category": ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome'],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        "data": [
            { value: 335, name: 'IE'},
            { value: 310, name: 'Opera' },
            { value: 234, name: 'Safari' },
            { value: 135, name: 'Firefox' },
            { value: 1548, name: 'Chrome' }
        ]
    }
];

const grafic10 = [
    {
        "category": ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome'],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        "data": [
            { value: 335, name: 'IE' },
            { value: 310, name: 'Opera' },
            { value: 234, name: 'Safari' },
            { value: 135, name: 'Firefox' },
            { value: 1548, name: 'Chrome' }
        ]
    }
];
//pie chart

//line
const productionProfile = [
    {
        "category": ['P10', 'P50', 'P90'],
        "color": [
            '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ],
        "axis": [2019, 2020, 2021, 2022, 2023, 2024, 2025],
        "data": [
            {
                name: 'P10',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'P50',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
            {
                name: 'P90',
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310],
                barWidth: 50,
                lineStyle: {
                    type: 'solid'
                }
            },
        ]
    }
];

var datas = [];

for (var a = 0; a < 11; a++) {
    datas.push(Math.floor((Math.random() * 100) + 1));
}
//setInterval(function () {
//    datas.push(Math.floor((Math.random() * 100) + 1));
//    console.log("ini random " + Math.floor((Math.random() * 100) + 1));
//}, 1000);

const barsideData = [
    {
        "category": ['Gabon', 'Kikeh', 'MLN', 'MLSE', 'EMK'],
        "color": [
            '#8d98b3', '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
             '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089', '#07a2a4',
        ],
        "data": [
            {
                name: 'Year 2013',
                type: 'bar',
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: '#EF5350'
                    }
                },
                data: datas
            },
        ]
    }
];

function fieldColor() {
    var FieldColors = {
        "Erhu": "#ed9005",
        "Bonang": "#13f0cb",
        "Ikhlas (Tembusu South) Roll-Up": "#0be36c",
        "Sundatang": "#dce30b",
        "Akrab (Tembusu North) Roll-Up": "#e7eb7f",
        "Murni (Bunga Lili North) Roll-Up": "#a80303",
        "Kecapi": "#8a3066",
        "Wibawa (Harapan H50)": "#b27ecf",
        "Kagum (Harapan H136)": "#2d07eb",
        "Hikmat (Ara) H50": "#51ff00"
    };
    return FieldColors;
}

function ReservesMovment() {
    var ReservesColors = {
        "Production": "#ed9005",
        "Additional": "#13f0cb",
        "Adjustment": "#0be36c",
        
    };
    return ReservesColors;
}
