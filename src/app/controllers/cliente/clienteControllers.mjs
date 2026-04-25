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

// Criar um novo cliente

export const novoCliente = async (req, res) => {
    const { nome, idade, cpf, data_nascimento} = req.body;
    try {
       if ( !nome || !idade || !cpf || !data_nascimento) {
         res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            return;
       }
       const ClienteCriado = await clientesRepository.addCliente({ nome, idade, cpf, data_nascimento})
       res.status(201).json(ClienteCriado);
    }catch (error) {
        console.error('Erro ao criar cliente:', error);
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
}