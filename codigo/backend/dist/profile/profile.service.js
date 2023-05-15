"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
class ProfileService {
    async findOne(id) {
        const user = [
            { id: "ashfd", name: "Carlos", Pontuação: 10 },
            { id: "bcg", name: "Carlinhos", Pontuação: 2 },
        ];
        const connect = user[0].id;
        return connect;
    }
    async findAll() {
        const user = [
            { id: "ashfd", name: "Carlos", Pontuação: 10 },
            { id: "bcg", name: "Carlinhos", Pontuação: 2 },
        ];
        return 'oi';
    }
}
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map