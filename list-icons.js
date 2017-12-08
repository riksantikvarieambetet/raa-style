// Ett litet skript för att generera en json med dokumentation som är lite smidigare än selection-filen

const selection = require('./assets/icons/selection.json');
var fs = require('fs');

let iconSummary = selection.icons.map((icon) => {
    return icon.properties;
});

fs.writeFile("./build/icondata.json", JSON.stringify(iconSummary), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The icon documentation json was saved!");
}); 