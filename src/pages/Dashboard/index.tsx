import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>
      Explore repositórios
      <br />
      no Github.
    </Title>

    <Form>
      <input type="text" placeholder="Digite aqui:" />
      <button type="button">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/10065193?s=400&u=a678bac441363afd19fa3f739a0773b5bc9d79c8&v=4"
          alt="Willian Henrique"
        />
        <div>
          <strong>willihr/repo</strong>
          <p>Easy peasy higkly scalable ReactJS & React Native forms!</p>
        </div>
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/10065193?s=400&u=a678bac441363afd19fa3f739a0773b5bc9d79c8&v=4"
          alt="Willian Henrique"
        />
        <div>
          <strong>willihr/repo</strong>
          <p>Easy peasy higkly scalable ReactJS & React Native forms!</p>
        </div>
      </a>
    </Repositories>
  </>
);

export default Dashboard;
