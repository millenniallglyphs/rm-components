import React, { useState } from 'react';
import {  Box, Flex, Icon, Text } from '..';



function EditorSection({ title, destination }) {
  return (
    <Flex justifyContent="space-between" m={2}>
        <Flex alignItems="center">
            <Icon name="status" />
            <Box padding={1} />
            <Text color="textb">{title}</Text>
        </Flex>
        <Box />
        <Flex alignItems="center">
            <Icon name="edit" />
        </Flex>
    </Flex>
  );
}

export default EditorSection;
