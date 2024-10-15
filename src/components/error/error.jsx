import styled from "styled-components";

const ErrorContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 288px;
  color: #ff6060;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: #ff6060;
`;

const ErrorReturn = styled.h3`
  font-weight: 500;
  font-size: 18px;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oops! The page you’re looking for doesn’t exist.
      </ErrorSubtitle>
      <ErrorReturn>Return to home page</ErrorReturn>
    </ErrorContainer>
  );
}

export default Error;
