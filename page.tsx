interface Impressora {
    id: string;
    fabricante: string;
    qtdPagina: number;
}

export default async function ListaImpressoras() {
    
    let listaImpressoras: Impressora[] = []; 

    try {
        const response = await fetch("https://69320e8211a8738467d16303.mockapi.io/api/impressoras", {
            cache: 'no-store' 
        }); 

        if (!response.ok) {
            throw new Error(`Falha ao buscar dados: ${response.status}`);
        }

        listaImpressoras = await response.json(); 
        
    } catch (error) {
        console.error("Erro ao carregar impressoras:", error);
    }

    return (
        <div className="table-container">
            <h1>Lista de impressoras Cadastrados</h1>

            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fabricante</th>
                        <th>Quantidade de Páginas</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {listaImpressoras.map((impressora) => (
                        <tr key={impressora.id}>
                            <td>{impressora.id}</td>
                            <td>{impressora.fabricante}</td>
                            <td>{impressora.qtdPagina}</td> 
                            <td><a href={`/impressoras/delete/?id=${impressora.id}`} className="action-link">Excluir</a></td>
                        </tr>
                    ))}
                    
                    {listaImpressoras.length === 0 && (
                        <tr>
                            <td colSpan={4} style={{ textAlign: 'center' }}>Nenhuma impressora encontrada.</td>
                        </tr>
                    )}
                </tbody>

            </table>
            
            <a href="/impressoras/new" className="action-link">Cadastrar Nova Impressora</a>

        </div>
    )
}