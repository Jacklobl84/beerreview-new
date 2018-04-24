var beers = [];
function addBeer(name, category,berrat) {
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var berrat =  $('.rating').val();
    var beer = {
        beerName: name,
         beerCategory: category,
         berrat: berrat
        };
    beers.push(beer);
    renderBeers();
}


function renderBeers() {
    $('.beers-list').find('li').remove();
    for (var i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].beerName + beers[i].beerCategory + beers[i].berrat + '</li>');
    }
}


var switchSort = 0;

var sort = function(){
if (switchSort === 0){
    beers.sort(function (a,b) {return a.berrat - b.berrat})
    switchSort = 1;
    renderBeers();
}else if (switchSort === 1){
    beers.sort(function (a,b) {return b.berrat - a.berrat})
    switchSort= 0;
    renderBeers();
} 
}

$('.sort-beer').click(sort);
$('.post-beer').click(addBeer);

 