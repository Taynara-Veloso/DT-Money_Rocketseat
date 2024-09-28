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

### Por que que um componente renderiza?

- Hooks changed (mudança de estado, contexto, reducer);
- Props changed (mudança nas propriedades)
- Parent rerendered (componente pai renderizou)

### Qual o fluxo de renderização?

- O React recria o HTML da interface daquele componente
- Compara a versão do HTML recriada com a versão anterior
- Se mudou alguma coisa, ele reescreve o HTML na tela

### E se meu HTML tiver muitas informações para renderizar?

`MEMO:`

- Os hooks mudaram?, As Props mudaram? (deep comparison)
- Comparar a versão anterior dos hooks e props 
- Se mudou algo, ele vai permitir a nova renderização e executa o `fluxo de renderização`, caso nada tenha mudado ele não renderiza novamente

### Para que serve a extensão React Developer Tools?
```
Para inspecionar componentes React pelo navegador, analisar as props passadas e identificar problemas de performance.
```

### O que é o useCallback?
```
Um hook focado em performance que memoriza funções e as recria caso uma de suas dependências seja alterada.
```

### O que é o useMemo?
```
Um hook focado em performance que memoriza valores computados e reavalia esses valores caso uma de suas dependências seja alterada.
```

### O que são portals no React?
```
Uma forma de renderizar um elemento filho dentro de um nó DOM que existe fora da hierarquia do componente pai.
```

### O que é um hook do React?
```
É uma função que tem acesso a recursos do React dentro dela, como estado ou outros hooks.
```

### O que é e para que serve o axios que utilizamos durante a aplicação?
```
É um cliente HTTP que pode ser utilizado no front-end ou back-end para fazer chamadas HTTP.
```

### Por quais motivos um componente do React pode renderizar novamente?
```
Quando uma propriedade ou estado são alterados pela atualização de um componente de nível superior.
```

### Qual a funcionalidade do hook useContextSelector?
```
Evitar novas renderizações desnecessárias quando um valor não selecionado da Context API tenha sido alterado.
```
