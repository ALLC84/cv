import styled from "styled-components"

export const TitleSection= styled.h2`
  position: 'relative';
  font-size: ${props => (props.type === 'name' ? '1.8em' : '1.4')};
  font-weight: 600;
  color: ${props => (props.color ? props.color :"#4a5568")};
  margin-top: ${props => (props.top ? props.top : '30px')};

  @media (min-width: 768px) {
    font-size: ${props => (props.size ? props.size : "inherit")};
    font-weight: ${props => (props.weight ? props.weight : "inherit")};
  }
`