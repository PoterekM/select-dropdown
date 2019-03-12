import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';


const Container = styled.div`
  /* text-align: right; */
  box-sizing: border-box;
`;

const H1 = styled.div`
  color: salmon;
`;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const customStyles = {
  
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #E1E1E1',
    color: state.isSelected ? '#203A60' : '#04955F',
    border: state.isSelected ? '1px solid #203A60' : 'none',
    padding: 5,
  }),

  // clearIndicator: (provided, state) => ({
  //   ...provided,
  //   // no noticable change
  // }),
  
  container: () => ({
    position: 'relative',
    boxSizing: 'borderBox',
//this is the outside container that the option items are nested in
  }),

  control: (provided) => ({
    ...provided,
    color: 'red',
    backgroundColor: 'green',
    alignItems: 'center',
    borderColor: 'hsl(0,0%,80%)',
    borderRadius: '0px',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'spaceBetween',
    minHeight: '38px',
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    boxSizing: 'borderBox',
  }),

  // dropdownIndicator: (provided, state) => ({
  //   ...provided,
  //   display: 'flex',
  //   padding: '8px',
  //   transition: 'color 150ms',
  //   boxSizing: 'borderBox',
  // }),

  // group: (provided, state) => ({
  //   ...provided,
  //   // changing background color and color had no visible impact
  // }),

  // groupHeading: (provided, state) => ({
  //   ...provided,
  //   // changing background color and color had no visible impact
  // }),

  // indicatorsContainer: (provided, state) => ({
  //   ...provided,

  //   //THIS IS THE ACTUAL DROP DOWN ^ SPAN CONTAINER
  //   alignItems: 'center',
  //   alignSelf: 'stretch',
  //   display: 'flex',
  //   flexShrink: '0',
  //   boxSizing: 'borderBox',
  // }),

  indicatorSeparator: (provided) => ({
    //we do not want this line in our select dropdown
    //default styles
    // ...provided,
    // alignSelf: 'stretch',
    // marginBottom: '8px',
    // marginTop: '8px',
    // width: 'none',
    // boxSizing: 'borderBox',
  }),


  input: (provided, state) => ({
    ...provided,
    // margin: '2px',
    // paddingBottom: '2px',
    // paddingTop: '2px',
    // visibility: 'visible',
    // boxSizing: 'borderBox',
  }),

  // loadingIndicator: (provided, state) => ({
  //   //nothing
  //   ...provided,
  // }),

  // loadingMessage: (provided, state) => ({
  //   ...provided,
  // }),

  // menu: (provided, state) => ({
  //   //This is the background color to the menu items
    // backgroundColor: '#DEEBFF',
    // color: 'blue',
    // cursor: 'default',
    // display: 'block',
    // fontSize: 'inherit',
    // padding: '20px',
    // width: '100%',
    // userSelect: 'none',
    // boxSizing: 'borderBox',
    // borderBottom: '1px dotted pink',
  //   ...provided,
  // }),

  // menuList: (provided, state) => ({
  //   maxHeight: '300px',
  //   overflowY: 'auto',
  //   paddingBottom: '4px',
  //   paddingTop: '4px',
  //   position: 'relative',
  //   boxSizing: 'borderBox',
  //   ...provided,
  // }),

  // menuPortal: (provided, state) => ({
  //   //no distinct change given
  //   ...provided,
  // }),

  // multiValue: (provided, state) => ({
    ////NOT APPLICABLE TO OUR USAGE
  //   ...provided,
  // }),

  // multiValueLabel: (provided, state) => ({
    //NOT APPLICABLE TO OUR USAGE
  //   ...provided,
  // }),

  // multiValueRemove: (provided, state) => ({
        //NOT APPLICABLE TO OUR USAGE
  //   ...provided,
  // }),

  // noOptionsMessage: (provided, state) => ({
  //   // DEFAULT VALUE OF NO OPTIONS
  //   // ...provided,
  // }),

  // option: (provided, state) => ({
  //   // ...provided,
  //   // // THIS IS EACH INDIVIDUAL OPTION ELEMENT
  //   // backgroundColor: 'transparent',
  //   // color: 'inherit',
  //   // cursor: 'default',
  //   // display: 'block',
  //   // fontSize: 'inherit',
  //   // padding: '8px 12px',
  //   // width: '100%',
  //   // userSelect: 'none',
  //   // boxSizing: 'borderBox',
  // }),

  // placeholder: (provided, state) => ({
  //   //BACKGROUND TEXT OF 'SELECT CLIENT'
  //   ...provided,
  //   marginLeft: '2px',
  //   marginRight: '2px',
  //   position: 'absolute',
  //   top: '50%',
  //   transform: 'translateY(-50%)',
  //   boxSizing: 'borderBox',
  // }),

  // singleValue: (provided, state) => ({
  //   //no change 
  //   ...provided,
  // }),

  // valueContainer: (provided, state) => ({
  //   ///background to `select client` container
  //   ...provided,
  //   alignItems: 'center',
  //   display: 'flex',
  //   flex: '1',
  //   flexWrap: 'wrap',
  //   padding: '2px 8px',
  //   position: 'relative',
  //   overflow: 'hidden',
  //   boxSizing: 'borderBox',
  // }),
 
}



class StyledDropdown extends Component {
  render() {
    return (
      <Container>
        <H1>This is the dropdown component</H1>
        
        <Select 
          options={options}
          styles={customStyles}
          placeholder={'select client'}
          // menuIsOpen={true}
        />
      </Container>

    );
  }
}

export default StyledDropdown;