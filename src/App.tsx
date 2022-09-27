import React, { useEffect, useState } from "react";
import { Grid, GridItem, Skeleton, Stack, useColorModeValue } from "@chakra-ui/react";
import "./style.scss";
import SearchNav from "./SearchNav";
import Footer from "./Footer";
import CandidateList from "./CandidateList";

const API_URL = "http://localhost:8000/api/candidate";

export type Candidate = {
  id: string;
  name: string;
  username: string;
  avatar_url: "https://avatars.githubusercontent.com/u/196477?v=4";
  github_url: string;
  website: string | null;
  location: string;
  email: string | null;
  bio: string;
  join_date: string;
  hireable: string | null;
  company: string | null;
};

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<Candidate[] | []>([]);

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      const url = API_URL + (keyword !== "" ? "?role=" + keyword : "");
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCandidates(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [keyword]);
  return (
    <Grid gap={6}>
      <GridItem pl="2" gap={6} bg={useColorModeValue("gray.50", "gray.900")}>
        <SearchNav setKeyword={setKeyword} />
      </GridItem>

      <GridItem pl="2" bg={useColorModeValue("gray.50", "gray.900")}>
        {loading ? (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        ) : (
          <CandidateList candidates={candidates} />
        )}
      </GridItem>
      <Footer />
    </Grid>
  );
}

export default App;
