/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
[++a] => 
    Value => 11
    Explain => pre incerment 

[+] =>
    Value => +
    Explain => plus

[+b] =>
    Value => 20
    Explain => convert Srting To Number(Integer)

[b++] =>
    Value => 20
    Explain => Post Incerment

[+] =>
    Value => +
    Explain => plus

[+c] =>
    Value => 80
    Explain => Number

[c++] =>
    Value => 80
    Explain => Post Incerment

[-] =>
    Value => -
    Explain => Mines

[+a] =>
    Value => 11
    Explain => Number

[a++] =>
    Value => 11
    Explain => Post Incerment But

    11 + 20 + 80 + - 11 = 100

    a = 12 
    b = 21
    c = 81

*/

console.log(++a + -b + +c++ - -a++ + +a);


/*
[++a] => 
    Value => 13
    Explain => pre incerment 

[+] =>
    Value => +
    Explain => plus

[-b] =>
    Value => -21
    Explain => convert Srting To Number(Integer)

[+] =>
    Value => +
    Explain => Plus

[+c] =>
    Value => 81
    Explain => convert Srting To Number(Integer)

[-] =>
    Value => -
    Explain => Mines

[-a] =>
    Value => -14
    Explain =>  convert Srting To Number(Integer)

[a++] =>
    Value => -14
    Explain => Post Incerment 

[+] =>
    Value => +
    Explain => Plus

[+a] =>
    Value => 13
    Explain => Number

    13 - 21 + 81 + 14 + 13 = 100
    
    a = 14
    b = 21
    c = 82

*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[--c]
  => Value: 81
  => Explain: Pre-decrement, c becomes 81

[+b]
  => Value: 21
  => Explain: Convert string "21" to number

[--a]
  => Value: 13
  => Explain: Pre-decrement, a becomes 13

[+b++]
  => Value: 21
  => Explain: Convert b to number (21), then post-increment to "22"

[+b]
  => Value: 22
  => Explain: Convert updated b ("22") to number

[a]
  => Value: 13
  => Explain: Current value of a

[--a]
  => Value: 12
  => Explain: Pre-decrement, a becomes 12

[+true]
  => Value: 1
  => Explain: true converted to number

Expression:
=> 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1
=> 81 + 21 + 273 - 286 + 12 - 1 = 100
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log((--g * f++) + -d++ * +e++); // 2000
console.log(g - -f / -e * ++d + --f);   // 173