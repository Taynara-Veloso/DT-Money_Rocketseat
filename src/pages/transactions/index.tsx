import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TransactionContext } from '../../contexts/TransactionContext'
import {
  Button,
  ButtonContainer,
  PaginationCount,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const {
    transactions,
    isLoading,
    currentPage,
    totalPages,
    paginateTransaction,
  } = useContext(TransactionContext)

  const handlePrevPage = () => {
    if (currentPage >= 1) {
      paginateTransaction(currentPage - 1)
      console.log(paginateTransaction)
    }
  }

  const handleNextPage = () => {
    if (currentPage <= totalPages) {
      paginateTransaction(currentPage + 1)
      console.log(paginateTransaction)
    }
  }

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <TransactionsTable>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight $variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TransactionsTable>
            <ButtonContainer>
              <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                Anterior
              </Button>
              <PaginationCount>
                {currentPage} de {totalPages}
              </PaginationCount>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Próxima
              </Button>
            </ButtonContainer>
          </>
        )}
      </TransactionsContainer>
    </div>
  )
}
