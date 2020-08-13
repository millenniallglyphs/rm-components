// libraries
import React from 'react';

// rm-components
import { Link } from '@reach/router';
import Box from '../../components/layout/Box';
import Grid from '../../components/layout/Grid';
import Button from '../../components/primitives/Button';
import Flex from '../../components/layout/Flex';
import FormDropdown from '../../components/patterns/FormDropdown';
import FormSlider from '../../components/patterns/FormSlider';
import EditorLeft from './EditorLeft';

const fullheight = {
  minHeight: '80vh',
};

// Primary Component
export default class OutputWeight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //const { currentRule } = this.state;
    return (
      <Grid gridTemplateColumns="48.75% 48.75%" gridGap="2.5%" m={4}>
        <Box>
          <EditorLeft title={this.props.rule.metadata.ruleName} />
        </Box>
        <Box>
          <div style={fullheight}>
            <Box
              p={2}
              m={0}
              width={1}
              bg="bg"
              border="1px solid"
              borderColor="oline"
              borderRadius="base"
            >
              <FormDropdown
                name="Select the rule category that most applies."
                description="hello world is asking the following things"
                options={[
                  { value: 'justice', label: 'Justice' },
                  { value: 'peace', label: 'Peace' },
                  { value: 'no justice', label: 'No Justice' },
                  { value: 'no peace', label: 'No Peace' },
                ]}
              />
              <Box padding={2} />
              <FormSlider
                name="Character of this Obligation"
                description="lorem ipsum"
                labela="Quality or Fairness"
                labelb="Strongly Beneficial"
                labelc="Absolutely Essential"
              />
              <Box padding={2} />
              <FormSlider
                name="Enforcement Measures in Place"
                description="lorem ipsum"
                labela="here Are No or Minor Penalties"
                labelb="There Are Significant Penalties"
                labelc="There Are Major Penalties"
              />
              <Box padding={2} />
              <FormSlider
                name="Consequences of Non-Conformance "
                description="lorem ipsum"
                labela="Inconsequential"
                labelb="Moderate Effects"
                labelc="Enormous Impacts"
              />
              <Box p={1}/>
            </Box>
            <Box padding={1} />
            <Flex justifyContent="flex-end">
              <Box />
              <Link to="/editor/editor-landing">
                <Button>Done</Button>
              </Link>
            </Flex>
          </div>
        </Box>
      </Grid>
    );
  }
}
