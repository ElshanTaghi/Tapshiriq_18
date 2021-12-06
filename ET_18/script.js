class sirket {
    constructor(sirketAdi,filialAdi){
        this.sirket = sirketAdi,
        this.filial = filialAdi
    }

    isciler = [
        [],
        [],
        []
    ]


    gonder(){
        let data = this.isciler;
        let ad = document.getElementById("ad").value;
        let vezife = document.getElementById("vezife").value;
        let maas = document.getElementById("maas").value;


        data[0].push(ad);
        data[1].push(vezife);
        data[2].push(maas);
        
    }


    table() {
        let data = this.isciler;

        let tbl = document.getElementById("tbl");
        let show =`<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad</th>
          <th scope="col">Vezife</th>
          <th scope="col">Maas</th>
        </tr>
      </thead>`;
        
        for(let i=0;i<data[0].length;i++){

            show+= `   <tr>
            <th scope="row">${i+1}</th>
            <td> ${data[0][i]} </td>
            <td>${data[1][i]}</td>
            <td>${data[2][i]}</td>
          </tr>` 
        }
        tbl.innerHTML=show;
    }


}



const a = new sirket("Yup Technology", 'Nizami');
const b = new sirket("Yup Technology", 'Elmler');
const c = new sirket("Yup Technology", 'Yasamal');

document.getElementById("sirket").innerHTML = a.sirket;
document.getElementById("filial").innerHTML = "Filial";

let arr = [];

// let arrf = [];

arr.push(a.filial,b.filial,c.filial);


function temizle(){
    document.getElementById("ad").value ="";
    document.getElementById("vezife").value ="";
    document.getElementById("maas").value ="";
}


//  let bsend =function send() {
//     b.gonder();
//     b.table();
//    temizle()
// }

function send() {
    let ad = document.getElementById("ad").value;
    let vezife = document.getElementById("vezife").value;
    let maas = document.getElementById("maas").value;

        if (ad !== "" && vezife !== "" && maas !== "") {
            a.gonder();
        a.table();
       temizle()
            
        } else {
            alert("You didn't enter your information!");
            
        }
        
    }

function filialchange(){
    const a = new sirket("Yup Technology", 'Nizami');

    if(mySelect.value==1){
        document.getElementById("filial").innerHTML =arr[0];
        
        document.getElementById("exampleModalLabel").innerHTML = "" + arr[0];;
        
        function send() {
        let ad = document.getElementById("ad").value;
        let vezife = document.getElementById("vezife").value;
        let maas = document.getElementById("maas").value;

            if (ad !== "" && vezife !== "" && maas !== "") {
                a.gonder();
            a.table();
           temizle()
                
            } else {
                alert("You didn't enter your information!");
                
            }
            
        }
        
    }
    else if(mySelect.value==2){
        document.getElementById("filial").innerHTML =arr[1];
        // bsend();
    }
    else if(mySelect.value=3){
        document.getElementById("filial").innerHTML =arr[2];
    }
    console.log(mySelect.value);
    

}