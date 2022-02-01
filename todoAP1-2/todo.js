
display();
const form = document.querySelector("form");
form.addEventListener("submit", retrieve);


function retrieve(event) {
  event.preventDefault();
  let task = event.target.task.value;
  let status = event.target.checkbox.checked;

  let _data = {
    "title": task,
    "status": status
 };
 
 fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
   method: "POST",
   body: JSON.stringify(_data),
   headers: { "Content-type": "application/json; charset=UTF-8" },
 })
   .then((response) => response.json())
   .then((json) => console.log(json))
   .catch((err) => console.log(err))
    setTimeout(()=>{
        display() 
    },2000)
//    .finally(()=> display() )
   console.log(12)
   
   
}

async function display(){
    let res = await fetch("https://json-server-mocker-masai.herokuapp.com/tasks");
    let data = await res.json()
    console.log(data);
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = null;
    data.forEach(element => {
        let tr = document.createElement('tr');
            tr.innerHTML = `<td>${element.title}</td>
            <td>${element.status}</td><td>${element.id}</td>`;
            tbody.append(tr);
    });
    
}

