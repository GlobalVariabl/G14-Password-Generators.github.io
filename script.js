"use strict"

let mark = document.getElementById('mark')

let button = document.getElementsByTagName('button')[0]

let copy = document.getElementById('copy')
let p = document.getElementsByTagName('p')[0]
let li = document.getElementsByTagName('p')[1]
let p1 = document.getElementsByTagName('p')[2]
let reset = document.getElementById('reset')


// G2 

const values =[ 
    "596130287463590381","pknojbughivyfcrtdxeswzqaml", "CEMSIXHJHWBGRALZYTPDCNFOVUXPKQYUOLDXBKOPYLSDITZ",
    "?$=,:(*@~=)&*? +=~$*?&[&#,_+ %.&-_n/*",
    "KHn-z$Nlc8rA_uTiaRHcEUTtN#5cTZ3Zni*6IGpnLVyNToybnnNHI2)466vcHz_xhZA9bv6T5Z0$dP6YUL06Byj ABT",
    "496150382764856692","ykxpcojahdsnrgfqzebtwuvmli","PZJWFWWKDXJGYVWYSVXSSTHJFDXQUTTJPMICAQAGKPETEFI",
    " _#  , ~@$&#%%!* *=:*.&!~#/.!=_/!~[??+*(-?+/#$_*&:.(%&_#_:$,~_=$=,_:[+",
    "c0dtRD9z52h66ki56IAsCA=039b!292hOHaF6Xpu0cD6yhYcICny3YyUp3A.wALBU41OfRr+-wNAfMTN=n~NTYSfy..",
    "370864529107514318", "eijfmusbkycndxgtwrzolhpvqa", "DUJSKHMYGWJYPONIFHEATRIJHRTDEWCVYGIFGQHZZRXQNHK", 
    "!@ -:%+*!% ##[$=/$$&[~_@ (,~:-,~ #$%**?-+ ,*+%%?_!*~.+?*% + _*_)!#.+%~",
    "Sa6NDoBKfDnjVZR%y5DNbJTTJmpg2~Y%gh2P3s.p Y11pPNj2OW8V0d!NG6B$O6TL$o#5$J3JXy+ObATDND$MUT8" 
]



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
    let checkbox = document.getElementsByTagName("input")
    Array.from(checkbox).forEach(( element, index, arr)=>{
        element.addEventListener("click",(e)=>{
            total.push([values[index]]);
                // Concatenate the value to the input string
            input +=values[index];
                // Update the text content of the mark element
            mark.textContent = total;
                //button[index].checked = true;
            arr[index].checked = true;

        })

    })



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
 
