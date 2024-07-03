function mathMain() {
  let xp = 0;
  let percent = 0;
  let goalxp = 0;
  let lvl = parseInt(document.getElementById("lvl").value);
  let goal = parseInt(document.getElementById("goal").value);

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

  let output = `You have gained a total of ~${xp} xp.\nYou are ${(percent*100).toFixed(2)}% of the way to level ${goal}.`

  document.getElementById("output").value = output

  console.log(output);
}