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