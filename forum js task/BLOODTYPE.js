
// function for identifying each donor and receiver 
function bloodType(donor, receiver) {
    matchcase = "Blood match!"
    rejectcase = "Blood have to be rejected, unmatch!"
    if (donor == "A+" && (receiver == "A+" || "AB+")) {
        console.log(matchcase);
    } else if (donor === "A-" && (receiver == "A-" || "A+" || "AB-" || "AB+")) {
        console.log(matchcase);
    } else if (donor === "B+" && (receiver == "B+" || "AB+")) {
        console.log(matchcase);
    } else if (donor === "B-" && (receiver == "B-" || "B+" || "AB-" || "AB+")) {
        console.log(matchcase); 
    } else if (donor === "AB+" && (receiver == "AB+")) {
        console.log(matchcase);
    } else if (donor === "AB-" && (receiver == "AB+" || "AB-")) {
        console.log(matchcase);
    } else if (donor === "O+" && (receiver == "A+"||"O+"||"B+"||"AB+")) {
        console.log(matchcase);
    } else if (donor === "O-" && (receiver == "A+"||"O+"||"B+"||"AB+"||"A-"||"O-"||"B-"||"AB-")) {
        console.log(matchcase);
    } else {
        console.log(rejectcase);
    }
}

// driver for testing your code
bloodType("O+", "A+") // RESULT : TRUE
bloodType("A-", "B-") // RESULT : FALSE
bloodType("A-", "AB+") // RESULT : TRUE