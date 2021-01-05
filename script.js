const addPlantBtn = document.getElementById('add-plant');
const waterBtn = document.getElementById('water');
const garden = document.querySelector('main');

const flowers = [];

const plantNew = () => {
    if (flowers.length > 35) {
        let tooMany = document.createElement('p')
        tooMany.innerText = `Sorry folks, that's your limit.`
        garden.appendChild(tooMany);
        setInterval(() => {
            garden.removeChild(tooMany);
        }, 3000);
    } else {
    let newFlower = document.createElement('img')
    newFlower.src = 'mound.png';
    garden.appendChild(newFlower);
    flowers.push(newFlower);
    setTimeout(() => {
        newFlower.src = 'sapling.png';
        setTimeout(() => {
            newFlower.src = 'earlybud.png';
            setTimeout(() => {
                newFlower.src = 'latebud.png';
                setTimeout(() => {
                    newFlower.src = colorPick() + 'flower.png';
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);}
};

const colorPick = () => {
    let colors = ['red', 'blue', 'orange'];
    let randomNum = Math.floor(Math.random() * 3);
    for (let i = 0; i < colors.length; i++){
        if (i === randomNum) {return colors[i]}
    }
};

const wiltFlower = () => {
    for (i = 0; i < flowers.length; i++) {
        if (flowers[i].src.includes('red')){
            flowers[i].src = 'wiltedredflower.png';
        }
        if (flowers[i].src.includes('blue')){
            flowers[i].src = 'wiltedblueflower.png';
        }
        if (flowers[i].src.includes('orange')){
            flowers[i].src = 'wiltedorangeflower.png';
        }
    }
};

const waterFlower = () => {
    for (i = 0; i < flowers.length; i++) {
        if (flowers[i].src.includes('wiltedred')){
            flowers[i].src = 'redflower.png';
        }
        if (flowers[i].src.includes('wiltedblue')){
            flowers[i].src = 'blueflower.png';
        }
        if (flowers[i].src.includes('wiltedorange')){
            flowers[i].src = 'orangeflower.png';
        }
    }
};

addPlantBtn.addEventListener('click', plantNew);
waterBtn.addEventListener('click', waterFlower);

setInterval(() => {
    wiltFlower();
}, 9000);