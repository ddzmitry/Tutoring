
var obj = function() {
    this.name = "Anastasia";
    
    this.key = function(){
        var _this = this;
        _this.name = "Dzmitry";
        return this;
    }
    // is ignored 
    var that = {};
    that.name  = "Dzmitry";
    var name = this.name + " && " + that.name;
    return name


}

var o = new obj();
console.log(o)
console.log(o.name)
console.log(o.key())
console.log(o.name)


