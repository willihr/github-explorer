import React, { FormEvent, useEffect, useState } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import { Form, Repositories, Title } from './styles';

interface Repository {
  id: string;
  html_url: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Response {
  items: Repository[];
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // useEffect(() => {
  //   api.get('/repositories').then(response => {
  //     setRepositories(response.data);
  //   });
  // }, []);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await api.get<Response>('/search/repositories', {
      params: { q: newRepo },
    });

    setRepositories([...repositories, ...response.data.items]);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório:"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(
          ({
            id,
            html_url: htmlUrl,
            full_name: fullName,
            description,
            owner: { login, avatar_url: avatarUrl },
          }) => (
            <a
              key={id}
              href={htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatarUrl} alt={login} />
              <div>
                <strong>{fullName}</strong>
                <p>{description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ),
        )}
      </Repositories>
    </>
  );
};

export default Dashboard;
