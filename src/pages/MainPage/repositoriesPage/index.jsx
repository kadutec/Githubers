import React, { useState } from 'react'

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './repositories';

import {Container, Sidebar, Main} from './styles';

import { getLangsFrom } from '../../../services/api';

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: "",
    name: "Carlos Eduardo",
    avatar_url: "https://avatars.githubusercontent.com/u/107886899?v=4",
    followers: 3,
    following: 2,
    company: null,
    blog: "",
    location: null,
  };

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: '',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: '',
      language: 'c#',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: '',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: '',
      language: 'Ruby',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: '',
      language: 'Java',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: '',
      language: 'TypeScript',
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
