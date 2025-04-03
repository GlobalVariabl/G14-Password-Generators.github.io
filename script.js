"use strict"

let range = document.getElementsByClassName('range')[0]
let span = document.getElementsByTagName('span')[0]
let input  = document.getElementsByTagName('input')

let numbers = document.getElementById('numbers')
let numbers2 = document.getElementById('numbers2')
let numbers3 = document.getElementById('numbers3')

let lowletters = document.getElementById('loweerletters')
let lowletters2 = document.getElementById('loweerletters2')
let lowletters3 = document.getElementById('loweerletters3')

let letters = document.getElementById('letters')
let letters2 = document.getElementById('letters2')
let letters3 = document.getElementById('letters3')

let character = document.getElementById('character')
let character2 = document.getElementById('character2')
let character3 = document.getElementById('character3')

let mixing = document.getElementsByClassName('mixing')[0]
let mixing2 = document.getElementsByClassName('mixing')[1]
let mixing3 = document.getElementsByClassName('mixing')[2]

let mark = document.getElementById('mark')

let button = document.getElementsByTagName('button')[0]

let copy = document.getElementById('copy')
let p = document.getElementsByTagName('p')[0]
let li = document.getElementsByTagName('p')[1]
let p1 = document.getElementsByTagName('p')[2]
let reset = document.getElementById('reset')


// G2 

const N =["596130287463590381","496150382764856692","370864529107514318"]

const az = ["pknojbughivyfcrtdxeswzqaml",
            "ykxpcojahdsnrgfqzebtwuvmli",
            "eijfmusbkycndxgtwrzolhpvqa"]

const AZ = ["CEMSIXHJHWBGRALZYTPDCNFOVUXPKQYUOLDXBKOPYLSDITZ",
            "PZJWFWWKDXJGYVWYSVXSSTHJFDXQUTTJPMICAQAGKPETEFI",
            "DUJSKHMYGWJYPONIFHEATRIJHRTDEWCVYGIFGQHZZRXQNHK"]

const C = [ "?$=,:(*@~=)&*? +=~$*?&[&#,_+ %.&-*/",
            " _#  , ~@$&#%%!* *=:*.&!~#/.!=_/!~[??+*(-?+/#$_*&:.(%&_#_:$,~_=$=,_:[+",
            "!@ -:%+*!% ##[$=/$$&[~_@ (,~:-,~ #$%**?-+ ,*+%%?_!*~.+?*% + _*_)!#.+%~"]

const AN = ["KHn-z$Nlc8rA_uTiaRHcEUTtN#5cTZ3Zni*6IGpnLVyNToybnnNHI2)466vcHz_xhZA9bv6T5Z0$dP6YUL06Byj ABT", 
            "c0dtRD9z52h66ki56IAsCA=039b!292hOHaF6Xpu0cD6yhYcICny3YyUp3A.wALBU41OfRr+-wNAfMTN=n~NTYSfy..",
            "Sa6NDoBKfDnjVZR%y5DNbJTTJmpg2~Y%gh2P3s.p Y11pPNj2OW8V0d!NG6B$O6TL$o#5$J3JXy+ObATDND$MUT8"]


// G3  

document.addEventListener('DOMContentLoaded', () => {
    
    const total = []
    let input = ""
    let spanValue = 16;

    range.addEventListener('change', (e) => {
    for (let i = 6; i <= e.target.value; i++) {
        span.textContent = i
        spanValue = i
    }
    });

    const elements = [
        { button: [numbers, numbers2, numbers3], values: [N, N2, N3] },
        { button: [lowletters, lowletters2, lowletters3], values: [az, az2, az3] },
        { button: [letters, letters2, letters3], values: [AZ, AZ2, AZ3] },
        { button: [character, character2, character3], values: [C, C2, C3] },
        { button: [mixing, mixing2, mixing3], values: [AN, AN2, AN3] }
    ];

    elements.forEach((obj) => {
        obj.button.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Push the corresponding value into the total array
                total.push([...obj.values[index]]);
                // Concatenate the value to the input string
                input += obj.values[index];
                // Update the text content of the mark element
                mark.textContent = total;

                //button[index].checked = true;
                button.checked = true;
            })
        });
    });

    let output = [];
    // to Exports from js
    function generate(x) {
        if (output.length >= 0) {
            while (output.length > 0) {
                output.shift()
            }
        }
        for (let j = 0; j < spanValue; j++) {
            output.push(input[Math.floor(Math.random() * input.length)])
            x.textContent = output.flat().join("").toString()
        }
    }

    function test(password) {
        let count = 0;
        if (/[a-z]/.test(password)) { count++ }; // Lowercase
        if (/[A-Z]/.test(password)) { count++ }; // Uppercase
        if (/[0-9]/.test(password)) { count++ }; // Numbers
        if (/[\W_]/.test(password)) { count++ }; // Special characters
        return count
    }
    function strength(t, o) {
        let count = t(o.flat().join("").toString())
            if( count >= 1 )
            {
                if ( spanValue <= 8 || count == 1 ) {
                    p1.textContent = "Weak"
                    p1.style.color = "rgb(252, 66, 66)"
                }
                else if ( count <= 3  )  {
                    if( spanValue >= 12 && count == 3){
                        p1.textContent = "Good"
                        p1.style.color =  "rgb(252, 187, 66)"
                    }else{
                        p1.textContent = "Normal"
                        p1.style.color = "rgb(158, 158, 43)"
                    }
                }
                else if ( spanValue >= 14 && count >= 4 ) {
                    p1.textContent = "Strong"
                    p1.style.color = "rgb(51, 139, 51)"
                }
            }
    }
     
    // G5 OK
        range.addEventListener('change', () => {
            generate(li)
            strength(test,output)
        })
        //G6 OK
        button.addEventListener('click', () => {
            generate(li)
            strength(test,output)
        })
    
        copy.addEventListener('click',() => {
            navigator.clipboard.writeText(li.textContent)
        })
        reset.addEventListener('click', () => {
            location.reload();
        })
        
})
 
