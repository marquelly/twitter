
document.getElementById("msg").addEventListener('keyup', mensagem);
document.getElementById("btnTwitar").addEventListener('click',twitar); 

function mensagem(){
    
    var text =  document.getElementById("msg").value; 
    var tamStr = 140;

    tamStr =  tamStr - text.length; 
    
    if (text.length > 0){
        document.getElementById("btnTwitar").disabled = false;     
    }
    if (text.length === 0 || text.length >= 140){
        document.getElementById("btnTwitar").disabled = true;  
    }
    if (tamStr <= 140 && tamStr >=20){
        document.getElementById('count').style.color = "#8B3E2F"; 
    } 
    
    if (tamStr <= 19 && tamStr >=10){
        document.getElementById('count').style.color = "orange"; 
    } 
    if (tamStr <= 9){
        document.getElementById('count').style.color = "red"; 
    } 

    document.getElementById('count').innerHTML = tamStr;

}


function twitar() {

    let listamsg = document.getElementById('listamsg');
    let text = document.getElementById("msg").value;
    let post = document.createElement('p');
    var newpost = listamsg.getElementsByTagName('p')[0];
    let newpostText = document.createTextNode(text +" // "+ time());
    post.appendChild(newpostText);
    listamsg.appendChild(post);
    listamsg.insertBefore(post, newpost);

    document.getElementsByTagName('form')[0].reset();
    document.getElementById("btnTwitar").disabled = true;
    document.getElementById('count').innerHTML = 140;
    document.getElementById('count').style.color = "#8B3E2F"; 
}

function time() {
    var clock = new Date();
    var hours = clock.getHours().toString();
    var min = clock.getMinutes().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (min.length < 2) {
        min = "0" + min;
    }
    var clocktoday = hours + ":" + min;
    return clocktoday;
}

function autoResize() {

    objTextArea = document.getElementById('msg');

    while (objTextArea.scrollHeight > objTextArea.offsetHeight) {
        objTextArea.rows += 1;
    }
}





























































  





