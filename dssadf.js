class Classstudents {
    constructor(fullname, email, phone, address, birthday, gender) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
    }
    getfullname() { return this.fullname}
    getemail() { return this.email}
    getphone() { return this.phone}
    getaddress() { return this.address}
    getbirthday() { return this.birthday}
    getgender() { return this.gender}
    setfullname(fullname) { this.fullname = fullname}
    setemail(email) { this.email = email}
    setphone(phone) { this.phone = phone}
    setaddress(address) { this.address = address}
    setbirthday(birthday) { this.birthday = birthday}
    setgender(gender) { this.gender = gender}
edit(fullname, email, phone, address, birthday, gender) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthday = birthday;
        this.gender = gender;
}
}
let student1 = new Classstudent("Trần Thị Hoàng Giang", "giangtran@gmail.com", 0963554244, "Đà Nẵng", "07/12/2008", "Nữ",)
let student2 = new Classstudent("Nguyễn Hồ Minh Hải", "minhhai@gmail.com", 0933226297, "Đà Nẵng", "08/03/1999", "Nam",)
let student3 = new Classstudent("Nguyễn Văn Anh Minh", "nguyenvananhminh@gmail.com", 0934656565, "Đà Nẵng", "14/11/2005", "Nam",)

let students = [student1, student2, student3];