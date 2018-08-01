var csv = require('csv-parser')
var fs = require('fs')
 
fs.createReadStream('Z:\\TEMP\\All\\__DEVELOPMENT AREA\\_JAMES\\MIFID II MI\\Cowen_201801\\5309_5309_Test Population_FCA_2018-01-01 to 2018-01-31_Errors Summary.csv')
  .pipe(csv())
  .on('data', function (data) {
    console.log(data)
  })