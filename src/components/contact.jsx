import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"

const ContactContainer = styled.ul`
  list-style: none;
`
const Link = styled.a`
  display: flex;
  align-items: center;

`

export const Contact = ({phone, email}) => {
	return (
		<ContactContainer>
			<Link className='py-1' href={`tel:+34${phone}`}>
				<p className="material-icons mr-2 text-gray-300">phone</p>
				<p className='text-gray-300'>Llame</p>
			</Link>
			<Link className='py-1' href={`mailto:${email}`}>
				<p className="material-icons mr-2 text-gray-300">email</p>
				<p className='text-gray-300'>Envía un Email</p>
			</Link>
		</ContactContainer>
	)
} 

Contact.propTypes = {
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
}
