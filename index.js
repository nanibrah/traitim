function hieuroithibiendicoitroi() {
    window.alert("Hiểu rồi thì biến đi coi trời")
}

function addnumbertoInput(number) {
    var passwordInput = document.getElementById("truongmatkhau")
    if (passwordInput.value.length <= 8) {
        passwordInput.value += number
    }
}

function xoakytutruocdo() {
    var passwordInput = document.getElementById("truongmatkhau")
    if (passwordInput.value.length > 0) {
        passwordInput.value = passwordInput .value.slice(0, -1);
    }
}

function xacnhandangnhap() {
    var passwordInput = document.getElementById("truongmatkhau")
    var pas = atob("MjAwNzIwMjU=") // Ngay ky niem (20072025)
    var cmsn = atob("MTgxMjIwMDg=") // chuc mung sinh nhat (18122008)
    if (passwordInput.value == pas) {
        document.getElementById("nhapmatkhaudetieptuc").classList.add("hieuungbaylenvabienmatdan")

        setTimeout(() => {
            document.getElementById("ngaykyniem").style.display = "block"
            document.getElementById("ngaykyniem").classList.add("hieuungbaylenvaxuathiendan")
        }, 800)
    } else if (passwordInput.value == cmsn) {
        document.getElementById("nhapmatkhaudetieptuc").classList.add("hieuungbaylenvabienmatdan")
        
        setTimeout(() => {
            document.getElementById("chucmungsinhnhat").style.display = "block"
            document.getElementById("chucmungsinhnhat").classList.add("hieuungbaylenvaxuathiendan")
        }, 800)
    } else {
        window.alert("Sai mật khẩu")
    }
}

function tinhthoigiantu1moctgian(elementID, mocthoigian) {
    const now = new Date();
    let diff = now - mocthoigian;

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = now.getFullYear() - mocthoigian.getFullYear();
    let months = now.getMonth() - mocthoigian.getMonth();
    let day = now.getDate() - mocthoigian.getDate();

    if (day < 0) {
        months--;
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        day += prevMonth;
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    let remainMs = diff % (1000 * 60 * 60 * 24);
    let rhours = Math.floor(remainMs / (1000 * 60 * 60));
    let rminutes = Math.floor((remainMs % (1000 * 60 * 60)) / (1000 * 60));
    let rseconds = Math.floor((remainMs % (1000 * 60)) / 1000);

    elementID.textContent = `${years} năm ${months} tháng ${day} ngày - ${rhours} giờ ${rminutes} phút ${rseconds} giây`;
}

function ngaykyniemvclch(bool_conhohayko) {
    if (bool_conhohayko == true) {
        window.alert("Ỏ cute thíiii. Love u😘")
    } else {
        window.alert("Đồ tồy. Dỗi")
        setTimeout(() => {
            this.window.close()
        }, 2000);
    }
}
