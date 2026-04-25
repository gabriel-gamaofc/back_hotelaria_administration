
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

export const novoProduto = async (req, res) => {


    try {
        const { nome, valor, caracterisca } = req.body
        if (!nome || !valor || !caracterisca) {
            res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            return;

        }

        const ProdutoCriado = await produtosRepository.addProduto({ nome, valor, caracterisca, })
        res.status(201).json(ProdutoCriado);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
}








