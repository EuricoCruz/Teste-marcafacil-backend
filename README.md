# Teste-marcafacil-backend
Desafio do processo seletivo para o MercaFácil

Os dois bancos de dados rodam por meio de contâiners 
A aplicação em node é acionada pelo comando NPM START

Criei uma nova tabela de usuários para que seja possivel persistir as informações para login. 
A autenticação será feita por meio do token JWT, cuja chave secreta foi inserida no arquivo ENV. 

Os bancos de dados estão conectados com a aplicação, mas falta aplicar validações e salvar as informações de contato. 