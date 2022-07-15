const apple = 123;
if(apple <1){
    console.log('사과가 너무 적습니다.');
}
else if(apple>50 ){
    console.log('사과가 너무 많습니다!');
}else if(apple % 10){

    console.log('사과가 딱 나누어 떨어 집니다.');
}else{
    console.log('안 나우어 떨어집니다!');
}


//#Javascript boolean

//0 이외의 숫자는 모두 true 취급된다.
//0 은 false 다.
console.log(true && true);
console.log(true && 1);
console.log(true && 0);
console.log(0 && 123);

if(123){
    console.log('진실입니다.');
}else {
    console.log('거짓입니다.');
}
