export function load() {
    let path = window.location.pathname;
    if(path.indexOf("/admin/files") === 0) {
        import("./files_upload.js").then(module => {
            module.load();
        });
    }
    if(path.indexOf("/admin/page_admin/index") === 0) {
        import("./page_edit/edit_page_link.js").then(module => {
            module.load();
        });
        import("./page_edit/create_page_link.js").then(module => {
            module.load();
        });
        import("./page_edit/delete_page_link.js").then(module => {
            module.load();
        });
    }
    if(path.indexOf("/admin/page_admin/edit") === 0) {
        import("./page_edit/page_editor.js").then(module => {
            module.load();
        });
    }
    if(path.indexOf("/admin/left_menu/index") === 0) {
        import("./left_menu/main.js").then(module => {
            module.load();
        });
    }
    if(path.indexOf("/admin/right_banners/index") === 0) {
        import("./right_banners/edit_banners_link.js").then(module => {
            module.load();
        });
    }
    if(path.indexOf("/admin/right_banners/edit/") === 0) {
        import("./right_banners/main.js").then(module => {
            module.load();
        });
    }

}