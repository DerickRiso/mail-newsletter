# Newsletter diária para prática de inglês
O projeto consiste em uma página web com notícias, palavras para vocabulário e recomendações de livros, com a possibilidade de optar por receber os dados diariamente por email. Totalmente em inglês.

## Sobre
O sistema utiliza um conjunto de APIs públicas para distribuir os dados. Recebe notícias atualizadas do New York Times, busca palavras em uma API de dicionário. A finalidade é automatizar a busca por material para prática e imersão na linguagem, e ao mesmo tempo, se atualizar com as últimas notícias sobre o mundo.

## Stack
- Backend: NestJS, Axios, Pug para template email;
- [Frontend](https://github.com/DerickRiso/webpage-newsletter): React, Tailwind, Vite como bundler;
- Banco de dados: SQLite (ainda não implementado);
- Testes: Jest e Cypress (ainda não implementado).

## Atual estado do projeto
- No momento as APIs estão implementadas e respondendo, e estou procurando uma forma de randomizar a busca de palavras no dicionário de maneira eficiente;
- O envio de email já está implementado, apesar de não ter um servidor SMTP para realizar envio para emails pessoais;
- O servidor deve realizar a requisitação dos dados apenas uma vez, salvar em um json e distribuir para todos, afim de evitar sobrecarga nas APIs. Já está implementado;
- MVP da página web concluído, busco otimizá-lo em SEO e melhorar ao máximo a experiência de usuário;
- Saída dos dados já está estruturada e pronta para uso.
- O projeto já possui um Scheduler Cron para realizar tarefas automáticas quando for para produção;

## Próximos passos
- Será necessário integrar o sistema à um banco de dados e realizar cadastro do email;
- Desejo adicionar testes automatizados no projeto.

## Conclusão

Apesar de tudo, colocar este projeto em produção ainda é um desafio no momento. O projeto não pode ser monetizado devido à natureza dos dados utilizados (APIs públicas) o que dificulta mantê-lo em um servidor. Levando em consideração esses pontos, após as realização das atividades faltantes, o projeto será pausado até ser viável escalá-lo. 
Agradeço por ter chegado até aqui com o projeto, implementei funcionalidades que achei que não conseguiria tão cedo, aprendi coisas novas e me desenvolvi. Espero poder voltar a atualizar esta implementação em breve. 

Sinta-se a vontade explorar o código, aceito sugestões e feedback!
