import styled from "styled-components";
interface Props {
  message: string;
}

function Greeting({ message }: Props) {
  return <MainMessage>{message}</MainMessage>;
}

const MainMessage = styled.p`
  color: #fff;
  font-size: 20px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: bold;
`;
export default Greeting;
