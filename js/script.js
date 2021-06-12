function validateForm(){
    var username = document.getElementById("username").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var result='';

    var atposition = email.indexOf("@");
    var doposition = email.lastIndexOf(".");

    if(username == null || username == ""){
        alert("Username khong duoc de trong!!");
        return false;
    }else if(mobile == null || mobile ==""){
        alert("So dien thoai khong duoc de trong!!");
        return false;
    }else if(email == null || email == ""){
        alert("Email khong duoc de trong");
        return false;
    }else if(atposition < 1 || doposition < (atposition + 2) || (doposition + 2) >= email.length){
        alert("Nhap dung dinh dang email. Ex: abc@gmail.com");
        return false;
    }else if(createpass.length < 8 || createpass == ""){
        alert("Password co do dai >=8 va khong duoc de trong!!!");
        return false;
    }
    if(confirmpass == createpass){
        return true;
    }else {
        alert("Password phai trung nhau");
        return false;
    }
    // result+="Name: "+username;
    // result+="<br/>";
    // result+="SDT: "+mobile;
    // result+="<br/>";
    // result+="Email: "+email;
    // result+="<br/>";
    // result+="Password: "+password;
    // result+="<br/>";
    // document.getElementById('a').innerHTML=result;
    // return false;
}