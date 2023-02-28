// var urlFile = "https://vivasoft.azurewebsites.net/";
var urlFile = "https://raw.githubusercontent.com/Patrita63/HTMLVivasoftSite/master/en-US/"
/* https://github.com/Patrita63/HTMLVivasoftSite */

function includeHTML(language) {
  if (language !== "en-US") {
    return;
  }
  var z, i, elmnt, file, xhttp;

  console.log('Inside includeHTML! - language:' + language);
  let filePath = "";

  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    
    if (file) {
      // To Avoid CORS ERROR WHEN TEST LOCALLY
      filePath = urlFile + file;
      
      console.log('includeHTML filePath: ' + filePath);
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML("it-IT");
        };
      };
      
      xhttp.open("GET", filePath, true);
      xhttp.send();
      /* Exit the function: */
      console.log('includeHTML Done!');
      return;
    }
  }
}