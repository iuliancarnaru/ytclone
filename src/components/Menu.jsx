import styled from "styled-components";
import YtLogo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";

import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const StyledContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const StyledWrapper = styled.div`
  padding: 18px 26px;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  padding: 18px 26px 0 26px;
`;

const StyledImg = styled.img`
  height: 25px;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  padding: 7.5px 0;
`;

const StyledHr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;

const StyledLogin = styled.div``;

const StyledLoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export function Menu({ darkMode, setDarkMode }) {
  return (
    <StyledContainer>
      <StyledLogo>
        <StyledImg src={YtLogo} />
        Youtube
      </StyledLogo>
      <StyledWrapper>
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
        <StyledHr />

        <StyledItem>
          <VideoLibraryOutlinedIcon />
          Library
        </StyledItem>
        <StyledItem>
          <HistoryOutlinedIcon />
          History
        </StyledItem>
        <StyledHr />

        <StyledLogin>
          Sign in to like videos, comment and subscribe.
          <StyledLoginButton>
            <AccountCircleOutlinedIcon />
            Sign in
          </StyledLoginButton>
        </StyledLogin>
        <StyledHr />

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
        <StyledHr />

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
        <StyledItem onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          {darkMode ? `Light` : `Dark`} Mode
        </StyledItem>
      </StyledWrapper>
    </StyledContainer>
  );
}
