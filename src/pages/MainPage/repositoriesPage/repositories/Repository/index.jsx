import React from 'react'

import { Container, Name, Description, Footer, Lang, Link } from './styles';

function Repository() {
  return (
    <Container color='#f37272'>
      <Name>Repository Name</Name>
      <Description>d</Description>
      <Footer color='#f37272'>
        <Lang>Lang</Lang>
        <Link href='/' target='blank'>
          Ver
        </Link>
      </Footer>
    </Container>
  )
}

export default Repository
