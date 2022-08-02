import styled from "styled-components";
import YtLogo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";

import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LightModeIcon from "@mui/icons-material/LightMode";

const StyledContainer = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
`;

const StyledWrapper = styled.div`
  padding: 18px 26px;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const StyledImg = styled.img`
  height: 25px;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  font-size: 14px;
`;

export function Menu() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo>
          <StyledImg src={YtLogo} />
          Youtube
        </StyledLogo>

        <StyledItem>
          <HomeIcon />
          Home
        </StyledItem>
        <StyledItem>
          <ExploreOutlinedIcon />
          Explore
        </StyledItem>
        <StyledItem>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </StyledItem>

        <StyledItem>
          <VideoLibraryOutlinedIcon />
          Library
        </StyledItem>
        <StyledItem>
          <HistoryOutlinedIcon />
          History
        </StyledItem>

        <StyledItem>
          <LibraryMusicOutlinedIcon />
          Music
        </StyledItem>
        <StyledItem>
          <SportsBasketballOutlinedIcon />
          Sports
        </StyledItem>
        <StyledItem>
          <VideogameAssetOutlinedIcon />
          Gaming
        </StyledItem>
        <StyledItem>
          <MovieCreationIcon />
          Movies
        </StyledItem>
        <StyledItem>
          <NewspaperIcon />
          News
        </StyledItem>
        <StyledItem>
          <LiveTvIcon />
          Live
        </StyledItem>

        <StyledItem>
          <SettingsIcon />
          Settings
        </StyledItem>
        <StyledItem>
          <FlagIcon />
          Report
        </StyledItem>
        <StyledItem>
          <HelpOutlineIcon />
          Help
        </StyledItem>
        <StyledItem>
          <LightModeIcon />
          Light Mode
        </StyledItem>
      </StyledWrapper>
    </StyledContainer>
  );
}
