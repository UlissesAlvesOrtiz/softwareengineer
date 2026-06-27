function Home(){

     return (
        <div style={{
      display: 'flex',          // Ativa o flexbox no container
      flexDirection: 'column',  // Empilha os elementos verticalmente
      alignItems: 'center',      // Centraliza os elementos horizontalmente
      justifyContent: 'center', // Centraliza os elementos verticalmente na tela
      minHeight: '100vh',      // Faz o container ocupar a altura toda da janela
      backgroundColor: '#111'   // Define um fundo escuro para o site todo (combina com o Vercel)
    }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>AMO VCS!!!</h1>
      
      {/* Container da imagem com o formato 9:16 */}
      <div style={{
        width: '360px',        // Largura do formato vertical
        height: '640px',       // Altura do formato vertical (9:16)
        display: 'flex',       // Ativa flexbox no container da imagem
        alignItems: 'center',   // Centraliza a imagem verticalmente dentro do 9:16
        justifyContent: 'center', // Centraliza a imagem horizontalmente dentro do 9:16
        overflow: 'hidden',    // Garante que nada saia do formato
        borderRadius: '8px',  // Aplica o arredondamento ao container
        backgroundColor: '#222' // Fundo ligeiramente diferente para o container da foto
      }}>
        <video 
          src="/familia.mp4" // Coloque o vídeo na pasta /public com este nome
          autoPlay            // Inicia o vídeo sozinho assim que a página carrega
          loop                // Faz o vídeo recomeçar quando chegar ao fim (contínuo)
          muted               // OBRIGATÓRIO: O navegador só deixa o autoPlay funcionar se o vídeo começar sem som
          playsInline         // Importante para funcionar o autoPlay direto no Safari/iPhone
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain', // Mantém o vídeo inteiro sem cortes. Mude para 'cover' se o vídeo já for 9:16 nativo!
          }} 
        />
      </div>
      
            <br></br>
            
        </div>
    );
      
}
export default Home;