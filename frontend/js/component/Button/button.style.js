import styled from 'styled-components';

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #0E2856;
  min-height: 24px;
  min-width: 24px;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  border: 0;
  transition: all 0.3s ease;
  color: #F6F6F7;
  border: 1px solid #0E2856;
  margin-right: 5px;
  &:hover {
    background: #F6F6F7;
    color: #0E2856;
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  &.font-18 {
    font-size: 18px;
  }

  &.font-14 {
    font-size: 14px;
  }

  &.font-12 {
    font-size: 12px;
  }

  &.bold {
    font-weight: bold
  }
`;

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;


const BlueButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3E54D3;
  min-height: 24px;
  min-width: 24px;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  border: 0;
  transition: all 0.3s ease;
  color: #F6F6F7;
  border: 1px solid #3E54D3;
  &:hover {
    background: #F6F6F7;
    color: #3E54D3;
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  &.font-18 {
    font-size: 18px;
  }

  &.font-14 {
    font-size: 14px;
  }

  &.font-12 {
    font-size: 12px;
  }

  &.bold {
    font-weight: bold
  }
`;

BlueButtonStyle.displayName = 'BlueButtonStyle';

export {BlueButtonStyle};

const GreenButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25DF8F;
  min-height: 24px;
  min-width: 24px;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  border: 0;
  transition: all 0.3s ease;
  color: #F6F6F7;
  border: 1px solid #25DF8F;
  &:hover {
    background: #F6F6F7;
    color: #25DF8F;
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  &.font-18 {
    font-size: 18px;
  }

  &.font-14 {
    font-size: 14px;
  }

  &.font-12 {
    font-size: 12px;
  }

  &.bold {
    font-weight: bold
  }
`;

GreenButtonStyle.displayName = 'GreenButtonStyle';

export {GreenButtonStyle};
