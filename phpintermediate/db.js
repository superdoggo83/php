// function errorform() {
//     let elnm = document.getElementById("name").value;
//     let elco = document.getElementById("country").value;
//     let elja = document.getElementById("jaar").value;

//     let errormsg = new Array();
//     if (elnm.length <3 ||elnm.length >50) {
//       errormsg.push("uw naam moet minimaal 4 en maximaal 50 karakters bevatten");
//     }
//     if (elco.length < 2) {
//       errormsg.push("uw achternaam moet minimaal 2 karakters bevatten");
//     }
//     if (elja.length < 2) {
//       errormsg.push("uw adres moet minimaal 2 karakters bevatten");
//     }
//     if (elpo.length < 6) {
//       errormsg.push("uw postcode moet minimaal 6 karakters bevatten");
//     }
//     if (elpl.length < 2) {
//       errormsg.push("uw plaatsnaam moet minimaal 2 karakters bevatten");
//     }

//     let errorlist = "";
//     errormsg.forEach(function (message) {
//       errorlist += "<li>" + message + "</li>";
//     });
//     document.getElementById("results").innerHTML = errorlist;
//   }
function errorform() {
  console.log("inerrorform");
  let elnm = document.getElementById("name").value;
  let elja = document.getElementById("jaar").value;

  let errormsg = [];

  if (elnm.length < 4 || elnm.length > 50) {
    errormsg.push("uw naam moet minimaal 4 en maximaal 50 karakters bevatten");
  }
  if (elja < 1940 || elja > 2024) {
    errormsg.push("uw opgegeven jaartal moet tussen de 1940 en 2024 liggen");
  }
  let errorListHTML = "<ul>";
  errormsg.forEach(function (message) {
    errorListHTML += "<li>" + message + "</li>";
  });
  errorListHTML += "</ul>";

  document.getElementById("results").innerHTML = errorListHTML;

  if (errormsg.length === 0) {
    document.getElementById("verstuur").disabled = false;
  } else {
    document.getElementById("verstuur").disabled = true;hoi
  }
}
