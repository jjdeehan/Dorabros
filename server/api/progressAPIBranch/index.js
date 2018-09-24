const router = require('express').Router();
const request = require('request')
const fs = require('fs')

/*router.get('/', (req, res, next) => {
  console.log('hi api/sample route!');
})*/

router.get('/', (req, res, next) => {

	request.get('https://api.virginmoneygiving.com/fundraisers/v1/account/12558fe6-54e4-4acd-9b4b-348b7ba9c160/pages/2.json?api_key=nf5v8pwu496fzpey27tzc29s',(err, response, body) => {
		if(body){
			const obj = JSON.parse(body)
			const raised = obj.pageDetails[0].donationTotalGross
			const target = obj.pageDetails[0].targetAmount
			const value = JSON.stringify([raised,target])
			res.send(value)
			//fs.writeFile(__dirname + '/../../../client/src/utils/progressValue.txt', value )
		} else {
			//res.send(fs.readFile(__dirname+'/../../../client/src/utils/progressValue.txt'))
			res.send(JSON.stringify([50,50000]))
		}

	})
		

		

  //res.sendStatus(200);

  console.log('made it to the back end');
});

router.use('/', (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})


module.exports = router;
