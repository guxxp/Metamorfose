// app.js

// Abrir artigos (caso queira futuramente carregar dinamicamente)
function openArticle(slug) {
  console.log(`Abrir artigo: ${slug}`);
  // Aqui você pode implementar redirecionamento, animação ou carregamento dinâmico
  // window.location.href = `detalhes.html?artigo=${slug}`;
}

// Formulário: Newsletter
function subscribeNewsletter(event) {
  event.preventDefault();

  const email = event.target.querySelector('input[type="email"]').value;
  
  if (email) {
    alert(`Obrigado por assinar nossa newsletter, ${email}!`);
    event.target.reset();
  }
}

// Formulário: Fale Conosco
function sendMessage(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert(`Olá, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo e-mail: ${email}`);
    event.target.reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
