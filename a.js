
async function handleFormSubmit(event){
    event.preventDefault()
    
    const data={
        username:event.target.username.value,
        email:event.target.email.value,
        phone:event.target.phone.value
    }

   await axios.post('https://crudcrud.com/api/bbd056753b474629afb215597c5284be/sekharapi',{data})
    .then((res)=>{
    document.getElementById('username').value=''
    document.getElementById('email').value=''
    document.getElementById('phone').value=''
    desplay(res.data)
    console.log(res.data)
     })
     

}

    axios.get('https://crudcrud.com/api/bbd056753b474629afb215597c5284be/sekharapi')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            desplay(res.data[i])
        }
        
    })

function desplay(res){
    //desplay data in screen
    let ul=document.getElementsByTagName('ul')[0];
    let elemnt=document.createElement('li');
    elemnt.id=res._id
    elemnt.textContent=`${res.data.username} ${res.data.email} ${res.data.phone}`;
    
    //edit button add
    let edibtn=document.createElement('button');
    edibtn.innerText='edit';
    elemnt.appendChild(edibtn)

    //delete button add
    let delbtn=document.createElement('button');
    delbtn.textContent='delete';
    elemnt.appendChild(delbtn)

    ul.appendChild(elemnt);

    //delete button function
    delbtn.addEventListener('click',function(event){  
    axios.delete(`https://crudcrud.com/api/bbd056753b474629afb215597c5284be/sekharapi/${event.target.parentElement.id}`)
    .then((res)=>{
        event.target.parentElement.remove()
    })
    })

    //edit button function35
    edibtn.addEventListener('click',function(event){  
        let data=event.target.parentElement.textContent;
        
        axios.get(`https://crudcrud.com/api/bbd056753b474629afb215597c5284be/sekharapi/${event.target.parentElement.id}`)
        .then((res)=>{
          res=res.data.data;
          document.getElementById('username').value=res.username
          document.getElementById('email').value=res.email
          document.getElementById('phone').value=res.phone

          axios.delete(`https://crudcrud.com/api/bbd056753b474629afb215597c5284be/sekharapi/${event.target.parentElement.id}`)
          .then((res)=>{
            event.target.parentElement.remove()
          })
          
        })
       
    })
    
}


