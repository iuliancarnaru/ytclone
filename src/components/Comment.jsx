import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const StyledAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const StyledName = styled.span`
  font-size: 13px;
`;

const StyledDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const StyledText = styled.p`
  font-size: 14px;
`;

export function Comment() {
  return (
    <StyledContainer>
      <StyledAvatar src="https://yt3.ggpht.com/yti/AJo0G0k7NA95PrbMQLU7G_3UQaNVQ8ERBhcEVj9pePky5A=s88-c-k-c0x00ffffff-no-rj" />
      <StyledDetails>
        <StyledName>
          Iulian Carnaru <StyledDate>1 day ago</StyledDate>
        </StyledName>
        <StyledText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          inventore dolor sapiente corrupti cumque doloremque repellendus? Iusto
          animi ex voluptate, porro, debitis repellendus quisquam vero quasi,
          perspiciatis qui deleniti harum.
        </StyledText>
      </StyledDetails>
    </StyledContainer>
  );
}
