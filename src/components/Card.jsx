import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import axios from "axios";

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

export function Card({ type, video }) {
  const [channel, setChannel] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const response = await axios.get(`/api/users/find/${video.userId}`);
        setChannel(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchChannel();
  }, [video]);

  console.log(error);

  return (
    <StyledLink to="/video/a12d31">
      <StyledContainer type={type}>
        <StyledImage type={type} src={video.imgUrl} />
        <StyledDetails type={type}>
          <StyledChannelImage type={type} src={channel.img} />
          <StyledTextContainer>
            <StyledTitle>{video.title}</StyledTitle>
            <StyledChannelName>{channel.name}</StyledChannelName>
            <StyledInfo>
              {video.views} views &#x2022; {format(video.createdAt)}
            </StyledInfo>
          </StyledTextContainer>
        </StyledDetails>
      </StyledContainer>
    </StyledLink>
  );
}
