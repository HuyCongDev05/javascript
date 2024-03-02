let obj = {
    Name: 'Huy Công',
    LastName: 'Nguyễn',
    Age: 18,
    Class: 'S',
    Address: 'Thanh Hóa',
    FullName: function() {
        return this.Age + '' + this.Class;
    }
}

let NameFake = 'Name';
obj[NameFake] = 'Huy Thành';

let AgeFake = 'Age';
obj[AgeFake] = '20';

let ClassFake = 'Class';
obj[ClassFake] = 'A';

console.log(obj);
console.log('Tên:',obj['Name']);
console.log('Tuổi:',obj['Age']);
console.log('Cấp:',obj['Class']);
console.log('Địa chỉ:',obj['Address']);
console.log('Tên đầy đủ:',obj.FullName());