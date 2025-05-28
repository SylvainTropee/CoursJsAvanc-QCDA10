//variables
var age = 25;
var job = "Dev";
var IS_OK = true;
//inférence de type
var test = 42;
test = "coucou";
var Job = /** @class */ (function () {
    function Job(name, firm, salary) {
        if (salary === void 0) { salary = 0; }
        this.name = name;
        this.salary = salary;
        this._firm = firm;
    }
    Job.prototype.display = function () {
        console.log(this.name, this._firm, this.salary);
    };
    Object.defineProperty(Job.prototype, "firm", {
        get: function () {
            return this._firm;
        },
        set: function (value) {
            this._firm = value;
        },
        enumerable: false,
        configurable: true
    });
    return Job;
}());
var dev = new Job("Dev", "IBM", 70000);
dev.firm = "Cap Gemini";
var dev2 = new Job("Dev", "IBM");
dev.display();
dev2.display();
var manager = {
    lvlHierarchy: 12,
    job: {
        name: "Dev"
    },
    getHierarchy: function () {
        return 1;
    }
};
console.log(manager.lvlHierarchy);
console.log(manager.getHierarchy());
