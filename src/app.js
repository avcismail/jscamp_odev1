console.log("Ödev 1")

function findPrime(...numbers) {
  let sayac = 0;
  for (let i = 0; i < numbers.length; i++) {
    let control = 0;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        control = 1;
        break;
      }
    }
    if (numbers[i] != 1) {
      if (control == 0) {
        console.log(numbers[i]);
        sayac++;
      }
    }
  }
}

findPrime(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17);

console.log("---------------------------------");
console.log("Ödev 2")

function findFriendNumbers(sayi1, sayi2) {
  let sayiBolenler1 = 0;
  let sayiBolenler2 = 0;
  for (let i = 1; i < sayi1; i++) {
    if (sayi1 % i == 0) {
      sayiBolenler1 += i;
    }
  }
  for (let i = 1; i < sayi2; i++) {
    if (sayi2 % i == 0) {
      sayiBolenler2 += i;
    }
  }
  if (sayiBolenler1 == sayi2 && sayiBolenler2 == sayi1) {
    console.log("Bu iki sayı arkadaş sayılardır.");
  }
}

findFriendNumbers(220, 284);

console.log("---------------------------------");
console.log("Ödev 3")

function mukemmelSayi() {
  let bolenler = 0;
  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        bolenler += j;
      }
    }
    if (bolenler == i) {
      console.log(i);
    }
    bolenler = 0;
  }
}

mukemmelSayi();

console.log("---------------------------------");
console.log("Ödev 4")

function asalSayilar() {
  let sayac = 0;
  for (let i = 2; i <= 1000; i++) {
    let control = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        control = 1;
        break;
      }
    }
    if (control == 0) {
      console.log(i);
      sayac++;
    }
  }
}

asalSayilar();
