function getValue(objID) {
    let objValue = document.querySelector(objID).value;
    if (objValue === "") {
        alert("輸入框沒值");
        document.querySelector(objID).focus();
        return;
    }
    return Number(objValue);
}

document.querySelector('button').addEventListener('click', function() {
    const he = getValue('#he');
    const we = getValue('#we');
    he2 = he / 100;
    bmi = we / (he2 * he2);
    
    let result;
    if ( 0 < bmi & bmi < 18.5) {
        dyc.style.color = 'blue';
        result = '你的BMI是'+bmi.toFixed(2) + '，體重過輕飲食要均衡' ;
    } else if (24 > bmi & bmi  >=18.5 ) {
        dyc.style.color = 'green';
        result = '你的BMI是'+bmi.toFixed(2) + '，體重標準繼續保持' ;
    } else if (27 > bmi & bmi  >=24) { 
        dyc.style.color = 'red';
        result = '你的BMI是'+bmi.toFixed(2) + '，體重過重要多運動';
    }else if (30 > bmi & bmi  >=27) {
        dyc.style.color = 'red'; 
        result = '你的BMI是'+bmi.toFixed(2) + '，體重輕度肥胖要多運動';
    }else if (35 > bmi & bmi  >=30) { 
        dyc.style.color = 'red';
        result = '你的BMI是'+bmi.toFixed(2) + '，體重中度肥胖要多運動';
    }else if (bmi  >=35) { 
        dyc.style.color = 'red';
        result = '你的BMI是'+bmi.toFixed(2) + '，體重重度肥胖要多運動';
    }
     document.querySelector('.result').value = result;
});