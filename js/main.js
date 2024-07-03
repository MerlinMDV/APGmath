let xp = 0;
let percent = 0;
let goalxp = 0;
let lvl = parseInt(document.getElementById("lvl").value);
let goal = parseInt(document.getElementById("goal").value);
let output = document.getElementById('output');

for (let i = 0; i < goal; i++) {
  goalxp += ((200 * i) - 100);
}

for (let i = 0; i < lvl; i++) {
  if (lvl < 2) {
    xp = 0;
    break;
  }
  xp += ((200 * i) - 100);
}

percent = (xp / goalxp);

console.log(`You have gained a total of ~${xp} xp.`);
console.log(`You are ${Math.round((percent*100), 2)}% of the way to level ${goal}.`);