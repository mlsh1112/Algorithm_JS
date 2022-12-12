// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
    var answer = [];
    let maxDate = 0;
    
    for(let i = 0; i< progresses.length ; i ++) {
        let date = Math.ceil((100 - progresses[i])/speeds[i]);
        if(maxDate >= date) answer[answer.length - 1] += 1;
        else {
            maxDate = date;
            answer.push(1)
        }
    }
    
    return answer;
}