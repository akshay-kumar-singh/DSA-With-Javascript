function voteEligibility(age){
    if (age <= 0){
        console.log("invalid input");
    } else if (age < 18) {
        console.log("Not Eligible");
    } else {
        console.log("Elogible for vote");
    }
}

voteEligibility(20);