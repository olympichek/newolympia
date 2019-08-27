export class Route {

    constructor() {
        this.routes_list = [];
    }

    register(uri, class_method, import_fn) {
        const routes_list_length = this.routes_list.length;
        const class_method_parts = class_method.split("@");
        const class_name = class_method_parts[0];
        const method_name = class_method_parts[1];
        this.routes_list[routes_list_length] = {uri, class_name, method_name, import_fn};
        return routes_list_length;
    }

    explode(uri) {
        if(uri[0] === "/") uri = uri.slice(1);
        if(uri[uri.length-1] === "/") uri = uri.slice(0, -1);
        return uri.split("/");
    }

    validate(uri, route) {
        let routes_array = this.explode(uri);
        let routes_check_array = this.explode(route);
        let check = 1;
        if(routes_array.length !== routes_check_array.length) {
            check = 0;
        }
        else {
            for(let i = 0; i < routes_array.length; i++) {
                let var_regexp = /^[{][a-zA-Z0-9_]+[}]$/;
                let route_regexp = /^[a-zA-Z0-9_]+$/;
                if(var_regexp.test(routes_check_array[i])) {
                    if(!route_regexp.test(routes_array[i])) {
                        check = 0;
                    }
                }
                else {
                    if(!route_regexp.test(routes_array[i])) {
                        check = 0;
                    }
                    else if(!route_regexp.test(routes_check_array[i])) {
                        check = 0;
                    }
                    else if(routes_array[i] !== routes_check_array[i]) {
                        check = 0;
                    }
                }
            }
        }
        if(uri === "/" && route === "/") {
            check = 1;
        }
        if(route === "*") {
            check = 1;
        }
        return check;
    }

    loadingError() {
        console.log("Error while loading module...");
    }

    async start() {
        let request = window.location.pathname;
        let route_index = [];
        let count = 0;
        for (let i = 0; i < this.routes_list.length; i++) {
            if (this.validate(request, this.routes_list[i]["uri"])) {
                route_index[count] = i;
                count++;
            }
        }
        if (route_index.length !== 0) {
            for (let i = 0; i < route_index.length; i++) {
                let route = this.routes_list[route_index[i]]["uri"];
                let request = window.location.pathname;
                let route_parts = this.explode(route);
                let request_parts = this.explode(request);
                let request_args = {};
                for (let j = 0; j < route_parts.length; j++) {
                    let var_regexp = /^[{][a-zA-Z0-9_]+[}]$/;
                    if (var_regexp.test(route_parts[j])) {
                        let arg_name = route_parts[j].slice(1, -1);
                        request_args[arg_name] = request_parts[j];
                    }
                }
                const module = await this.routes_list[route_index[i]]["import_fn"]();
                const class_name = this.routes_list[route_index[i]]["class_name"];
                const method_name = this.routes_list[route_index[i]]["method_name"];
                const obj = new module[class_name]();
                obj[method_name](request_args);
            }
        } else {
            this.loadingError();
        }
    }

}