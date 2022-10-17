function rockPaperScissors(user, comp) {
    if(user === "rock" && comp === "scissors")
        window.alert("User Wins !");
    else if(comp === "paper" && user === "rock")
        window.alert("Computer Wins !");
    else if(comp === "scissors" && user === "paper")
        window.alert("Computer Wins !");
    else if(user === "scissors" && comp === "paper")
        window.alert("User Wins !");
    else if(user === "paper" && comp === "rock")
        window.alert("User Wins !");
    else if(comp === "rock" && user === "scissors")
        window.alert("Computer Wins !");
    else if(comp === user)
        window.alert("It\'s a Tie");
}

function main() {
    
    var again;
    do {
        while(true) {
            var user = parseInt(window.prompt("Enter your choice : \n1: Rock\n2: Paper\n3: Scissors"));
            if(user == 1) {
                user = "rock";
                break;
            }
            else if(user == 2) {
                user = "paper";
                break;
            }
            else if(user == 3) {
                user = "scissors";
                break;
            }
            else {
                window.alert("Kindly enter valid choice !");
                continue;
            }
        }
        
        var comp = Math.round(Math.random() * 10);
        if(comp < 3)
            comp = "rock";
        else if(comp >= 3 && comp < 6)
            comp = "paper";
        else if(comp >= 6 && comp <= 10)
            comp = "scissors";
        rockPaperScissors(user, comp);
        again = window.prompt("Do you want play again ? y/n");  
    }while(again != "n");
}

main()
