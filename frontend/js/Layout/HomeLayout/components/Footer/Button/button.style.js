import styled from 'styled-components';

const ButtonStyle = styled.button`
  /* button default style */
  padding: 15px 10px!important;
  position: relative;
  left: -1px;
  height: 32px!important;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #25DF8F;
  min-height: 30px;
  min-width: 48px;
  border: 1px solid #25DF8F;
  border-radius: 0px!important;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border: 0;
  min-width: 100px!important;
  margin: 0px!important;
  border-radius: 0;
  border-top-right-radius: 15px!important;
  border-bottom-right-radius: 15px!important;
  margin-left: 0
  transition: all 0.3s ease;
  @media (max-width: 600px) {
    margin-top: 0!important;
  }
  @media (max-width: 575px) {
    width: 80px!important;
  }
  span.btn-text {
    padding-left: 4px;
    padding-right: 4px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid #25DF8F;
  }

  &:hover > span {
    color: #25DF8F;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
