let currentBalance = 5000
let currentPotatoesPerSecond = 0
let currentPotatoesPerClick = 1
let lifetimePotatoes = 0

let clickUpgrades = [
    {
        name: 'wateringCan',
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'shovel',
        price: 500,
        quantity: 0,
        multiplier: 5
    }
];

let automaticUpgrades = [
    {
        name: 'worker',
        price: 500,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'tractor',
        price: 5000,
        quantity: 0,
        multiplier: 5
    }
];

const potatoIcon = '<i class="mdi mdi-seed"></i>'
function clickPotato() {
    currentBalance += currentPotatoesPerClick
    lifetimePotatoes += currentPotatoesPerClick
    drawBalance()
}

function drawBalance() {
    document.getElementById('balance').innerHTML = `${potatoIcon} : ${currentBalance}`
}

function drawPotatoesPerClick() {
    document.getElementById('potatoesPerClick').innerHTML = `<i class="mdi mdi-cursor-pointer"></i> : ${currentPotatoesPerClick}`
}

function drawPotatoesPerSecond() {
    document.getElementById('potatoesPerSecond').innerHTML = `<i class="mdi mdi-timer"></i> : ${currentPotatoesPerSecond}`
}

function buyClickUpgrade(upgradeIndex) {
    let price = clickUpgrades[upgradeIndex].price
    let quantity = clickUpgrades[upgradeIndex].quantity

    if (currentBalance >= price) {

        quantity++
        currentBalance -= price
        let newPrice = (price * (quantity / 15))
        price += Number(newPrice.toFixed(0))

        clickUpgrades[upgradeIndex].price = price
        clickUpgrades[upgradeIndex].quantity = quantity
        console.log(clickUpgrades[upgradeIndex].price)
    }
    currentPotatoesPerClick = calculatePotatoesPerClick()
    drawPotatoesPerClick()

}

function buyAutomaticUpgrade(upgradeIndex) {
    let price = automaticUpgrades[upgradeIndex].price
    let quantity = automaticUpgrades[upgradeIndex].quantity

    if (currentBalance >= price) {

        quantity++
        currentBalance -= price
        let newPrice = (price * (quantity / 15))
        price += Number(newPrice.toFixed(0))

        automaticUpgrades[upgradeIndex].price = price
        automaticUpgrades[upgradeIndex].quantity = quantity
        console.log(automaticUpgrades[upgradeIndex].price)
    }
    currentPotatoesPerSecond = calculatePotatoesPerSecond()
    drawPotatoesPerSecond()

}

function calculatePotatoesPerClick() {
    let ppc = 1
    clickUpgrades.forEach((upgrade) => {
        ppc += upgrade.quantity * upgrade.multiplier
    });
    return (ppc)
}

function calculatePotatoesPerSecond() {
    let pps = 0
    automaticUpgrades.forEach((upgrade) => {
        pps += upgrade.quantity * upgrade.multiplier
    });
    return (pps)
    drawPotatoesPerSecond()
}


drawBalance()
drawPotatoesPerClick()
drawPotatoesPerSecond()
