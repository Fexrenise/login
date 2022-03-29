function FullName() {
    let gmail = "Fdevelopers46@gmail.com";
    let password = "Nopassword2022#";
    let YourGmail = document.getElementById('inp').value;
    let YourPassword = document.getElementById('inf').value;
    if (gmail == YourGmail && password == YourPassword) {
        alert('Kod və Gmail Düzdür!');
    }else if (gmail !== YourGmail && password == YourPassword) {
        document.getElementById('mail').innerHTML="Gmail Yanlışdır"
    }else if (gmail == YourGmail && password !== YourPassword) {
        document.getElementById('pass').innerHTML="Kod Yanlışdır"
    }else{
        alert('Kod və Gmail Yanlışdır!');
    };
}


function Word(){
    let show =document.getElementById('inf')
    let x = document.getElementById('eye')
    if (show.type =='password'){
        show.type='text';
        x.className ='fa-solid fa-eye-slash';
    }
    else{
        show.type='password';
        x.className ='fa-solid fa-eye';
    }
}