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