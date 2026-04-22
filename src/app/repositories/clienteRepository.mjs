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

    async addCliente({nome, idade, cpf, data_nascimento}) {
        try{
           const clienteCriado = await clientes.create({nome, idade, cpf, data_nascimento})
           return clienteCriado
        }catch (error){
            console.error('Erro ao criar cliente:', error);
            throw new Error('Erro ao criar cliente:', error);
        }
    }

}
export default new clientesRepository();