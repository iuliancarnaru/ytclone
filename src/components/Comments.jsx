import styled from "styled-components";
import { Comment } from "./Comment";

const StyledContainer = styled.div``;

const StyledNewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export function Comments() {
  return (
    <StyledContainer>
      <StyledNewComment>
        <StyledAvatar src="https://yt3.ggpht.com/yti/AJo0G0k7NA95PrbMQLU7G_3UQaNVQ8ERBhcEVj9pePky5A=s88-c-k-c0x00ffffff-no-rj" />
        <StyledInput placeholder="Add a comment..." />
      </StyledNewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </StyledContainer>
  );
}
