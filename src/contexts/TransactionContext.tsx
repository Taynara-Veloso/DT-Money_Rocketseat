import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[]
  isLoading: boolean
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
  fetchTransactions: (query?: string) => Promise<void>
  paginateTransaction: (page?: number) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1) // Novo estado para as páginas

  const fetchTransactions = useCallback(async (query?: string) => {
    setIsLoading(true) // Inicia o loading

    try {
      const response = await api.get('/transactions', {
        params: {
          q: query,
        },
      })

      setTransactions(response.data) // Define os dados da transação
    } finally {
      setIsLoading(false) // finaliza o loading
    }
  }, [])

  const paginateTransaction = useCallback(async (page = 1) => {
    const limit = 5

    const response = await api.get('/transactions', {
      params: {
        _page: page,
        _limit: limit,
      },
    })

    const totalItems = response.headers['x-total-count'] // Pega o total de itens da API
    console.log('total de itens: ', totalItems)

    if (totalItems) {
      setTotalPages(Math.ceil(Number(totalItems) / limit)) // Calcula o total de páginas
    }
    setCurrentPage(page) // Define a página atual
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        paginateTransaction,
        createTransaction,
        isLoading,
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
