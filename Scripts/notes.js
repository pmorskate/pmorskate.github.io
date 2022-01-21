// class Boek {
//     constructor(auteur, titel)
//     {
//         this.auteur = auteur;
//         this.titel = titel;
//     }
//     toString = function() { return `Auteur: ${auteur}, Titel: ${titel}`;};
// }
// let boekarray = new Array();
// let eenboekje = new Boek(`J.R.R. Tolkien`, 'The Fellowship of the Ring');
// let tweeboekje = new Boek(`Robert Jordan`, 'Crossroads of Twilight');
// let drieboekje = new Boek(`Patrick Rothfuss`, 'Doors of Stone');
// boekarray.push(eenboekje);
// boekarray.push(tweeboekje);
// boekarray.push(drieboekje);
// console.log(boekarray.forEach(boek => console.log(boek)));


// const sortering = {
//     titelAZ: function (boek1, boek2) { 
//         if (boek1.titel > boek2.titel) {
//             return 1;
//         } else if (boek1.titel < boek2.titel) {
//             return -1;
//         } else {
//             return 0;
//         }
//      },
//     titalZA: function(boek1, boek2) { 
//         if (boek1.titel > boek2.titel) {
//             return -1;
//         } else if (boek1.titel < boek2.titel) {
//             return 1;
//         } else {
//             return 0;
//         }
//      },
//     auteurAZ: function(){}
// };
// let sortarray = new Array(boekarray.sort(sortering.titelAZ));

// console.log(sortarray.forEach(boek => console.log(boek)));

// let blortarray = new Array(boekarray.sort(sortering.titelZA));

// console.log(blortarray.forEach(boek => console.log(boek)));

/*

fetch('https://api.spacexdata.com/v2/launches/').then(
            inp=>inp.json()
        ).then(
            function(data){
                vluchtBeheer.init(data);
                vluchtBeheer.export();
            }
        );

        const vluchtBeheer = (function() {
            let data = [];

            return {
                init: function(input) {
                    data = input;
                    this.toon();
                },
                voegToe: function(v) {
                    data.push(v)
                },
                toon: function() {
                    document.body.innerHTML += '<ul>';
                    for (let vlucht of data) {
                        document.body.innerHTML += `<li>${vlucht.mission_name} (${vlucht.launch_year})</li>`;
                    }
                    document.body.innerHTML += '</ul>';
                },
                export: function() {
                    window.localStorage.setItem('vluchten', JSON.stringify(data));
                }



*/



// //Voorbeeld constante functie
// const verhoog = (function verhoog() {
//     let waarde = 0;

//     return function() {
//         waarde++;
//         console.log(waarde);
//     }
// })();
// //einde voorbeeld