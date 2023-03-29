var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Peixe = /** @class */ (function () {
    function Peixe() {
        this.tipo = "Peixe";
    }
    return Peixe;
}());
var Ave = /** @class */ (function () {
    function Ave() {
        this.tipo = "Ave";
    }
    Ave.prototype.respirar = function () {
        return "respirou";
    };
    return Ave;
}());
var Mamifero = /** @class */ (function () {
    function Mamifero() {
        this.tipo = "Mamifero";
    }
    Mamifero.prototype.respirar = function () {
        return "respirou";
    };
    return Mamifero;
}());
var Cao = /** @class */ (function (_super) {
    __extends(Cao, _super);
    function Cao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.familia = "Canidea";
        return _this;
    }
    return Cao;
}(Mamifero));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.familia = "Felinea";
        return _this;
    }
    return Gato;
}(Mamifero));
var costelinha = new Cao();
var mingau = new Gato();
console.log(costelinha.respirar());
console.log(mingau);
