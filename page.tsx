"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewImpressora(){
    
    const [fabricante, setFabricante] = useState('');
    const [paginas, setPaginas] = useState('');
    const router = useRouter();

    async function saveImpressora(event: React.FormEvent<HTMLFormElement>){
      
        event.preventDefault(); 
        
        const impressora = {
            fabricante: fabricante,
            qtdPagina: parseInt(paginas) 
        }

        const response = await fetch(`https://69320e8211a8738467d16303.mockapi.io/api/impressoras`,
            {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(impressora)

            }
        )

        if (response.ok) {
            alert("✅ Impressora cadastrada com sucesso!");
            
            setFabricante('');
            setPaginas('');
            
            router.push('/impressoras'); 
            
        } else {
            alert("❌ Erro ao cadastrar impressora. Tente novamente.");
        }
    }
    
    return(
        <div className="form-container">
            <h1>Cadastrar Nova Impressora</h1>
            
            <form onSubmit={saveImpressora}> 
                
                <input 
                    type="text" 
                    id="fabricante" 
                    placeholder="Digite a Fabricante da Impressora"
                    value={fabricante} 
                    onChange={(e) => setFabricante(e.target.value)} 
                    required 
                />
                
                <input 
                    type="number" 
                    id="paginas" 
                    placeholder="Digite o Quantidade de Páginas"
                    value={paginas} 
                    onChange={(e) => setPaginas(e.target.value)} 
                    required
                />
                
                <button type="submit" className="btn-primary">Salvar Impressora</button>
            </form>
        </div>
    )
}