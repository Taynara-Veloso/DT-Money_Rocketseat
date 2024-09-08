import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tr{
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03);
    border-radius: 6px;
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 2rem;
`

export const Button = styled.button`
  display: flex;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 8px;

  &:disabled {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const PaginationCount = styled.span`
  display: flex;
  align-items: center;
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`