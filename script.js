
let botao = document.getElementById("but");
let cont = document.getElementById("cont");




function criar(){
    setInterval(()=>{
        let color = Math.round(Math.random() * 10);
                if(color == 0){
                    cont.innerHTML = cont.innerHTML + '<div class="square" style="display:inline-block;background-color:yellow;"></div>'; 
                }
                else if(color == 1){
                    cont.innerHTML = cont.innerHTML + '<div class="square" style="display:inline-block;background-color:orange; "></div>'; 
                }
                else if(color == 2){
                    cont.innerHTML = cont.innerHTML + '<div class="square" style="display:inline-block;background-color:red; "></div>'; 
                }

        },1)
}
 botao.addEventListener('click',criar)
