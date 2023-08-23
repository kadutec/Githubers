import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Avatar, Container, Header, Login, Name, Inner, Data } from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/107886899?v=4' />
        <Login>kadutec</Login>
        <Name>Kadu Nogueira</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp; &middot; 10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20}/>
          Dev
        </Data>
        <Data>
          <MdLocationCity />
            Fortaleza
        </Data>
        <Data>
          <MdLink />
            <a href='/'>kadutec</a>
        </Data>
      </Inner>
    </Container>
  )
};

export default Profile;
