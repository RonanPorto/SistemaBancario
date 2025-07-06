import { number } from 'framer-motion';
import { rl, askQuestion } from './terminal';
import { loginCliente, cadastrarCliente} from './controllers/clienteController';

export async function exibirMenuPrincipal(){
    console.log(`
        === SISTEMA BANCARIO ===

            Selecione uma opção:

            [1] Entrar na conta
            [2] Cadastrar nova conta
            [0] Encerrar Sistema
    `);

    const opcao = await askQuestion('Digite sua opção: ');

    switch (Number(opcao)){
        case 1:
            await loginCliente();
            break;
        case 2:
            await cadastrarCliente();
            break;
        case 0:
            console.log("Encerrando o sistema");
            rl.close();
            break;
        default:
            console.log('\nOpção inválida.');
            await askQuestion('Pressione Enter para continuar...');
            await exibirMenuPrincipal();
            break;
    }
}

export async function exibirMenuSecundario(){
    console.log(`
        === MENU DO CLIENTE ===

            Selecione uma opção:

            [1] Ver saldo
            [2] Depositar
            [3] Sacar
            [4] Transferir
            [5] Investir
            [6] Ver extrato
            [0] Encerrar Sistema
    `);
}