

const loadingQuote = document.getElementById("quote")
const autherText = document.getElementById("author")
const newquoteBtn = document.getElementById("newquote")
const error = document.getElementById("error")

async function getQuote() {

    const apiUrl = `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random&timestamp=${new Date().getTime()}`;


    try {
        loadingQuote.innerText = "loading..."
        autherText.innerText = ""
        error.innerText = ""

        const response = await fetch(apiUrl)


        if (!response.ok) {
            throw new Error("Network response was not ok")
        }


        const data = await response.json()

        loadingQuote.innerText = data[0].q
        autherText.innerText = "--" + data[0].a

    }
    catch (error) {
        error.innerText = "Failed to fetch quote. Please try again."
        loadingQuote.innerText = ""
        autherText.innerText = ""
    }
}

newquoteBtn.addEventListener("click", () => {
    getQuote()
})

getQuote()


































