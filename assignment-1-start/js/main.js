// this is our javascript file.
const USER = "Angelica"

console.log ('js is linked')
// Please refer to the "Required Tasks in the assignments PDF"

let newCheep = document.querySelector('#cheep-form')

newCheep.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log("not submitted")

    let textElement = event.target.elements["cheep-text"]
    let gifElement = event.target.elements["cheep-gif"]

    let text = textElement.value
    let gif = gifElement.value

    let isFormValid = true

    let isCheepValid = isValueNotEmpty(text) && cheepCharLimit(text)
    if (!isCheepValid){
        textElement.classList.add ('is-invalid')
        isFormValid = false
    }
    else {
        textElement.classList.remove ('is-invalid')
    }


    let isGifValid = isValueNotEmpty(gif)
    if (!isGifValid){
        textElement.classList.add ('is-invalid')
        isFormValid = false
    }
    else {
        textElement.classList.remove ('is-invalid')
    }



    // //add cheep
    // addCheep(text, gif)

    // event.target.elements["text"].value = ""
    // event.target.elements["gif"].value = ""
})


const isValueNotEmpty = (value) => {
    if (value !== "") {
        return true
    }
    return false
}

const cheepCharLimit = (value) => {
    if (value < 50){
        return true
    }
    return false
}

// html for the add cheep create function
/*
    <li class="text-center list-group-item list-group-item-action" aria-current="true">
        <p>Author: USERNAME HERE</p>
        <div class="row h-100">
            <div class="col-sm">
                <img src="CHEEP GIF HERE" class="rounded float-start" alt="CHEEP GIF HERE">    
            </div>
            <div class="col-sm h-100">
                <h5 class="mb-1">CHEEP TEXT HERE</5>
            </div>
        </div>
    </li>
*/