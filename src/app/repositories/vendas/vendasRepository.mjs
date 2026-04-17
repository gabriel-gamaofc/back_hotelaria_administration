import { resumoVendas } from '../../models/index.mjs';


class vendasRepository {
    async listarvenda() {
        try {
            const vendasGeral = await resumoVendas.findAll();

            return vendasGeral;
        } catch (error) {
            console.error('Erro ao listar vendas:', error);
            throw new Error('Erro ao listar vendas');
        }
    }

}
export default new vendasRepository();