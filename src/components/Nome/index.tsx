import { useContext } from "react"
import { UserContext } from "../../context/user"


/*interface NomeProps{
    nome:string;
    changeName: (name:string) =>void; 
}
*/
export function Nome(){
    const {aluno} = useContext(UserContext)
    return(
        <div>
            <strong>Alunos:{aluno}</strong>
            <br /> 
        </div>
    )
}