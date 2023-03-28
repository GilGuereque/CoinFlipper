function flipCoin(){
    let coin = Math.floor(Math.random() *2);
    if (coin === 0){
        alert("Heads!")
        console.log('Heads!');
    } else {
        alert("Tails!")
        console.log('Tails!');
    }
};