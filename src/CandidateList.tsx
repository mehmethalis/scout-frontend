import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Candidate } from "./App";

type TypeProps = {
  candidates: Candidate[] | [];
};

function CandidateList({ candidates }: TypeProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Candidates Details</TableCaption>
        <Thead>
          <Tr>
            <Th>Avatar</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Github</Th>
            <Th>Website</Th>
            <Th>Location</Th>
            <Th>Email</Th>
            <Th>Bio</Th>
            <Th>Join Date</Th>
            <Th>Company</Th>
          </Tr>
        </Thead>
        <Tbody>
          {candidates.map((candidate: Candidate) => (
            <Tr key={candidate.id}>
              <Td>
                <img src={candidate.avatar_url} alt={"avatar"} />
              </Td>
              <Td>{candidate.name}</Td>
              <Td>{candidate.username}</Td>
              <Td>{candidate.github_url}</Td>
              <Td>{candidate.website}</Td>
              <Td>{candidate.location}</Td>
              <Td>{candidate.email}</Td>
              <Td>{candidate.bio}</Td>
              <Td>{candidate.join_date}</Td>
              <Td>{candidate.company}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CandidateList;
