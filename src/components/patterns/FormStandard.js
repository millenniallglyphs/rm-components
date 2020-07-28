import React, { useState } from 'react';
import {
	Input,
  Stack,
  Box,
	Icon,
	Button,
	Grid,
	Text,
	Flex,
	Modal,
} from '../';


function FormStandard ({ name, description, }) {

	const [isOpen, setIsOpen] = React.useState(false)

	return(
	  <Stack gap={4}>
			<Modal isOpen={isOpen}>
		    <Box p={2} m={0} width={1} bg="bluebg" border="1px solid" borderColor="primary" borderRadius="base">
		      <Grid gridTemplateColumns='24px auto 24px'>
		        <Icon name="info"/>
		        <Text color="primary" as="infobox">
		          {description}
		        </Text>
		        <Flex alignItems="flex-start">
		          <Button variant="invisible" onClick={() => setIsOpen(false)}>
		              <Icon name="ex"/>
		          </Button>
		        </Flex>
		      </Grid>
		    </Box>
			</Modal>
	    <Box padding={1}/>
			<Flex alignItems="center">
				<Text>
					{name}
				</Text>
				<Button variant="invisible" onClick={() => setIsOpen(true)}>
					<Flex alignItems="center">
						<Icon name="info"/>
					</Flex>
				</Button>
			</Flex>
	    <Box padding={1}/>
	    <Input/>
	  </Stack>
	);
}

export default FormStandard;