const checker = require('license-checker');
const path = require('path');
const fs = require('fs');

checker.init(
  {
    start: path.resolve('.'),
  },
  function (err, packages) {
    if (err) {
      console.error(err);
    } else {
      let data = [];

      for (const [key, value] of Object.entries(packages)) {
        data.push({ [key]: value.licenses });
      }

      const pathToOutput = path.resolve(
        __dirname,
        'output',
        'licence-checker-output.json'
      );

      fs.writeFile(pathToOutput, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
  }
);
