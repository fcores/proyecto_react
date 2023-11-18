import React from 'react'

const Contact = () => {
    return (
        <div>
            <main>
                <div class="container">
                    <div class="abs-center">
                        <div class="m-3 w-75">
                            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1"
                                placeholder="Ingrese su nombre y apellido"/>
                        </div>
                        <div class="m-3 w-75">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@ejemplo.com"/>
                        </div>
                        <div class="m-3 w-75">
                            <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="m-3 btn btn-primary">Enviar ahora</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact