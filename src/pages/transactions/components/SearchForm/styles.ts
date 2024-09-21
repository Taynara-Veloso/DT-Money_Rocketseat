import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    box-shadow:
      0px 8px 8px rgba(0, 0, 0, 0.1),
      0px 4px 4px rgba(0, 0, 0, 0.1),
      0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03),
      inset 0px 1px 0px rgba(255, 255, 255, 0.03);
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    box-shadow:
      0px 8px 8px rgba(0, 0, 0, 0.1),
      0px 4px 4px rgba(0, 0, 0, 0.1),
      0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 0px 0px 1px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03),
      inset 0px 1px 0px rgba(255, 255, 255, 0.03);
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
