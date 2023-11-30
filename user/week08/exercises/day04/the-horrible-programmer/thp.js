"use strict";
//declaring and assigning an array with the days of the week
const days = [ "Sunday", "Monday", "Tuesday", 
"Wednesday", "Thursday", "Friday", "Saturday" ] 
//slicing the days of the week so we get only the work days
const workDays = days.slice(1,6); 
document.write(`<ul>`); 
//saving today's exact date
const todayDate = new Date();
//saving today's exact day in the form of a number  
const todayDay = todayDate.getDay(); 
//loop that will log the working days in the form of a list, with today's date highlighted 
for ( const todayDate of workDays ){ 
if ( todayDay > 0 && todayDay < 6 ) { 
  if ( days[todayDay] === todayDate ){ document.write( `<li><strong>${todayDate}</strong></li>` ); continue; 
  }}  
  document.write( `<li>${todayDate}</li>` ); 
} 
document.write(`</ul>`);