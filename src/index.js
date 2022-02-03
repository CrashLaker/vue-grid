// import justifiedLayout from 'justified-layout'
import * as d3 from 'd3';
// import './main.scss';
// import 'gridstack/dist/gridstack.min.css'
// import gridstack from 'gridstack'

// Let's create a mock visualization
var width = 1060, height = 700;
var circleSizeMax = 15;
var rMax = Math.min(width,height)/2 - circleSizeMax;

var radius 	= d3.scaleLinear().range([0,rMax]);
var angle 	= d3.scaleLinear().range([0,2*Math.PI]);
var size 	= d3.scaleLinear().range([0,circleSizeMax]);
var color 	= d3.scaleOrdinal().range(['#fcfb3c','#fcf900','#ff825a','#ffd2cb','#71d362','#ffd16f','#ff3d5d','#ff7218','#04b3f3','#bce5ac','#6e0215','#69D2E7','#A7DBDB','#E0E4CC','#F38630','#E94C6F','#542733','#5A6A62','#C6D5CD','#DB3340','#E8B71A','#F7EAC8','#1FDA9A','#588C73','#F2E394','#F2AE72','#D96459','#D0C91F','#85C4B9','#008BBA','#DF514C','#00C8F8','#59C4C5','#FFC33C','#FBE2B4','#5E412F','#FCEBB6','#78C0A8','#F07818','#DE4D4E','#DA4624','#DE593A','#FFD041','#B1EB00','#53BBF4','#FF85CB','#FF432E','#354458','#3A9AD9','#29ABA4','#E9E0D6','#4298B5','#ADC4CC','#92B06A','#E19D29','#BCCF02','#5BB12F','#73C5E1','#9B539C','#FFA200','#00A03E','#24A8AC','#0087CB','#260126','#59323C','#F2EEB3','#BFAF80','#BFF073','#0DC9F7','#7F7F7F','#F05B47','#3B3A35','#20457C','#5E3448','#FB6648','#E45F56','#A3D39C','#7ACCC8','#4AAAA5','#DC2742','#AFA577','#ABA918','#8BAD39','#F2671F','#C91B26','#9C0F5F','#60047A','#0F5959','#17A697','#638CA6','#8FD4D9','#83AA30','#1499D3','#4D6684','#3D3D3D','#333333','#424242','#00CCD6','#EFEFEF','#CCC51C','#FFE600','#F05A28','#B9006E','#F17D80','#737495','#68A8AD','#C4D4AF']);
var x = function(d) { return radius( d.r ) * Math.cos( angle( d.angle ) ); };
var y = function(d) { return radius( d.r ) * Math.sin( angle( d.angle ) ); };

var imgs = {
}

var jornadas = {
	'Confirmação Cartões': [
		{ sigla: 'ES2', },
		{ sigla: 'DY9', },
		{ sigla: 'SS8', },
		{ sigla: 'EQ3', },
		{ sigla: 'EK4', },
		{ sigla: 'IM2', },
		{ sigla: 'PW2', },
		{ sigla: 'FQ4', },
		{ sigla: 'CC', },
		{ sigla: 'OB4', },
		{ sigla: 'IC6', },
		{ sigla: 'SU', },
		{ sigla: 'PubSub', },
	],
	'Confirmação Iti': [
		{ sigla: 'ES2', },
		{ sigla: 'DY9', },
		{ sigla: 'SS8', },
		{ sigla: 'EQ3', },
		{ sigla: 'EK4', },
		{ sigla: 'IM2', },
		{ sigla: 'PW2', },
		{ sigla: 'FQ4', },
		{ sigla: 'CC', },
		{ sigla: 'OB4', },
		{ sigla: 'PubSub', },
	],
	'Confirmação PF': [
		{ sigla: 'ES2', },
		{ sigla: 'DY9', },
		{ sigla: 'SS8', },
		{ sigla: 'EQ3', },
		{ sigla: 'EK4', },
		{ sigla: 'IM2', },
		{ sigla: 'PW2', },
		{ sigla: 'CI7', },
		{ sigla: 'FQ4', },
		{ sigla: 'CC', },
		{ sigla: 'OB4', },
		{ sigla: 'IC6', },
		{ sigla: 'SU', },
		{ sigla: 'PubSub', },
	],
	'Confirmação PJ': [
		{ sigla: 'ES2', },
		{ sigla: 'DY9', },
		{ sigla: 'SS8', },
		{ sigla: 'EQ3', },
		{ sigla: 'EK4', },
		{ sigla: 'IM2', },
		{ sigla: 'PW2', },
		{ sigla: 'CI7', },
		{ sigla: 'FQ4', },
		{ sigla: 'CC', },
		{ sigla: 'OB4', },
		{ sigla: 'IC6', },
		{ sigla: 'SU', },
		{ sigla: 'PubSub', },
		{ sigla: 'UD', },
		{ sigla: 'DT', },
	],
	'Consentimento': [
		{ sigla: 'SS8', },
		{ sigla: 'QA', },
		{ sigla: 'FG7', },
		{ sigla: 'EU9', },
		{ sigla: 'SG8', },
		{ sigla: 'Vault', },
	],
	'Consumo': [
		{ sigla: 'IE2', },
		{ sigla: 'SS8', },
		{ sigla: 'EU9', },
		{ sigla: 'FG7', },
		{ sigla: 'SG8', },
		{ sigla: 'PubSub', },
		{ sigla: 'ER4', },
	],
	'Transmissão': [
		{ sigla: 'DY9', },
		{ sigla: 'ES2', },
		{ sigla: 'SS8', },
		{ sigla: 'FQ4', },
		{ sigla: 'CC', },
		{ sigla: 'EK4', },
		{ sigla: 'EQ3', },
		{ sigla: 'SU', },
		{ sigla: 'IC6', },
		{ sigla: 'OB4', },
		{ sigla: 'EU9', },
		{ sigla: 'PF5', },
	],
}

var template = {
    "schemaVersion": null,
    "dashboardFormatVersion": "4.0",
    "name": "test",
    "description": null,
    "properties": null,
    "templateEntityType": "APPLICATION_COMPONENT_NODE",
    "associatedEntityTemplates": null,
    "minutesBeforeAnchorTime": -1,
    "startDate": null,
    "endDate": null,
    "refreshInterval": 120000,
    "backgroundColor": 15856629,
    "color": 15856629,
    "height": height,
    "width": width,
    "canvasType": "CANVAS_TYPE_ABSOLUTE",
    "layoutType": "",
    "widgetTemplates": [
    ],
    "warRoom": false,
    "template": false
}

var imageWidget = {
	"widgetType": "ImageWidget",
	"title": null,
	"height": 750,
	"width": 1047,
	"minHeight": 0,
	"minWidth": 0,
	"x": 13,
	"y": 18,
	"label": null,
	"description": null,
	"drillDownUrl": null,
	"useMetricBrowserAsDrillDown": true,
	"drillDownActionType": null,
	"backgroundColor": 16777215,
	"backgroundColors": null,
	"backgroundColorsStr": "16777215,16777215",
	"color": 1646891,
	"fontSize": 12,
	"useAutomaticFontSize": false,
	"borderEnabled": false,
	"borderThickness": 0,
	"borderColor": 14408667,
	"backgroundAlpha": 1,
	"showValues": false,
	"formatNumber": null,
	"numDecimals": 0,
	"removeZeros": null,
	"compactMode": false,
	"showTimeRange": false,
	"renderIn3D": false,
	"showLegend": null,
	"legendPosition": null,
	"legendColumnCount": null,
	"startTime": null,
	"endTime": null,
	"minutesBeforeAnchorTime": 15,
	"isGlobal": true,
	"propertiesMap": null,
	"dataSeriesTemplates": null,
	"imageURL": "https://docs.aws.amazon.com/pt_br/solutions/latest/smart-product-solution/images/smart-product-solution-architecture.png"
}

var healthListWidget = {
	"widgetType": "HealthListWidget",
	"title": null,
	"height": 39,
	"width": 30,
	"minHeight": 0,
	"minWidth": 0,
	"x": 349,
	"y": 43,
	"label": null,
	"description": null,
	"drillDownUrl": null,
	"useMetricBrowserAsDrillDown": false,
	"drillDownActionType": null,
	"backgroundColor": 16777215,
	"backgroundColors": null,
	"backgroundColorsStr": "16777215,16777215",
	"color": 1646891,
	"fontSize": 12,
	"useAutomaticFontSize": false,
	"borderEnabled": false,
	"borderThickness": 0,
	"borderColor": 14408667,
	"backgroundAlpha": 0,
	"showValues": false,
	"formatNumber": null,
	"numDecimals": 0,
	"removeZeros": null,
	"compactMode": false,
	"showTimeRange": false,
	"renderIn3D": false,
	"showLegend": null,
	"legendPosition": null,
	"legendColumnCount": null,
	"startTime": null,
	"endTime": null,
	"minutesBeforeAnchorTime": 15,
	"isGlobal": true,
	"propertiesMap": null,
	"dataSeriesTemplates": null,
	"applicationReference": null,
	"entityReferences": [],
	"entityType": "APPLICATION",
	"entitySelectionType": "ALL",
	"iconSize": 18,
	"iconPosition": "LEFT",
	"showSearchBox": false,
	"showList": false,
	"showListHeader": false,
	"showBarPie": false,
	"showPie": true,
	"innerRadius": 0,
	"aggregationType": "MOST_SEVERE"
}

var textWidget = {
	"widgetType": "TextWidget",
	"title": null,
	"height": 23,
	"width": 80,
	"minHeight": 0,
	"minWidth": 0,
	"x": 684,
	"y": 239,
	"label": null,
	"description": null,
	"drillDownUrl": "",
	"useMetricBrowserAsDrillDown": false,
	"drillDownActionType": null,
	"backgroundColor": 16777215,
	"backgroundColors": null,
	"backgroundColorsStr": "16777215,16777215",
	"color": 1646891,
	"fontSize": 12,
	"useAutomaticFontSize": false,
	"borderEnabled": false,
	"borderThickness": 0,
	"borderColor": 14408667,
	"backgroundAlpha": 0,
	"showValues": false,
	"formatNumber": null,
	"numDecimals": 0,
	"removeZeros": null,
	"compactMode": false,
	"showTimeRange": false,
	"renderIn3D": false,
	"showLegend": null,
	"legendPosition": null,
	"legendColumnCount": null,
	"startTime": null,
	"endTime": null,
	"minutesBeforeAnchorTime": 15,
	"isGlobal": true,
	"propertiesMap": null,
	"dataSeriesTemplates": null,
	"text": "label test",
	"textAlign": "CENTER",
	"margin": 4
}

var t = {...template}

var svg = d3.select('#d3').append('svg')
	.attr('width', width)
	.attr('height',height);

var g = svg.append('g')
					.attr('transform', 'translate(20, 30)')

var g1 = svg.append('g')
					.attr('transform', 'translate(180, 30)')

// svg.append('image')
// 	.style('background', 'transparent')
// 	.attr('width', '100')
// 	.attr('xlink:href', imgs.coingif)


let grid = {
	maxcol: 8,
	box: {
		bgColor: 'lightgrey',
		width: 80,
		height: 40,
		margin: 5,
		fontSize: 12,
		rect: {
			paddingLeft: 30,
		},
		text: {
			paddingLeft: 35,
		},
	},
	gutter: 10,
}

let ejor = Object.keys(jornadas)

var jornadaHeightStart = {}

g.selectAll('text')
	.data(ejor)
	.enter()
	.append('text')
		.attr('y', (d,i) => {
			if (i == 0) return grid.gutter
			let ret = 0
			let y = 0
			while (y < i){
				ret += grid.gutter
				let size = jornadas[ejor[y]].length
				let rowsize = Math.ceil(size / grid.maxcol)
				ret += rowsize * grid.box.height + rowsize*grid.box.margin
				console.log(d, y, size, size/grid.maxcol, rowsize)
				y+=1
			}
			jornadaHeightStart[d] = ret
			return jornadaHeightStart[d] + grid.gutter*2
		})
		.text(d => d)

let g1height = jornadaHeightStart[ejor[ejor.length-1]]
size = jornadas[ejor[ejor.length-1]].length
let rowsize = Math.ceil(size / grid.maxcol)
g1height += rowsize * grid.box.height + rowsize*grid.box.margin
g1height += 40

// g1.append('path')
// 	.attr('stroke-width', 1)
// 	.attr('stroke', 'red')
// 	.attr('d', `M0,${g1height} L1600,${g1height}`)

// g1.selectAll('path.hr')
// 		.data(Object.keys(jornadaHeightStart))
// 		.enter()
// 		.append('path')
// 			.attr('stroke-width', 1)
// 			.attr('stroke', 'red')
// 			.attr('d', d => {
// 				let y = jornadaHeightStart[d] || 0
// 				y -= 2
// 				return `M0,${y} L1600,${y}`
// 			})

g1.selectAll('g')
		.data(ejor)
		.enter()
		.append('g')
			.style('outline', '1px solid black')
			.attr('transform', d => {
				return `translate(5, ${jornadaHeightStart[d] || 0})`
			})
			.each(function(d){
				let obj = d3.select(this)	
				let jornadasiglas = jornadas[d].map(d => d.sigla)
				console.log(jornadasiglas)
				obj.selectAll('g')
					.data(jornadasiglas)
					.enter()
					.append('g')
						.attr('transform', (d,i) => {
							let colid = i%grid.maxcol
							let rowid = Math.floor(i/grid.maxcol)
							let x = colid * grid.box.width + grid.box.margin*colid
							let y = rowid * grid.box.height + rowid * grid.box.margin
							return `translate(${x}, ${y})`
						})
						.each(function(d) {
							let obj = d3.select(this)
							obj
								.append('rect')
								.attr('class', 'box')
								.attr('width', grid.box.width)
								.attr('height', grid.box.height)
								.attr('fill', grid.box.bgColor)
							obj
								.append('circle')
									.attr('r', 10)
									.attr('cx', 20)
									.attr('cy', 20)
									.attr('fill', 'red')
							obj.append('text')
								.style('font-size', grid.box.fontSize+'px')
								.attr('x', grid.box.text.paddingLeft)
								.attr('y', 25)
								.text(d)
						})
			})

// var chart = svg.append('g').attr('transform','translate('+[width/2,height/2]+')');

// var data = d3.range(150).map( function(d) { return {r: Math.random(), angle: Math.random(), size: Math.random() }; });

// chart.selectAll('cirle')
// 	.data(data).enter()
// 	.append('circle')
// 	.attr('class','blendCircle')
// 	.attr({
// 		cx: x,
// 		cy: y,
// 		r: function(d) { return size(d.size); },
// 		fill: function(d,i) { return color(i); }
// 	});

const renderRect = (obj, x, y, w, h, opt = {}) => {
	x = x || 0
	y = y || 0
	w = w || 500
	h = h || 90
	let rx = opt.rx || 15
	let ry = opt.ry || 15
	let bgOuter = opt.bgOuter || 'crimson'
	let bgInner = opt.bgInner || 'white'
	obj.append('rect')
		.attr('rx', rx)
		.attr('ry', ry)
		.attr('x', x)
		.attr('y', y)
		.attr('width', w || 500)
		.attr('height', h || 90)
		.attr('fill', bgOuter)

	obj.append('rect')
		.attr('x', x + 5)
		.attr('y', y + 25)
		.attr('width', w - 10)
		.attr('height', h - 30)
		.attr('fill', bgInner)
}

// renderRect(svg, 5, 5, 500, 120, {rx: 2, ry: 2})

const g2 = svg.append('g')
							.style('outline', '1px solid black')
							.attr('transform', `translate(0, ${g1height})`)

// g2.append('g')
// 	.attr('class', 'renderRect')
//   .call(renderRect, 5, 5, 300, 120, {rx: 3, ry: 3})
  
//   const geometry = justifiedLayout([0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1], {
//     containerWidth: width,
//     targetRowHeight: 100,
//   })

//   console.log(geometry)

//   const cheight = geometry.containerHeight

//   g2.selectAll('g.renderRect')
//     .data(geometry.boxes)
//     .enter()
//     .append('g')
//       .attr('class', 'renderRect')
//       .attr('transform', d => {
//         return `translate(${d.left}, ${d.top})`
//       }) 
//       .each(function(d){
//         let obj = d3.select(this)
//         renderRect(obj, 5, 5, d.width, d.height, {rx: 3, ry: 3})
//         obj.selectAll('circle')
//           .data([1,2,3])
//           .enter()
//           .append('circle')
//             .attr('r', 25)
//             .attr('fill', 'steelblue')
//             .attr('cx', (d2,i) => d.width/4*(i+1) + 5)
//             .attr('cy', 80)
//       })


const renderDot = (save) => {

}

const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
  }

d3.select('#renderJSON').on('click', function(){
	// svg.selectAll('circle')
	// 	.style('opacity', 0)
	// svg.selectAll('text')
    // 	.style('opacity', 0)
    const body = d3.select('body')
	let t = JSON.parse(JSON.stringify(template))
    t.height = document.body.scrollHeight

	renderDot(dot => {
		t.widgetTemplates.push({
			...imageWidget,
			x: 100,
			y: 100,
			// fontSize: grid.box.fontSize,
			width: 100,
			height: 100,
			imageURL: dot,
			// backgroundColor: 16776166, // gold
			// backgroundColor: 13882323, // lightgrey
			backgroundAlpha: 0, 
			// textAlign: "LEFT",
		})
    })
    
    body.selectAll('.vue-grid-item')
        .each(function(){
            let obj = d3.select(this)
            const bcr = obj.node().getBoundingClientRect()
            let svgtemp = d3.select('body')
                            .append('svg')
                            // .attr('style', 'position:absolute;top:100px;')
                            .attr('width', bcr.width+20)
                            .attr('height', bcr.height+20)
            renderRect(svgtemp, 0, 0, bcr.width, bcr.height, {rx:5,ry:5,title: obj.text()})
            console.log('bcr', obj.text(), bcr,
                bcr.x,
                bcr.y,
                bcr.width,
                bcr.height,
                )
            var svgString = getSVGString(svgtemp.node());
            console.log(svgString)
            svgtemp.remove()
            t.widgetTemplates.push({
                ...imageWidget,
                imageURL: 'data:image/svg+xml;base64,'+btoa(svgString),
                x: bcr.x-5,
                y: bcr.y-5,
                width: bcr.width+10,
                height: bcr.height+10,
            })
        })

	svg.selectAll('g.renderRect').each(function(){
		let obj = d3.select(this)
		const bcr = obj.node().getBoundingClientRect()
		let svgtemp = d3.select('body')
											.append('svg')
											// .attr('style', 'position:absolute;top:100px;')
											.attr('width', bcr.width+20)
											.attr('height', bcr.height+20)
											.html(obj.html())
		console.log('bcr', obj.text(), bcr)
		var svgString = getSVGString(svgtemp.node());
		t.widgetTemplates.push({
			...imageWidget,
			imageURL: 'data:image/svg+xml;base64,'+btoa(svgString),
			x: bcr.x-5,
			y: bcr.y-5,
			width: bcr.width+10,
			height: bcr.height+10,
		})
		// svgString2ImageB64( svgString, bcr.width, bcr.height, 'png', b64 => {
		// 	t.widgetTemplates.push({
		// 		...imageWidget,
		// 		imageURL: b64,
		// 		x: bcr.x,
		// 		y: bcr.y,
		// 		width: bcr.width,
		// 		height: bcr.height,
		// 	})
		// } ); // passes Blob and filesize String to the callback

    })

	body.selectAll('img').each(function(){
		let obj = d3.select(this)
		const bcr = obj.node().getBoundingClientRect()
        console.log('bcr', obj.text(), bcr)
		// console.log('bbox', obj.text(), bbox)
		t.widgetTemplates.push({
			...imageWidget,
			x: bcr.x,
			y: bcr.y+10,
			// fontSize: grid.box.fontSize,
			width: bcr.width-15,
			height: bcr.height-15,
			imageURL: obj.attr('src'),
			// backgroundColor: 16776166, // gold
			// backgroundColor: 13882323, // lightgrey
			backgroundAlpha: 0, 
			// textAlign: "LEFT",
		})
	})

	svg.selectAll('image').each(function(){
		let obj = d3.select(this)
		const bcr = obj.node().getBoundingClientRect()
        console.log('bcr', obj.text(), bcr)
		// console.log('bbox', obj.text(), bbox)
		t.widgetTemplates.push({
			...imageWidget,
			x: bcr.x,
			y: bcr.y,
			// fontSize: grid.box.fontSize,
			width: bcr.width,
			height: bcr.height,
			imageURL: obj.attr('xlink:href'),
			// backgroundColor: 16776166, // gold
			// backgroundColor: 13882323, // lightgrey
			backgroundAlpha: 0, 
			// textAlign: "LEFT",
		})
	})

	svg.selectAll('rect.box').each(function(){
		let obj = d3.select(this)
		const bcr = obj.node().getBoundingClientRect()
		console.log('bcr', obj.text(), bcr)
		// console.log('bbox', obj.text(), bbox)
		t.widgetTemplates.push({
			...textWidget,
			x: bcr.x,
			y: bcr.y,
			text: '',
			// fontSize: grid.box.fontSize,
			width: bcr.width,
			height: bcr.height,
			// backgroundColor: 16776166, // gold
			backgroundColor: 13882323, // lightgrey
			backgroundAlpha: 1, 
			// textAlign: "LEFT",
		})
	})

	svg.selectAll('text').each(function(){
		let obj = d3.select(this)
		const bcr = obj.node().getBoundingClientRect()
		const bbox = obj.node().getBBox()
		console.log('bcr', obj.text(), bcr)
		console.log('bbox', obj.text(), bbox)
		let width = obj.text().includes('Confirmação') ? bcr.width*2 : 72
		let height = obj.text().includes('Confirmação') ? bcr.height*2 : 22
		t.widgetTemplates.push({
			...textWidget,
			x: bcr.x,
			y: bcr.y,
			text: obj.text(),
			fontSize: grid.box.fontSize,
			width,
			height,
			textAlign: "LEFT",
		})
	})

	svg.selectAll('circle').each(function(){
		let obj = d3.select(this)
		const bcr = obj.node().getBoundingClientRect()
		console.log('bcr', obj.text(), bcr)
		t.widgetTemplates.push({
			...healthListWidget,
			x: bcr.x,
			y: bcr.y,
			width: bcr.width,
			height: bcr.height,
		})
	})

    
    // saveAsJSON(t)
    console.log('template', t)
    const loop = (t, idx=0) => {
        if (t.widgetTemplates.length == idx){
            saveAsJSON(t)
        }else{
            console.log(idx, t.widgetTemplates[idx].imageURL)
            if (t.widgetTemplates[idx].imageURL &&
                t.widgetTemplates[idx].imageURL.includes('http')){
                getBase64FromUrl(t.widgetTemplates[idx].imageURL).then(b => {
                    console.log('base64', b)
                    t.widgetTemplates[idx].imageURL = b
                    loop(t, idx+1)
                })
            }else{
                loop(t, idx+1)
            }
        }
    }
    loop(t)
	if (0){
		var svgString = getSVGString(svg.node());
		svgString2ImageB64( svgString, width, height, 'png', save ); // passes Blob and filesize String to the callback
		function save(b64){
			t.widgetTemplates = [
				{
					...imageWidget,
					imageURL: b64,
					x: 0,
					y: 30,
				},
				...t.widgetTemplates,
			]
			saveAsJSON(t)
		}
	}
})

// https://stackoverflow.com/questions/16329293/save-json-string-to-client-pc-using-html5-api
function saveAsJSON(data, name=Date.now()+'.json') {
  const a = document.createElement('a')
  a.download = name
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 4)], {type: 'application/json'}))
  a.click()
}

// Set-up the export button
d3.select('#saveButton').on('click', function(){
	svg.selectAll('circle')
		.style('opacity', 0)
	svg.selectAll('text')
		.style('opacity', 0)
	var svgString = getSVGString(svg.node());
	svgString2Image( svgString, 2*width, 2*height, 'png', save ); // passes Blob and filesize String to the callback

	function save( dataBlob, filesize ){
		saveAs( dataBlob, 'D3 vis exported to PNG.png' ); // FileSaver.js function
	}
});

// Below are the functions that handle actual exporting:
// getSVGString ( svgNode ) and svgString2Image( svgString, width, height, format, callback )
function getSVGString( svgNode ) {
	svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
	var cssStyleText = getCSSStyles( svgNode );
	appendCSS( cssStyleText, svgNode );

	var serializer = new XMLSerializer();
	var svgString = serializer.serializeToString(svgNode);
	svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

	return svgString;

	function getCSSStyles( parentElement ) {
		var selectorTextArr = [];

		// Add Parent element Id and Classes to the list
		selectorTextArr.push( '#'+parentElement.id );
		for (var c = 0; c < parentElement.classList.length; c++)
				if ( !contains('.'+parentElement.classList[c], selectorTextArr) )
					selectorTextArr.push( '.'+parentElement.classList[c] );

		// Add Children element Ids and Classes to the list
		var nodes = parentElement.getElementsByTagName("*");
		for (var i = 0; i < nodes.length; i++) {
			var id = nodes[i].id;
			if ( !contains('#'+id, selectorTextArr) )
				selectorTextArr.push( '#'+id );

			var classes = nodes[i].classList;
			for (var c = 0; c < classes.length; c++)
				if ( !contains('.'+classes[c], selectorTextArr) )
					selectorTextArr.push( '.'+classes[c] );
		}

		// Extract CSS Rules
		var extractedCSSText = "";
		for (var i = 0; i < document.styleSheets.length; i++) {
			var s = document.styleSheets[i];
			
			try {
			    if(!s.cssRules) continue;
			} catch( e ) {
		    		if(e.name !== 'SecurityError') throw e; // for Firefox
		    		continue;
		    	}

			var cssRules = s.cssRules;
			for (var r = 0; r < cssRules.length; r++) {
				if ( contains( cssRules[r].selectorText, selectorTextArr ) )
					extractedCSSText += cssRules[r].cssText;
			}
		}
		

		return extractedCSSText;

		function contains(str,arr) {
			return arr.indexOf( str ) === -1 ? false : true;
		}

	}

	function appendCSS( cssText, element ) {
		var styleElement = document.createElement("style");
		styleElement.setAttribute("type","text/css"); 
		styleElement.innerHTML = cssText;
		var refNode = element.hasChildNodes() ? element.children[0] : null;
		element.insertBefore( styleElement, refNode );
	}
}

function svgString2ImageB64( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);

		callback(canvas.toDataURL('image/png'))
		
	};

	image.src = imgsrc;
}

function svgString2Image( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);

		canvas.toBlob( function(blob) {
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			if ( callback ) callback( blob, filesize );
		});

		
	};

	image.src = imgsrc;
}

