


let students = [
{
  name: "Rodrigo",
  n1: 10,
  n2: 9,
},
{
  name: "João",
  n1: 2,
  n2: 0,
},
{
  name: "Luiz",
  n1: 5,
  n2: 7,
},
{
  name: "Gustavo",
  n1: 7,
  n2: 8,
},
]

function averageGrade (student){
  return (student.n1 + student.n2) / 2
}


for (let student of students){
  let aprovedMessage = averageGrade(student)
  
  if(aprovedMessage >= 7){
    alert(`A média do(a) aluno(a) ${student.name} foi: ${aprovedMessage}.
    
Parabéns, você foi APROVADO!`)
  }else{
    alert(`A média do(a) aluno(a) ${student.name} foi: ${aprovedMessage}.
    
Que pena, você foi não foi aprovado. Não desista`)
}
}
