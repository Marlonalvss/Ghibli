
# Ghibli World

**Ghibli World** é um projeto que exibe filmes do Studio Ghibli, permitindo que os usuários filtrem filmes por título, ano de lançamento e diretor. A aplicação oferece uma experiência interativa com informações detalhadas sobre cada filme, como descrição, diretor, produtor e tempo de execução.

# Teste Aqui

[Ghibli Site](https://marlonalvss.github.io/Ghibli/) 🌎

## 🚀 Funcionalidades

- **Filtros de Pesquisa**: Filtros interativos para pesquisar filmes por título, ano de lançamento e diretor.
- **Ordenação**: A opção de ordenar filmes por ano, mostrando os mais recentes ou mais antigos primeiro.
- **Exibição de Filmes**: Os filmes são exibidos em cartões com imagens e descrições curtas. Ao clicar em um cartão, mais informações sobre o filme são reveladas.
- **Interface Responsiva**: A interface é adaptada para diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.

## 🎨 Tecnologias Usadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização utilizando o **Tailwind CSS** para um design moderno e responsivo.
- **JavaScript**: Utilizado para a interação com os elementos da página, como filtros e exibição dinâmica dos filmes.
- **API Studio Ghibli**: Consome dados da [API Studio Ghibli](https://ghibliapi.vercel.app/) para obter informações sobre os filmes.

## 📸 Como Funciona

1. **Carregamento dos Filmes**: Ao carregar a página, a aplicação faz uma requisição à API do Studio Ghibli para buscar os filmes.
2. **Exibição dos Filmes**: Os filmes são exibidos em formato de cartões, com título, descrição curta e imagem.
3. **Filtros**: Os usuários podem filtrar os filmes por:
   - **Ano**: Filtrar por ano de lançamento.
   - **Diretor**: Filtrar por nome do diretor.
   - **Título**: Pesquisar filmes pelo nome.
4. **Ordenação**: Os filmes podem ser organizados em ordem crescente ou decrescente de ano de lançamento.
5. **Detalhes do Filme**: Ao clicar em um cartão de filme, mais detalhes sobre o filme são exibidos, incluindo a descrição completa, diretor, produtor e tempo de execução.

## 📋 Como Rodar o Projeto Localmente

### 1. Clone o repositório:

```bash
git clone https://github.com/Marlonalvss.git
cd ghibli-world
```

### 2. Abra o arquivo `index.html` no seu navegador:

Simplesmente abra o arquivo `index.html` no navegador de sua escolha para visualizar o projeto em ação.

## 🛠️ Como Contribuir

1. **Faça um fork** deste repositório.
2. **Clone** o seu fork para o seu computador:
   ```bash
   git clone https://github.com/Marlonalvss.git
   ```
3. **Crie uma nova branch**:
   ```bash
   git checkout -b minha-nova-feature
   ```
4. **Faça suas alterações** e adicione ao repositório:
   ```bash
   git add .
   git commit -m "Adicionando uma nova funcionalidade"
   ```
5. **Envie suas alterações** para o GitHub:
   ```bash
   git push origin minha-nova-feature
   ```
6. **Crie um pull request** para o repositório original.

## ⚙️ Customização

Se você deseja personalizar a aparência do projeto, você pode editar o arquivo `index.html` e o arquivo `main.js` para adicionar novas funcionalidades ou modificar as existentes. Para estilização, o Tailwind CSS é utilizado, tornando fácil a customização do layout.

## 💬 Contato

Marlon Alves - [https://www.linkedin.com/in/marlon-alvss/](https://www.linkedin.com/in/marlon-alvss/)

GitHub: [https://github.com/Marlonalvss](https://github.com/Marlonalvss)

## 📝 Licença

Feito para fins de estudo e prática de desenvolvimento front-end.
