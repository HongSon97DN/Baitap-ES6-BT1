let showHover = () => {
    let string = document.querySelector(".heading").innerText;
    let separate = [...string];
    let content = "";
    
    for (const key of separate) {
        content += `
            <span>${key}</span>
        `
    }

    document.querySelector(".heading").innerHTML = content;
}
showHover();