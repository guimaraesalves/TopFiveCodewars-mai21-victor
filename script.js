let ranking  = [
    {  
    nome: 'Julia Gama', 
    pontos: 126 
    },    
    
    {
    nome: 'Laudemir',
    pontos: 0
    },
    
    {
    nome: 'Emanuel Martins',
    pontos: 112
    },    
    
    {
    nome: 'Lucas Elias',
    pontos: 135
    },    
    
    {
    nome: 'Ian kuntz',
    pontos: 82
    },
    
    {
    nome: 'João Pedro Nonato', 
    pontos: 50
    },
    
    {
    nome: 'Sthéfany Gomes',
    pontos: 120
    },
    
    
    {
    nome: 'Rafael Sousa', 
    pontos: 133
    },
    
    
    {
    nome: 'Wallace Silva', 
    pontos: 281
    },    
    
    {
    nome: 'Madu Rubini',
    pontos: 111
    },    
    
    {
    nome: 'Felipe Silveira',
    pontos: 311
    },
    
    {
    nome: 'Natan dos Santos',
    pontos: 59
    },
    
    {
    nome: 'Matheus Bueno',
    pontos: 220,
    },    
    
    {
    nome: 'Miguel Teruel',
    pontos: 138
    },
    
    {
    nome: 'Ique Moraes',
    pontos: 69
    },
        
    {
    nome: 'Nicholas dos Santos',
    pontos: 57
    },
    
    
    {
    nome: 'Gabriel Gutierrez',
    pontos: 192
    },    
    
    { 
    nome: 'Renato Tateiwa',
    pontos: 322
    },    
    
    { 
    nome: 'Glen Escobar',
    pontos: 218
    },  
    
    
    { 
    nome: 'Willian Santos',
    pontos: 70
    },    
    
    { 
    nome: 'Mateus Alves',
    pontos: 215
    },    
    
    { 
    nome: 'Kaueh Prats',
    pontos: 76
    },    
    
    { 
    nome: 'Ricardo Oliveira',
    pontos: 82
    },
    
    
    { 
    nome: 'Victor Scherer',
    pontos: 91
    },    
    
    { 
    nome: 'Natalia Veríssimo',
    pontos: 0
    },    
    
    { 
    nome: 'Luciana Nunes',
    pontos: 60
    },   
    
    { 
    nome: 'Thiago Trad',
    pontos: 100
    }];


    ranking.sort(function (a, b) {
        if (a.pontos < b.pontos) {
        return 1;
        }
        if (a.pontos > b.pontos) {
        return -1;
        }
        // a must be equal to b
        return 0;
  });

  //console.log(ranking)

let arrTop = []
for (let i = 0; i < 5; i++){
    arrTop.push(ranking[i])
}


const listas = [];
listas[0] = { nome: 'Renato Tateiwa', pontos: 322 };
listas[1] = { nome: 'Felipe Silveira', pontos: 311 };
listas[2] = { nome: 'Wallace Silva', pontos: 281 };
listas[3] = { nome: 'Matheus Bueno', pontos: 220 };
listas[4] = { nome: 'Glen Escobar', pontos: 218 };

const novalista = listas.map(lista => ({
    nome: lista.nome,
    pontos: lista.pontos
}))


document.getElementById("first").innerHTML = Object.values(arrTop[0]);
document.getElementById("second").innerHTML = Object.values(arrTop[1]);
document.getElementById("third").innerHTML = Object.values(arrTop[2]);
document.getElementById("fourth").innerHTML = Object.values(arrTop[3]);
document.getElementById("fifth").innerHTML = Object.values(arrTop[4]);


//console.log(Object.values(arrTop[0]));





