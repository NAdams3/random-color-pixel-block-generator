$( document ).ready(function() {
    const container = document.getElementById("container");
    const blockStart = "<div class='block' style='background-color: rgb(";
    const blockEnd = ");'></div>";

    let colorComponents = []
    colorComponents.push(Math.random() * 255, Math.random() * 255, Math.random() * 255);

    let n = 1000;

    while (n > 0) {
        const componentIndex = Math.floor(Math.random() * 2.99999999999);
        colorComponents[componentIndex] = Math.random() * 255;
        container.innerHTML += blockStart + colorComponents[0] + "," + colorComponents[1] + "," + colorComponents[2] + blockEnd;
        n--;
    }
});
