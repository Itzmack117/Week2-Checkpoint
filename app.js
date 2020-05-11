const items = [{
    id: "newdrill",
    name: "Advanced Drill",
    price: 15,
    img: "https://image.shutterstock.com/image-photo/photo-handsome-masculine-worker-guy-600w-1609558351.jpg",
    miningPower: 2,
    automation: false,
}, {
    id: "miningDrone",
    name: "Mining Drones",
    price: 40,
    img: "https://vignette.wikia.nocookie.net/elite-dangerous/images/5/5b/Manticore_Drone.jpg/revision/latest/scale-to-width-down/250?cb=20170212202359",
    miningPower: 1,
    interval: 2,
    automation: true,
}, {
    id: "BFG",
    name: "BFG 10000",
    price: 9001,
    img: "https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/39313203_1990410767917846_417533038067449856_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=6jyKiomisH0AX8QNATh&_nc_ht=scontent.fboi1-1.fna&oh=ea0d7a71602144d5c383f947cd68526d&oe=5EDE80BD",
    miningPower: 1250,
    automation: false,
}, {
    id: "elon",
    name: "Elon Musk",
    price: 100000000,
    img: "https://i.imgflip.com/2kbvkv.jpg",
    miningPower: 999999,
    interval: 60,
    automation: true,
}
]

let gearList = []
let ore = 0
let power = 1
let money = 0
let dronePower = 0
function mine() {
    ore += power
    update()
}
function update() {
    document.getElementById("ore").innerText = ore.toString()
    document.getElementById("money").innerText = money.toString()
    document.getElementById("power").innerText = power.toString()
    document.getElementById("dronePower").innerText = dronePower.toString()
}
drawItems()
function drawItems() {
    let template = ""
    items.forEach(i => {
        template += `<div class="col-sm-3">
            <div class="card" onclick="addGear('${i.id}')">
            <h5 class="card-title">${i.name}</h5>
            <p class="card-text">Price: $${i.price}M</p>
                <img class="card-img-top" src="${i.img}">
                    <div class="card-body"><h4>Mining Power: ${i.miningPower}</h4>
                     </div>
            </div>
        </div>
        `
    })
    document.getElementById("items").innerHTML = template
}
function addGear(itemId) {
    let gear = items.find(i => i.id === itemId)
    if (gear.price <= money) {
        money -= gear.price
        gearList.push(gear)
        console.log(gearList)
        chkPower()
        update()
        if (gear.automation = true) {
            upDrones()
        }
    } else {
        let template = `<span><h2>Insufficient funds</h2></span>`
        document.getElementById("noSale").innerHTML = template
        setTimeout(() => {

            document.getElementById("noSale").innerHTML = ''
        }, 4000);
        update()
    }

}
function poorTimer() {
    document.getElementById("noSale").innerHTML = ''
} {
    1000;
    update()
}

function chkPower() {
    gearList.forEach(g => {
        power += g.miningPower
    })
    console.log(power)
}
function upDrones() {
    dronePower = 0
    gearList.forEach(g => {
        if (g.automation = true) {
            dronePower += g.miningPower
        }
        return dronePower
    })
}
function droneMining() {
    ore += dronePower
    update()
}
setInterval(() => {
    droneMining();
}, 2000);

function sell() {
    money = money + ore
    ore = 0
    update()
}