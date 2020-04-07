let sum="";
function check3() {
    for (let i = 1; i <= 5; i++){
        for (let j =0; j< 5 - i; j ++){
             sum+="&nbsp&nbsp";
        }
        for (let k = 1; k<=i; k ++){
            sum+="*";
        }
        sum+="<br>"
    }
    document.getElementById("result3").innerHTML=sum;
    sum="";
}
function check1() {
    for (let i=0;i<=5;i++){
        for (let j=0;j<5-i;j++){
            sum+="*"
        }
        sum+="<br>";
    }
    document.getElementById("result1").innerHTML=sum;
    sum="";
}
function check2() {
    for (let i=0;i<5;i++){
        for (let j=0;j<=i;j++){
            sum+="*";
        }
        sum+="<br>";
    }
    document.getElementById("result2").innerHTML=sum;
    sum="";
}
function check4() {
    let k="";
    let t="";
    let sum1="";
    for (let i=0;i<5;i++){
        for (let j=0;j<=i;j++){
            sum1+="&nbsp&nbsp"
        }for (let m=0;m<5-i;m++){
            k+="*";
        }
             t+=sum1+k+"<br>";
        k="";sum1="";
    }
    document.getElementById("result4").innerHTML=t;

}
function check05() {
    let sum2="";
    for (let i = 1; i <=6; i++){
        for (let j = 1; j<= 18; j++){
            if (i==1 || i == 6 || j == 1 || j ==18){
                sum2+="*"
            }
            else {
                sum2+="&nbsp&nbsp"
            }
        }
        sum2+="<br>";
    }
    document.getElementById("result5").innerHTML=sum2;
}