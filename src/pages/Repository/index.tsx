import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoriesParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoriesParams>();

  const [repository, setRepository] = useState<Repository>({} as Repository);

  useEffect(() => {
    api.get<Repository>(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
  }, []);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          <span>Voltar</span>
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="asdas" alt="" />
          <div>
            <strong>willihr/testproject</strong>
            <p>Descrição do Repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <span>Diego Fernandes</span>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="/">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <span>Diego Fernandes</span>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
