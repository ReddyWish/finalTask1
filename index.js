function luckyTicket() {
    let ticketsUnderCondition = []


    for (let i = 1016; i <= 1937; i++) {
        const firstCondition = (i % 3 === 0)
        const secondCondition = (i % 7 === 0)
        const thirdCondition = (i % 5 !== 0)
        const fourthCondition = (i % 2 !== 0)
        if (firstCondition && secondCondition && thirdCondition && fourthCondition) {
            ticketsUnderCondition.push(i)
        }

    }

    return Math.max(...ticketsUnderCondition)
}


console.log(luckyTicket())