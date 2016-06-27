var Class = function () {
    var klass = function () {
        this.init.apply(this, arguments);
    };
    klass.prototype.init = function (attrs) {
        for(var attr in attrs){
            this[attr] = attrs[attr];
        }
    };
    //short cuts:
    klass.fn = klass.prototype;
    klass.fn.parent = klass;

    //extend the Class-level properties:
    klass.extend = function (obj) {<br>        //If the parameter contains extended(), invoke it as callback
        var extended = typeof obj.extended === 'function' ? obj.extended : null;
        for (var attr in obj) {
            klass[attr] = obj;
        }
        if (extended !== null) {
            extend(klass);
        }
    };

    //extend the instance-level properties:
    klass.include = function (obj) {<br>        //If the parameter contains included, invoke it as callback
        var included = typeof obj.included === 'function' ? obj.included : null;
        for (var attr in obj) {
            klass.fn[attr] = obj[attr];
        }
        if (included !== null) {
            included(klass);
        }
    };

    return klass;
};

var Person = new Class();
Person.include({
    name: '',
    eat: function () {
        console.info('Eat food, ' + this.name + '!');
    }
});
var bob = new Person();
bob.name = 'Bob';
var mary = new Person();
mary.name = 'Mary';

bob.eat();
mary.eat();