"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    jenres: [],
    private: true
};


function rememberMyFilms (){
    for (let i=0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов?",""),
              b = prompt("На сколько оцените его?","");
        
              if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
              personalMovieDB.movies [a] = b;
              }else{
                  alert ("ERROR");
                  i--;
              }
        }
}

rememberMyFilms ();

function detectPersonalLevel (){
    if (numberOfFilms <= 3){
        alert ("you do not like movies");
    }else if (numberOfFilms > 3 && numberOfFilms <= 6){
        alert ("you ordinary watcher");
    }else if (numberOfFilms > 6 ){
        alert ("you are movie fan");
    }else{
        alert ("ERROR");
    }
}

detectPersonalLevel ();

function writeYourGenres (){
    for (let i=0; i<3; i++){
        const a = prompt(`какой вашь любимый жанр? ${i+1}`,"fufu");
        
              if (a != null && a != '' && a.length < 50 ){
              personalMovieDB.jenres[i] = a;
              }else{
                  alert ("ERROR");
                  i--;
              }
        }
}

writeYourGenres ();

function showMyDB(hidden){
    if (!hidden){
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);
