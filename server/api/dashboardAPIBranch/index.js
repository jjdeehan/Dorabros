const router = require('express').Router();
const Promise = require('bluebird')
const XLSX = require('XLSX')
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const tradingSpread = (fileName, sheetNumber, id_tag) => {
	const results = []
	const columns = []
	return new Promise((resolve, reject) => {		
		const workbook = XLSX.readFile(fileName)
		const sheet = workbook.Sheets[sheetNumber]
		let i = 0
		while(sheet[alphabet[i] + '1']){
			columns.push(sheet[alphabet[i] + '1'].v)
			i++;
		}
		let g = 2;
		while(sheet['A' + g]){
			const holder = {}
			for(let h = 0; h < columns.length+1; h++){
				if (sheet[alphabet[h]+g.toString()]){
					holder[columns[h]] = sheet[alphabet[h]+g.toString()].v;
				}
			}
			holder.id = id_tag + g
			results.push(holder);
			g++;
		}
		resolve(results);
		
	})
	.catch(console.log)
}

router.get('/:sheet', (req, res, next) => {
	let sheetNumber = 1
	switch(req.params.sheet){
		case 'tradeSpread':
			sheetNumber = '33'
			break;
		case 'tradingVolumesByDate':
			sheetNumber = '29'
			break;
		case 'tradeDayOfTheWeek':
			sheetNumber = '32'
			break;
		case 'executionMakersByFreq':
			sheetNumber = '20'
			break;
		case 'instrumentsTradedByFreq':
			sheetNumber = '25'
			break;
		case 'instrumentClassificationAnalysis':
			sheetNumber = '28'
			break;
		case 'underlyingInsttrumentsTradedByFreq':
			sheetNumber = '26'
		default:
			res.send([])
			return
	}
	const fileName = 'Z:\\TEMP\\All\\__DEVELOPMENT AREA\\_JAMES\\MIFID II MI\\Cowen_201801\\5309_MI_Test Period 2018-01-01 to 2018-01-31_FINAL_DASHBOARD.xlsx'
	tradingSpread(fileName, sheetNumber, req.params.sheet)
	.then(results => {
		console.log(results[0])
		res.send(results)
	})
});



router.use('/', (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})


module.exports = router;
