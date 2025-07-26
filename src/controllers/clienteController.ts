import { exibirMenuPrincipal, exibirMenuSecundario } from '../main';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

export async function loginCliente(email: string, senha: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log("Usuário logado com sucesso:", user);
        return user;
    } catch (error: any) {
        console.error("Erro ao fazer login:", error);
        throw new Error(error?.message || "Erro desconhecido durante o login.");
    }
}

export async function cadastrarCliente(email: string, senha: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log("Usuário cadastrado com sucesso:", user);
        return user;
    } catch (error: any) {
        console.error("Erro ao cadastrar usuário:", error);
        throw new Error(error?.message || "Erro desconhecido durante o cadastro.");
    }
}