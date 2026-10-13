// Displays the current year and last modified date
function displayDates() {
    const year = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");

    const today = new Date();

    year.innerHTML = today.getFullYear();
    lastModified.innerHTML = document.lastModified;
}

export function dateToday() {
    const today = new Date();
    return today;
}

// Loads a template from a file
// and returns it as a string
export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

// Renders a template
export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.innerHTML = template;
    if (callback) {
        callback(data);
    }
}

// Renders a list using a template
export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(template);
    if (clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// Loads the header and footer
export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("partials/header.html");
    const footerTemplate = await loadTemplate("partials/footer.html");

    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
    displayDates();
}