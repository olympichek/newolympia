import {Route} from "./core/Route";

export function register_routes() {
    const route = new Route();
    route.register("*", "ResizeColumns@main",
        () => { return import("./modules/ResizeColumns.js") });
    route.register("/admin/files", "FilesUpload@load",
        () => { return import("./modules/FilesUpload.js") });
    route.register("/admin/page_admin/index", "PageAdminLinks@main",
        () => { return import("./modules/PageAdminLinks.js") });
    route.register("/admin/page_admin/edit/{page}", "PageEditor@load",
        () => { return import("./modules/PageEditor.js") });
    return route;
}