
export class DateHelper {
    
    getCurrentDate() {
        const date = new Date();
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
          
          function formatDate(date) {
            return [
              padTo2Digits(date.getDate()),
              padTo2Digits(date.getMonth() + 1),
              date.getFullYear()
            ].join('.');
          }
         let today = formatDate(date);
         return today 
    }

    getCountOfdaysInYear(){
        const date = new Date();
        const year = date.getFullYear()
        function days_of_a_year(year) 
        {
   
         return isLeapYear(year) ? 366 : 365;
        }

        function isLeapYear(year) {
         return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
        }        
        let countOfdaysInYear = days_of_a_year(year);
        return countOfdaysInYear
    }

    getSameDayNextYear(){
        const date = new Date();
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
        function SameDayNextYear(date) {
            return [
              padTo2Digits(date.getDate()),
              padTo2Digits(date.getMonth() + 1),
              (date.getFullYear() + 1)
            ].join('.');
          }
          let nextyear = SameDayNextYear(date)
          return nextyear
    }
    getTheFirstDayOfMonth(){
        const date = new Date();
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
        function getFirstDayOfMonth(date) {
            return [
              padTo2Digits('01'),
              padTo2Digits(date.getMonth() + 1),
              (date.getFullYear())
            ].join('.');
          }
          let firstDayofMonth = getFirstDayOfMonth(date);
          
          return firstDayofMonth
    }
    getOneDayLess(){
        let date = new Date();
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
          }
        function subtractDays(numOfDays, date) {
            date.setDate(date.getDate() - numOfDays);
            
            return date;
        }
        let end = (subtractDays(1, date))
        function getFirstDayOfMonth(end) {
            return [
              padTo2Digits(date.getDate()),
              padTo2Digits(date.getMonth() + 1),
              (date.getFullYear() + 1)
            ].join('.');
          }
        return getFirstDayOfMonth(end)
        
    }
    
}
