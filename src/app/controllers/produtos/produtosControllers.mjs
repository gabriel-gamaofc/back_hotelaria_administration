import produtosRepository from '../../repositories/produtosRepository.mjs';

export const listagemProdutos = async (req, res) => {

    try {
        const produtos = await produtosRepository.listarPodutosGeral();
        res.status(200).json(produtos);
    } catch (error) {
        console.error('erro ao listar produtos:', error);
        res.status(500).json({ error: 'Erro ao listar produtos' });
    }

};




