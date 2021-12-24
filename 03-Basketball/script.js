
// let scoreJohn = (189 + 120 + 103) / 3;
// let scoreMike = (129 + 94 + 123) / 3;
let score1 = ["120", 120];
let score2 = [129 , 94 , 123];

score1[0]=parseInt( prompt("İlk skoru giriniz"));
score1[1]=parseInt(prompt("İlk skoru giriniz"));
score1[2]=parseInt(prompt("İlk skoru giriniz"));

function ortalamaHesapla(params) {
    let ortalama=0;
    for (let i=0; i<params.length; i++) {
        ortalama += params[i];
         
    } return Math.floor(ortalama/params.length)
}
console.log(ortalamaHesapla(score1));



function compare(team1, team2, score1, score2) {
    
    if (score1 > score2) {
        console.log(`${team1} team wins with ${score1} points`);
    } else if (score2 > score1) {
        console.log(`${team2} team wins with ${score2} points`);
    } else {
        console.log('There is a draw');
    }
}

compare("John","Mike",ortalamaHesapla(score1), ortalamaHesapla(score2));



// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }

// let scoreMary = (97 + 134 + 105) / 3;

// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }
