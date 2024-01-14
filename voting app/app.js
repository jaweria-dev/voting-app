let array =["jaweria", "asma", "omer", "iqra"];
let input= document.getElementById('name');
let candidatesTable = document.getElementById('candidatesTable')

function addFriend(){
    if (array.includes(input.value)){
        alert("Name already exist")
    }
    else{
    array.push(input.value)
    candidatesTable.innerHTML  = ''
    array.map((item, key)=>{
        candidatesTable.innerHTML = candidatesTable.innerHTML + `<tr class="row justify-content-between p-1 voter" onClick='increaseOne(this)'> <td class="col-4">${key}</td> <td class="col-4">${item}</td>  <td class="col-4"  >0</td> </tr>`
    })
}
}


function increaseOne(param){
    param.children[2].innerHTML = +param.children[2].innerHTML + 1
}



