const router = require('express').Router();
const Promise = require('bluebird')
const fs = require('fs')
var csv = require('csv-parser')


const dummy = (fileName) => {
	return new Promise((resolve, reject) => {

	})
}

const retrieve = (fileName) => {
	let results = []
	return new Promise((resolve, reject) => {		
		fs.createReadStream('Z:\\TEMP\\All\\__DEVELOPMENT AREA\\_JAMES\\MIFID II MI\\Cowen_201801\\'.concat(fileName))
			  .pipe(csv())
			  .on('data', function (data) {
			  	results.push(data)
				})
			  .on('end', () => resolve(results))
	})
	.catch(console.log)
}

const pullSample = (fileName, errorCode) => {
	const results = []
	const columns = []
	return new Promise((resolve, reject) => {		
	fs.createReadStream('Z:\\TEMP\\All\\__DEVELOPMENT AREA\\_JAMES\\MIFID II MI\\Cowen_201801\\'.concat(fileName))
		  .pipe(csv())
		  .on('headers', (headers) => {
		  	headers.map(el => {
		  		if(!el.includes('_')){
			  		columns.push(el)
		  		}
		  })
		  })
		  .on('data', (data) => {
			  	if (results.length < 10 && data.INCIDENT_CODE.includes(errorCode)){
			  		results.push(data)
			  	} else if (results.length == 10){
					resolve({results, columns})
				}
			}
			)
		  .on('end', () => resolve({results, columns}))
	})
	.catch(console.log)
}

router.get('/home', (req, res, next) => {
  res.send(retrieve())  
  console.log('made it to the front end records api');
});

router.get('/retrieve', (req, res, next) => {
  	const fileName = '5309_5309_Test Population_FCA_2018-01-01 to 2018-01-31_Errors Summary.csv';
	retrieve(fileName)
	.then(results => {
		res.send(results)
	})
	.catch(console.log)
});

router.get('/retrieve/:errorCode', (req, res, next) => {
	const fileName = '5309_5309_Test Population_FCA_2018-01-01 to 2018-01-31_Consolidated Errors Data.csv';
	pullSample(fileName, req.params.errorCode)
	.then(results => res.send(results))

});

router.get('/retriever', (req, res, next) => {

res.send('HELLO')
});

router.use('/', (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})


module.exports = router;
