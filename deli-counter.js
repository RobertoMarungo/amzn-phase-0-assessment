// 1. Write your functions here

const katzDeli = [];

const takeANumber = (katzDeli, customer) => {
  katzDeli.push(customer);
  return `Welcome, ${customer}. Your are number ${katzDeli.length} in line.`;
}

const nowServing = (katzDeli) => {

  if(katzDeli.length > 0){
    return `Currently serving ${katzDeli.shift()}.`
  }else{
    return 'There is nobody waiting to be served!'
  }

}

const line = (katzDeli) =>{

  let currentlyInLine =[];

  if(katzDeli.length > 0){
    for(let i =0; i < katzDeli.length; i++){
      currentlyInLine += (i + 1) + '. ' + katzDeli[i] + '. ';
    }

    currentlyInLine = currentlyInLine.slice(0, currentlyInLine.length - 2);
    return 'The line is currently: ' + currentlyInLine;   

  }else{
    return 'The line is currently empty.'
  }

}

// 2. Example Usage

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"