function introducir(){
		
        var arreglo = prompt('INTRODUCE UNA SERIE DE NÚMEROS ENTEROS SEPARADOS POR UN ESPACIO');

        
        var arrSplit = arreglo.split(" ");
    
       
        arrSplit.length;
    
        
        var numericArr=[];
        for(i=0; i<arrSplit.length; i++ )
            {
            numericArr[i] = parseInt(arrSplit[i])
            }
    
       
        var sortedArr = numericArr.sort(function(a, b){return a-b})
        
        document.getElementById('mostrador').innerHTML=("NUEVO ORDEN: " + numericArr);
    };