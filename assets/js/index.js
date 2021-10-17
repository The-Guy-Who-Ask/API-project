var data=''
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText)
        
        data = JSON.parse(this.responseText)
        // console.log(data)
        // console.log(this.responseText)
        var mess = data.data
        console.log(mess)
        for(let i = 0; i <= (mess.length-1); i++) {
            // console.log(mess[i])
            let user_id = mess[i].id
            console.log(user_id)
            
            let name = mess[i].name
            console.log(name)
            
            let Status = mess[i].status
            console.log(Status)

            let Gender = mess[i].gender
            console.log(Gender)
            
            let Email = mess[i].email
            console.log(Email)

            let container = document.getElementsByClassName("container")[0]
            console.log(container)

            let ele = document.createElement('tr')
            let html = `<tr>
                <td>${i+1}</td>
                <td id="user${user_id}">${user_id}</td>
                <td>${name}</td>
                <td>${Gender}</td>
                <td>${Status}</td>
                <td>${Email}</td>
            </tr>`

            ele.innerHTML = html
            container.appendChild(ele)
        }
    }
};
let d = "Javascript"
xhttp.open("GET", `https://gorest.co.in/public/v1/users`, true);
xhttp.send();