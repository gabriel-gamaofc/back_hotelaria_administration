import { clientes } from '../models/index.mjs';


class clientesRepository {
    async listarClientes() {
        try {
            const clientesGeral = await clientes.findAll();

            return clientesGeral;
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            throw new Error('Erro ao listar clientes:');
        }
    }

}
export default new clientesRepository();