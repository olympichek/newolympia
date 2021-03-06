import {Route} from "./Route";
Route.register("*", "ResizeColumns@main");
Route.register("/admin/files", "FilesUpload@load");
Route.register("/admin/page_admin/index", "PageAdminLinks@main");
Route.register("/admin/page_admin/edit/{page}", "PageEditor@load");
Route.register("/admin/left_menu/index", "LeftMenu@main");
Route.register("/test/vue", "VueTest@main");