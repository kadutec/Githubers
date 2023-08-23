import React from 'react'

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './repositories';

import {Container, Sidebar, Main} from './styles';

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
