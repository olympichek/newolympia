export class Cookie {

    constructor(cookie_name, cookie_value) {
        this.cookie_name =  cookie_name;
        this.cookie_value =  cookie_value;
    }

    get name() {
        return this.cookie_name;
    }

    get value() {
        return this.cookie_value;
    }

    static getByName(cookie_name) {
        const cookies_string = document.cookie;
        const cookies_array = cookies_string.split(";");
        let cookie_value = null;
        for(let i = 0; i < cookies_array.length; i++) {
            let current_cookie_parts = cookies_array[i].split("=");
            let current_cookie_name = current_cookie_parts[0].trim();
            let current_cookie_value = current_cookie_parts[1].trim();
            if(current_cookie_name === cookie_name) {
                cookie_value = current_cookie_value;
            }
        }
        return new Cookie(cookie_name, cookie_value);
    }

}