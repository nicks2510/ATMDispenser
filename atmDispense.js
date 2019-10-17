
        function getNotes() {
            var currencyNotesArr = {};
            var notesCount = 0;
            let moneyInput = document.getElementById("moneyInput").value;
            if (moneyInput <= 0 || moneyInput == "" || moneyInput == undefined) {
                alert("Please enter a valid value");
                document.getElementById("moneyDispensed").innerHTML = "";
            } else {
                let noteDenominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

                for (let i = 0; i < noteDenominations.length; i++) {
                    let atmNoteKey = noteDenominations[i];
                    let notes = Math.floor(moneyInput / noteDenominations[i]);
                    currencyNotesArr[atmNoteKey] = notes;
                    notesCount = notesCount + notes;
                    moneyInput = moneyInput - (noteDenominations[i] * currencyNotesArr[atmNoteKey]);
                }
                document.getElementById("moneyDispensed").innerHTML = `
                <p class="notes">You will get the following amount</p>
                <div class="hr">
                  <span class="textSpan"> ${currencyNotesArr["1"]} notes of Rs 1 </span> <span class="textSpan"> ${currencyNotesArr["2"]} notes of Rs 2 </span>
                </div>
                <div class="hr">
                  <span class="textSpan"> ${currencyNotesArr["5"]} notes of Rs 5 </span> <span class="textSpan"> ${currencyNotesArr["10"]} notes of Rs 10 </span>
                </div>
                <div class="hr">
                  <span class="textSpan"> ${currencyNotesArr["20"]} notes of Rs 20 </span> <span class="textSpan"> ${currencyNotesArr["50"]} notes of Rs 50</span>
                </div>
                <div class="hr">
                  <span class="textSpan"> ${currencyNotesArr["100"]} notes of Rs 100 </span> <span class="textSpan"> ${currencyNotesArr["200"]} notes of Rs 200</span>
                </div>
                <div class="hr">
                  <span class="textSpan"> ${currencyNotesArr["500"]} notes of Rs 500 </span> <span class="textSpan"> ${currencyNotesArr["2000"]} notes of Rs 2000</span>
                </div>
                <div class="hr">
                  <p class="notes">Total notes dispensed: ${notesCount}</p>
                </div>
                `
            }
        }
    