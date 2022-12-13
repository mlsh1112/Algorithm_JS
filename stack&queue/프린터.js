function solution(priorities, location) {
    var answer = 0;
    let queue = [];
    let prioritiesMap = priorities.map((el, i) => ({i: i, el: el}));
    while (priorities.length > 0){
        let maxPriority = Math.max(...priorities);
        let firstPri = priorities.shift();
        let firstPriMap = prioritiesMap.shift();
        if(maxPriority === firstPri) {
            queue.push(firstPriMap.i);
        }
        else {
            prioritiesMap.push(firstPriMap)
            priorities.push(firstPri)
        }
    }
    return queue.indexOf(location) + 1;
}