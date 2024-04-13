import { useEffect, useState } from "react";
import magreza from '../assets/magreza.png'
import normal from '../assets/normal.png'
import sobrepeso from '../assets/sobrepeso.png'
import obesidade from '../assets/obesidade.png'

const Calculadora = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const renderizaTabela = () => {
        const imc = peso * 10000 / (altura * altura)
        const resultado = imc.toFixed(1)

        if (imc === 0) {
            return 
        } else if (imc < 18.5) {
            return (
                <div className="flex gap-4 flex-col bg-red-300">
                    <h4 className=" text-xl ">Seu imc é de <b>{resultado} kg/m2</b></h4>
                    <p>De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre <b>50.4 e 67.8 kg.</b></p>
                    <img src={magreza} alt="Tabela IMC" />
                </div>
            )
        } else if (imc > 18.5 && imc < 24.9) {
            return (
                <div className="flex gap-4 flex-col bg-green-200">
                    <h4 className=" text-xl ">Seu imc é de <b>{resultado} kg/m2</b></h4>
                    <p>
                    De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <b>50.4 e 67.8 kg</b>.
                    </p>
                    <img src={normal} alt="Tabela IMC" />
                </div>
            )
        } else if (imc >= 24.9 && imc <= 30) {
            return (
                <div className="flex gap-4 flex-col bg-yellow-100">
                    <h4 className=" text-xl ">Seu imc é de <b>{resultado} kg/m2</b></h4>
                    <p>
                    De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <b>50.4 e 67.8 kg</b>.
                    </p>
                    <img src={sobrepeso} alt="Tabela IMC" />
                </div>
            )
        } else if (imc > 30) {
            return (
                <div className="flex gap-4 flex-col bg-red-400">
                    <h4 className=" text-xl ">Seu imc é de <b>{resultado} kg/m2</b></h4>
                    <p>
                    De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <b>50.4 e 67.8 kg</b>.
                    </p>
                    <img src={obesidade} alt="Tabela IMC" />
                </div>
            )
        }
    }

    return ( 
        <>
        <form >
            <ul className="flex flex-col justify-center items-center text-center gap-3">
                <li>
                    <p className=" text-lg font-bold">Idade</p>
                    <input className=" outline outline-1 rounded outline-gray-400 mr-1 p-2" type="number" placeholder="EX:35"/> anos
                </li>
                <li>
                    <p className=" text-lg font-bold">Altura</p>
                    <input className=" outline outline-1 rounded outline-gray-400 mr-1 p-2 " type="number" placeholder="EX:165" onChange={e => setAltura(parseInt(e.target.value))}/> cm
                </li>
                <li>
                    <p className=" text-lg font-bold">Peso</p>
                    <input className=" outline outline-1 rounded outline-gray-400 mr-1 p-2" type="number" placeholder="EX:62.5" onChange={e => setPeso(parseInt(e.target.value))}/> kg
                </li>
                <div className=" ml-10 mr-10 gap-5 mt-5 text-center flex flex-col">
                    {renderizaTabela()}
                </div>
            </ul>
        </form>
        </>
     );
}
 
export default Calculadora;