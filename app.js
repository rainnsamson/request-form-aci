const firebaseConfig = {
    apiKey: "AIzaSyCP7SEbjvGGh6jW11d7GZblmlQvAima4Xg",
    authDomain: "db-aci-form-6ee13.firebaseapp.com",
    databaseURL: "https://db-aci-form-6ee13-default-rtdb.firebaseio.com",
    projectId: "db-aci-form-6ee13",
    storageBucket: "db-aci-form-6ee13.appspot.com",
    messagingSenderId: "139473137617",
    appId: "1:139473137617:web:7f1db11da8efd78d9abaf0",
    measurementId: "G-3CTE74QQLB"
  };

  firebase.initializeApp(firebaseConfig);
const aciformDB = firebase.database().ref("documentRequestForm");

aciformDB.on("value", function(snapshot) {
    document.querySelector("#documentRequestsTable tbody").innerHTML = "";

    snapshot.forEach(function(childSnapshot) {
        var data = childSnapshot.val();
        var row = `
            <tr>
                <td>${data.idNumber}</td>
                <td>${data.surname}</td>
                <td>${data.firstName}</td>
                <td>${data.middleName}</td>
                <td>${data.documentRequest}</td>
                <td>${data.purpose}</td>
                <td>${data.controlNumber}</td>
                <td>${data.orNumber}</td>
                <td>${data.dateRequested}</td>
                <td>${data.dateIssued}</td>
                <td>Status</td>
            </tr>
        `;
        document.querySelector("#documentRequestsTable tbody").innerHTML += row;
    });
});


  document.getElementById("documentRequestForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var idNumber = getElementVal("idNumber");
    var surname = getElementVal("surname");
    var firstName = getElementVal("firstName");
    var middleName = getElementVal("middleName");
    var documentRequest = getElementVal("documentRequest");
    var purpose = getElementVal("purpose");
    var controlNumber = getElementVal("controlNumber");
    var orNumber = getElementVal("orNumber");
    var dateRequested = getElementVal("dateRequested");
    var dateIssued = getElementVal("dateIssued");

    saveMessages(idNumber, surname, firstName, middleName, documentRequest, purpose, controlNumber, orNumber, dateRequested, dateIssued);
  }

  const saveMessages = (idNumber, surname, firstName, middleName, documentRequest, purpose, controlNumber, orNumber, dateRequested, dateIssued) => {
        var newaciformDB = aciformDB.push();

        newaciformDB.set({
            idNumber : idNumber,
            surname : surname,
            firstName : firstName,
            middleName : middleName,
            documentRequest : documentRequest,
            purpose : purpose,
            controlNumber : controlNumber,
            orNumber : orNumber,
            dateRequested : dateRequested,
            dateIssued : dateIssued,

        });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };