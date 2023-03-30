

function vowelsubstring(s) {    
    let count=0;
    let vocales= new Set(['a','e','i','o','u']);
    let vocalesEncontradas = "";
    let lista = []
    for(let i=0; i<s.length; i++){
        
        if (vocales.has(s[i])){
            vocalesEncontradas += s[i];

        } 
        if (!vocales.has(s[i])){
            
        }
        
    }
    
    return vocalesEncontradas
}
function main()
{
    console.log(vowelsubstring("aaaertioujhyfgtys"));

}

main()