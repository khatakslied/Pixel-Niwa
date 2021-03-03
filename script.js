const addPlantBtn = document.getElementById('add-plant');
const waterBtn = document.getElementById('water');
const soilPatch = document.getElementById('patch');
const garden = document.querySelector('main');

const flowers = [];

const plantNew = () => {
    if (flowers.length > 17) {
        // let tooMany = document.createElement('p')
        // tooMany.innerText = `Sorry folks, that's your limit.`
        // garden.appendChild(tooMany);
        // setInterval(() => {
        //     garden.removeChild(tooMany);
        // }, 3000);
        addPlantBtn.innerText = `Sorry folks, that's your limit.`
    } else {
    let newFlower = document.createElement('img')
    newFlower.classList.add('inSoil');
    newFlower.src = 'images/mound.png';
    soilPatch.appendChild(newFlower);
    flowers.push(newFlower);
    setTimeout(() => {
        newFlower.src = 'images/sapling.png';
        setTimeout(() => {
            newFlower.src = 'images/earlybud.png';
            setTimeout(() => {
                newFlower.src = 'images/latebud.png';
                setTimeout(() => {
                    newFlower.src = 'images/' + colorPick() + 'flower.png';
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
            flowers[i].src = 'images/wiltedredflower.png';
        }
        if (flowers[i].src.includes('blue')){
            flowers[i].src = 'images/wiltedblueflower.png';
        }
        if (flowers[i].src.includes('orange')){
            flowers[i].src = 'images/wiltedorangeflower.png';
        }
    }
};

const waterFlower = () => {
    for (i = 0; i < flowers.length; i++) {
        if (flowers[i].src.includes('wiltedred')){
            flowers[i].src = 'images/redflower.png';
        }
        if (flowers[i].src.includes('wiltedblue')){
            flowers[i].src = 'images/blueflower.png';
        }
        if (flowers[i].src.includes('wiltedorange')){
            flowers[i].src = 'images/orangeflower.png';
        }
    }
};

addPlantBtn.addEventListener('click', plantNew);
waterBtn.addEventListener('click', waterFlower);

setInterval(() => {
    wiltFlower();
}, 12000);