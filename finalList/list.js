
// console.log(s)
let a = [];
let b=[];
let c=[];

document.getElementById("but2").addEventListener("click", f1);
function f1() {
        document.getElementsByClassName("h2")[0].innerHTML=`  <h2> your items</h2>`
        document.getElementById("table1").innerHTML = ` 
         <tr>
        <th style="width:5vw;">S.No.</th>
        <th style="width: 15vw;">Title</th>
        <th style="width:45vw;">Description</th>
        <th style="width:5vw;">Remove Task</th>
    </tr>`
        var s1 = document.getElementById("title").value;
        b.push(s1);
        var s2 = document.getElementById("desc").value;
        c.push(s2);
        let e = document.createElement("tr");
        e.innerHTML = `<td style="width:5vw;">${a.length + 1}</td> 
        <td style="width:15vw;">${s1}</td> 
         <td style="width:45vw;">${s2}</td>   <td style="width:5vw;"> <button class="remove" onclick="f2(${a.length})">Remove</button> </td>      `;
        a.push(e);
        for (let i = 0; i < a.length; i++) {
                document.getElementById("table1").innerHTML += a[i].innerHTML;
        }

}
f2 = (i) => {
        console.log("ygyf")
        a.splice(i, 1);b.splice(i, 1);c.splice(i, 1);
        for (let j = i; j < a.length; j++) {
                a[j].innerHTML = `<td style="width:5vw;">${j+1}</td> 
            <td style="width:15vw;">${b[j]}</td>  <td style="width:45vw;">${c[j]}</td>   <td style="width:5vw;"> <button class="remove" onclick="f2(${j})">Remove</button> </td>  `
        }


        document.getElementById("table1").innerHTML = `  <tr>
        <th style="width:5vw;">S.No.</th>
            <th style="width: 15vw;">Title</th>
            <th style="width:45vw;">Description</th>
            <th style="width:5vw;">Remove Task</th>
    </tr>`

        for (let i = 0; i < a.length; i++) {
                document.getElementById("table1").innerHTML += a[i].innerHTML;

        }

}
document.getElementById("but2").addEventListener("click",clear);
// addEventListener
function clear(){ console.log("hfyfuugu")
        document.getElementById("title").value="";  
        // document.getElementById("title").style.
        document.getElementById("title").placeholder ="Add Title"
        document.getElementById("desc").value="";

}
document.getElementById("but2").addEventListener("mouseover",popup);

 let e= document.createElement("div"); 
 document.getElementById("sp1").appendChild(e);
function popup(){
  
   e.innerHTML="Use 'alt+shift+z'";// console.log("not working")
   setTimeout(removepopup(),1500);
   
}
function removepopup(){
      //  
        e.innerHTML="";

}


let y=document.getElementsByTagName("tr");
for(let l=1;l<y.length;l++){console.log("working") ;
        y[l].addEventListener("click",()=>{
             console.log("working") ;
               y[l].style.backgroundColor="green";
        })
}