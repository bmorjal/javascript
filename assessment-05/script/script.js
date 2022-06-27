function calculate() {
    var m = "";
    var d = "";
    let month = parseInt(document.getElementById("monthtype").value);


    if (month == 1){
        d = "January";
        m += "The 1st, New years, ";
        m += "The 3rd, Feast day of the holy name of Jesus";
    }
    else if (month == 2) {
        d = "February";
        m += "The 1st, Lunar new year, ";
        m += "The 14th, St. Valentines day";
    }
    else if (month == 3) {
        d = "March";
        m += "The 1st, Mardi gras, ";
        m += "The 17th, St. Patrick's day";
    }
    else if (month == 4) {
        d = "April";
        m += "The 2nd, World autism awareness day, ";
        m += "The 8th, Say of silence";
    }
    else if (month == 5) {
        d = "May";
        m += "The 5th, Cinco de mayo, ";
        m += "The 8th, Buddha day";
    }
    else if (month == 6) {
        d = "June";
        m += "The 12th, Trinity sunday, ";
        m += "The 15th, St. Vladimir day";
    }
    else if (month == 7) {
        d = "July";
        m += "The 4th, Independence day, ";
        m += "The 11th, World population day";
    }
    else if (month == 8) {
        d = "August";
        m += "The 12th, Hungry ghost festival, ";
        m += "The 13th, Black women's equal pay day";
    }
    else if (month == 9) {
        d = "September";
        m += "The 5th, Labor day, ";
        m += "The 24th, Native american day";
    }
    else if (month == 10) {
        d = "October";
        m += "The 4th, St. Francis day, ";
        m += "The 4th, Blessing of the animals day";
    }
    else if (month == 11) {
        d = "November";
        m += "The 1st, All saint's day, ";
        m += "The 11th, Veterans day";
    }
    else if (month == 12) {
        d = "December";
        m += "The 3rd, International day of persons with disabilities, ";
        m += "The 25th, Christmas day";
    }
    else {
        d = "Not a month"
        m = "The holiday of nothings"
    }
    document.getElementById("main").innerText = "Holidays within " + d + " include: " + m;
}
