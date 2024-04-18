import { useContext } from "react";
import { UserContext } from "../../context/user";

export function TabelaAlunos() {
    const { aluno } = useContext(UserContext); // Acessando a lista de alunos do contexto

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome do Aluno</th>
                </tr>
            </thead>
            <tbody>
                {aluno.map((aluno, index) => (
                    <tr key={index}>
                        <td>{aluno}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
