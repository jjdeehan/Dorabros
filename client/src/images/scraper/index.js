var request = require('request');
var cheerio = require('cheerio');
var Promise = require('promise');
var postcodes = [];
var count = 0;

const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const csvWriter = createCsvWriter({
    header: ['Centre', 'Full Address', 'Postcode'],
    path: '/Users/jamesdeehan/Desktop/file.csv'
});
 




function scrapeInformation(URL){
  request(URL, function(err, response, body){
  if (err) console.log(err);
    console.log('here')
    var $ = cheerio.load(body);
    const child = '.serviceCentresTitle';
    const parent = '.tierLeftCol';
    var web_object = $(child, parent);
    var addresses = []
    web_object.next().next()[0].children.forEach(
      function(element) {
        if (element.data != undefined){
        addresses.push(element.data);
      }
    });
    var splitURL = URL.split('/');
    var centre = splitURL[splitURL.length-1];
    var record = [];
    record.push(centre)
    record.push(addresses.join(', '))
    record.push(addresses[addresses.length-1])
    csvWriter.writeRecords([record]).then(() => {
      count +=1
      console.log(count)
    })
  })
}
function scrapeIndividualPages(URL){
  request(URL, function(err, response, body){
  if (err) console.log(err);
  console.log('here')
  var $ = cheerio.load(body);
  const child = '.centreList';
  const parent = '.tierLeftCol';
  var web_object = $(child, parent)
  var returned_object = web_object[0].children
  for(var t = 0; t < returned_object.length ; t++){
    if ('children' in returned_object[t]){
      scrapeInformation('http://www.pirtek.co.uk'.concat(returned_object[t].children[0].attribs.href))
      }
    }
  })
}

function scrapeItem (URL){
  request(URL, function(err, response, body){
    if (err) console.log(err);
    var $ = cheerio.load(body);
    const child = '.areaBox';
    const parent = '.pageContainer';
    var web_object = $(child, parent)
    console.log(web_object.length)
    for(let p = 0 ; p<web_object.length; p++){
            scrapeIndividualPages('http://www.pirtek.co.uk'.concat(web_object[p].children[1].children[0].attribs.href))
      }
  })
}

scrapeItem('http://www.pirtek.co.uk/service-centres');

setInterval(function(){
 for(var g = 0; g< postcodes.length; g++){
  console.log(postcodes[g])
 }
}, 10000)







