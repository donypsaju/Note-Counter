function countFunction(){
const totalTxt = document.getElementById("total");
const notes2k = document.getElementById("2000notes").value;
const notes500 = document.getElementById("500notes").value;
const notes200 = document.getElementById("200notes").value;
const notes100 = document.getElementById("100notes").value;
const notes50 = document.getElementById("50notes").value;
const notes20 = document.getElementById("20notes").value;
const notes10 = document.getElementById("10notes").value;
const notes5 = document.getElementById("5notes").value;
const notes2 = document.getElementById("2notes").value;
const notes1 = document.getElementById("1notes").value;
const amountPay = document.getElementById("amountPayable").value;
const balTxt = document.getElementById("balance");
const res = document.getElementById("reset");


    var count2k = notes2k*2000; 
    var count500 = notes500*500;
    var count200 = notes200*200; 
    var count100 = notes100*100; 
    var count50 = notes50*50;
    var count20 = notes20*20; 
    var count10 = notes10*10; 
    var count5 = notes5*5; 
    var count2 = notes2*2; 
    var count1 = notes1*1; 

    var total = count2k + count500 + count200 + count100 + count50 + count20 + count10 + count5 + count2 + count1;

    totalTxt.innerText = "Total : " + + total;

    var balance = total - amountPay;
    balTxt.innerHTML = "Balance : " + + balance;
    if(balance<0){
        balTxt.style.display ="none";
    };
    
};