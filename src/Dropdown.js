import React, { Component } from 'react';
import styled from 'styled-components'

const H1 = styled.div`
  color: salmon;
`;

class Dropdown extends Component {
  render() {
    return (
      <div>

        <H1>This is the dropdown component</H1>
        <select>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
          <option>Option4</option>

        </select>
      </div>

    );
  }
}

export default Dropdown;