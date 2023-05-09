// Initial variables
const cpuDeck = [];
const playerDeck = [];
const cpuCardTotal = document.querySelector('.cpu-cards-left');
const playerCardTotal = document.querySelector('.player-cards-left');
const cpuLeftValue = document.querySelector('.cpu-left-value');
const playerLeftValue = document.querySelector('.player-left-value');
const cpuCenterValue = document.querySelector('.cpu-center-value');
const playerCenterValue = document.querySelector('.player-center-value');
const cpuRightValue = document.querySelector('.cpu-right-value');
const playerRightValue = document.querySelector('.player-right-value');

// Makes a deck of cards and shuffles them
function makeDeck() {
    // Create deck array
    var deck = [];
    for (var i = 0; i < 52; i++) {
		deck[i] = i + 1;
    }

    // Make values only 1-13
    deck[13] = 1; deck[26] = 1; deck[39] = 1;
    deck[14] = 2; deck[27] = 2; deck[40] = 2;
    deck[15] = 3; deck[28] = 3; deck[41] = 3;
    deck[16] = 4; deck[29] = 4; deck[42] = 4;
    deck[17] = 5; deck[30] = 5; deck[43] = 5;
    deck[18] = 6; deck[31] = 6; deck[44] = 6;
    deck[19] = 7; deck[32] = 7; deck[45] = 7;
    deck[20] = 8; deck[33] = 8; deck[46] = 8;
    deck[21] = 9; deck[34] = 9; deck[47] = 9;
    deck[22] = 10; deck[35] = 10; deck[48] = 10;
    deck[23] = 11; deck[36] = 11; deck[49] = 11;
    deck[24] = 12; deck[37] = 12; deck[50] = 12;
    deck[25] = 13; deck[38] = 13; deck[51] = 13;

    // Randomize Deck
    var shuffledDeck = deck.sort((a, b) => 0.5 - Math.random());

    deal(shuffledDeck);
}

// Assign cards to each player
function deal(deck) {
    var i = 0;
    while (i != deck.length) {
        cpuDeck.push(deck[i]);
        i += 1;
        playerDeck.push(deck[i]);
        i += 1;
    }
}

// Draw cards to play
function draw(cpuDeck,playerDeck) {
    // Select card from each player
    cpuCard = cpuDeck[0];
    playerCard = playerDeck[0];

    compareCards(cpuCard,playerCard);
    cardFace();
    console.log(cpuDeck);
    console.log(playerDeck);
}

// Compare values of cards to determine winner
function compareCards(cpuCard,playerCard) {
    // CPU wins draw
    if (cpuCard > playerCard) {
        // Add both cards to CPU deck
        cpuDeck.push(cpuCard);
        cpuDeck.push(playerCard);

        // Move cards to back of hand
        cpuDeck.shift();
        playerDeck.shift();
    }
    else if (cpuCard < playerCard) {
        // Add both cards to player deck
        playerDeck.push(cpuCard);
        playerDeck.push(playerCard);

        // Move cards to back of hand
        cpuDeck.shift();
        playerDeck.shift();        
    }
    else if (cpuCard == playerCard) {
        var i = 3;
        // CPU wins war
        if (cpuDeck[i] > playerDeck[i]) {
            // Loop to 4th card
            for (var j = 0; j < (i + 1); j++) {
                cpuDeck.push(cpuDeck[j]);
                cpuDeck.push(playerDeck[j]);
                cpuDeck.shift();
                playerDeck.shift();
            }    
        }
        // Player wins war
        else if (cpuDeck[i] < playerDeck[i]) {
            // Loop to 4th card
            for (var j = 0; j < (i + 1); j++) {
                cpuDeck.push(cpuDeck[j]);
                cpuDeck.push(playerDeck[j]);
                cpuDeck.shift();
                playerDeck.shift();
            }    
        }
        // Double war
        else if (cpuDeck[i] == playerDeck[i]) {
            var x = 6;
            if (cpuDeck[x] > playerDeck[x]) {
                // Loop to 7th card
                for (var j = 0; j < (x + 1); j++) {
                    cpuDeck.push(cpuDeck[j]);
                    cpuDeck.push(playerDeck[j]);
                    cpuDeck.shift();
                    playerDeck.shift();
                }    
            }
            // Player wins war
            else if (cpuDeck[x] < playerDeck[x]) {
                // Loop to yth card
                for (var j = 0; j < (x + 1); j++) {
                    cpuDeck.push(cpuDeck[j]);
                    cpuDeck.push(playerDeck[j]);
                    cpuDeck.shift();
                    playerDeck.shift();
                }    
            }
        }
        else if (cpuDeck.length < (i + 1)) {
            alert('Player wins!');
        }
        else if (playerDeck.length < (i + 1)) {
            alert('CPU wins!');
        }
    }
    cardCounts();
    endGame();
}

// Set face values for cards
function cardFace() {
    // CPU card value
    if (cpuDeck[0] < 10) {
        cpuLeftValue.textContent = cpuDeck[0] + 1;
        cpuCenterValue.textContent = cpuDeck[0]+ 1;
        cpuRightValue.textContent = cpuDeck[0]+ 1;
    }
    else if (cpuDeck[0] == 10) {
        cpuLeftValue.textContent = 'J';
        cpuCenterValue.textContent = 'J';
        cpuRightValue.textContent = 'J';
    }
    else if (cpuDeck[0] == 11) {
        cpuLeftValue.textContent = 'Q';
        cpuCenterValue.textContent = 'Q';
        cpuRightValue.textContent = 'Q';
    }
    else if (cpuDeck[0] == 12) {
        cpuLeftValue.textContent = 'K';
        cpuCenterValue.textContent = 'K';
        cpuRightValue.textContent = 'K';
    }
    else if (cpuDeck[0] == 13) {
        cpuLeftValue.textContent = 'A';
        cpuCenterValue.textContent = 'A';
        cpuRightValue.textContent = 'A';
    }

    // Player card value
    if (playerDeck[0] < 10) {
        playerLeftValue.textContent = playerDeck[0] + 1;
        playerCenterValue.textContent = playerDeck[0] + 1;
        playerRightValue.textContent = playerDeck[0] + 1;
    }
    else if (playerDeck[0] == 10) {
        playerLeftValue.textContent = 'J';
        playerCenterValue.textContent = 'J';
        playerRightValue.textContent = 'J';
    }
    else if (playerDeck[0] == 11) {
        playerLeftValue.textContent = 'Q';
        playerCenterValue.textContent = 'Q';
        playerRightValue.textContent = 'Q';
    }
    else if (playerDeck[0] == 12) {
        playerLeftValue.textContent = 'K';
        playerCenterValue.textContent = 'K';
        playerRightValue.textContent = 'K';
    }
    else if (playerDeck[0] == 13) {
        playerLeftValue.textContent = 'A';
        playerCenterValue.textContent = 'A';
        playerRightValue.textContent = 'A';
    }
}

// Show amount of cards each player has
function cardCounts() {
    cpuCardTotal.textContent = 'Cards Left: ' + cpuDeck.length;
    playerCardTotal.textContent = 'Cards Left: ' + playerDeck.length;
}

// End the game when a player runs out of cards
function endGame() {
    if (cpuDeck.length == 0) {
        alert('Player wins!');
    }
    else if (playerDeck.length == 0) {
        alert('CPU wins!');
    }
}

// Initiate deck
makeDeck();

// Button to draw a card
const drawButton = document.querySelector('button.draw');
drawButton.addEventListener('click', function(event){
    draw(cpuDeck,playerDeck)
    });