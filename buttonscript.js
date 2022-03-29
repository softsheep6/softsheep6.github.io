
    var number = 0; //big number in center
    
    var upgradeCost = 100; //cost to upgrade
    var numberAddValue = 1; //amount you get per time you click on add
    
    var numberPerSecond = 0;
    
    var autoButtonCost = 30;
    var autoButtonAmount = 0;
    var autoButtonMultiplier = 1;
    var buttonFactoryCost = 250;
    var buttonFactoryAmount = 0;
    var buttonFactoryMultiplier = 1;
    //var buttonCountryCost = 2000
    //var buttonCountryAmount = 0;
    //var buttonCountryMultiplier = 1;

    //var clickbuffcooldown = false;
    //var unlockedBuffsDisplayed = false;
    
    function updateNumber() {
      document.getElementById('addButton').innerHTML = "Click to add " + numberAddValue + "!";
      document.getElementById('1').innerHTML = number;
      document.getElementById('numberPerSecondDisplay').innerHTML = numberPerSecond;
      document.getElementById('upgradeButton').innerHTML = "Upgrade click! (Cost: " + upgradeCost + ")";
      document.getElementById('autoButtonButton').innerHTML = "Buy auto button! (Cost: " + autoButtonCost + ")";
      document.getElementById('factoryButton').innerHTML = "Buy button factory! (Cost: " + buttonFactoryCost + ")";
      //document.getElementById('countryButton').innerHTML = "Buy button country! (Cost: " + buttonCountryCost + ")";
      //if (clickbuffcooldown = true) {
            //await sleep(600000);
            //clickbuffcooldown = false;
        //} else {
            //return;
        //}
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
        autoButtonAmount = 0;
        buttonFactoryAmount = 0;
        autoButtonMultiplier = 1;
        buttonFactoryMultiplier = 1;
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
    // unused
    function win() {
    number += 4893659812783579752386729634964986782;
        numberAddValue += 987653237856829634958927;
        upgradeCost = 69;
        updateNumber();
        document.body.style.background = "#cc7a00";
    }

    function autoButton() {
        while (number >= autoButtonCost) {
            updateNumber();
            number = (number-autoButtonCost);
            autoButtonAmount++;
            numberPerSecond += 1;
            autoButtonCost += 10;
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
            buttonFactoryCost += 50;
            updateNumber();
            return;
        }
    }

    /*function buttonCountry() {
        while (number >= buttonCountryCost) {
            updateNumber();
            number = (number-buttonCountryCost);
            buttonCountryAmount++;
            numberPerSecond += 40;
            buttonFactoryCost += 250;
            updateNumber();
            return;
    }*/
    // time
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }

    async function numberPerSecondGiver() {
        while (true) {
            number += ((autoButtonAmount * 1) * autoButtonMultiplier);
            number += ((buttonFactoryAmount * 5) * buttonFactoryMultiplier);
            //number += ((buttonCountryAmount * 40) * buttonCountryMultiplier);
            updateNumber();
            await sleep(1000);
        }
    }

    function darkMode() {
        changeColor('white', '1');
        changeColor('white', 'npsDisplayWords');
        changeColor('white', 'numberPerSecondDisplay');
        changeColor('white', 'options');
        changeColor('white', 'hr1');
        changeColor('white', 'hr2');
        changeBgColor('#262626', 'body');
        document.getElementById("darkModeButton").style.display = "none";
        document.getElementById("lightModeButton").style.display = "inline";
        
    }
    function lightMode() {
        changeColor('black', '1');
        changeColor('black', 'npsDisplayWords');
        changeColor('black', 'numberPerSecondDisplay');
        changeColor('black', 'options');
        changeColor('black', 'hr1');
        changeColor('black', 'hr2');
        changeBgColor('lightskyblue', 'body');
        document.getElementById("darkModeButton").style.display = "inline";
        document.getElementById("lightModeButton").style.display = "none";
    }
        
    function changeColor(newColor, newId) {
        var elem = document.getElementById(newId);
        elem.style.color = newColor;
    }

    function changeBgColor(newColor, newId) {
        var elem = document.getElementById(newId);
        elem.style.backgroundColor = newColor;
    }


    // 2 confusing functions that i have no idea how they work but i am glad they do
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

    async function save() {
        // make the cookies
        setCookie('numbercookie', number, 730);
        setCookie('npscookie', numberPerSecond, 730);
        setCookie('addvaluecookie', numberAddValue, 730);
        setCookie('clickupgradecookie', upgradeCost, 730);
        setCookie('autobuttoncookie', autoButtonCost, 730);
        setCookie('buttonfactorycookie', buttonFactoryCost, 730);
        //setCookie('buttoncountrycookie', buttonCountryCost, 730);
        setCookie('ABamountcookie', autoButtonAmount, 730);
        setCookie('ABmultipliercookie', autoButtonMultiplier, 730);
        setCookie('BFamountcookie', buttonFactoryAmount, 730);
        setCookie('BFmultipliercookie', buttonFactoryMultiplier, 730);
        //setCookie('BCamountcookie', buttonCountryAmount, 730);
        //setCookie('BCmultipliercookie', buttonCountryMultiplier, 730);
        // save message
        document.getElementById('savemessage').innerHTML = "Saved";
        await sleep(1500);
        document.getElementById('savemessage').innerHTML = "";
    }
    async function load() {
        // make the variables equal to the cookie values
        number = getCookie("numbercookie");
        numberPerSecond = getCookie("npscookie");
        numberAddValue = getCookie("addvaluecookie");
        upgradeCost = getCookie("clickupgradecookie");
        autoButtonCost = getCookie("autobuttoncookie");
        buttonFactoryCost = getCookie("buttonfactorycookie");
        autoButtonAmount = getCookie("ABamountcookie");
        autoButtonMultiplier = getCookie("ABmultipliercookie");
        buttonFactoryAmount = getCookie("BFamountcookie");
        buttonFactoryMultiplier = getCookie("BFmultipliercookie");
        //buttonCountryCost = getCookie("buttoncountrycookie");
        //buttonCountryAmount = getCookie("BCamountcookie");
        //buttonCountryMultiplier = getCookie("BCmultipliercookie");
        // make them be numbers and not bad strings
        number = parseInt(number);
        numberPerSecond = parseInt(numberPerSecond);
        numberAddValue = parseInt(numberAddValue);
        upgradeCost = parseInt(upgradeCost);
        autoButtonCost = parseInt(autoButtonCost);
        buttonFactoryCost = parseInt(buttonFactoryCost);
        //buttonCountryCost = parseInt(buttonCountryCost);
        autoButtonAmount = parseInt(autoButtonAmount);
        autoButtonMultiplier = parseInt(autoButtonMultiplier);
        buttonFactoryAmount = parseInt(buttonFactoryAmount);
        buttonFactoryMultiplier = parseInt(buttonFactoryMultiplier);
        //buttonCountryAmount = parseInt(buttonCountry);
        //buttonCountryMultiplier = parseInt(buttonCountry);
        // load message
        document.getElementById('savemessage').innerHTML = "Loaded";
        await sleep(1000);
        document.getElementById('savemessage').innerHTML = "";
        
        updateNumber();
        return;
    }
    
    function onLoad() {
        numberPerSecondGiver();
        //unlockBuffs();
    }

    /*async function clickBuff() {
        if (clickbuffcooldown = false) {
            clickbuffcooldown = true;
            var unbuffedAddValue = numberAddValue;
            numberAddValue * 100;
            await sleep(30000);
            numberAddValue = unbuffedAddValue;
        }
    }
    
    function unlockBuffs() {
        if (number >= 100000 && unlockedBuffsDisplayed = false) {
            unlockedBuffsDisplayed = true;
            document.getElementById("buffs").style.display = "block";
            document.getElementById('savemessage').innerHTML = "Unlocked Buffs!";
            await sleep(3000);
            document.getElementById('savemessage').innerHTML = "";
        } else {
            return;
        }
        
    }*/





//old code i dont need but i kinda wanna keep idk why
/*

    // for dark mode
    	document.body.style.background = "#262626";
        document.getElementById('1').setAttribute('style', 'color:white');
        document.getElementById('npsDisplayWords').setAttribute('style', 'color:white');
        document.getElementById('numberPerSecondDisplay').setAttribute('style', 'color:white');
        document.getElementById('options').setAttribute('style', 'color:white');
        document.getElementById('hr1').setAttribute('style', 'color:white', 'width:25%', 'align:center');
        document.getElementById('hr2').setAttribute('style', 'color:white');
        
        
        
        
        
*/
