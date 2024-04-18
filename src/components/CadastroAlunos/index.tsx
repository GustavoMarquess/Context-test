import { useState, useContext } from "react";
import { UserContext } from "../../context/user";

export function AlunosCadastro() {
    const [novoAluno, setNovoAluno] = useState('');
    const { adicionaAluno } = useContext(UserContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (novoAluno.trim() !== '') {
            adicionaAluno(novoAluno);
            setNovoAluno(''); 
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={novoAluno}
                onChange={e => setNovoAluno(e.target.value)}
                placeholder="Digite o nome do aluno"
            />
            <br />
            <br />
            <button type="submit">Adicionar Aluno</button>
        </form>
    );
}