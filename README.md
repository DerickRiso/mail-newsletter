# Newsletter diária para prática de inglês
O projeto consiste em uma página web com notícias, palavras para vocabulário e recomendações de livros, com a possibilidade de optar por receber os dados diariamente por email. Totalmente em inglês.

## Sobre
O sistema utiliza um conjunto de APIs públicas para distribuir os dados. Recebe notícias atualizadas do New York Times, busca palavras em uma API de dicionário e recomenda livros do Open Library. A finalidade é automatizar a busca por material para prática e imersão na linguagem, e ao mesmo tempo, se atualizar com as últimas notícias sobre o mundo.

## Atual estado do projeto
- No momento as APIs estão implementadas e respondendo, e estou procurando uma forma de randomizar a busca de palavras no dicionário e na biblioteca de livros de maneira eficiente;
- O envio de email já está implementado, apesar de não ter um servidor SMTP para realizar envio para emails pessoais;
- O servidor deve realizar a requisitação dos dados apenas uma vez, salvar em um json e distribuir para todos, afim de evitar sobrecarga nas APIs. Já está implementado
- MVP da página web concluído, busco otimizá-lo em SEO e melhorar ao máximo a experiência de usuário;
- Saída dos dados já está estruturada e pronta para uso.
- O projeto já possui um Scheduler Cron para realizar tarefas automáticas quando for para produção.
