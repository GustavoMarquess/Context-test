import {ReactNode,createContext,useState}from "react";
import { Alunos } from "../components/Alunos";

interface UserProviderProps{
    children: ReactNode;
}

interface UserContextData{
    aluno: string[];
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    adicionaAluno:(nome:string) => void; 
}

export const UserContext = createContext({}as UserContextData);

export function UserProvider({children}:UserProviderProps){

    const[aluno,setAluno] = useState<string[]>([]);


    function mudaNome(nome: string){
        setAluno([nome]);
    }
    
    function adicionaAluno(nome: string){
        setAluno(alunosAntigos => [...alunosAntigos, nome]); 
    }
    const qtdAlunos = aluno.length;

    return(
        <UserContext.Provider value={{aluno,qtdAlunos ,mudaNome,adicionaAluno}}>
            {children}
        </UserContext.Provider>
    )
}


