import styled from "styled-components"

export const SeparatorLine = styled.div`
  height: ${props => (props.height ? props.height : "1px")};
  width: ${props => (props.width ? props.width : "6rem")};
  background-color: ${props => (props.bg ? props.bg : "#a0aec0")};
  margin: 10px 0 10px 0;
`
