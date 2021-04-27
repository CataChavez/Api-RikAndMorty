import Character from './character.js'

class Detail extends Character {
    constructor(id, name, status, species, gender, created, origin, location, episode, image) {
        super(id)
        this._name = name
        this._status = status
        this._species = species
        this._gender = gender
        this._created = created
        this._origin = origin
        this._location = location
        this._episode = episode
        this._image = image
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    get status() {
        return this._status
    }

    set status(newStatus) {
        this._status = newStatus
    }

    get image() {
        return this._image
    }

    get created() {
        return this._created
    }

    get location() {
        return this._location
    }

    get episode() {
        return this._episode
    }

    infoModal() {
        return `<div class="modal fade show" id="personModal-${this.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style="display: block;">                            
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${this.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul>
                        <li><span>ID: ${this.id}</span></li>
                        <li><span>Nombre: ${this.name}</span></li>
                        <li><span>Género: ${this._gender}</span></li>
                        <li><span>Especie: ${this._species}</span></li>
                        <li><span>Status: ${this.status}</span></li>
                        <li><span>Creado: ${this.created}</span></li>
                        <li><span>Origen: ${this.location.name}</span></li>
                        <li><span>Cantidad de Episodios: ${this.episode.length}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    }

    infoGeneral() {
        return `<div class="col-12 col-sm-6 col-lg-4">
            <img src="${this.image}" data-id="${this.id}" alt="${this.name}" class="img-fluid characterDetail">
            <div class="d-inline-block detallePersona" id="person-${this.id}">
                <ul>
                    <li><span>${this.id}</span></li>
                    <li><span>${this._species}</span></li>
                </ul>
            </div>
        </div>`
    }
}

export default Detail
