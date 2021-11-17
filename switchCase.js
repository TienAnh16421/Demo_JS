// switch ... case 

// bronze, silver, gold, diamond
let memberCard = {
    tier: 'gold'
};

function getTotal(price, card) {
    let discount;
    switch (card.tier) {
        case 'bronze': 
            discount = 0.02;
            break;
        case 'silver': 
            discount = 0.05;
            break;
        case 'gold': 
            discount = 0.08;
            break;
        default: 
            discount = 0.1;
            break;
    }
    return price * (1 - discount);
}

let Total = getTotal(500000, memberCard);
console.log(Total);

///////////////////////////////////
//red , green, orang 
let trafficLight = 'green';

function signal(lightValue) {
    switch (lightValue) {
        case 'green': 
            console.log('Go');
            break;
        case 'orang': 
            console.log('Go');
            break;
        default:  
            console.log('Stop');
            break;
    }
}
signal(trafficLight);


