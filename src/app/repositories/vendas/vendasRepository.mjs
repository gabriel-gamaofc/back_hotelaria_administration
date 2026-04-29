import { resumoVendas , vendas} from '../../models/index.mjs';


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
     async adicionarVendas(dadosVenda) {
        try {

            const novaVenda = await vendas.create(dadosVenda);

            return novaVenda;

        } catch(erro) {
            console.error('Erro ao adicionar venda:', erro);
            throw new Error('Erro ao adicionar venda');
            }
        }
    }

    export default new vendasRepository();

