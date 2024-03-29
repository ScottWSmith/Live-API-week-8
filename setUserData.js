const histEl = document.getElementById('histEl');

function emptyData() {
    var child = histEl.lastElementChild;
    while (child) {
        histEl.removeChild(child)
        child = histEl.lastElementChild;
    }
}

function getUserData() {
    makeRequest('GET', EXTERNAL_URL + "/api/account/get/" + userID).then(userDetails => {
        for (const j in userDetails) {
            for (k in userDetails[j]) {
                if (k != 'id') {
                    const newP = document.createElement('p');
                    newP.innerText = k + ": " + userDetails[j][k];
                    histEl.append(newP);
                }
            }
        }
    });
}

function deleteUserData() {
  var confirmation = confirm("Are you sure?");
  if (confirmation){
      makeRequest('DELETE', EXTERNAL_URL + "/api/account/delete/" + userID).then({
      });
      loadHome();
  }else{
  }
}

getUserData();
