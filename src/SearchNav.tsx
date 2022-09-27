import { Button, FormControl, Grid, GridItem, Select } from "@chakra-ui/react";
import React from "react";

type TypeProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

function SearchNav({ setKeyword }: TypeProps) {
  return (
    <FormControl>
      <Grid templateColumns="repeat(5, 1fr)" alignItems={"center"}>
        <GridItem p="4" colSpan={1}>
          <Select
            bg="white"
            borderColor="white"
            color="twitter"
            placeholder="Role"
            onChange={(e) => setKeyword(e.target.value)}
          >
            <option value="Software">Software Engineer</option>
            <option value="Front">Front end developer</option>
            <option value="Backend">Backend Developer</option>
            <option value="Developer">Software Developer</option>
          </Select>
        </GridItem>
        <GridItem pl="2" colSpan={1}>
          <Button colorScheme="twitter">Find Candidates</Button>
        </GridItem>
      </Grid>
    </FormControl>
  );
}

export default SearchNav;
