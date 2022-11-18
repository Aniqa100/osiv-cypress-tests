function getFirstDayOfMonth(month, year) {
    return new Date(1, month, year);
  }
  
function days_of_a_year(year) 
  {
     
    return isLeapYear(year) ? 366 : 365;
  }
  
function isLeapYear(year) {
       return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  
  var yyyy = today.getFullYear();
  
  var yearPlus = yyyy + 1;
  var dayOneless = String(today.getDate()-1).padStart(2, '0');
  var end = dayOneless + '.' + mm + '.' + yearPlus;
  var samedaynextyear = dd + '.' + mm +  '.' + yearPlus;
  var firstDay = '01' + '.' + mm + '.' + yearPlus;
  today = dd + '.' + mm + '.' + yyyy;
  
  console.log(days_of_a_year(yyyy));
  console.log(today);
  console.log(end);
  console.log(firstDay);