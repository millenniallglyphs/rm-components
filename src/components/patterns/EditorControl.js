import React, { useState } from 'react';
import {
  Stack,
  Box,
	Button,
	Grid,
	Flex,
  Icon,
  Text,
  Link,
  Badge,
} from '../';

function EditorControl({title}) {
  return(
    <Grid gridTemplateColumns='400px auto 170px'>
      <Flex alignItems="center">
        <Button variant="invisible">Back</Button>
        <Box padding={1}/>
        <Text variant="sectiontitle">{title}</Text>
        <Box padding={1}/>
        <Badge>Draft</Badge>
      </Flex>
      <Box/>
      <Flex alignItems="center">
        <Icon name="download"/>
        <Box padding={1}/>
        <Button>Publish</Button>
      </Flex>
    </Grid>
  );
}

export default EditorControl;