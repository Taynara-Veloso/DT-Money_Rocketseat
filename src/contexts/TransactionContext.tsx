import { api } from "../lib/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  isLoading: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTransactions(query?: string) {
    setIsLoading(true); // Inicia o loading
    try {
      const response = await api.get('/transactions', {
        params: {
          q: query,
        }
      })

      console.log(response);
      setTransactions(response.data);

    } finally {
      setIsLoading(false); // finaliza o loading
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions, isLoading }}>
      {children}
    </TransactionContext.Provider>
  )
}