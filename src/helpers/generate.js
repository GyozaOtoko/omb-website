//background
const background = (color) => `${wrapper(`${xml}<rect width="512" height="512" fill="${color || '#585663'}"/></svg>`)}`;
//nose
const nose = (color) => `${wrapper(`${xml}<rect x="290.7" y="239.8" width="7.1" height="8" fill="${color}"/><rect x="315.2" y="239.8" width="7.1" height="8" fill="${color}"/></svg>`)}`;
const eyesWhite = color => `<rect fill="${color || "#fff"}" x="217" y="188.8" width="56" height="41.4"/><rect fill="${color || "#fff"}" x="343.7" y="188.8" width="56" height="41.4"/>`;
const xml = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'
var lastFourDigits;
let lookDir = 'right';
let width = '';
let height = '';
let showCig = true;

// Define the tail colors
// color names dont match actual colors - fix
const tailColorMap = {
    1: "#e57428", // Purple
    2: "#40e248", // Lilac
    3: "#bacab0", // Yellow
    4: "#e3a1ff", // Blue
    5: "#aaaa1b", // Brown
    6: "#e29440", // Light Grey
    7: "#40dee2", // Green
    8: "#FF64C1", // Pink
    9: "#F95E3C", // Orange
    0: "#585663", // Grey
}

// Define the shirt colors
const backgroundColorMap = {
    1: "#aaaa1b", //NO - mustard yellow
    2: "#00c9c1", //Aqua blue
    3: "#ff9937", //NO - orange
    4: "#ccb6a2", //NO - cream
    5: "#427255", //NO - musk green
    6: "#6edb9a", //NO - light blue
    7: "#135a8e", //Blue
    8: "#9b6edb", //NO - purple
    9: "#30373d", //NO - dark grey
    0: "#30373d", //
}

const earringColors = ["#50c878","#dddcd7","#e8cb1f","#b9f2ff"]
const noseColors = ["#ea2824", "#fff"]
const bandanaColors = ["#ea2824","#e8800f","#2595e8","#050505"]

//Define the type colors
//body, face, shades, lines
const typeColorMap = {
    //lines,face,body,shadow,eyeBags
    1: ["#050505", "#ff954d", "#fff5f5", "#3a302b"], // gold
    2: ["#050505", "#efb68f", "#6D2BF8", "#3a302b"], // spirit
    3: ["#050505", "#ff954d", "#4aa31a", "#3a302b"], // alien
    4: ["#050505", "#efb68f", "#9f77ad", "#6D2BF8"], // female
    5: ["#050505", "#efb68f", "#2b2828", "#3a302b"], // black
    6: ["#050505", "#efb68f", "#b53e4c", "#3a302b"], // red
    7: ["#050505", "#b286b5", "#b7db96", "#3a302b"], // zombie
    8: ["#050505", "#efb68f", "#688ca5", "#3a302b"], // ice
    9: ["#050505", "#ff954d", "#493b34", "#3a302b"], // brown
    0: ["#050505", "#efb68f", "#e57428", "#e57428"], // orange
}

//Define the mouth items
const mouthTypes = (i) => {
    if (i==5) return `${xml}<rect x="269.3" y="267.65" fill="#050505" width="74.4" height="32.986"/><rect x="269.3" y="282.665" fill="#E21E3A" width="55" height="18.085"/></svg>`
    else if (i==4) return `${xml}<path fill="#050505" d="M325.6,284.15c0,7.399-4.8,13.699-11.6,15.8c-1.6,0.5-3.3,0.8-5,0.8c-9.1,0-16.6-7.4-16.6-16.6c0-9.2,0.3-3.4,0.8-5c2.1-6.7,8.399-11.5,15.8-11.5s16.6,7.399,16.6,16.6V284.15z"/><path fill="#E21E3A" d="M314.8,294.95c0,1.8-0.3,3.399-0.8,5c-1.6,0.5-3.3,0.8-5,0.8c-9.1,0-16.6-7.4-16.6-16.6c0-9.2,0.3-3.4,0.8-5c1.6-0.5,3.3-0.801,5-0.801C307.3,278.35,314.8,285.75,314.8,294.95z"/></svg>`
    else return `${xml}<rect x="269.3" y="267.65" fill="#FFFFFF" width="74.4" height="33.1"/><line fill="none" stroke="#050505" x1="322.5" y1="267.65" x2="322.5" y2="300.75"/><line fill="none" stroke="#050505" x1="269.3" y1="284.2" x2="343.7" y2="284.2"/><line fill="none" stroke="#050505" x1="294.4" y1="267.65" x2="294.4" y2="300.75"/></svg>`
}

//svg element
const mouthColors = {
    1: '#FF1E39', // closed red
    2: '', // open
    3: '#AF89FE', // closed purple
    4: '#15D96F', // green teeth
    5: '#FDF64D', // yellow teeth
    6: '#CBC7E3', // grey teeth
    7: "#15D96F", // teeth one line
    8: "#FF64C1", // diamond color
    9: "#000", // closed
    0: "#585663", // one line yellow
}

const mouthAccItems = {
    1: ``,
    2: `${xml}<circle fill="#E5879F" cx="352.7" cy="278.699" r="41.7"/><circle fill="#FFFFFF" cx="387" cy="275.799" r="5.6"/></svg>`, // gum
    3: `${xml}<rect x="309" y="282.167" fill="#826F56" width="80.399" height="17.5"/><rect x="389.399" y="282.167" fill="#FF102B" width="15.5" height="17.5"/><rect x="404.899" y="245.367" fill="#87888C" width="7.9" height="38.9"/></svg>`, // blunt
    4: `${xml}<rect x="309" y="282.167" fill="#FFFFFD" width="80.399" height="17.5"/><rect x="389.399" y="282.167" fill="#FF102B" width="15.5" height="17.5"/><rect x="404.899" y="245.367" fill="#87888C" width="7.9" height="38.9"/></svg>`, // cig
    5: ``,
    6: ``,
    7: ``,
    8: `${xml}<rect x="269.3" y="267.65" width="74.4" height="33.1"/><rect x="269.3" y="280" fill="#E21E3A" width="113.783" height="12"/></svg>`, // tongue,
    9: `${xml}<polygon fill="#FCD975" points="325.254,283.201 373.711,341.205 301.694,362.5 301.694,283.2"/><polygon fill="#CF7709" points="301.694,367 301.694,362.5 373.711,341.205 376.494,344.537"/><path fill="#BE421C" d="M340.443,304.295c4.067,5.581-0.432,12.779-7.973,12.779s-13.654-5.598-13.654-12.504c0-6.905,3.295-15.888,11.466-10.271C339.593,300.698,339.094,302.443,340.443,304.295z"/><path fill="#BE421C" d="M334.145,352.911c0.008-0.11,0.019-0.221,0.019-0.333c0-6.754-5.47-12.229-12.218-12.229c-6.746,0-12.216,5.475-12.216,12.229c0,2.606,0.832,5.009,2.223,6.99C317.102,358.269,333.706,352.998,334.145,352.911z"/></svg>`, // pizza
    0: `${xml}<rect x="269.3" y="267.65" fill="#050505" width="74.4" height="32.985"/><rect x="269.3" y="282.665" fill="#E21E3A" width="55" height="18.085"/><polyline fill="#FFFFFF" points="269.3,267.65 282.233,300.25 295.167,267.65"/><polyline fill="#FFFFFF" points="317.833,267.65 330.767,301.083 343.7,267.65"/></svg>`, // smirk
}

// Define the color map with the given colors
const shirtColorMap = {
    1: "#9b6edb", // Purple
    2: "#AF89FE", // Lilac
    3: "#FDF64D", // Yellow
    4: "#2067F0", // Blue
    5: "#976F53", // Brown
    6: "#CBC7E3", // Light Grey
    7: "#15D96F", // Green
    8: "#FF64C1", // Pink
    9: "#F95E3C", // Orange
    0: "#aaaa1b", // Grey
}

function wrapper(el){
    return `<div class="layer" style="position: absolute; top: 0px; left: 0px; width:${width}; height:${height}">${el}</div>`;
}

function genBackground(originalString, digits) {
    //background (cats stripes)
    if (originalString.length >=6 ) {
        const colorForSixthDigit = backgroundColorMap[digits[4]] || ""
        if (colorForSixthDigit) return background(colorForSixthDigit);
    }
    return background()
}

function genType(originalString, digits) {
    //body (cats body/tail)
    if (originalString.length >= 2) {
        const c = typeColorMap[digits[1]].map(i=>i) || ""
        let cheeks=digits[1]==4?`<rect fill="#c68d9e" x="196.8" y="263.8" width="41.7" height="46.1"/><rect fill="#c68d9e" x="374.5" y="263.8" width="41.7" height="46.1"/>`:''
        return wrapper(`${xml}<polygon fill="${c[2]}" points="148 361.9 148 524.7 112.1 524.7 112.1 397.7 64.1 397.7 64.1 461.1 28.2 461.1 28.2 361.9 148 361.9"/><rect fill="${c[2]}" x="222.1" y="347.1" width="159.7" height="177.6"/><rect fill="${c[2]}" x="153.6" y="123.5" width="283.6" height="231.4"/><rect fill="${c[2]}" x="103.6" y="181.1" width="65.6" height="83.3"/><polygon fill="${c[1]}" points="427 166.1 427 248.8 359.6 248.8 359.6 316.2 253.4 316.2 253.4 248.8 186 248.8 186 166.1 427 166.1"/><rect fill="${c[1]}" x="112.1" y="188.8" width="51.7" height="62.4"/><polygon fill="${c[0]}" points="152.3 200.5 120.6 200.5 120.6 205.6 152.3 205.6 152.3 244.3 157.4 244.3 157.4 205.6 157.4 200.5 152.3 200.5"/><rect fill="${c[0]}" x="259.5" y="423.4" width="91.5" height="4.4"/><rect fill="${c[0]}" x="252.2" y="451.7" width="106" height="4.4"/><rect fill="${c[0]}" x="247" y="395.4" width="112" height="4.4"/><rect fill="${c[0]}" x="209.1" y="277.6" width="5.1" height="33.9" transform="translate(-146.3 235.9) rotate(-45)"/><rect fill="${c[0]}" x="385.1" y="282.2" width="33.9" height="5.1" transform="translate(-85.9 376.1) rotate(-45)"/><rect fill="${c[3]}" class="cls-5" x="292.9" y="284" width="17.9" height="159.6" transform="translate(-61.9 665.7) rotate(-90)"/><rect fill="${c[3]}" class="cls-5" x="120.9" y="389" width="18.3" height="35.9" transform="translate(-276.8 536.9) rotate(-90)"/><rect fill="${c[3]}" class="cls-5" x="37" y="434" width="18.3" height="35.9" transform="translate(-405.8 498.1) rotate(-90)"/><rect fill="${c[3]}" class="cls-5" x="103.6" y="181.1" width="8.2" height="83.1"/><rect fill="${c[3]}" class="cls-5" x="378.6" y="222.9" width="8.2" height="33.8" transform="translate(142.9 622.6) rotate(-90)"/><rect fill="${c[3]}" class="cls-5" x="229.8" y="222.9" width="8.2" height="33.8" transform="translate(-6 473.7) rotate(-90)"/><polygon fill="${c[3]}" class="cls-5" points="153.6 123.5 153.6 188.8 160.1 188.8 160.1 251.2 153.6 251.2 153.6 355 163.8 355 163.8 123.5 153.6 123.5"/>${cheeks}</svg>`);
    }
    else return '';
}

function genMouthAcc(originalString, digits){
    //mouth accessories (cats right ear)
    if (originalString.length >= 4) {
        const mouthAccItem = mouthAccItems[digits[3]] || ""
        return digits[3]==4 && !showCig ? '' : wrapper(mouthAccItem)
    }
    return ''
}

function generateSvgForDigits(originalString, digits) {
    let svgs = []
    //stripes (cats left ear)
    if (originalString.length >= 3) {
        const colorForThirdDigit = tailColorMap[digits[2]] || ""
        svgs.push(wrapper(`${xml}<rect fill="${colorForThirdDigit}" x="120.9" y="389" width="18.3" height="35.9" transform="translate(-276.8 536.9) rotate(-90)"/><rect fill="${colorForThirdDigit}" x="120.9" y="420.6" width="18.3" height="35.9" transform="translate(-308.5 568.6) rotate(-90)"/><rect fill="${colorForThirdDigit}" x="120.9" y="452.3" width="18.3" height="35.9" transform="translate(-340.2 600.3) rotate(-90)"/></svg>`))
    }

    // shirt (cats head)
    if (originalString.length >= 1) {
        const colorForFirstDigit = shirtColorMap[digits[0]] || ""
        svgs.push(wrapper(`${xml}<path fill="${colorForFirstDigit}" d="M222.1,381.4c0,0,48.701,35.35,79.8,35.35s79.8-35.35,79.8-35.35V512H222.1V381.4L222.1,381.4z"/></svg>`))
    }

    //mouth (cats nose)
    if (originalString.length >= 5) {
        const mouthItem = mouthTypes(digits[5],mouthColors[digits[5]]) || ""
        svgs.push(wrapper(mouthItem));
    }
    
    return svgs.join('')
}

//eye direction
function getLook() {
    return lastFourDigits < 4800 ? "right" : lastFourDigits > 5200 ? "left" : "crossed";
}

function generateLookSvg(lookDir, colorWhite, colorPupil) {
    return lookDir === "left" ?
        `${eyesWhite(colorWhite)}<rect fill="${colorPupil || "#050505"}" x="343.7" y="188.8" width="25" height="41.4"/><rect fill="${colorPupil || "#050505"}" x="217" y="188.8" width="25" height="41.4"/></svg>`
    : lookDir === "right" ?
        `${eyesWhite(colorWhite)}<rect fill="${colorPupil || "#050505"}" x="247.9" y="188.8" width="25" height="41.4"/><rect fill="${colorPupil || "#050505"}" x="374.7" y="188.8" width="25" height="41.4"/></svg>`
    :
        `${eyesWhite(colorWhite)}<rect fill="${colorPupil || "#050505"}" x="374.7" y="188.8" width="25" height="41.4"/><rect fill="${colorPupil || "#050505"}" x="217" y="188.8" width="25" height="41.4"/></svg>`
}

function c420(number) {
    const numberStr = number.toString()
    return numberStr.includes('420')
}

function c4a0(number) {
    const numberStr = number.toString()
    return numberStr.includes('4') && numberStr.includes('0')
}

function displayO() {
    return wrapper(`${xml}<path fill="#FFFFFF" d="M357.8,401.6c-8.6,0-15.7,7.5-15.7,16.601c0,9.1,7,16.6,15.7,16.6s15.7-7.5,15.7-16.6C373.5,409.1,366.5,401.6,357.8,401.6z M357.8,429.1c-5.6,0-10.2-4.899-10.2-10.899s4.601-10.9,10.2-10.9c5.601,0,10.2,4.9,10.2,10.9S363.4,429.1,357.8,429.1z"/></svg>`)
}

function displayB() {
    return wrapper(`${xml}<rect x="349.9" y="440.6" fill="#FFFFFF" width="2.3" height="4.5"/><rect x="354.5" y="440.6" fill="#FFFFFF" width="2.3" height="4.5"/><path fill="#FFFFFF" d="M369.4,422.4V406.1H361.8v-4.5h-2.3v4.5h-2.3v-4.5h-2.3v4.5H345.3v36.5h26v-20.1h-2L369.4,422.4zM352.2,410.8h14v9.4h-14V410.8z M367.3,436.9h-15.1v-9.4h15.1V436.9z"/></svg>`)
}

function displayEarring(i) {
    if (i==4) return wrapper(`${xml}<rect fill="#ffd400" x="100.9" y="194.9" width="22.5" height="18.5"/></svg>`)
    return wrapper(`${xml}<polygon fill="${earringColors[i]}" points="118.5 256.2 113.6 262.8 118.5 267.6 124 263.2 118.5 256.2"/></svg>`)
}

function displayBandana(i) {
    return wrapper(`${xml}<rect fill="${bandanaColors[i]}" x="149.8" y="136.5" width="291.1" height="22.4"/></svg>`)
}

function displayEyes(i,d) {
    return i==1 ? `${xml}<rect fill="${typeColorMap[d][3]}" x="343.7" y="188.8" width="56" height="27.3"/><rect fill="${typeColorMap[d][3]}" x="217" y="188.8" width="56" height="27.3"/></svg>` : 
    i==2 ? `${xml}${generateLookSvg(lookDir,"#ea2824")}`:
    i==3 ? `${xml}<rect fill="#050505" x="215.2" y="175.9" width="59.9" height="3.9" transform="translate(32.4 -37.7) rotate(9.4)"/><rect fill="#050505" x="339.8" y="175.9" width="59.9" height="3.9" transform="translate(763.6 292.9) rotate(170.6)"/></svg>` :
    i==4 ? `${xml}${generateLookSvg(lookDir,"#4be005")}` : `${xml}${generateLookSvg(lookDir)}`
}

function displayNose(i) {
    return nose(noseColors[i-1]);
}

function checkNumbers(blockNumber, number, amount) {
    const blockString = blockNumber.toString();
    const numberStr = number.repeat(amount);
    return blockString.includes(numberStr);
}

function c8a8(number) {
    const numberStr = number.toString()
    const count = (numberStr.match(/8/g) || []).length
    return count >= 2 ? "c8a8" : null
}

function cp6(number) {
    const numberStr = number.toString()
    for (let i = 0; i <= numberStr.length - 6; i++) {
        const substring = numberStr.substring(i, i + 6)
        if (substring === substring.split('').reverse().join('')) {
            return "cp6"
        }
    }
    return null
}
function c9a9(number) {
    const numberStr = number.toString()
    const count = (numberStr.match(/9/g) || []).length
    return count >= 2 ? "c9a9" : null
}
// Function to check if a number contains a 4-digit square as a substring
function containsFourDigitSquare(number) {
    const numberStr = number.toString()
    for (let i = 0; i <= numberStr.length - 4; i++) {
        const substring = numberStr.substring(i, i + 4)
        const num = parseInt(substring, 10)
        if (Math.sqrt(num) % 1 === 0) {
            return true
        }
    }
    return false
}
// Function to generate SVG for laser eyes based on direction
function displayLaserEyes() {
    return lookDir === "left" ?
        `${xml}<rect fill="#ea2824" x="-23.6" y="216" width="386.8" height="12.4"/></svg>`
        :
        lookDir === "right" ?
        `${xml}<rect fill="#ea2824" x="254.4" y="216" width="386.8" height="12.4"/></svg>`
        :
        `${xml}<rect fill="#ea2824" x="383.3" y="216" width="257.9" height="12.4"/><rect fill="#ea2824" x="-23.6" y="215" width="257.9" height="12.4"/></svg>`
}
function cs5(number) {
    const numberStr = number.toString()
    for (let i = 0; i < numberStr.length - 4; i++) { // Ensure there are at least 3 characters to check
        const substring = numberStr.substring(i, i + 5) // Get the substring of 3 characters
        if (!substring.startsWith('0')) { // Exclude substrings starting with '0'
            const subNum = parseInt(substring, 10)
            const s = Math.sqrt(subNum)
            if (s === Math.floor(s)) { // Check if s is a perfect square
                return "cs5d" // Return a different identifier for 3-digit perfect squares
            }
        }
    }
    return null
}
function cs6(number) {
    const numberStr = number.toString()
    for (let i = 0; i < numberStr.length - 5; i++) { // Ensure there are at least 3 characters to check
        const substring = numberStr.substring(i, i + 6) // Get the substring of 3 characters
        if (!substring.startsWith('0')) { // Exclude substrings starting with '0'
            const subNum = parseInt(substring, 10)
            const s = Math.sqrt(subNum)
            if (s === Math.floor(s)) { // Check if s is a perfect square
                return "cs3d" // Return a different identifier for 3-digit perfect squares
            }
        }
    }
    return null
}
function ce7(number) {
    let numberStr = number.toString()
    let exponent = 7
    let power = 1
    while (power) {
        let exponentStr = Math.pow(exponent, power).toString()
        if (numberStr.includes(exponentStr)) {
            return true
        }
        if (Math.pow(exponent, power) > number) break // Stop if the exponent value exceeds the number
        power++
    }
    return false
}
function displayShades() {
    return wrapper(`${xml}<rect x="214" y="202" width="66" height="46"/><rect x="279" y="211" width="58" height="6"/><rect x="336" y="201" width="67" height="46"/><rect x="253" y="202" fill="#FFF" width="7" height="23"/><rect x="251" y="221" fill="#FFF" width="7" height="27"/><rect x="376" y="221" fill="#FFF" width="6" height="26"/><rect x="378" y="201" fill="#FFF" width="6" height="22"/></svg>`)
}
function displayMonocle() {
    return wrapper(`${xml}<path fill="#ACDEDE" fill-opacity="0.3" stroke="#000" stroke-width="11" d="M287.943,209.037c0,22.591-19.252,40.905-43,40.905c-22.414,0-41.717-17.824-42.821-39.944c-1.166-23.358,19.622-41.867,42.82-41.867C268.691,168.131,287.943,186.445,287.943,209.037z"/><rect x="198" y="215" width="8" height="160"/></svg>`)
}
function fib(number,smallest,n) {
    let numberStr = number.toString()
    let a = 0, b = 1
    let fibNumbers = new Set()
    while (b < smallest) {
        if (b >= smallest/10) {
            fibNumbers.add(b.toString())
        }
        [a, b] = [b, a + b]
    }
    for (let i = 0; i <= numberStr.length - n; i++) {
        let substring = numberStr.substring(i, i + n)
        if (fibNumbers.has(substring)) {
            return "fib"
        }
    }
    return null
}
function displayNeck(i) {
    let neck = [`<polygon fill="#050505" points="353 383 350.2 346.8 302.4 363.8 250.9 349.9 250.9 383 300.6 365 353 383"/></svg>`,`<polygon fill="#979e56" points="243.6 376.9 257.3 361.3 275.5 380.3 259.6 394.5 243.6 376.9"/><polygon fill="#569e6a" points="214.9 376.9 228.6 361.3 246.8 380.3 230.9 394.5 214.9 376.9"/><polygon fill="#f2d006" points="272.3 376.9 286 361.3 304.2 380.3 288.3 394.5 272.3 376.9"/><polygon fill="#f4950c" points="301 376.9 314.7 361.3 332.9 380.3 317 394.5 301 376.9"/><polygon fill="#e0221e" points="329.7 376.9 343.3 361.3 361.6 380.3 345.7 394.5 329.7 376.9"/><polygon fill="#dd1fc2" points="357.7 376.9 371.3 361.3 389.6 380.3 373.6 394.5 357.7 376.9"/></svg>`,`<rect fill="#e8cb1f" x="214.9" y="369.2" width="175" height="21.6"/></svg>`];
    return wrapper(`${xml}${neck[i]}`)
}
function mul(n,m) {
    if (n!=0)
        return n % m === 0 ? true : false;
}
function displayHat(i){
    let hats = [`<rect fill="#0f1e1d" x="173.6" y="9.3" width="248.7" height="82.7"/><polygon fill="#0f1e1d" points="422.3 92 400.2 92 186.2 92 173.6 92 117.5 92 117.5 123.5 479.7 123.5 479.7 92 422.3 92"/><rect fill="#e8cb1f" x="170.8" y="67.3" width="254.3" height="24.5"/></svg>`,`<polygon fill="#569e6a" points="262 123.5 229.4 123.5 244.6 59.3 245.3 59.3 262 123.5"/><polygon fill="#979e56" points="283.8 123.5 243 123.5 261.9 43.2 262.9 43.2 283.8 123.5"/><polygon fill="#f2d006" points="309.3 123.5 263.4 123.5 284.7 33.1 285.8 33.1 309.3 123.5"/><polygon fill="#f4950c" points="341.1 123.5 285.2 123.5 311.2 13.4 312.5 13.4 341.1 123.5"/><polygon fill="#e0221e" points="361.4 123.5 315.5 123.5 336.8 33.1 337.9 33.1 361.4 123.5"/></svg>`,`<path fill="#232359" d="M503.1,101.2h-51.6v-9.8c0-45.9-37.2-83-83-83h-143.9c-45.9,0-83,37.2-83,83v32.1h310c0-.1,51.6-.1,51.6-.1v-22.2Z"/><circle fill="#ff954d" cx="296.6" cy="68.3" r="32.9"/></svg>`,`<rect fill="#30373d" x="88.1" y="174.4" width="85.2" height="102.3"/><rect fill="#30373d" x="125.7" y="109.2" width="22.3" height="65.9"/><rect fill="#30373d" x="125.7" y="85.5" width="296.9" height="23.8"/><polygon fill="#30373d" points="442.6 174.4 442.6 85.5 420.1 85.5 420.1 109.2 437.2 109.2 437.2 123.9 437.2 123.9 437.2 276.7 462.7 276.7 462.7 174.4 442.6 174.4"/></svg>`,`<polygon fill="#1d1ddb" points="440.2 123.5 145.2 123.5 208.8 78 218.4 71.2 290.9 19.3 383.6 84 393.3 90.8 440.2 123.5"/><polygon fill="#e5e50e" points="393.3 90.8 388.6 92.5 385.6 100.5 382.6 92.5 374.7 89.6 382.6 86.6 383.6 84 393.3 90.8"/><polygon fill="#e5e50e" points="302 93.9 305 102.1 313.1 105.1 305 108.1 302 116.2 299 108.1 290.9 105.1 299 102.1 302 93.9"/><polygon fill="#e5e50e" points="284 34.4 287 42.5 295.2 45.5 287 48.5 284 56.6 281 48.5 272.9 45.5 281 42.5 284 34.4"/><polygon fill="#e5e50e" points="223 80.2 214.6 78.2 207.6 83.2 208.8 78 218.4 71.2 217.9 73.2 223 80.2"/></svg>`,`<polygon fill="#e5e50e" points="151.8 110.1 151.8 35.1 249.1 90.3 310.6 35.1 359.1 92.1 439 35.1 439 123.5 151.8 123.5 151.8 110.1"/><polygon fill="#c1501f" points="296.1 87.3 308.2 73.5 324.4 90.3 310.2 102.9 296.1 87.3"/></svg>`];
    return wrapper(`${xml}${hats[i]}`);
}
function displaySuit(){
    return wrapper(`${xml}<path fill="#050505" d="M304.541,455.685l-66.9-73.399c-7.9-0.699-15.541-0.985-15.541-0.985V512h159.6V381.3l-21.359,2.041L304.541,455.685z"/><path fill="#FFFFFF" d="M348.841,384.241l-45.3,58.7l-54.4-59.7l-11.5-0.956l66.9,73.355l55.8-72.3L348.841,384.241z"/></svg>`)
}
function displayHoodie() {
    return wrapper(`${xml}<rect x="186" y="167" fill="#fff" fill-opacity="0" width="240" height="150"/><rect x="153" y="123" fill="#F7931A" width="34" height="232"/><rect x="222" y="354" fill="#F7931A" width="160" height="158"/><rect x="103" y="181" fill="#F7931A" width="51" height="84"/><rect x="426" y="123" fill="#F7931A" width="12" height="232"/><rect x="186" y="123" fill="#F7931A" width="241" height="44"/><rect x="186" y="316" fill="#F7931A" width="241" height="39"/><rect x="242" y="316" fill="#330000" width="12" height="100"/><rect x="350" y="316" fill="#330000" width="12" height="61"/><rect x="296.5" y="471.3" width="3.5" height="7"/><rect fill="#000" x="303.7" y="471.3" width="3.5" height="7"/><path fill="#000" d="M319.1,439.9v-25.5h-11.8v-7h-3.5v7h-3.6v-7h-3.5v7h-15v56.9h40.7v-31.4h-3.2ZM292.3,421.7h21.9v14.7h-21.9v-14.7ZM315.8,462.5h-23.5v-14.7h23.5v14.7Z"/></svg>`);
}
function displayRedCape() {
    return wrapper(`${xml}<polygon fill="#ef112c" points="222.1 354.9 46.2 518.7 211.6 524.7 374.7 354.9 222.1 354.9"/><rect fill="#ef112c" x="217" y="354.9" width="165.8" height="7"/></svg>`)
}
function displayRibbon() {
    return wrapper(`${xml}<polygon fill="#c68d9e" points="415 149.9 415 91.7 370.3 109 378.1 137.6 415 149.9"/><polygon fill="#c68d9e" points="316.6 149.9 316.6 91.7 361.3 109 353.5 137.6 316.6 149.9"/><polygon fill="#4f363e" points="371.5 111.4 377.9 138 362.1 141.9 352.6 138.4 360.4 108.6 370.9 108.6 371.5 111.4"/></svg>`)
}

//fixed elements
function generateHtmlBasedOnBlockNumber(blockNumber, widthIn, heightIn, cigChecked) {
    const originalString = blockNumber.toString()
    const digits = originalString.padStart(7, '0').split('').map(Number).reverse()
    width = widthIn;
    height = heightIn;
    showCig = cigChecked;
    if (originalString.length >=4 ) {
        lastFourDigits = parseInt(blockNumber.toString().slice(-4))
        lookDir = getLook()
    }

    const lookHtml = wrapper(`${xml}${generateLookSvg(lookDir)}`)
    let OB = c420(blockNumber) ? displayB() : c4a0(blockNumber) ? displayO() : "";
    let earrings = '';
    earrings = c8a8(blockNumber) ? displayEarring(0) : '';
    for (let i=2;i<6;i++) {
        checkNumbers(blockNumber, '8', i) ? earrings=earrings+displayEarring(i-1) : "";
    }
    let eyes = '';
    for (let i=1;i<6;i++) {
        if (checkNumbers(blockNumber, '0', i)) {
            eyes = displayEyes(i,digits[1])
        }
    }
    eyes = wrapper(eyes);
    let noses = nose();
    for (let i=2;i<4;i++) {
        checkNumbers(blockNumber, '1', i) ? noses=noses+displayNose(i-1) : "";
    }
    let bandana = '';
    bandana = c9a9(blockNumber) ? displayBandana(0) : '';
    for (let i=2;i<5;i++) {
        checkNumbers(blockNumber, '9', i) ? bandana=displayBandana(i-1) : "";
    }
    let neck = '';
    let n = 1000;
    for (let i=3;i<8;i++) {
        fib(blockNumber,n,i) ? neck=displayNeck(i-3) : "";
        n=n*10
    }
    let hat = '';
    for (let i=12;i<17;i++) {
        mul(blockNumber,i) ? hat=displayHat(i-12) : "";
    }
    if (mul(blockNumber,69)) hat=displayHat(5);
    let redCape = cp6(blockNumber) ? displayRedCape() : "";
    let ribbon = ce7(blockNumber) ? displayRibbon() : ""
    let shades = cs5(blockNumber) ? displayShades() : ""
    let monocle = cs6(blockNumber) ? displayMonocle() : ""
    let suit = mul(blockNumber,11) ? displaySuit() : ""
    let hoodie = mul(blockNumber,888) ? displayHoodie() : ""
    const containsSquare = containsFourDigitSquare(blockNumber)
    const laserEyes = containsSquare ? wrapper(displayLaserEyes(lookDir)) : ""
    const svgsForDigits = generateSvgForDigits(originalString, digits)

    //mouth
    const mouth = wrapper(`${xml}<path fill="#050505" d="M325.6,284.15c0,7.399-4.8,13.699-11.6,15.8c-1.6,0.5-3.3,0.8-5,0.8c-9.1,0-16.6-7.4-16.6-16.6c0-9.2,0.3-3.4,0.8-5c2.1-6.7,8.399-11.5,15.8-11.5s16.6,7.399,16.6,16.6V284.15z"/><path fill="#E21E3A" d="M314.8,294.95c0,1.8-0.3,3.399-0.8,5c-1.6,0.5-3.3,0.8-5,0.8c-9.1,0-16.6-7.4-16.6-16.6c0-9.2,0.3-3.4,0.8-5c1.6-0.5,3.3-0.801,5-0.801C307.3,278.35,314.8,285.75,314.8,294.95z"/></svg>`);
    const displayBackground = genBackground(originalString, digits);
    //construction
    let htmlContent = displayBackground + redCape + genType(originalString, digits) + mouth + svgsForDigits + hoodie + suit + neck + genMouthAcc(originalString, digits) + bandana + lookHtml + eyes + noses + OB + laserEyes + shades + monocle + earrings + hat + ribbon
    htmlContent = displayBackground + redCape + genType(originalString, digits) + mouth + svgsForDigits + hoodie + suit + neck + genMouthAcc(originalString, digits) + bandana + lookHtml + eyes + noses + OB + laserEyes + shades + monocle + earrings + hat + ribbon
    return htmlContent
}

module.exports = {
    generateHtmlBasedOnBlockNumber
}