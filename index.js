// code your solution here
function superbowlWin(record){
    if (record.find(isWin)){
        return record.find(isWin).year;
    } return undefined;
}
function isWin(game){
    if (game.result == "W"){
        return game.year;
    }
}