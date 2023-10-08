//buat variable
let x = 10;
let y = 10;
// if else dan nested
if (x < 18) {
  console.log("x kurang dari 18");
  if (x == 10) {
    console.log("x sama dengan 10");
  }
} else {
  console.log("x lebih dari 10");
}

//for loops + switch case because why not
for (var i = 0; i < 8; i++) {
  switch (i) {
    case 0:
      day = "switch 0";
      console.log(day);
      break;
    case 1:
      day = "switch 1";
      console.log(day);
      break;
    case 2:
      day = "switch 2";
      console.log(day);
      break;
    case 3:
      day = "switch 3";
      console.log(day);
      break;
    case 4:
      day = "switch 4";
      console.log(day);
      break;
    case 5:
      day = "switch 5";
      console.log(day);
      break;
    case 6:
      day = "switch 6";
      console.log(day);
  }
}

//while loops
let z = 0;
while (z < 5) {
  console.log("sekarang iterasi while loop ke: " + z);
  z++;
}

//do while
do {
  console.log("sekarang iterasi do while loop ke: " + z);
  z++;
} while (z < 10);
//fungsi
function hari() {
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      console.log("sekarang hari : "+day)
}

hari();
