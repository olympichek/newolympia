export function changeMainSelect (pagesSelect) {
    let value = pagesSelect.options[pagesSelect.selectedIndex].innerText;
    let input = pagesSelect.parentNode.querySelector(".main-name-input");
    input.value = value;
}
export function changeSubSelect (pagesSelect) {
    let value = pagesSelect.options[pagesSelect.selectedIndex].innerText;
    let input = pagesSelect.parentNode.querySelector(".sub-name-input");
    input.value = value;
}