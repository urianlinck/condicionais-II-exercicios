let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

switch(nacionalidade){ 
    case "brasileira":
        console.log("a pessoa é do Brasil!")
        break
    case "argentina":
        console.log("a pessoa é da Argentina!")
        break
    case "uruguaia":
        console.log("a pessoa é do Uruguai!")
        break
    case "chilena":
        console.log("a pessoa é do Chile!")
        break
    case "colombiana":
        console.log("a pessoa é da Colômbia!")
        break
    default:
        console.log("nacionalidade não encontrada")
}