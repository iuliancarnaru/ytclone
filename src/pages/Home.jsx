import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export function Home({ type }) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/api/videos/${type}`);
        setVideos(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <StyledContainer>
      {videos?.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </StyledContainer>
  );
}
