# Projeto API de Blogs!

## Este repositório contém o desenvolvimento do meu 22º projeto na Trybe

Neste projeto, usei meus conhecimentos de backend para desenvolver uma API e um banco de dados para a produção de conteúdo para um blog. A aplicação foi feita em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts. 
Trabalhei com os princípios do REST e da arquitetura em camadas, além de utilizar o que aprendi sobre Json Web Token para fazer autenticações de usuário.

## Detalhes do projeto

Confira os requisitos exigidos pela Trybe (texto extraído dos readme oficial da Trybe):

**1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`** 

---

**2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas**

---

**3 - Sua aplicação deve ter o endpoint POST `/login`**

<details><summary>Detalhes</summary>
<p>

> O endpoint deve ser acessível através do URL `/login`;
> O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

</p>
</details>

---

**4 - Sua aplicação deve ter o endpoint POST `/user`**

<details><summary>Detalhes</summary>
<p>

> O endpoint deve ser acessível através do URL `/user`;
> O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
> O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```
</p>
</details>

---

**5 - Sua aplicação deve ter o endpoint GET `/user`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/user`;
> O endpoint deve ser capaz de trazer todos `users` do banco de dados;

</p>
</details>

---

**6 - Sua aplicação deve ter o endpoint GET `/user/:id`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/user/:id`;
> O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

</p>
</details>

---

**7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas**

---

**8 - Sua aplicação deve ter o endpoint POST `/categories`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/categories`;
> O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
> O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

</p>
</details>

---

**9 - Sua aplicação deve ter o endpoint GET `/categories`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/categories`;
> O endpoint deve ser capaz de trazer todas categorias do banco de dados;

</p>
</details>

---

**10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas**

---

**11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas**

---

**12 - Sua aplicação deve ter o endpoint POST `/post`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/post`;
> O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados;
> O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

</p>
</details>

---

**13 - Sua aplicação deve ter o endpoint GET `/post`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/post`;
> O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;

</p>
</details>

---

**14 - Sua aplicação deve ter o endpoint GET `/post/:id`**

<details><summary>Detalhes</summary>
<p>

> ☝ Não esqueça de validar o `token` neste requisito;
> O endpoint deve ser acessível através do URL `/post/:id`;
> O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;

</p>
</details>

---

## Sobre o curso da Trybe
O programa total de estudo conta com mais de 1.500 horas de aulas presenciais e online,divididas ao longo de 12 meses. O conteúdo aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.
