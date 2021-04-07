/**
* Wait for DOM to be ready
*/
document.addEventListener("DOMContentLoaded", function(e){
	/**
	* Get all of the dropdown menus as a NodeList and store it in a variable
	*/
	const all_dropdowns = document.querySelectorAll("select");
	/**
	* Iterate through each item on the list and attach an event listener for when the dropdown's selection changes
	*/
	all_dropdowns.forEach(function(dropdown){
		dropdown.addEventListener("change", function(e){
			// call the calculate function whenever this dropdown changes
			calculate(e);
		});
	});
});
/**
* Set up your variables
*/
let school = false;
let semester_cost = false;
let length = false;
let rent = false;
let dorm = false;
let dorm_cost = 0;
let rent_cost = 0;
let in_state = false;
/**
* Handles the calculation
*/

function calculate(e){
	const dropdown_id = e.target.id;

	if(dropdown_id === "school"){
		school = e.target.value;
	}

	if(dropdown_id === "length"){
		length = parseInt(e.target.value);
	}

	if(dropdown_id === "rent"){
		rent = e.target.value;
	}

	if(dropdown_id === "dorm"){
		dorm = e.target.value;
	}

  if(dropdown_id === "state"){
		in_state = e.target.value;
	}

	console.log(e.target.value);

  // if the school hasn't been chosen, short-circuit the function
	if(!school){
		return false;
	}

  // if the length hasn't been chosen, short-circuit the function
	if(!length){
		return false;
	}

  // reveal div.total
  document.querySelector("div.total").classList.add("active");

  //get the costs associated with the chosen school
	if(school === "Columbia University"){
		semester_in_state = 29000;
    semester_out_state = 34000;
		dorm_cost = 8718;
		rent_cost = 2400;
	}

  if(school === "University of California, Berkeley"){
    semester_in_state = 13998;
    semester_out_state = 20121;
    dorm_cost = 0;
    rent_cost = 2950;
  }

if(school === "New York University"){
  semester_in_state = 31470;
  semester_out_state = 31470;
  dorm_cost = 1270-1605;
  rent_cost = 2400;
}
if(school === "University of Missouri"){
  semester_in_state = 11962;
  semester_out_state = 24313;
  dorm_cost = 12934;
  rent_cost = 1900;
}
if(school === "Stanford University"){
  semester_in_state = 18105;
  semester_out_state = 18105;
  dorm_cost = 1218-1396;
  rent_cost = 2198;
}
if(school === "The University of Texas at Austin"){
  semester_in_state = 10848;
  semester_out_state = 19786;
  dorm_cost = 15392;
  rent_cost = 1398;
}
if(school === "University of Maryland - College Park"){
  semester_in_state = 10779;
  semester_out_state = 39891;
  dorm_cost = 1227-1735;
  rent_cost = 2350;
}
if(school === "Syracuse University"){
  semester_in_state = 30294;
  semester_out_state = 30294;
  dorm_cost = 1234;
  rent_cost = 10303;
}
if(school === "University of Illinois, Urbana-Champaign"){
  semester_in_state = 13980;
  semester_out_state = 28464;
  dorm_cost = 5830-8840;
  rent_cost = 685;
}
if(school === "Northwestern University - Medill"){
  semester_in_state = 22456;
  semester_out_state = 22456;
  dorm_cost = 12087-24000;
  rent_cost = 1936;
}
if(school === "USC - Annenberg School for Communication and Journalism"){
  semester_in_state = 22610;
  semester_out_state = 22610;
  dorm_cost = 0;
  rent_cost = 2353;
}
if(school === "Boston University"){
  semester_in_state = 28427;
  semester_out_state = 28427;
  dorm_cost = 14590;
  rent_cost = 1750;
}

if(in_state === "yes"){
  semester_cost = semester_in_state;
} else{
  semester_cost = semester_out_state;
}
	//start the math
	let cost = semester_cost * length;
	//if they're dorming, add the cost of dorming per semester onto the cost
	if(dorm === "yes"){
		cost = cost + (dorm_cost * length);
	}
	/**
	* if they're renting, convert the length of their schooling to months and then multiply the rent by that number. Then add that onto the cost.
	* This example assumes 1 semester = 3.5 months
	*/
	if(rent === "yes"){
		cost = cost + (rent_cost * 4 * length);
	}
	//output the cost
  console.log(cost);
  document.querySelector("div.total span").innerHTML = cost.toLocaleString();
}
