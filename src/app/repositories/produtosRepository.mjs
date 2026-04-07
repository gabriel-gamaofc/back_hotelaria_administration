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

}
export default new produtosRepository();