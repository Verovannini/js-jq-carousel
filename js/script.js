// Funzione della freccia di destra
// Creo un'entità jQuery della freccia destra
var rightArrow = $('.arrow.right');

rightArrow.click(function() {
    // Rimuovo la classe active quando faccio click sulla freccia
    var currentActive = $('.slider .active');
    currentActive.removeClass('active');

    // Se l'img ha classe last aggiungere la classe active all'img con class first
    if (currentActive.hasClass('last')) {
        $('img.first').addClass('active');
    } else {
        // Altrimenti aggiungere la classe active all'immagine sucessiva
        var nextImg = currentActive.next();
        nextImg.addClass('active');
    }  
});

// Funzione della freccia di sinistra
var leftArrow = $('.arrow.left');

leftArrow.click( function() {
    // Rimuovo la classe active quando faccio click sulla freccia
    var currentActive = $('.slider .active');
    currentActive.removeClass('active');

    // Se l'img ha classe first aggiungere la classe active all'img con classe last
    if ( currentActive.hasClass('first') ) {
        $('img.last').addClass('active');
    } else {
        // Altrimenti aggiungere la classe active all'img precedente
        var prevImg = currentActive.prev();
        prevImg.addClass('active');
    }
} );