import Detail from './detail.js'

const Main = (() => {

    // State
    const state = {
        api_url: 'https://rickandmortyapi.com/api/character/'
    }

    // DOM Cache
    const _body = document.body
    const spinner = document.querySelector('.spinner-border')
    const characters_div = document.querySelector('.resultados')
    const character_title = document.querySelector('.text-center')
    const characters_size = document.querySelector('#cantidadPersonajes')

    // Listeners
    document.addEventListener('click', clickEventHandler)

    // Event Delegation
    function clickEventHandler(e) {
        e.preventDefault()

        if (e.target.closest('.close')) {
            _body.removeChild( e.target.closest('.modal') )
        }

        if (e.target.closest('.characterDetail')) {
            const id = parseInt(e.target.dataset.id)
            if (typeof(id) === NaN) { return }

            apiCall(id)
        }
    }

    // Functions
    function init() {
        apiCall(state.api_url)
        // setTimeout(() => apiCall(2), 1000)
    }

    async function apiCall(url) {
        const _url = typeof(url) === "number" ? state.api_url + url : url

        try {
            const request = await fetch(_url)
            const data = await request.json()
            typeof(url) === "number" ? setDetail(data) : setCharacters(data.results)

        } catch (error) {
            console.error(error)
        }
    }

    function setDetail(data) {
        const { id, name, status, species, gender, created, origin, location, episode, image } = data
        state.character = new Detail(id, name, status, species, gender, created, origin, location, episode, image)
        renderDetail()
    }

    function setCharacters(data) {
        state.characters = data.map(character => {
            const { id, name, status, species, gender, created, origin, location, episode, image } = character
            return new Detail(id, name, status, species, gender, created, origin, location, episode, image)
        })
        renderCharacters()
    }

    function renderDetail() {
        _body.innerHTML = _body.innerHTML + state.character.infoModal()
    }

    function renderCharacters() {
        characters_div.innerHTML = state.characters.map(character => character.infoGeneral()).join('')
    }

    function publicFunction() {
        character_title.removeChild(spinner)
        characters_size.innerHTML = state.characters.length
    }

    // API Access
    return { init, publicFunction }
})()

setTimeout(() => {
    Main.publicFunction()
}, 500)

Main.init()