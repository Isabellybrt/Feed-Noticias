# 📰 Feed de Notícias – App em React Native (MVVM)

Aplicativo mobile desenvolvido como atividade prática da disciplina **Programação para Dispositivos Móveis (PDM)**. O objetivo é aplicar o **padrão MVVM (Model–View–ViewModel)** em um projeto React Native usando **Expo**, consumindo a **NewsAPI** para exibir um feed de notícias.

---

## 🚀 Funcionalidades

* **Login simples (mock)** — tela de autenticação com validação local.
* **Feed dinâmico** — lista de notícias obtidas via [NewsAPI.org](https://newsapi.org).
* **Busca por palavra-chave** — pesquisar notícias por termos.
* **Pull-to-refresh** — atualizar o feed puxando a lista para baixo.
* **Tela de detalhes** — visualizar notícia completa e abrir no navegador.
* **Tratamento de erros e carregamento** — mensagens amigáveis para falhas e estados.
* **Design moderno** — tema claro em tons de azul/branco, fonte Poppins e animações sutis.

---

## 🧩 Arquitetura (MVVM)

O projeto mantém separação de responsabilidades entre camadas, facilitando manutenção, testes e escalabilidade.

---

## 🛠 Tecnologias

* React Native + Expo
* TypeScript
* Axios (requisições HTTP)
* NewsAPI.org (fonte de dados)
* Expo Router (navegação)
* `@expo-google-fonts/poppins` + `expo-font` (tipografia)
* `react-native-animatable` (animações)

---

## ⚙️ Instalação e execução

### Pré-requisitos

* Node.js (recomenda-se v18+)
* Yarn ou npm
* Expo CLI (opcional: `npm i -g expo-cli`)
* Conta gratuita em [NewsAPI.org](https://newsapi.org) para obter a API Key

### Passos

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/Isabellybrt/Feed-Noticias.git](https://github.com/Isabellybrt/Feed-Noticias.git)
    cd Feed-Noticias
    ```

2.  Instale dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  Instale pacotes do Expo (fonts, animatable, etc.):
    ```bash
    npx expo install @expo-google-fonts/poppins expo-font react-native-animatable axios
    ```

4.  Configure a API Key:
    Abra o arquivo `src/model/repositories/NewsRepository.ts` e substitua a constante `API_KEY` pela sua chave:
    ```typescript
    const API_KEY = 'SUA_API_KEY_AQUI';
    ```

5.  Inicie o aplicativo:
    ```bash
    npx expo start
    ```
    Escaneie o QR code com o app Expo Go no celular, ou abra em emulador/dispositivo.

---

## 🔎 Uso

### Login com credenciais mock:

Email: user@example.com Senha: password

* No feed, digite um termo e pressione **Buscar** para pesquisar.
* Toque numa notícia para ver detalhes e abrir a matéria completa no navegador.
* Puxe a lista para baixo para atualizar (**pull-to-refresh**).

---

## 🧠 Observações técnicas e boas-práticas

* **Arquitetura MVVM**: os `viewmodel` expõem somente o estado e ações necessárias para a `view`, evitando lógica de negócio nas telas.
* O componente de busca controla um estado local (`localSearch`) para evitar requisições a cada digitação; a busca só ocorre ao apertar "Buscar".
* Erros são exibidos inline (não substituem toda a tela), permitindo navegação e melhor UX.
* Fonts são carregadas no `App.tsx` usando `@expo-google-fonts/poppins` para consistência visual.

---

## 👩‍💻 Autora

**Maria Isabelly**

Projeto desenvolvido como atividade da disciplina PDM — Arquitetura MVVM em React Native.

Repositório: [https://github.com/Isabellybrt/Feed-Noticias](https://github.com/Isabellybrt/
