export default {

  getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString( "de-CH", { year: "numeric", month: "2-digit", day: "2-digit" } );
  },

  getCountOfdaysInYear() {

    const date = new Date();
    const year = date.getFullYear();

    function days_of_a_year( year ) {
      return isLeapYear( year ) ? 366 : 365;
    }

    function isLeapYear( year ) {
      return year % 400 === 0 || ( year % 100 !== 0 && year % 4 === 0 );
    }

    const countOfdaysInYear = days_of_a_year( year );
    return countOfdaysInYear;
  },

  // get date in one year from now
  getSameDayNextYear() {
    const date = new Date();
    const end  = new Date( date.getTime() );
    end.setFullYear( date.getFullYear() + 1 );
    return end.toLocaleDateString( "de-CH", { year: "numeric", month: "2-digit", day: "2-digit" } );
  },

  // get date for first day of current month
  getTheFirstDayOfMonth() {
    const date     = new Date();
    const firstDay = new Date( date.getFullYear() + 1, date.getMonth(), 1 );
    return firstDay.toLocaleDateString( "de-CH", { year: "numeric", month: "2-digit", day: "2-digit" } );
  },

  // get date prior to current date in one year
  getOneDayLess() {
    const date = new Date();
    const end  = new Date( date.getTime() );
    end.setDate( date.getDate() - 1 );
    end.setFullYear( date.getFullYear() + 1 );
    return end.toLocaleDateString( "de-CH", { year: "numeric", month: "2-digit", day: "2-digit" } );
  }
};
