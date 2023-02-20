import { Button, Card, CardContent, FormControl, FormHelperText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {useDropzone} from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ImageUpload(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Card>
      <CardContent>
        <Typography variant="body1" component="div">
          Upload Image
        </Typography>
        <Box
          {...getRootProps()}
          sx={{
            border: 1,
            borderRadius: 1,
            borderColor: "rgba(0, 0, 0, 0.23)",
            mt: 4,
            mb: 5,
            paddingY: 3,
            paddingX: 1,
            "&:hover": {
              borderColor: "text.primary",
            },
            "&:focus-within": {
              borderColor: "primary.main",
              borderWidth: 2,
            },
          }}
        >
          <FormControl
            // error={isFileTooLarge}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input {...getInputProps()} />
            <CloudUploadIcon sx={{ fontSize: 40 }} color="primary" />
            <Typography
              variant="caption"
              textAlign="center"
              color="text.primary"
              sx={{ paddingY: 1 }}
            >
              Drag and drop some files here, or click to select files
            </Typography>
            
            {/* <FormHelperText error={true}>
              {fileRejections[0]?.errors[0]?.message.includes("bytes")
                ? "File is larger than 600 KB"
                : fileRejections[0]?.errors[0]?.message}
            </FormHelperText>
            <FormHelperText error={true}>{customError}</FormHelperText> */}
          </FormControl>
          <Box
            component="ul"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
          >
            {files}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ImageUpload