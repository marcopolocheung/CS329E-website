function get_city_status(city) {
      var xhttp;
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

         fieldData = JSON.parse(this.responseText);
         console.log(fieldData);
         console.log("-------");
         output_string = "";
         statusString = document.getElementById("status_string");
         statusString.innerHTML = "Output of " + city.id;
         // Clear the previous canvas elements;
         outputImg = document.getElementById("outputImg");
	 outputImg.innerHTML = "";
	 fieldTable = document.createElement("table");
	 fieldTable.setAttribute("class","table");
	 if ('name' in fieldData) {
	 	nameTD = document.createElement("td");
	 	nameTD.innerHTML = "name";
	 	nameValTD = document.createElement("td");
	 	nameValTD.innerHTML = fieldData['name'];
	 	nameRow = document.createElement("tr");
	 	nameRow.appendChild(nameTD)
	 	nameRow.appendChild(nameValTD);
	 	fieldTable.appendChild(nameRow);
	 }
         // Assignment 2 added rows for month, year, params

       if ('month' in fieldData) {
	 	monthTD = document.createElement("td");
	 	monthTD.innerHTML = "month";
	 	monthValTD = document.createElement("td");
	 	monthValTD.innerHTML = fieldData['month'];
	 	monthRow = document.createElement("tr");
	 	monthRow.appendChild(monthTD)
	 	monthRow.appendChild(monthValTD);
	 	fieldTable.appendChild(monthRow);
	 }
	 if ('year' in fieldData) {
	 	yearTD = document.createElement("td");
	 	yearTD.innerHTML = "year";
	 	yearValTD = document.createElement("td");
	 	yearValTD.innerHTML = fieldData['year'];
	 	yearRow = document.createElement("tr");
	 	yearRow.appendChild(yearTD)
	 	yearRow.appendChild(yearValTD);
	 	fieldTable.appendChild(yearRow);
	 }
	 if ('params' in fieldData) {
	 	paramsTD = document.createElement("td");
	 	paramsTD.innerHTML = "params";
	 	paramsValTD = document.createElement("td");
	 	paramsValTD.innerHTML = fieldData['params'].join(', ');
	 	paramsRow = document.createElement("tr");
	 	paramsRow.appendChild(paramsTD)
	 	paramsRow.appendChild(paramsValTD);
	 	fieldTable.appendChild(paramsRow);
	 }
         outputImg.appendChild(fieldTable);

         // Show the image
         document.getElementById("status").setAttribute("style","display:block;");

         //Hide the form
         document.getElementById("newRunFormDiv").setAttribute("style","display:none;");
         document.getElementById("addCityFormDiv").setAttribute("style","display:none;");

	}
      };

      url = "/status?city=" + city.id;
      xhttp.open("GET", url, true);
      xhttp.send();
}

function show_settings() {
	alert("To be done")
}

function logout() {
      var xhttp;
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //Reference: https://stackoverflow.com/questions/33914245/how-to-replace-the-entire-html-webpage-with-ajax-response
          $("html").html(xhttp.responseText);
	  window.history.pushState("object or string", "Title", "/");
        }
      };

      url = "/logout"
      xhttp.open("GET", url, true);
      xhttp.send();
}

function display_new_register_form() {
	newRunFormDiv = document.getElementById("newRunFormDiv");
	newRunFormDiv.setAttribute("style", "display:block;");

	statusDiv = document.getElementById("status");
	statusDiv.setAttribute("style", "display:none;");

	document.getElementById("addCityFormDiv").setAttribute("style","display:none;");
}

function display_add_city_form() {
	addCityFormDiv = document.getElementById("addCityFormDiv");
	addCityFormDiv.setAttribute("style", "display:block;");

	statusDiv = document.getElementById("status");
	statusDiv.setAttribute("style", "display:none;");

	document.getElementById("newRunForm").setAttribute("style","display:none;");
}
