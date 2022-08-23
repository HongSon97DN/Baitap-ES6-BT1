

let tinhDTB = (...arrNumber) => {
    let sum = 0;
    let dtb = 0;
    for (let i in arrNumber) {
        sum += arrNumber[i];
        n = arrNumber.length;
        dtb = sum/n;
    }
    return dtb;
}

let tinhDTBKhoi1 = () => {
    inputToan = Number(document.getElementById("inpToan").value);
    inputLy = Number(document.getElementById("inpLy").value);
    inputHoa = Number(document.getElementById("inpHoa").value);   

    let dtbKhoi1 = tinhDTB(inputHoa,inputLy,inputToan).toFixed(2);
    document.getElementById("tbKhoi1").innerHTML = dtbKhoi1; 
}
document.getElementById("btnKhoi1").onclick = tinhDTBKhoi1;

let tinhDTBKhoi2 = () => {
    inputVan = Number(document.getElementById("inpVan").value);
    inputSu = Number(document.getElementById("inpSu").value);
    inputDia = Number(document.getElementById("inpDia").value);   
    inputEnglish = Number(document.getElementById("inpEnglish").value);  

    let dtbKhoi2 = tinhDTB(inputVan,inputSu,inputDia,inputEnglish).toFixed(2);
    document.getElementById("tbKhoi2").innerHTML = dtbKhoi2; 
}
document.getElementById("btnKhoi2").onclick = tinhDTBKhoi2;