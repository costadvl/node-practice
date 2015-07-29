var fs = require('fs');

fs.readFile(__filename, {'encoding': 'utf-8'} ,function (err,data) {
    if(err){
        console.error(err.message); //nuemro de tipo de error -- listado github LibUV
    }else{
        console.log(data.toString());

    }
});

fs.writeFile('file.tmp', 'data', function (err) {
    if (err) throw err;
    fs.rename('file.tmp', 'new.tmp', function (err) {
        if(err) throw err;

        fs.unlink('new.tmp', function (err) {
            if(err) throw err;
        });
    });
});
