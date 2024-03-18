import React from "react";
import { Box, Button, Container, Heading, Input, Table, Tbody, Td, Th, Thead, Tr, VStack, Text, useToast } from "@chakra-ui/react";
import { FaFileUpload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // TODO: Process the file here with actual Excel processing logic

      // Mock-up toast message
      toast({
        title: "File uploaded.",
        description: "We've received your file and will process it soon.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Mock-up function to download the processed file
  const handleDownloadProcessedFile = () => {
    // TODO: Generate the actual processed Excel file and trigger download

    // Mock-up toast message
    toast({
      title: "Download ready.",
      description: "Your processed file is ready for download.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Excel Processing Application
        </Heading>

        <Box>
          <Input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} hidden id="file-upload" />
          <Button leftIcon={<FaFileUpload />} as="label" htmlFor="file-upload">
            Upload Excel File
          </Button>
        </Box>

        {/* Placeholder for the uploaded data table */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Uploaded Data (Preview)
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>IS Seriennummer</Th>
                <Th>Modules</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Mock-up data rows */}
              <Tr>
                <Td>Customer A</Td>
                <Td>1</Td>
                <Td>10</Td>
              </Tr>
              <Tr>
                <Td>Customer B</Td>
                <Td>0</Td>
                <Td>5</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Button to download the processed file - mock-up */}
        <Button onClick={handleDownloadProcessedFile} colorScheme="blue">
          Download Processed File
        </Button>

        {/* Placeholder for validation results */}
        <Box>
          <Heading as="h2" size="lg">
            Validation Results
          </Heading>
          <Text>No validation errors found.</Text>
          {/* Here you would list any validation errors that were found */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
