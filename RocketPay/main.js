import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg >g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg >g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
function setCardType(type) {
  const color = {
    visa: ["#436d99", "#2d57f2"],
    mastercard: ["#DF6f29", "#c69347"],
    Default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", color[type][0])
  ccBgColor02.setAttribute("fill", color[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}



globalThis.setCardType = setCardType


const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}

const securityCodeMask = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  lazy: false,

  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    } 
  },

}

const expirationDateMask = IMask(expirationDate, expirationDatePattern)

const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardType: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardType: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardType: "Default",
    }
  ],
  dispatch: function (appended, dynamicMasked) {
     const number = (dynamicMasked.value + appended).replace(/\D/g, "")
     const foundMask =dynamicMasked.compiledMasks.find(function (item){
        return number.match(item.regex)
     })
     
     return foundMask
  }

}

const cardNumberMask = IMask(cardNumber, cardNumberPattern)

const addButton = document.querySelector("#add-card")
addButton.addEventListener("click", () =>{
  console.log(`Mandei para o servidor:`)
}) 

document.querySelector("form").addEventListener("submit", (e) =>{
  e.preventDefault()
})

const cardHolder = document.querySelector("#card-holder")
cardHolder.addEventListener("input", (e) =>{
  const ccHolder = document.querySelector(".cc-holder .value")

  ccHolder.innerHTML =  cardHolder.value.length === 0 ? "FULANDO DE MATTOS" : cardHolder.value
})

securityCodeMask.on("accept",() => {
  updateSecurityCode(securityCodeMask.value)
})

function updateSecurityCode(code){
  const ccSecurity = document.querySelector(".cc-security .value")
  ccSecurity.innerHTML = code.length === 0 ? "123" : code
}

cardNumberMask.on("accept", () => {
  const cardType = cardNumberMask.masked.currentMask.cardType
  setCardType(cardType)
  updateCardNumber(cardNumberMask.value)
})

function updateCardNumber(number){
  const ccNumber = document.querySelector(".cc-number")
  console.log(number)
  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number
}

expirationDateMask.on("accept", () => {
  updateExpirationDate(expirationDateMask.value)
})

function updateExpirationDate(date){
  const ccExpiration = document.querySelector(".cc-extra .value")
  ccExpiration.innerText = date.length === 0 ? "02/32" : date
}

