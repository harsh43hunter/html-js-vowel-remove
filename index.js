function findDay() {
    //type casting => converting string to number
    var num= Number(document.getElementById("day").value);

    switch(num) {
        case 0:
            document.getElementById("p1").innerHTML=`sunday`;
            break;
        case 1:
            document.getElementById("p1").innerHTML=`Monday`;
            break;
        case 2:
            document.getElementById("p1").innerHTML=`Tuesday`;
            break;
        case 3:
            document.getElementById("p1").innerHTML=`Wednesday`;
            break;
        case 4:
            document.getElementById("p1").innerHTML=`Thursday`;
            break;
        case 5:
            document.getElementById("p1").innerHTML=`Friday`;
            break;
        case 6:
            document.getElementById("p1").innerHTML=`Saturday`;
            break;
        default:
            document.getElementById("p1").innerHTML=`Invalid Input`
            break;
    
            
    }
}

function findGrade() {
    var marks=Number(document.getElemenetById("marks").value) ;

    switch (true) {
        case marks >= 75:
            document.getElementById("p2").innerHTML=`A Grade`;
            break;
        case marks >= 60:
            document.getElementById("p2").innerHTML=`B Grade`;
            break;
        case marks >= 50:
            document.getElementById("p2").innerHTML=`C Grade`;
            break;
        case marks >= 35:
            document.getElementById("p2").innerHTML=`D Grade`;
            break;
        case marks <= 35 && marks >= 0:
            document.getElementById("p2").innerHTML=`F Grade`;
            break;
        default:
            document.getElementById("p2").innerHTML = `Invalid input`;
        

    }
}