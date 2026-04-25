import { produtos } from '../models/index.mjs';


class produtosRepository {
    async listarPodutosGeral() {
        try {
            const ProdutosGeral = await produtos.findAll();

            return ProdutosGeral;
        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            throw new Error('Erro ao listar produtos');
        }
    }

    async addProduto({ nome, valor, caracterisca }) {
        try {
            const ProdutoCriado = await produtos.create({nome, valor, caracterisca})
            return ProdutoCriado
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            throw new Error('Erro ao criar produto:', error);
        }

    }

}
export default new produtosRepository();