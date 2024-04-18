import { useContext } from "react";
import {Nome} from "../Nome";
import {UserContext} from "../../context/user";
/*
interface AlunoProps{
    alunoNome: string;
    changeName: (name: string) =>void;
}*/

export function Alunos(){
    const{qtdAlunos} = useContext(UserContext)
    return(
        <div>
            <h3>Quantidade de aluno: {qtdAlunos}</h3>
            <br />
        </div>
    )
}