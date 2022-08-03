import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
`;

const StyledSubtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const StyledInput = styled.input`
  border: none;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const StyledButton = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const StyledMoreSection = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const StyledLinks = styled.div`
  margin-left: 50px;
`;

const StyledLink = styled.span`
  margin-left: 20px;
`;

export function SignIn() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle>Sign in</StyledTitle>
        <StyledSubtitle>to continue to Youtube</StyledSubtitle>
        <StyledInput type="text" placeholder="username" />
        <StyledInput type="password" placeholder="password" />
        <StyledButton>Sign in</StyledButton>
        <StyledTitle>OR</StyledTitle>
        <StyledInput type="text" placeholder="username" />
        <StyledInput type="email" placeholder="email" />
        <StyledInput type="password" placeholder="password" />
        <StyledInput type="password" placeholder="confirm password" />
        <StyledButton>Sign up</StyledButton>
      </StyledWrapper>
      <StyledMoreSection>
        English(USA)
        <StyledLinks>
          <StyledLink to="#">Help</StyledLink>
          <StyledLink to="#">Privacy</StyledLink>
          <StyledLink to="#">Term</StyledLink>
        </StyledLinks>
      </StyledMoreSection>
    </StyledContainer>
  );
}
