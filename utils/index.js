
let responseBeautifier = new class {
    constructor() {
        this.response = {
            code: "",
            data: {},
            msg: ""
        },
            this.StatusCode = new Map();
        this.registeStatusCode("0", "OK");
        this.registeStatusCode("-1", "ERROR");
    }
    registeStatusCode(code, description) {
        this.StatusCode.set(code, description);
    }
    registeStatusCodes(arr) {
        for (let [code, description] of arr) {
            this.StatusCode.set(code, description);
        }
    }
    set(data, code = "200", msg) {
        code = code.toString()
        if (this.StatusCode.has(code)) {
            return {
                code,
                data,
                msg: this.StatusCode.get(code),
            }
        } else {
            // log Something ,here is an unique code
            return {
                code,
                data,
                msg: msg || "Unresolvable Status Code :" + code,
            }
        }
    }
    error(code = "-1", msg) {
        code = code.toString()
        if (this.StatusCode.has(code)) {
            return {
                code,
                data: {},
                msg: this.StatusCode.get(code),
            }
        } else {
            // log Something ,here is an unique code
            return {
                code,
                data: {},
                msg: msg || "Unresolvable Status Code :" + code,
            }
        }
    }
}();

//registe Status Code 

responseBeautifier.registeStatusCodes([
    ["500", "Server internal error"],
    ["404", "NtFound"],
    ["302", "redirect"],
    ["200", "success"],
])


module.exports = responseBeautifier;