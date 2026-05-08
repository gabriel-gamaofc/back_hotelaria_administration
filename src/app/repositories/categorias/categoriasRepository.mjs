import { categorias } from '../../models/index.mjs';


class categoriasRepository {
    async listarCategorias() {
        try {
            const categoriasGeral = await categorias.findAll();

            return categoriasGeral;
        } catch (error) {
            console.error('Erro ao listar categorias:', error);
            throw new Error('Erro ao listar categorias:');
        }
    }

    async addcategorias({nome}) {
        try{
           const categoriasCriado = await categorias.create({nome})
           return categoriasCriado
        }catch (error){
            console.error('Erro ao criar categorias:', error);
            throw new Error('Erro ao criar categorias:', error);
        }
    }

}
export default new categoriasRepository();