import React from "react"
import {Link }from 'gatsby'

import {Layout, SEO} from "@components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className='font-bold'> PÁGINAS NO ENCONTRADA </h1>
    <Link to='/'> <p className='text-primary font-semibold underline mb-16'>Volver al Home</p> </Link>
  </Layout>
)

export default NotFoundPage
