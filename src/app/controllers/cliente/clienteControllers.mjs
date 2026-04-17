import clientesRepository from '../../repositories/clienteRepository.mjs';

// Listar todos os clientes
export const listarClientes = async (req, res) => {
    
    try {
        const clientes = await clientesRepository.listarClientes();
        res.status(200).json(clientes);
    } catch (error) {
        console.error('Erro ao listar clientes:', error);
        res.status(500).json({ error: 'Erro ao listar clientes' });
    }

};