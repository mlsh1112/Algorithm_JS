// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
function solution(s){
    var answer = true;
    let stack = [];
    
    for(let i = 0; i< s.length ; i++) {
        if(s[i] === '('){
            stack.push(s[i]);
        } 
        else {
            if(stack.length === 0) return false;
            else stack.pop();
        }
    }
    
    if(stack.length > 0) return false;

    return answer;
}