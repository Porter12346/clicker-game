let currentBalance = 0
let currentPotatoesPerSecond = 0
let currentPotatoesPerClick = 1
let lifetimePotatoes = 0

let clickUpgrades = [
    {
        name: 'wateringCan',
        price: 25,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'shovel',
        price: 250,
        quantity: 0,
        multiplier: 5
    }
];

let automaticUpgrades = [
    {
        name: 'worker',
        price: 15,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'tractor',
        price: 1500,
        quantity: 0,
        multiplier: 15
    }
];

const potatoIcon = '<i class="mdi mdi-seed"></i>'
function clickPotato() {
    currentBalance += currentPotatoesPerClick
    lifetimePotatoes += currentPotatoesPerClick
    drawBalance()
}

function drawBalance() {
    document.getElementById('balance').innerHTML = `${potatoIcon} : ${currentBalance.toFixed(0)}`
    document.getElementById('lifetime').innerHTML = `Lifetime Potatoes: ${lifetimePotatoes.toFixed(0)}`
}

function drawPotatoesPerClick() {
    document.getElementById('potatoesPerClick').innerHTML = `<i class="mdi mdi-cursor-pointer"></i> : ${currentPotatoesPerClick}`
    clickUpgrades.forEach((upgrade) => {
        document.getElementById(upgrade.name).innerHTML = `${upgrade.price} <i class="mdi mdi-seed"></i>`
    });
    drawBalance()
}

function drawPotatoesPerSecond() {
    document.getElementById('potatoesPerSecond').innerHTML = `<i class="mdi mdi-timer"></i> : ${currentPotatoesPerSecond}`
    automaticUpgrades.forEach((upgrade) => {
        document.getElementById(upgrade.name).innerHTML = `${upgrade.price} <i class="mdi mdi-seed"></i>`
    });
    drawBalance()
}

function buyClickUpgrade(upgradeIndex) {
    let price = clickUpgrades[upgradeIndex].price
    let quantity = clickUpgrades[upgradeIndex].quantity

    if (currentBalance >= price) {

        quantity++
        currentBalance -= price
        let newPrice = (price * (quantity / 5))
        price += Number(newPrice.toFixed(0))

        clickUpgrades[upgradeIndex].price = price
        clickUpgrades[upgradeIndex].quantity = quantity
        console.log(clickUpgrades[upgradeIndex].price)
    }
    currentPotatoesPerClick = calculatePotatoesPerClick()
    drawPotatoesPerClick()
    drawStats()

}

function buyAutomaticUpgrade(upgradeIndex) {
    let price = automaticUpgrades[upgradeIndex].price
    let quantity = automaticUpgrades[upgradeIndex].quantity

    if (currentBalance >= price) {

        quantity++
        currentBalance -= price
        let newPrice = (price * (quantity / 7))
        price += Number(newPrice.toFixed(0))

        automaticUpgrades[upgradeIndex].price = price
        automaticUpgrades[upgradeIndex].quantity = quantity
        console.log(automaticUpgrades[upgradeIndex].price)
    }
    currentPotatoesPerSecond = calculatePotatoesPerSecond()
    drawPotatoesPerSecond()
    drawStats()

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

function addCookiesPerSecond() {
    currentBalance += (currentPotatoesPerSecond / 10)
    lifetimePotatoes += (currentPotatoesPerSecond / 10)
    drawBalance()
}

function drawStats() {
    clickUpgrades.forEach((upgrade) => {
        let QuantityIdName = `${upgrade.name}Quantity`
        let ValueIdName = `${upgrade.name}Value`
        document.getElementById(`${QuantityIdName}`).innerText = `${upgrade.quantity}x`

        let value = upgrade.quantity * upgrade.multiplier
        document.getElementById(`${ValueIdName}`).innerText = `${value}`
    });
    automaticUpgrades.forEach((upgrade) => {
        let QuantityIdName = `${upgrade.name}Quantity`
        let ValueIdName = `${upgrade.name}Value`
        document.getElementById(`${QuantityIdName}`).innerText = `${upgrade.quantity}x`

        let value = upgrade.quantity * upgrade.multiplier
        document.getElementById(`${ValueIdName}`).innerText = `${value}`
    });
}

drawBalance()
drawPotatoesPerClick()
drawPotatoesPerSecond()

setInterval(addCookiesPerSecond, 100)