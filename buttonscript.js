
    var number = 0; //big number in center
    
    var upgradeCost = 100; //cost to upgrade
    var numberAddValue = 1; //amount you get per time you click on add
    
    var numberPerSecond = 0;
    
    var autoButtonCost = 30;
    var autoButtonAmount = 0;
    var buttonFactoryCost = 250;
    var buttonFactoryAmount = 0;
    
    function updateNumber() {
      document.getElementById('addButton').innerHTML = "Click to add " + numberAddValue + "!";
      document.getElementById('1').innerHTML = number;
      document.getElementById('numberPerSecondDisplay').innerHTML = numberPerSecond;
      document.getElementById('upgradeButton').innerHTML = "Upgrade click! (Cost: " + upgradeCost + ")";
      document.getElementById('autoButtonButton').innerHTML = "Buy auto button! (Cost: " + autoButtonCost + ")";
      document.getElementById('factoryButton').innerHTML = "Buy button factory! (Cost: " + buttonFactoryCost + ")";
    }
    
    function addValue() {
        number = (number+numberAddValue);
        updateNumber();
    }
    
    function subValue() {
        number--;
        updateNumber();
    }
    
    function resetValue() {
        number = 0;
        upgradeCost = 100;
        autoButtonCost = 30;
        buttonFactoryCost = 250;
        numberPerSecond = 0;
        numberAddValue = 1;
        document.getElementById('1').setAttribute = ('class', 'number')
        document.getElementById('1').setAttribute = ('id', '1')
        updateNumber();
    }
    
    function upgrade() {
        updateNumber();
        while (number >= upgradeCost) {
            updateNumber();
            number = (number-upgradeCost);
            numberAddValue++;
            upgradeCost = (upgradeCost+100);
            updateNumber();
            return;
        }
        
    }
    
    function win() {
    number += 4893659812783579752386729634964986782;
        numberAddValue += 987653237856829634958927;
        upgradeCost = 69;
        updateNumber();
        document.body.style.background = "#cc7a00";
    }

    async function autoButton() {
        while (number >= autoButtonCost) {
            updateNumber();
            number = (number-autoButtonCost);
            autoButtonAmount++;
            numberPerSecond += 1;
            autoButtonCost += 10
            updateNumber();
            return;
        }
    }
    
    function buttonFactory() {
        while (number >= buttonFactoryCost) {
            updateNumber();
            number = (number-buttonFactoryCost);
            buttonFactoryAmount++;
            numberPerSecond += 5;
            buttonFactoryCost += 50
            updateNumber();
            return;
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }

    async function numberPerSecondGiver() {
        while (true) {
            number += numberPerSecond
            updateNumber()
            await sleep(1000);
        }
    }
    
    function darkMode() {
    	document.body.style.background = "#262626";
        document.getElementById('1').setAttribute('style', 'color:white')
        document.getElementById('npsDisplayWords').setAttribute('style', 'color:white')
        document.getElementById('numberPerSecondDisplay').setAttribute('style', 'color:white')
        document.getElementById('options').setAttribute('style', 'color:white')
        document.getElementById('hr1').setAttribute('style', 'color:white', 'width:25%', 'align:center')
        document.getElementById('hr2').setAttribute('style', 'color:white')
        
    }

    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded .split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    }

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }

    function save() {
        setCookie('cookievalue', number, 730);
    }
    function load() {
        number = cookievalue;
        return;
    }
    
    function onLoad() {
        numberPerSecondGiver();
    }
