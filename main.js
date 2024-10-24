const dropDownButton = document.querySelector("button");
const dropDownEmoji = document.querySelector(".dropdown-emoji");
const dropDownList = document.querySelector(".dropdown-list");
const dropDownItems = document.querySelectorAll("li");
let showList = false;

function showHideList() {
    if(!showList) {
        dropDownList.classList.remove("hidden");
        dropDownEmoji.textContent = " 🔼";
    } else {
        dropDownList.classList.add("hidden");
        dropDownEmoji.textContent = " 🔽";
    }
    showList = !showList;
}

function handleDropdownInput() {
    dropDownItems.forEach(dropDownItem => dropDownItem.classList.remove("selected"));
    this.classList.add("selected")
    dropDownButton.textContent = this.textContent;
    showList = false;
    dropDownList.classList.add("hidden");
}

dropDownButton.addEventListener("click", showHideList);
dropDownItems.forEach(dropDownItem => dropDownItem.addEventListener("click", handleDropdownInput));