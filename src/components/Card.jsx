import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: ${({ type }) => type !== "list" && "360px"};
  margin-bottom: ${({ type }) => (type === "list" ? "10px" : "45px")};
  display: ${({ type }) => type === "list" && "flex"};
  gap: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: ${({ type }) => (type === "list" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const StyledDetails = styled.div`
  display: flex;
  margin-top: ${({ type }) => type !== "list" && "16px"};
  gap: 12px;
  flex: 1;
`;

const StyledChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${({ type }) => type === "list" && "none"};
`;

const StyledTextContainer = styled.div``;

const StyledTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const StyledChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0;
`;
const StyledInfo = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export function Card({ type }) {
  return (
    <StyledLink to="/video/a12d31">
      <StyledContainer type={type}>
        <StyledImage
          type={type}
          src="https://i.ytimg.com/vi/yIaXoop8gl4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcwGhI3AP9CwX9Z6CnFU2npmqcSw"
        />
        <StyledDetails type={type}>
          <StyledChannelImage
            type={type}
            src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj"
          />
          <StyledTextContainer>
            <StyledTitle>React Video Sharing App UI Design</StyledTitle>
            <StyledChannelName>Tech Gear Talk</StyledChannelName>
            <StyledInfo>19K views &#x2022; 2 years ago</StyledInfo>
          </StyledTextContainer>
        </StyledDetails>
      </StyledContainer>
    </StyledLink>
  );
}
