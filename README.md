## DT-Money

### Ferramentas Utilizadas Neste Projeto:

    - React
    - TypeScript
    - Vite.js
    - styled-components
    - phosphor-react
    - Radix-UI
    - React-paginate
    
---
### Quais os benefícios de utilizar o Radix-UI?
```
    Possui integração com o React e componentes primitivos com diversas funcionalidades de acessibilidade e completamente desestilizados.
```
### O que são portals no React?
```
    Uma forma de renderizar um elemento filho dentro de um nó DOM que existe fora da hierarquia do componente pai.
```

### 3 maneiras de receber uma api com react.

```
    async function loadTransactions(){
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();

        console.log(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])

```

```
    useEffect(() => {

        async function loadTransactions(){
            const response = await fetch('http://localhost:3333/transactions')
            const data = await response.json();

            console.log(data)
        }

        loadTransactions();
    }, [])

```

```
    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then(response => response.json());
            .then(data => {
                console.log(data)
            })
    }, [])
```

### O que é o accumulator do método reduce de arrays?
```
É o valor inicial do reduce, onde podemos alterá-lo entre iterações para poder acumular valores.
```

### O que é um hook do React?
```
É uma função que tem acesso a recursos do React dentro dela, como estado ou outros hooks.
```

### Para que serve o Controller do React Hook Form?
```
Para adicionar comportamentos de formulário à inputs personalizados, que não são nativos do HTML, onde temos diferentes formas de recuperar e alterar seu valor.
```