import Calculadora from "./components/calculadora"

function App() {

  return (
    <>
      <h1 className="text-center mt-5 text-5xl">Calculadora de IMC</h1>
      <div className=" m-5">
        <p>A classificação do índice de massa corporal <a href="https://www.tuasaude.com/imc/" className=" text-justify underline font-bold hover:text-blue-500 transition-all">(IMC)</a> pode ajudar a identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos.</p>
        <p className=" text-justify">lém de calcular o valor de IMC, esta calculadora também indica qual o intervalo de peso ideal que deve ter para garantir uma melhor qualidade de vida. Ter um peso dentro do intervalo de peso ideal ajuda ainda a evitar o aparecimento de várias doenças crônicas, como diabetes e hipertensão.</p>
      </div>
      <h3 className="text-center mt-3 text-2xl mb-3">Coloque os seus dados na calculadora e calcule o seu IMC:</h3>
      <Calculadora />
    </>
  )
}

export default App
