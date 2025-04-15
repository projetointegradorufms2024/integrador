<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    const { createApp } = Vue;

createApp({
  data() {
    return {
      formDoacao: {
        nome: '',
        email: '',
        telefone: '',
        localizacao: '',
        tipoFralda: '',
        quantidade: ''
      },
      formReceptor: {
        nome: '',
        email: '',
        telefone: '',
        localizacao: '',
        necessidade: '',
        infoAdicional: ''
      },
      menu: [
        { id: 1, texto: "Sobre", link: "#sobre" },
        { id: 2, texto: "Como Funciona", link: "#como-funciona" },
        { id: 3, texto: "Quero Doar", link: "#doar" },
        { id: 4, texto: "Preciso Receber", link: "#receber" },
        { id: 5, texto: "Contato", link: "#contato" }
      ]
    };
  },
  methods: {
    rolarPara(anchor) {
      document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth'
      });
    },
    enviarFormulario(tipo) {
      if (tipo === 'doacao') {
        alert(`Obrigado, ${this.formDoacao.nome}, por sua doação de ${this.formDoacao.quantidade} fraldas ${this.formDoacao.tipoFralda}!`);
        this.limparFormulario('doacao');
      } else {
        alert(`Solicitação de ${this.formReceptor.nome} recebida! Entraremos em contato em breve.`);
        this.limparFormulario('solicitacao');
      }
    },
    limparFormulario(tipo) {
      if (tipo === 'doacao') {
        this.formDoacao = {
          nome: '',
          email: '',
          telefone: '',
          localizacao: '',
          tipoFralda: '',
          quantidade: ''
        };
      } else {
        this.formReceptor = {
          nome: '',
          email: '',
          telefone: '',
          localizacao: '',
          necessidade: '',
          infoAdicional: ''
        };
      }
    }
  }
}).mount('#app');

  </main>
</template>
