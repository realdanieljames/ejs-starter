const router = require('express').Router();
const axios = require('axios');
//====================================================================================//
//====================================================================================//



router.get('/intro', (req, res) => {
    //   res.send('Now its time for the view');

    return res.render('main/intro', { myName: 'Daniel' });
});
//====================================================================================//
; //====================================================================================//

router.get('/p/:dog/:cat', (req, res) => {
    let car = req.query.search;
    let dog = req.params.dog;
    let cat = req.params.cat;
    return res.render('main/params', { myDog: dog, myCat: cat, myCar: car });
});
//====================================================================================//
//====================================================================================//


router.get('/loop', (req, res) => {
    let places = [
        { city: 'Stamford', state: 'CT' },
        { city: 'New York', state: 'NY' },
        { city: 'Danbury', state: 'CT' }
    ];
    return res.render('main/index', { myPlaces: places });
});
//====================================================================================//
//====================================================================================//



router.get('/about', (req, res) => {
    return res.render('main/about');
});
//====================================================================================//
//====================================================================================//


router.get('/url', (req, res) => {
    axios
        .get('https://www.anapioficeandfire.com/api/books?pageSize=10')
        .then((results) => {
            // console.log(Array.isArray(results.data));
            let myData = results.data;
            return res.render('main/url', { myData: myData });
        });
});
//====================================================================================//
//====================================================================================//


module.exports = router;