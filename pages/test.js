import styled from 'styled-components';

export default () => (
  <div>
    <Title>Testing out styled components. Red H1!</Title>
  </div>
);

const Title = styled.h1`
  color: red;
`;
