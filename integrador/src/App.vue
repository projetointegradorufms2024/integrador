<!-- filepath: c:\Users\kenni\MeuProjetos\integrador\integrador\src\App.vue -->
<template>
  <div id="app">
    <div class="container">
      <header>
        <div class="logo">SOS SOLIDARIEDADE</div>
        <p class="slogan">Conectando doadores e acamados</p>
      </header>
    </div>
    <!-- Renderiza o componente HomeView -->
    <HomeView />
    <!-- Adiciona o rodapé -->
    <footer>
      <div class="centered-text">
        <p>Projeto de Extensão - Tecnologia da Informação - abril 2025.1</p>
        <p>Desenvolvido por: Kennia Fernandes Barbosa, Haroldo de Mattos Taques Junior, Marcelo Ruiz, Cauan Fortunato, Alex Sales Ferreira</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  components: {
    HomeView,
  },
};
</script>
