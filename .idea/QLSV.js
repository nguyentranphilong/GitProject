class Classstudent {
    constructor(fullname, email, phone, address, birthday, gender) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
    }
    getFullname() {
        return this.fullname;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }


}
let student1 = new Classstudent("Trần Thị Hoàng Giang", "giangtran@gmail.com", 0963554244, "Đà Nẵng", "07/12/2008", "Nữ",)
let student2 = new Classstudent("Nguyễn Hồ Minh Hải", "minhhai@gmail.com", 0933226297, "Đà Nẵng", "08/03/1999", "Nam",)
let student3 = new Classstudent("Nguyễn Văn Anh Minh", "nguyenvananhminh@gmail.com", 0934656565, "Đà Nẵng", "14/11/2005", "Nam",)

let students = [student1, student2, student3];
function display() {
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
    let tableContent = ` <tr>
            <th>#</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Giới tính</th>
            <th>Hành động</th>
        </tr>`;
    for (let i = 0; i < students.length; i++) {
        tableContent += ` <tr>
            <td>${i + 1}</td>
            <td>${students[i].fullname}</td>
            <td>${students[i].birthday}</td>
            <td>${students[i].address}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].gender}</td>
            <td>
                <button onclick="editStudent(${i})" >sửa</button>
                <button onclick="deleteStudent(${i})">Xóa</button>
            </td>
        </tr>`;
    }
    document.getElementById('list-students').innerHTML = tableContent;
}
display();
function save() {
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
    let student = new Classstudent(fullname, email, phone, address, birthday, gender);
    students.push(student);
    display();
    clear();
}
function clear() {
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('date').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
}

function deleteStudent(index) {
    let check = confirm("bạn có chắc muốn xóa STT " + (index + 1))
    if (check) {
        students.splice(index, 1);
        display();
    }else alert("quái quái rứa trời");
}
function editStudent(index) {


}

