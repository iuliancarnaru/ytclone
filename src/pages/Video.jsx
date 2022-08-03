import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Comments } from "../components/Comments";

const StyledContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledContent = styled.div`
  flex: 5;
`;

const StyledRecommendation = styled.div`
  flex: 2;
`;

const StyledVideoWrapper = styled.div``;

const StyledTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfo = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const StyledHr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const StyledChannel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledChannelInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const StyledChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const StyledChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const StyledChannelName = styled.span`
  font-weight: bold;
`;

const StyledChannelCounter = styled.span`
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const StyledChannelDescription = styled.p`
  font-size: 14px;
`;

const StyledSubscribeButton = styled.button`
  background-color: #cc1a00;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export function Video() {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledVideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube Video Player"
            frameborder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </StyledVideoWrapper>
        <StyledTitle>React Video Sharing App UI Design</StyledTitle>
        <StyledDetails>
          <StyledInfo>19K views &#x2022; 2 years ago</StyledInfo>
          <StyledButtons>
            <StyledButton>
              <ThumbUpAltOutlinedIcon />
              123
            </StyledButton>
            <StyledButton>
              <ThumbDownAltOutlinedIcon />
              Dislike
            </StyledButton>
            <StyledButton>
              <IosShareOutlinedIcon />
              Share
            </StyledButton>
            <StyledButton>
              <SaveOutlinedIcon />
              Save
            </StyledButton>
          </StyledButtons>
        </StyledDetails>
        <StyledHr />
        <StyledChannel>
          <StyledChannelInfo>
            <StyledChannelImage src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s68-c-k-c0x00ffffff-no-rj" />
            <StyledChannelDetails>
              <StyledChannelName>Tech Gear Talk</StyledChannelName>
              <StyledChannelCounter>250K subscribers</StyledChannelCounter>
              <StyledChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, atque dolore. Quam tempora adipisci facere numquam
                officiis laboriosam placeat corrupti blanditiis nemo odio
                officia, cumque dolore quia unde id natus.
              </StyledChannelDescription>
            </StyledChannelDetails>
          </StyledChannelInfo>
          <StyledSubscribeButton>SUBSCRIBE</StyledSubscribeButton>
        </StyledChannel>
        <StyledHr />
        <Comments />
      </StyledContent>

      <StyledRecommendation>RECOMMENDATION</StyledRecommendation>
    </StyledContainer>
  );
}
