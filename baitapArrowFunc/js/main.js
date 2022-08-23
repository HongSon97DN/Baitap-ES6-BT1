
const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let showButton = () => {
    let content = "";
    colorList.map((color,index) =>{
        if (index == 0) {
            content += `
            <button class="color-button active ${color}" onclick="changeColor('${color}')"></button>
        `
        } else{
            content += `
            <button class="color-button ${color}" onclick="changeColor('${color}')"></button>
        `
        }
        
    })
    document.getElementById("colorContainer").innerHTML = content;
}
showButton();

let changeColor = (color) => {
    document.getElementById("house").className = `house ${color}`; 
    
    let btnNodeList = document.querySelectorAll("#colorContainer .color-button");
 
    for (let i = 0; i < btnNodeList.length; i++) {
        btnNodeList[i].classList.remove("active");
    }
    
    document.querySelector(`#colorContainer .${color}`).className = `color-button ${color} active`;
}
