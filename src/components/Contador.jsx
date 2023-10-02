import React, {useState} from "react";

function Contador (){
    const [contador,setContador] = useState(0)

    const decremento = () => {
        if(contador>0){
            setContador(contador - 1)
        }
    }

    const incremento = () => {
        if(contador <10){
            setContador(contador + 1)
        }
    }

    const resetar = () => {setContador(0)}

    return(
        <main>
        <h1>Contador VNW - Modulo 2</h1>
        <div className="conteudo">
        <button className="incremento" onClick={incremento}>+</button>
        <h2>{contador}</h2>
        <button className="decremento" onClick={decremento}>-</button>
        </div>

        <button className="btnReset" onClick={resetar}>Reset</button>
        </main>
    )
}

export default Contador;