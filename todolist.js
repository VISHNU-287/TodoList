let array1 = JSON.parse(localStorage.getItem('storage')) || [];
    
    function objectsetup(){
        console.log('initial setup Activated');
        let objectss = {};
        let name = document.querySelector('.event-style').value;
        let date = document.querySelector('.date-style').value;
        if(name === ''){
            alert('Event Name Is Empty');
        }
        else if(date === ''){
            alert('Date Field Is Empty');
        }
        else{
            objectss.Name = name;
        objectss.Date = date;
        array1.push(objectss);
        localStorage.setItem('storage',JSON.stringify(array1));
        creation();
        document.querySelector('.event-style').value = '';
        document.querySelector('.date-style').value = '';
        }

    }
    function creation(){
        if(array1.length === 0){
            display();
        }
        else{
            document.getElementById('safety').innerHTML = '';
            let html = '';
        for(let i=0; i< array1.length; i++){
            let name = array1[i].Name;
            let date = array1[i].Date;
           let htmls = `<p class="one on">${name}</p> <p class="one off">${date}</p> <p class="flexing"><button class="two" onclick="deletefun(${i});">Del</button></p>`;
            html = html + htmls;
            document.getElementById('id-content').innerHTML = html;
        }
        console.log(array1.length);
        }
    }
        
    
    function deletefun(i){
        array1.splice(i,1);
        localStorage.setItem('storage',JSON.stringify(array1));
        creation();
    }
    creation();

     function display(){
        if(array1.length === 0){
        document.getElementById('safety').innerHTML = 'Add Some Events';
        document.getElementById('id-content').innerHTML = '';
    }
     }
   