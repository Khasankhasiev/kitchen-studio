let expanded = false;

function showCheckboxes() {
  const select = document.getElementById("select");
  const checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    select.style.background =
      "url(../images/works-img/select-up.svg) no-repeat right";
    select.style.backgroundPositionX = "calc(100% - 32px)";
    expanded = true;
    select.style.backgroundColor = "#002B45";
    select.style.color = "#FFF";
  } else {
    checkboxes.style.display = "none";
    select.style.background =
      "url(../images/works-img/select-down.svg) no-repeat right";
    select.style.backgroundPositionX = "calc(100% - 32px)";
    expanded = false;
    select.style.color = "#002B45";
  }
}
