export default function HomePage() {
    return (
        <div className="form-container">
            <h1>Bem-vindo!</h1>
            
            <p>Esta é a Atividade da **Avaliação 3** de Desenvolvimento Web Front End.</p>
            
            <br/>

            <h2>Escolha uma ação para continuar:</h2>
            
            <ul>
                <li>
                    <a href="/impressoras" className="action-link">
                        Gerenciar Impressoras Cadastradas (Listar/Excluir)
                    </a>
                </li>
                <li>
                    <a href="/impressoras/new" className="action-link">
                        Cadastrar uma Nova Impressora
                    </a>
                </li>
            </ul>
            
            <p style={{ marginTop: '25px', color: '#666' }}>
                Utilize a barra de navegação no topo para alternar entre as ações.
            </p>

        </div>
    )
}