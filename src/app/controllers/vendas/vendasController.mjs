import vendasRepository from '../../repositories/vendas/vendasRepository.mjs'

export const listagemVendas = async (req, res) => {

    try {
        const vendas = await vendasRepository.listarvenda();
        res.status(200).json(vendas);
    } catch (error) {
        console.error('erro ao listar vendas:', error);
        res.status(500).json({ error: 'Erro ao listar vendas' });
    }

};




