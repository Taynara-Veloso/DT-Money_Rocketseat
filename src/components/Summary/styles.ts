import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  box-shadow:
    0px 8px 8px rgba(0, 0, 0, 0.1),
    0px 4px 4px rgba(0, 0, 0, 0.1),
    0px 2px 2px rgba(0, 0, 0, 0.1),
    0px 0px 0px 1px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03),
    inset 0px 1px 0px rgba(255, 255, 255, 0.03);
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
