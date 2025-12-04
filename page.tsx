"use client"
import { useSearchParams, useRouter } from "next/navigation" 

export default function DeleteImpressora() {

    const id = useSearchParams().get('id');
    const router = useRouter(); 

    async function deleteImpressora() {
        
        const response = await fetch(`https://69320e8211a8738467d16303.mockapi.io/api/impressoras/${id}`,
            {
                method: "DELETE"
            }
        )

        if (response.ok) {
            alert("✅ Impressora excluída com sucesso!");
            router.push('/impressoras'); 
            
        } else {
            alert("❌ Erro ao excluir o Impressora. Tente novamente.");
        }
    }
    
    return (
        <div className="form-container">
            <h1>Confirmar Exclusão de Impressora?</h1>
            {id ? <p>Clique em Confirmar para excluir a Impressora com ID: <strong>{id}</strong></p> : <p>ID da impressora não encontrado.</p>}
            
            <button onClick={deleteImpressora} className="btn-danger">Confirmar Exclusão</button>
            <a href="/impressoras" className="action-link" style={{ marginLeft: '15px' }}>Cancelar</a> 
        </div>
    )
}