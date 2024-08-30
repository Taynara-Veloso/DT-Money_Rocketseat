import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionContext";

export function Transactions() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((tAction) => {
              return (
                <tr key={tAction.id}>
                  <td width="50%">{tAction.description}</td>
                  <td>
                    <PriceHighlight variant={tAction.type}>
                      {tAction.price}
                    </PriceHighlight>
                  </td>
                  <td>{tAction.category}</td>
                  <td>{tAction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}