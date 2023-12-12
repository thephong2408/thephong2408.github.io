//khi ấn vào nút thì hiện nên đăng nhập
function toggleDisplay() {
    var myDiv = document.getElementById("myDiv");
    if (myDiv.style.display === "none" || myDiv.style.display === "") {
      myDiv.style.display = "flex";
    }
  };



  // khi ấn trở lại thì thoát đăng nhập
  function toggleDispla1() {
    var myDiv1 = document.getElementById("myDiv");
  
    // Kiểm tra trạng thái hiện tại của div
    if (myDiv1.style.display === "flex") {
      // Nếu đang ẩn, hiển thị
      myDiv1.style.display = "none";
    
    }
  };


  //khi ấn vào đăng kí ở đăng nhập thì hiện lên đăng kí
  function toggleDisplay3() {
    var myDiv2 = document.getElementById("dangki");
    var myDiv3 = document.getElementById("dangnhap");

    // Kiểm tra trạng thái hiện tại của div
    if (myDiv2.style.display === "none" || myDiv2.style.display === "") {
        // Nếu đang ẩn, hiển thị
        myDiv2.style.display = "inline-block";
        myDiv3.style.display = "none";
    } else {
        // Nếu đang hiển thị, ẩn đi
        myDiv2.style.display = "none";
        myDiv3.style.display = "inline-block";
    }
}


  // khi ấn vào đăng nhập ở phần đăng kí thì hiện lên đăng nhập
function toggleDisplay2() {
  var myDiv2 = document.getElementById("dangki");
  var myDiv3 = document.getElementById("dangnhap");

  // Kiểm tra trạng thái hiện tại của div
  if (myDiv2.style.display === "inline-block" || myDiv2.style.display === "") {
    // Nếu đang ẩn, hiển thị
    myDiv2.style.display = "none";
    myDiv3.style.display = "inline-block";
  }
}

  

  // hiện tài khoản 
  // function tttk() {
  //   var tk =document.getElementById("taikhoan");
  //   var tt = document.getElementById("thongtin");
  //   if (tt.style.display === "none") {
  //     tt.style.display = "block";
  //   } else {
  //     tt.style.display = "none";
  //   }
  // }

  function tttk() {
    var tk = document.getElementById("taikhoan");
    var tt = document.getElementById("thongtin");
  
    if (tt.style.display === "none") {
      tt.style.display = "block";
    } else {
      tt.style.display = "none";
    }
  }
  
  document.addEventListener('click', function(event) {
    var tk = document.getElementById("taikhoan");
    var tt = document.getElementById("thongtin");
  
    // Kiểm tra xem phần tử được click có phải là "taikhoan" hay không
    if (event.target !== tk && tt.style.display === "block") {
      tt.style.display = "none";
    }
  });
  


// hiệu ứng khi nhập và đăng nhập
document.addEventListener('DOMContentLoaded',function(){

  var phoneInput = document.getElementById('taikhoan');
  var confirmPasswordInput = document.getElementById('nhaplaimatkhau');
  var registerButton = document.getElementById('dangkitk');


  if(phoneInput && confirmPasswordInput && registerButton){
    registerButton.addEventListener('click',function(){

      //hiệu ứng cho phần tài khoản 

      var inputValue = phoneInput.value.trim();
      var phoneError = document.getElementById('nhapsai');

      var isValiPhone = /^\d+$/.test(inputValue);
      // khi input rong
      if(inputValue === ""){
        phoneInput.classList.remove('false','true');
        phoneError.textContent = ' ';
      }else{
        //khi input dung
        if(isValiPhone){
          phoneInput.classList.remove('false');
          phoneInput.classList.add('true');
          phoneError.textContent = ' ';

        }else{
          phoneInput.classList.remove('true');
          phoneInput.classList.add('false');
          phoneError.textContent = 'nhap sai. vui long nhap so dien thoai';
        }

      }


      // mat khau

      var passwordInput = document.getElementById('matkhau');
      var confirmPasswordError = document.getElementById('nhapsaimk');
      var passwordMatch = passwordInput.value === confirmPasswordInput.value;

      if(passwordMatch && passwordInput.value !== ""){
        passwordInput.classList.add('true');
        confirmPasswordInput.classList.add('true');
        confirmPasswordInput.classList.remove('false');
        confirmPasswordError.textContent = '';
        

      }else{
        passwordInput.classList.add('false');
        confirmPasswordInput.classList.remove('true');
        confirmPasswordInput.classList.add('false');
        confirmPasswordError.textContent = 'nhập lại mật khẩu không đúng';
      }

    });

  }

})


  