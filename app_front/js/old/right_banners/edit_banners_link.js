export function load() {
    let link = document.querySelector("#banners-page-href");
    link.addEventListener("click", function() {
        let pages_list = document.querySelector("#banners-pages-list");
        let href_default = "/admin/right_banners/edit/";
        let page = pages_list.value;
        window.location.href = (href_default + page);
    });
}
