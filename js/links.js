let siteNameInput = document.getElementById('siteName');
let siteURLInput = document.getElementById('siteURL');
let submitBtn = document.querySelector('.submit');
let tableBody = document.getElementById('tableBody');

var siteList = [];
const defaultSites = [
  { name: "Logic Submission", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=Cg7cqu5lGkeZoZ-G-uy67Uhefp-ef3pHl5GEosQthw1UMDQ2SEtQWjBBSDdHNkQ0STZZNzlTOTY1SiQlQCN0PWcu&origin=QRCode" },
  { name: "PL-2 Submission", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=Cg7cqu5lGkeZoZ-G-uy67UphuWk8FflJsykInhE3fCVUNkxDNUZBUEZQMzBVVkhONDJNQlFWR0E0TS4u" }
];
if (localStorage.getItem('websites') == null) {
  localStorage.setItem('websites', JSON.stringify(defaultSites));
}

try {
  const parsed = JSON.parse(localStorage.getItem('websites'));
  siteList = Array.isArray(parsed) ? parsed : [];
} catch {
  siteList = [];
}
displaySite();

siteNameInput.addEventListener('input', (e) => {
  validateForm(e.target);
});
siteURLInput.addEventListener('input', (e) => {
  validateForm(e.target);
});
submitBtn.addEventListener('click', submitForm);



function validateForm(element) {
  const regex = {
    siteName: /^[A-Za-z0-9 _-]{3,20}$/,
    siteURL: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,63}(\/.*)?$/i
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    return true;
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    return false;
  }
}

function submitForm() {
  let errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
  let isNameValid = validateForm(siteNameInput);
  let isURLValid = validateForm(siteURLInput);

  if (!isNameValid || !isURLValid) {
    errorModal.show();
  } else {
    addSite();
  }
}

function addSite() {
  let site = {
    name: siteNameInput.value,
    url: siteURLInput.value
  };
  if (!site.url.startsWith("https")) {
    site.url = "https://" + site.url;
  }
  siteList.push(site);
  localStorage.setItem('websites', JSON.stringify(siteList));
  clearform();
  displaySite();
}

function clearform() {
  siteNameInput.value = '';
  siteURLInput.value = '';
  siteNameInput.classList.remove('is-valid');
  siteURLInput.classList.remove('is-valid');
}

function deleteSite(index) {
  siteList.splice(index, 1);
  localStorage.setItem('websites', JSON.stringify(siteList));
  displaySite();
}

function displaySite() {
  let cartoona = '';
  for (let i = 0; i < siteList.length; i++) {
    cartoona += `<tr>
      <th scope="row">${i + 1}</th>
      <td>${siteList[i].name}</td>
      <td><a href="${siteList[i].url}" target="_blank" class="btn btn-outline-danger rounded-5"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
      <td><button type="button" onclick="deleteSite(${i})" class="btn btn-warning rounded-5"><i class="fa-solid fa-trash me-2"></i>Delete</button></td>
    </tr>`;
  }
  tableBody.innerHTML = cartoona;
}