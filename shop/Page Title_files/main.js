// $( ".card" ).click(function() {
//     // $( ".container" ).toggleClass( "container-org" );
//     console.log('Сработало');
// });

// $( ".card" ).click(function() {
//     alert( "Handler for .click() called." );
//   });

$( '.card' ).on('click', function(event) {
    // let check = $(".container-org");
    // if (check != 0) {
    //     console.log(check);
    //     $(check).toggleClass( "container" );
    //     $(".card-org").toggleClass("card");
    // };
    let ids = '#'+this.id;
    console.log(ids);
    $( ".container" ).toggleClass( "container-org" );
    $( '#'+this.id ).scrollTop( 300 );
    $('#'+this.id).toggleClass( "card-org");

    // console.log(event.target.id);
});

// function newFunction() {
//     return 'click';
// }

// $('.card').click(function(){
//     console.log('Goooo');
// });