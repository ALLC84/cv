import styled from "styled-components"
import PropTypes from "prop-types"

export const AvatarImage = styled.img`
  border: 2px solid #C4C4C4;
  border-radius: 100%;
  vertical-align: middle;
  width: 200px;
  height: 200px;
  margin: 15px auto 0 auto;
`

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
