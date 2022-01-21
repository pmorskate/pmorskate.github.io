/* API FETCH COMMANDS */
window.addEventListener('load', function () {
    const options = {
        headers: {
            'Authorization': 'da468b89-2bf8-4e2b-a939-79c6e6ef25ce'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    let testknop = document.getElementById('testknop');
    testknop.addEventListener('click', function(ev){
        // Indien button in FORM staat wordt automatisch form gesubmit, na de volgende regel, niet:
        ev.preventDefault();
    });


    const spellbeheer = (function () {
        const spelldata = [];
        const nameArray = [];
        return {
            init: function (data) {
                //Hier elke spell in spellbeheer proppen vanaf de fetch
                data.forEach(element => {
                    spelldata.push(
                        {
                            spellName: element.name,
                            spellLevel: element.data.level.value,
                            spellCast: element.data.time,
                            spellRange: element.data.range,
                            spellArea: element.data.areasize,
                            spellSaveType: element.data.save.basic,
                            spellSave: element.data.save.value,
                            spellSchools: element.data.school,
                            spellTraditions: element.data.traditions,
                            spellDescription: element.data.description.value,
                        })
                    nameArray.push(element.name)
                });
            },
            getSpellInfo: function (input) {
                console.log('hallo');
                console.dir(spelldata);
                return spelldata.find(element => element.spellName == input);
            },
            getAllSpells: function () {
                return spelldata;
            },
            getAllSpellNames: function (){
                return nameArray;
            }
        }
    })();

    fetch('https://api.pathfinder2.fr/v1/pf2/spell', options).then(
        inp => inp.json()
    ).then(verwerk);
    /* API FETCH COMMANDS EIND */
    function verwerk(data) {
        spellbeheer.init(data.results);
        console.log(data);
        let defaultspell = spellbeheer.getSpellInfo("Fireball");
        console.log(defaultspell);
        let newspellblock = `
        <div class="card-header"><div id='spreuknaam'>${defaultspell.spellName}</div><div id='spreuklevel'>${defaultspell.spellLevel}</div></div>
            <div class='card-body'>
                <div class='spelltable'>
                    <span>Cast Time</span>
                    <span>Range</span>
                    <span>Area</span>
                    <span>Saving Throw</span>
                    <span>Schools</span>
                    <span id='spellCast'>${defaultspell.spellCast.value}</span>
                    <span id='spellrange'>${defaultspell.spellRange.value}</span>
                    <span id='spellArea'>${defaultspell.spellArea.value}</span>
                    <span id='spellSave'>${defaultspell.spellSave}</span>
                    <span id='spellSchools'>${defaultspell.spellTraditions.value}</span>
                </div>
            </div>
        <div class="card-body">
            ${defaultspell.spellDescription}
        </div>
        `;
        document.getElementById('spellsheet').innerHTML = newspellblock;
        let spellpickReplace = `
                <label for='Spellkiezer'> Select a spell</label>
                <select name="Spellkiezer" id="Spellkiezer">`;
                let dezeArray = spellbeheer.getAllSpellNames();
        dezeArray.forEach(element => { spellpickReplace += `
                <option value='${element}'>${element}</option>
                `
                });
                spellpickReplace += `
            </select>
            <button id="saveSpell" name="savespell">Save Spell</button>`;
            document.getElementById("spellSelectForm").innerHTML = spellpickReplace;
            let testknop = document.getElementById('saveSpell');
            testknop.addEventListener('click', function(ev){
                // Indien button in FORM staat wordt automatisch form gesubmit, na de volgende regel, niet:
                ev.preventDefault();
                //Slaat een spell op NOG NIET AF
                let tesavenspreuknaam = document.getElementById('spreuknaam');
                
            });
    }
});