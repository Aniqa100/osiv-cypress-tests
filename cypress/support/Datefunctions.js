// @TODO check if deprecated
function getFirstDayOfMonth( month, year ) {
  return new Date( 1, month, year );
}

function days_of_a_year( year ) {

  return isLeapYear( year ) ? 366 : 365;
}

function isLeapYear( year ) {
  return year % 400 === 0 || ( year % 100 !== 0 && year % 4 === 0 );
}

let today = new Date();
const dd = String( today.getDate() ).padStart( 2, "0" );
const mm = String( today.getMonth() + 1 ).padStart( 2, "0" ); //January is 0!

const yyyy = today.getFullYear();

const yearPlus = yyyy + 1;
const dayOneless = String( today.getDate()-1 ).padStart( 2, "0" );
const end = `${dayOneless  }.${  mm  }.${  yearPlus}`;
const samedaynextyear = `${dd  }.${  mm   }.${  yearPlus}`;
const firstDay = `01` + `.${  mm  }.${  yearPlus}`;
today = `${dd  }.${  mm  }.${  yyyy}`;

console.log( days_of_a_year( yyyy ) );
console.log( today );
console.log( end );
console.log( firstDay );
