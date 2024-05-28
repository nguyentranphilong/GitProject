class Classstudents {
    constructor({fullname, email, phone, address, birthday, gender}) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
    }

    getfullname() {
        return this.fullname}
    getemail() {
        return this.email}
    getphone() {
        return this.phone}
    getaddress() {
        return this.address}
    getbirthday() {
        return this.birthday}
    getgender() {
        return this.gender}
    setfullname(fullname) {
        this.fullname = fullname}
    setemail(email) {
        this.email = email}
    setphone(phone) {
        this.phone = phone}
    setaddress(address) {
        this.address = address}
    setbirthday(birthday) {
        this.birthday = birthday}
    setgender(gender) {
        this.gender = gender}

    // them {}
    edit({fullname, email, phone, address, birthday, gender}) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
    }
}


let student1 = new Classstudents({
    fullname: "Nguyễn Văn Minh",
    email: "nguyenvanminh@gmail.com",
    phone: "0933226297",
    address: "Đà Nẵng",
    birthday: "08/03/1999",
    gender: "Nam",
})
let student2 = new Classstudents({
    fullname: "Nguyễn Văn Anh",
    email: "nguyenvananh@gmail.com",
    phone: "0934656565",
    address: "Đà Nẵng",
    birthday: "14/11/2005",
    gender: "Nam",
})
let student3 = new Classstudents({
    fullname: "Nguyễn Văn Thịnh",
    email: "nguyenvanthinh@gmail.com",
    phone: "0934656565",
    address: "Đà Nẵng",
    birthday: "14/11/2005",
    gender: "Nữ",
})

let students = [student1, student2, student3];

function display() {
    let str = ""
    for (let i = 0; i < students.length; i++) {
        str += "<tr>";
        str += "<td>"+ (i+1) +"</td>";
        str += "<td>"+ students[i].fullname +"</td>";
        str += "<td>"+ students[i].email +"</td>";
        str += "<td>"+ students[i].phone +"</td>";
        str += "<td>"+ students[i].address +"</td>";
        str += "<td>"+ students[i].birthday +"</td>";
        str += "<td>"+ students[i].gender +"</td>";
        str += "<td><button onclick='editStudent("+ i +")'>Sửa</button></td>";
        str += "<td><button onclick='deleteStudent("+ i +")'>Xóa</button></td>";
        str += "</tr>";
    }
    document.getElementById('display').innerHTML = str;
}
display();

// Rename fucntion to specified name
function addStudent() {let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let birthday = document.getElementById('date').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    if (fullname == "" || email == "" || phone == "" || address == "" || birthday == "" || gender == "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    let student = new Classstudents({fullname, email, phone, address, birthday, gender});
    students.push(student);
    display();
    clearStudent();


}

// function formatDate(inputDate) {
//     // Split the date string into components using regex
//     var parts = inputDate.match(/(\d+)/g);
//
//     // Rearrange the components to match "yyyy-MM-dd" format
//     var formattedDate = parts[2] + '-' + parts[0] + '-' + parts[1];
//
//     return formattedDate;
// }

function assignStudent(student){
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('email').value = student.email;
    document.getElementById('phone').value = student.phone;
    document.getElementById('address').value = student.address;
    // luôn để ý kiểu dữ liệu:

        document.getElementById('date').value = student.birthday;
    if (student.gender ==="Nam"){
        document.getElementById('male').checked = true
        document.getElementById('female').checked = false;
    }else if (student.gender ==="Nữ"){
        document.getElementById('male').checked = false
        document.getElementById('female').checked = true;
    }else {
        document.getElementById('male').checked = false;
        document.getElementById('female').checked = false;
    }
}
// function formatDate(inputDate) {
//     // Split the date string into components using regex
//     var parts = inputDate.match(/(\d+)/g);
//
//     // Rearrange the components to match "yyyy-MM-dd" format
//     var formattedDate = parts[2] + '-' + parts[0] + '-' + parts[1];
//
//     return formattedDate;
// }
function clearStudent() {
    let emptyStudent = new Classstudents({
        fullname: "",
        email: "",
        phone: "",
        address: "",
        birthday: "",
        gender: "",
    });
    assignStudent(emptyStudent)
}

function editStudent(index) {
    let check = confirm("bạn có chắc muốn sửa STT " + (index + 1))
    if (check) {
    assignStudent(students[index])
    document.getElementById('id').value = index;
}else alert("giỡn hoài ní");}


//  nên gọi submit từ form và nhận value về, không sử dụng docuemnt.getElementById
function updateStudent(index) {
    let idStudent = document.getElementById('id').value
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let birthday = document.getElementById('date').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    if (fullname == "" || email == "" || phone == "" || address == "" || birthday == "" || gender == "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    let currentStudent = students[idStudent]
    currentStudent.edit({fullname, email, phone, address, birthday, gender})

    display();
    clearStudent();
}


function deleteStudent(index) {
    let check = confirm("bạn có chắc muốn xóa STT " + (index + 1))
    if (check) {
        students.splice(index, 1);
        display();
    }else alert("quái quái rứa trời");
}


