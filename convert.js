var fs = require('fs')
    , gm = require('gm');

fs.readdir('/home/gabriel/desen/images/imgs', function (err, items) {

    for (var i = 0; i < items.length; i++) {
        gm('/home/gabriel/desen/images/imgs/' + items[i])
            .noProfile()
            .write('/home/gabriel/desen/images/tmp/' + items[i], function (err) {
                if (!err) console.log('done');
            });
    }
});
