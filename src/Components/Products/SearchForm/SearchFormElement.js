import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 1rem;
  padding-bottom: 0;
  text-align: center;
`;

export const SearchFormControl = styled.div`
 // width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--maxWidth);
  background: var(--mainWhite);
  padding: 2rem 2.5rem;
  text-transform: capitalize;
 // border-radius: var(--mainBorderRadius);
  box-shadow: var(--lightShadow);

`;

export const SearchFormLaber = styled.label`
  display: block;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.25rem;
  font-size: 28px;
//  color: var(--primaryColor);

`;
export const SearchFormInput = styled.input`
  align-items:center;
  width: 50%;
  border: none;
  border-color: transparent;
 // background: var(--mainBackground);
  border-radius: 16px;
  padding: 0.5rem;
  font-size: 1.2rem;
  outline: none;
`;
