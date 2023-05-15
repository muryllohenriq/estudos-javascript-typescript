"use strict";
// pasta common = tudo que pode ser compartilhado entre clientes e outras entidades do sistema
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
// estrutura de criação de rotas, sempre terá a mesma estrutura
class CommonRoutesConfig {
    constructor(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
}
exports.CommonRoutesConfig = CommonRoutesConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL2NvbW1vbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4RkFBOEY7OztBQUc5RiwrREFBK0Q7QUFDL0QsTUFBc0Isa0JBQWtCO0lBQ3BDLFlBQW1CLEdBQXdCLEVBQVMsSUFBWTtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFxQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FHSjtBQVZELGdEQVVDIn0=