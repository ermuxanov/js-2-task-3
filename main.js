var one = +prompt("Введите первое число");
var two = +prompt("Введите второе число");
var three = +prompt("Введите третье число");

if (one > two && one < three) {
  alert("Среднее число: " + one);
} else if (one > three && one < two) {
  alert("Среднее число: " + one);
} else if (two > one && two < three) {
  alert("Среднее число: " + two);
} else if (two > three && two < one) {
  alert("Среднее число: " + two);
} else if (three > one && three < two) {
  alert("Среднее число: " + three);
} else if (three > two && three < one) {
  alert("Среднее число: " + three);
} else if (three == one && three == two && two == one) {
  alert("Все числа равны");
} else if (one == two && one < three) {
  alert("Мин. число: " + one + " и макс. число: " + three);
} else if (one == two && one > three) {
  alert("Мин. число: " + three + " и макс. число: " + one);
} else if (two == three && one > three) {
  alert("Мин. число: " + three + " и макс. число: " + one);
} else if (two == three && one < three) {
  alert("Мин. число: " + one + " и макс. число: " + three);
} else if (one == three && one < two) {
  alert("Мин. число: " + one + " и макс. число: " + two);
} else if (one == three && one > two) {
  alert("Мин. число: " + two + " и макс. число: " + one);
}
