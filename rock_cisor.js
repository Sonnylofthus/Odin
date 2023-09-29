const CARD=["ROCK", "PAPER", "SCISSORS"]
function getComputerChoice(){
    seed=Math.floor(Math.random()*3)
    return CARD[seed]
}
function playRound(playerSelection, conputerSelection){
    player=playerSelection.toUpperCase()
    com=conputerSelection.toUpperCase()
    win= `You win ${player} beat ${com}`
    lose= `You lose ${com} beat ${player}`
    draw= `draw`
    switch (player){
        case "ROCK":
            if (com==CARD[2]){
                return win
            }
            if (com==CARD[1]){
                return lose
            }
            return draw
        case "PAPER":
            if (com==CARD[0]){
                return win
            }
            if (com==CARD[2]){
                return lose
            }
            return draw
        case CARD[2]:
            if (com==CARD[1]){
                return win
            }
            if (com==CARD[0]){
                return lose
            }
            return draw
    }
}
function game(){
    result=0
    for (let i=0;i<5;i++){
        let player=prompt("input your play ")
            rs=playRound(player,getComputerChoice())
            console.log(rs)
            if (rs.toLowerCase().includes("win")){
                result ++
                continue
            }
            result--
    }
    let win = rs>0 ? "you" : "computer"
    alert(`winner is ${win}`)
}
game()