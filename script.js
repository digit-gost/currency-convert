const input = document.querySelector('input')


const from = document.querySelector('#from')
const to = document.querySelector('#to')

const convertBtn = document.querySelector('button')
const finalAmount = document.querySelector('#final-amount')

const devise = ["$", "€", "₣"]

 /*cfa -> euro*/ const cfaEuro = (amount) => amount / 655.957
 /*euro -> cfa*/ const euroCfa = (amount) => amount * 655.957
 /*usdol -> cfa*/ const usCfa = (amount) =>  amount * 610
 /*cfa -> usdol*/ const cfaUs = (amount) => amount / 610
 /*euro -> usdol*/ const euroUsdol = (amount) => amount * 1.18
/*usdol -> euro */ const usdolEuro = (amount) => amount / 1.18
/*euro -> euro */ const euro = (amount) => amount
/*usd -> usd */ const usd = (amount) => amount
/*cfa -> cfa */ const cfa = (amount) => amount

convertBtn.addEventListener('click', () => {
    const id = from.value + "-" + to.value
    switch (id) {
        case "xof-euro":
            console.log(cfaEuro(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${cfaEuro(input.value).toFixed(3)} ${devise[1]}</p>`
            break;
            
    
        case "euro-xof":
            console.log(euroCfa(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${euroCfa(input.value).toFixed(3)} ${devise[2]}</p>`
            break;
    
        case "usd-xof":
            console.log(usCfa(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${usCfa(input.value).toFixed(3)} ${devise[2]}</p>`
            break;
    
        case "xof-usd":
            console.log(cfaUs(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${cfaUs(input.value).toFixed(3)} ${devise[0]}</p>`
            break;
    
        case "euro-usd":
            console.log(euroUsdol(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${euroUsdol(input.value).toFixed(3)} ${devise[0]}</p>`
            break;
    
        case "usd-euro":
            console.log(usdolEuro(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${usdolEuro(input.value).toFixed(3)} ${devise[1]}</p>`
            break;
    
        case "euro-euro":
            console.log(euro(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${euro(input.value)} ${devise[1]}</p>`
            break;
    
        case "usd-usd":
            console.log(usd(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${usd(input.value)} ${devise[0]}</p>`
            break;
    
        case "xof-xof":
            console.log(cfa(input.value))
            finalAmount.innerHTML = `Le motant est de <p class="montant">${cfa(input.value)} ${devise[2]}</p>`
            break;
    
        default:
            break;
    }
})