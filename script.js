var beers = [];
function addBeer(name, category,berrat) {
    let beer = { beerName: name, beerCategory: category,berrat: berrat};
    beers.push(beer);
}
$('button').click(function () {
    let name = $('.beer-input').val();
    let category = $('.category-input').val();
    let berrat =  $('.rating').val();
    addBeer(name, category,berrat);
    renderBeers();
})
function renderBeers() {
    $('.beers-list').find('li').remove();
    for (let i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + "Beer Name:  " +beers[i].beerName + "   from category:  " +beers[i].beerCategory + '</li>' + "BeerRating: " +beers[i].berrat);
    }
}