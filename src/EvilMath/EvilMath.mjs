class Dice {
  constructor(sides) {
    this.sides = sides;
    this.roll = ()=>(Math.floor(Math.random() * this.sides) + 1);
    this.average = (this.sides+1)/2
  }
}

let d20 = new Dice(20)

var simulation_number = 100000

const binomialCoefficient = (n, k) => {
  // Checkuing  if n and k are integer
  if (Number.isNaN(n) || Number.isNaN(k)) {
    return NaN;
  }
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }
  if (k === 1 || k === n - 1) {
    return n;
  }
  let res = n;
  for (let i = 2; i <= k; i++) {
    res *= (n - i + 1) / i;
  }
  return Math.round(res);
};
//chances to hit advantages Y = X + (1-X)*X
//chances to hit with disadvantages Y = X*X

const simulation = (n_attacks,adv_attacks,dis_attacks,DC)=>{
  let cont = 0
  for(let i = 0; i < simulation_number*(n_attacks-adv_attacks-dis_attacks); i++){
    if (d20.roll()>= DC){
      cont++
    }
  }
  for(let i = 0; i < simulation_number*(adv_attacks); i++){
    if(Math.max(d20.roll(), d20.roll())>= DC){
      cont++
    }
  }
  for(let i = 0; i < simulation_number*(dis_attacks); i++){
    if(Math.min(d20.roll(), d20.roll())>= DC){
      cont++
    }
  }
  cont /= simulation_number*n_attacks
  return cont
}

const odds_to_hit = (n_attacks, AC, Modifier, adv_attacks, dis_attacks, bonus = 0) => {
  let to_hit, to_miss, DC = AC - Modifier
  if (DC>20){
    DC = 20
  }
  if (DC<1){
    DC = 1
  }
  to_hit = simulation(n_attacks, adv_attacks, dis_attacks, DC)
  to_miss = 1-to_hit

  let result = [];
  let x, y, bn, aux

  for (let i = 0, j = n_attacks; i <= n_attacks; i++, j--) {
/*brujeria matematica*/

    x = to_hit ** i;
    y = to_miss ** j;

    bn = binomialCoefficient(n_attacks, i);
    aux = bn * x * y * 1000000 
    aux = Math.round(aux) / 10000
    aux = aux.toFixed(5).substring(0, 4)
    result.push(aux);
  }
  result.push(result.shift());
  return result;
};

const functions = {
  odds_to_hit: odds_to_hit,
};

export { functions };