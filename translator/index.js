const translate = require('google-translate-api');
const letterHelper = require('./utils/letterHelper');
const fs = require('fs');

const batchSize = 50;
const delimiter = ' # ';
const fileName = 'verbs';
const dataLocationFolder = '<data_location_here>';
const inputFilePath = dataLocationFolder + fileName + '.txt';

fs.readFile(inputFilePath, 'utf8', function (err, data) {
    if (err) throw err;
    let allWords = data.split('\r\n');
    let batchCount = allWords.length / batchSize + 1;

    for(let i = 0; i < batchCount; i++) {
        let batchWords = allWords.slice(i * batchSize, (i + 1) * batchSize);
        let textToTranslate = batchWords.join(delimiter);
        
        translate(textToTranslate, {from: 'en', to: 'sr'}).then(result => {
            var regex = new RegExp(delimiter, 'g');

            let cyrillicLines = result.text.replace(regex, '\r\n');
            let latinicLines = letterHelper.toLatin(cyrillicLines);
            
            fs.writeFile(dataLocationFolder + fileName + '/' + fileName + i + '.txt', latinicLines, function(err) {
                if(err) throw err;
            
                console.log('Batch ' + i + ' saved!');
            });
        }).catch(err => console.error(err));
    }
});