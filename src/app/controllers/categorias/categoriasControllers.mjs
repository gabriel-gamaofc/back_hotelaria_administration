import categoriasRepository from '../../repositories/categorias/categoriasRepository.mjs';

// Listar todos os clientes
export const listarCategorias = async (req, res) => {
    
    try {
        const categorias = await categoriasRepository.listarCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        console.error('Erro ao listar categorias:', error);
        res.status(500).json({ error: 'Erro ao listar categorias' });
    }

};

// Criar um novo cliente

export const novoCategorias = async (req, res) => {
    const { nome } = req.body;
    try {
       if ( !nome ) {
         res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            return;
       }
       const categoriasCriado = await categoriasRepository.addcategorias({ nome })
       res.status(201).json(categoriasCriado);
    }catch (error) {
        console.error('Erro ao criar categorias:', error);
        res.status(500).json({ error: 'Erro ao criar categorias' });
    }
}