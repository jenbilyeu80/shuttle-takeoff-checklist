let date = "Monday20190318";
let time = 100534;
let astronautCount =7;
let astronautStatus = "ready";
let averageAstronautMassKg =80.7;
let crewMassKg =astronautCount * averageAstronautMassKg;
let fuelMassKg =760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel =100;
let weatherStatus = "clear";
let line= "-----------------------------------------------;"

console.log(line);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(line);
console.log("Date:" +" " + "Monday 2019-03-18" );
console.log( "Time: " +  "10:05:34 AM" );
console.log();
console.log();
console.log(line);
console.log("> ASTRONAUT INFO");
console.log(line);
console.log(" * count:" + " " + astronautCount);
console.log(" * status: " + astronautStatus);
console.log(" ");
console.log(line);
console.log("> FUEL DATA");
console.log(line);
console.log("* Fuel temp celsius:" + " " + fuelTempCelsius +" " + ("C"));
console.log("* Fuel level:" + " " + fuelLevel + "%"); 
console.log(" ");
console.log(line);
console.log("> MASS DATA");
console.log(line);
console.log("* Crew mass: 564.9 kg");
console.log("* Fuel mass: 760000 kg");
console.log("* Shuttle mass: 74842.31 kg");
console.log("* Total mass: 835407.21 kg");
console.log();
console.log(line)
console.log("> FLIGHT PLAN");
console.log(line);
console.log("* weather:" + " " + weatherStatus);
console.log();
console.log();
console.log(line);
console.log("> OVERALL STATUS");
console.log(line);
console.log("* Clear for takeoff: YES");

