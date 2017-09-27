function onEdit(){
    neededFusion();
}

function neededFusion() {
    /*Find column by header text*/
    var findColumnNumber = function findColumnNumber(rows, rowName) {
        for (var col = 0; col < rows[0].length; col++) {
            if (rows[0][col].toLowerCase() === rowName.toLowerCase()) {
                return col + 1; //sheet cols start at 1, not 0
            }
        }
        return null;
    };//END FUNCTION findColumnNumber

    /*
     WARNING!!! ONLY USE ONCE!
     Creates a dictionary of monster objects by base name and type
     ex: dict.serpentWater
     */
    var getAllMonsters = function getAllFusionMonstersAndFodders() {
        var Monster = function Monster(awakenedName, monName, attribute, fusionedStarLevel) {
            this.awakenedName = awakenedName;
            this.monName = monName;
            this.attribute = attribute;
            this.fusionedStarLevel = fusionedStarLevel;
            this.fusions = [];
            this.requiredStarLevel = undefined;
            this.fusionedFrom = undefined;
            this.wantAmount = undefined;
            this.needAmount = undefined;
            this.haveAmount = 0;

            if (this.fusionedStarLevel === 4) {
                this.price = 100000;
            } else if (this.fusionedStarLevel === 5) {
                this.price = 500000;
            } else {
                this.price = undefined;
            }

        };//END CONSTRUCTOR Monster

        Monster.prototype.addFusions = function (fusionedFrom, requiredStarLevel) {
            for (var counter = 0; counter < fusionedFrom.length; counter++) {
                if (fusionedFrom[counter].fusions === undefined)
                    fusionedFrom[counter].fusions = [];
                fusionedFrom[counter].fusions.push(this);
                fusionedFrom[counter].requiredStarLevel = requiredStarLevel;
            }
            this.fusionedFrom = fusionedFrom;
        };//END FUNCTION Monster.prototype.fusions

        Monster.prototype.toString = function toString() {
            return this.awakenedName + " " + this.monName + " " + this.attribute;
        };//END FUNCTION Monster.prototype.fusions

        var ATTRIBUTES = {
            WIND: "Wind",
            FIRE: "Fire",
            WATER: "Water",
            DARK: "Dark",
            LIGHT: "Light"
        };

        var all = {};
        all.serpentWater = new Monster("Shailoq", "Serpent", ATTRIBUTES.WATER);
        all.mummyWater = new Monster("Nubia", "Mummy", ATTRIBUTES.WATER);
        all.golemWind = new Monster("Ragion", "Golem", ATTRIBUTES.WIND);
        all.hellhoundFire = new Monster("Sieq", "Hellhound", ATTRIBUTES.FIRE);
        all.grimReaperWind = new Monster("Hiva", "Grim Reaper", ATTRIBUTES.WIND);
        all.chargerSharkWind = new Monster("Zephicus", "Charger Shark", ATTRIBUTES.WIND);
        all.inugamiFire = new Monster("Raoq", "Inugami", ATTRIBUTES.FIRE);
        all.impWater = new Monster("Fynn", "Imp", ATTRIBUTES.WATER);
        all.beastHunterFire = new Monster("Nangrim", "Beast Hunter", ATTRIBUTES.FIRE);
        all.salamanderFire = new Monster("Krakdon", "Salamander", ATTRIBUTES.FIRE);
        all.harpyWater = new Monster("Ramira", "Harpy", ATTRIBUTES.WATER);
        all.harpuWind = new Monster("Seal", "Harpu", ATTRIBUTES.WIND);
        all.minotaurosWind = new Monster("Eintau", "Minotauros", ATTRIBUTES.WIND);
        all.lizardmanWind = new Monster("Velfinodon", "Lizardman", ATTRIBUTES.WIND);
        all.livingArmorFire = new Monster("Iron", "Living Armor", ATTRIBUTES.FIRE);
        all.pixieWater = new Monster("Kacey", "Pixie", ATTRIBUTES.WATER);
        all.bearmanWater = new Monster("Gruda", "Bearman", ATTRIBUTES.WATER);
        all.grimReaperWater = new Monster("Hemos", "Grim Reaper", ATTRIBUTES.WATER);
        all.infernoWind = new Monster("Anduril", "Inferno", ATTRIBUTES.WIND);
        all.impFire = new Monster("Cogma", "Imp", ATTRIBUTES.FIRE);
        all.serpentFire = new Monster("Fao", "Serpend", ATTRIBUTES.FIRE);
        all.martialCatFire = new Monster("Mei", "Martial Cat", ATTRIBUTES.FIRE);
        all.magicalArcherWater = new Monster("Sharron", "Magical Archer", ATTRIBUTES.WATER);
        all.salamanderWind = new Monster("Lukan", "Salamander", ATTRIBUTES.WIND);
        all.inugamiWater = new Monster("Icaru", "Inugami", ATTRIBUTES.WATER);
        all.griffonWater = new Monster("Karhn", "Griffon", ATTRIBUTES.WATER);
        all.bearmanWind = new Monster("Dagorr", "Bearman", ATTRIBUTES.WIND);
        all.yetiFire = new Monster("Tantra", "Yeti", ATTRIBUTES.FIRE);
        all.werewolfFire = new Monster("Garoche", "Werewolf", ATTRIBUTES.FIRE);
        all.magicalArcherFire = new Monster("Cassandra", "Magical Archer", ATTRIBUTES.FIRE);
        all.golemWater = new Monster("Kuhn", "Golem", ATTRIBUTES.WATER);
        all.howlWind = new Monster("Chichi", "Howl", ATTRIBUTES.WIND);
        all.harpyWind = new Monster("Prilea", "Harpy", ATTRIBUTES.WIND);
        all.amazonWind = new Monster("Hina", "Amazon", ATTRIBUTES.WIND);
        all.highElementalFire = new Monster("Kahli", "High Elemental", ATTRIBUTES.FIRE);
        all.garudaWater = new Monster("Konamiya", "Garuda", ATTRIBUTES.WATER);
        all.horusWater = new Monster("Qebehsenuef", "Horus", ATTRIBUTES.WATER, 4);
        all.kungFuGirlWind = new Monster("Ling Ling", "Kung Fu Girl", ATTRIBUTES.WIND, 4);
        all.succubusFire = new Monster("Akia", "Succubus", ATTRIBUTES.FIRE, 4);
        all.vikingFire = new Monster("Geoffrey", "Viking", ATTRIBUTES.FIRE);
        all.vampireWind = new Monster("Argen", "Vampire", ATTRIBUTES.WIND, 4);
        all.undineWater = new Monster("Mikene", "Undine", ATTRIBUTES.WATER, 4);
        all.yetiDark = new Monster("Kumae", "Yeti", ATTRIBUTES.DARK);
        all.sylphFire = new Monster("Baretta", "Sylph", ATTRIBUTES.FIRE, 4);
        all.nineTailedFoxWind = new Monster("Arang", "Nine-tailed Fox", ATTRIBUTES.WIND, 4);
        all.werewolfWind = new Monster("Shakan", "Werewolf", ATTRIBUTES.WIND);
        all.jokerFire = new Monster("Jojo", "Joker", ATTRIBUTES.FIRE, 4);
        all.ninjaWater = new Monster("Susano", "Ninja", ATTRIBUTES.WATER, 4);
        all.martialCatWater = new Monster("Mina", "Martial Cat", ATTRIBUTES.WATER);
        all.pandaWarriorFire = new Monster("Xiong Fei", "Panda Warrior", ATTRIBUTES.FIRE, 5)
        all.ifritDark = new Monster("Veromos", "Ifrit", ATTRIBUTES.DARK, 5);
        all.valkyrjaWind = new Monster("Katarina", "Valkyrja", ATTRIBUTES.WIND, 5);
        all.phoenixWater = new Monster("Sigmarus", "Phoenix", ATTRIBUTES.WATER, 5);

        /*FUSIONS*/
        all.horusWater.addFusions([all.serpentWater, all.mummyWater, all.golemWind, all.hellhoundFire], 4);
        all.kungFuGirlWind.addFusions([all.grimReaperWind, all.chargerSharkWind, all.inugamiFire, all.impWater], 4);
        all.succubusFire.addFusions([all.beastHunterFire, all.salamanderFire, all.harpyWater, all.harpuWind], 4);
        all.vampireWind.addFusions([all.minotaurosWind, all.lizardmanWind, all.livingArmorFire, all.pixieWater], 4);
        all.undineWater.addFusions([all.bearmanWater, all.grimReaperWater, all.infernoWind, all.impFire], 4);
        all.sylphFire.addFusions([all.serpentFire, all.martialCatFire, all.magicalArcherWater, all.salamanderWind], 4);
        all.ninjaWater.addFusions([all.inugamiWater, all.griffonWater, all.bearmanWind, all.yetiFire], 4);
        all.jokerFire.addFusions([all.werewolfFire, all.magicalArcherFire, all.golemWater, all.howlWind], 4);
        all.nineTailedFoxWind.addFusions([all.harpyWind, all.amazonWind, all.highElementalFire, all.garudaWater], 4);
        all.pandaWarriorFire.addFusions([all.horusWater, all.kungFuGirlWind, all.succubusFire, all.vikingFire], 5);
        all.ifritDark.addFusions([all.vampireWind, all.succubusFire, all.undineWater, all.yetiDark], 5);
        all.valkyrjaWind.addFusions([all.sylphFire, all.undineWater, all.nineTailedFoxWind, all.werewolfWind], 5);
        all.phoenixWater.addFusions([all.nineTailedFoxWind, all.jokerFire, all.ninjaWater, all.martialCatWater], 5);

        return all;
    };//END FUNCTION getAllMonsters

    // var getAmount

    /*COLUMN NAMES - DO NOT CHANGE VALUES!*/
    var COLUMN_NAMES = {
        FUSION: "Fusion",
        STAR: "Star",
        COST: "Cost",
        MONSTER: "Monster",
        RED_STAR: "Req Star",
        WANT: "Want #",
        HAVE: "Have #",
        NEED: "Need #",
        CURRENT_NOTES: "Current Notes"
    };

    /*SHOULD ONLY BE USED BY Fusion Monsters Sheet*/ //Add control?
    var sheet = SpreadsheetApp.getActiveSheet();

    /*WHOLE DOCUMENT*/
    var allRows = sheet.getDataRange().getValues();

    /*COLUMNS*/
    var monsterCol = sheet.getRange(2,
        findColumnNumber(allRows, COLUMN_NAMES.MONSTER), allRows.length - 1).getValues();
    var wantCol = sheet.getRange(2,
        findColumnNumber(allRows, COLUMN_NAMES.WANT), allRows.length - 1).getValues();
    var haveCol = sheet.getRange(2,
        findColumnNumber(allRows, COLUMN_NAMES.HAVE), allRows.length - 1).getValues();
    var needCol = sheet.getRange(2,
        findColumnNumber(allRows, COLUMN_NAMES.NEED), allRows.length - 1);

    var allMonsters = getAllMonsters();
    /*LIST OF MONSTERS TO WANT*/
    //var keeps = [/*Monster*/[], /*Amount*/[] ];
    var results = new Array(allRows.length - 1);
    var temp = [];

    /*Convert MonsterCol to Monster Objects*/
    for (var monRow = 0; monRow < monsterCol.length; monRow++) {

        for (var key in allMonsters) {
            if (allMonsters[key].toString().toLowerCase() === monsterCol[monRow][0].toLowerCase()) {
                temp[monRow] = allMonsters[key];
                break;
            }
        }
        if (temp[monRow] === undefined)
            throw "Typo with: " + monsterCol[monRow];
    }
    monsterCol = temp;

    /*Load wanted and have amounts into Monster objects*/
    for (monRow = 0; monRow < wantCol.length; monRow++) {
        monsterCol[monRow].wantAmount = parseInt(wantCol[monRow][0]);
        monsterCol[monRow].haveAmount = parseInt(haveCol[monRow][0]);
    }

    /*DOES NOT TAKE INTO ACCOUNT DOUBLE TODO*/
    var calculateAmountNeeded = function calculateAmountNeeded(monster) {
        var result;

        // /*If no fusions, need is 0 */
        // if (monster.fusions === undefined) {
        //     monster.needAmount = 0;
        //     /*returns amount needed      and true if the monster is wanted to make sure all fusions below are req*/
        //     return monster.wantAmount - monster.haveAmount;
        // }

        /*If is a fusion monster, and have not been checked yet*/
        if (monster.needAmount === undefined) {
            monster.needAmount = 0;
            for (var fusionsCounter = 0; fusionsCounter < monster.fusions.length; fusionsCounter++) {
                result = calculateAmountNeeded(monster.fusions[fusionsCounter]);
                /*if it was wanted add needed amount*/
                if (result > 0) {
                    monster.needAmount += result;
                }

            }
            monster.needAmount += monster.wantAmount;
        }

        /*No matter what, return needAmount*/
        return monster.needAmount - monster.haveAmount;
    };

    for (var monsterKey in allMonsters) {
        calculateAmountNeeded(allMonsters[monsterKey]);
    }

    /*BUILD NEED COLUMN*/
    for (var row = 0; row < results.length; row++) {
        if(wantCol[row][0] === "") results[row] = [""];
        else results[row] = [monsterCol[row].needAmount];
    }

    needCol.setValues(results);
    SpreadsheetApp.getActiveSpreadsheet().toast('Done', "Update", 0.8);
}
