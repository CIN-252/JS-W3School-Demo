/* Output
.innerHTML / .text-content: in tai vi tri co id, class,...
.write(): xoa het HTML hien tai sau do in moi
.alert(): hop thoai canh bao
.print(): in */

/* let, const:
- Khong the khai bao lai:
    let x = 1;
    let x = 2; => fail
- Blockscope:
    {
      let x = 1;
    }
    => Ben ngoai ko su dung dc x
- const: khong the thay doi nhung doi voi mang co the thay doi thong qua: const arr[0] = ...
- co the khai bao lai neu dat trong cac blockscope khac nhau:
    let/const x = 1;
    {
      let/const x = 1;
    }
    {
      let/const x = 1;
    } */
/* var:
- Can re-declared:
    var x = 1;
    var x = 2; => true
- Global scope:
    {
      var x = 1;
    }
    => Ben ngoai su dung dc x */

/* length:
  let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let length = txt.length; => length: 26 */

/* .slice(1,2): cat chuoi tu vi tri 1 -> 2
Co the nguoc chieu: .slice(-2,-1) */

/* .substring: giong slice nhung ko co nguoc chieu */

/* .substr(1,2): giong slice nhung so 2 la do dai can lay */

/* replace:
  /i: ko phan biet hoa thuong
  /g: thay the tat ca */

/* .concat(): noi chuoi */

/* .trim(): xoa khoang trong */

/* padStart(), padEnd() */

/* .charArt(0) = .arr[0] */

/* .split(): chuoi -> mang */

/* .indexOf(): tra ve vi tri cua chu dau tien
.lastIndexOf(): tra ve vi tri cua chu cuoi cung

.search() = indexOf()

.match(/text/gi): so khop chuoi, tra ve arr ['text', 'text',...] 

.includes(): tim tu tra ve true/false

.startsWith(), .endsWith(): tra ve true/false */

/* Infinity: + vo cuc
- Infinity: - vo cuc */

/* .toString(): so -> chuoi
.toFixed(2): lay 2 chu so sau dau phay
.toPrecision(3): lay so do dai 3 chu so
 */

/* Number(new Date())
parseInt()
parseFloat()
Number.MAX_VALUE: so lon nhat
Number.MIN_VALUE: so nho nhat
Number..POSITIVE_INFINITY: + vo cuc
Number..NEGATIVE_INFINITY: - vo cuc */

/* Arr */
/* .length: do dai mang
.push: them phan tu */

/* typeof: object
isArray(), instanceof: tra ve true/false */

/* Methods:
.toString()

.join()

.pop(): xoa element cuoi cung luu vao bo nho tam >< .shift(): xoa element dau tien

.push(): them element vao cuoi mang >< .unshift(): them vao dau mang

.splice(v1,v2,'e'): v1: vi tri them, v2: so phan tu bi xoa, e: phan tu dc them
=> co the dung de xoa phan tu chi dinh

.slice(v1): cat so phan tu v1 thanh mang(sao chep) moi (dem tu 1).
.slice(v1,v2): cat tu phan tu v1 den v2 (dem tu 0)

delete arr[0]: xoa element nhung trong mang co empty

.concat(): noi mang */

/* .sort()
.reverse(): dao nguoc */

/* Duyet mang: 
.forEach()
.map()
.filter()
.reduce()
.every()
.some()
.indexOf()
.lastIndexOf()
.find()
.findIndex()
.from()
.key()
.entries() */


// Date Time:
/* new Date(): khoi tao ngay / chuyen mili giay -> ngay tinh tu 1/1/1970
Date.parse(): chuyen thanh mili giay */
