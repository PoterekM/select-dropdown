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
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),

  // clearIndicator: (provided, state) => ({
  //   ...provided,
  //   // no noticable change
    
  // }),
  
//   container: (provided, state) => ({
    

//     position: relative;
//     box-sizing: border-box;
//     background-color: green;
//     color: red;
// //this is the outside container that the option items are nested in

//   }),
  // control: (provided) => ({
  //   ...provided,

  //   -webkit-align-items: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   align-items: center;
  //   border-color: hsl(0,0%,80%);
  //   border-radius: 4px;
  //   border-style: solid;
  //   border-width: 1px;
  //   cursor: default;
  //   display: -webkit-box;
  //   display: -webkit-flex;
  //   display: -ms-flexbox;
  //   display: flex;
  //   -webkit-flex-wrap: wrap;
  //   -ms-flex-wrap: wrap;
  //   flex-wrap: wrap;
  //   -webkit-box-pack: justify;
  //   -webkit-justify-content: space-between;
  //   -ms-flex-pack: justify;
  //   justify-content: space-between;
  //   min-height: 38px;
  //   outline: 0 !important;
  //   position: relative;
  //   -webkit-transition: all 100ms;
  //   transition: all 100ms;
  //   box-sizing: border-box;
  // }),

  // dropdownIndicator: (provided, state) => ({
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green',
  
  //   color: red;
  //   display: -webkit-box;
  //   display: -webkit-flex;
  //   display: -ms-flexbox;
  //   display: flex;
  //   padding: 8px;
  //   -webkit-transition: color 150ms;
  //   transition: color 150ms;
  //   box-sizing: border-box;
  //   background-color: green;
  // }),

  // group: (provided, state) => ({
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green',
  //   // changing background color and color had no visible impact
  // }),

  // groupHeading: (provided, state) => ({
  //   ...provided,
  //    color: 'red',
  //    backgroundColor: 'green',
  //   // changing background color and color had no visible impact
  // }),

  // indicatorsContainer: (provided, state) => ({
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green',

  //   //THIS IS THE ACTUAL DROP DOWN ^ SPAN CONTAINER
  //   webkit-align-items: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   align-items: center;
  //   -webkit-align-self: stretch;
  //   -ms-flex-item-align: stretch;
  //   align-self: stretch;
  //   display: -webkit-box;
  //   display: -webkit-flex;
  //   display: -ms-flexbox;
  //   display: flex;
  //   -webkit-flex-shrink: 0;
  //   -ms-flex-negative: 0;
  //   flex-shrink: 0;
  //   box-sizing: border-box;
  //   color: red;
  //   background-color: green
  // }),

  // indicatorSeparator: (provided) => ({
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green',

  //   -webkit-align-self: stretch;
  //   -ms-flex-item-align: stretch;
  //   align-self: stretch;
  //   background-color: green;
  //   margin-bottom: 8px;
  //   margin-top: 8px;
  //   width: 1px;
  //   box-sizing: border-box;
  //   color: red;

   
  // }),


  input: (provided, state) => ({
    ...provided,
    // margin: 2px;
    // padding-bottom: 2px;
    // padding-top: 2px;
    // visibility: visible;
    // color: green;
    // box-sizing: border-box;
  }),

  // loadingIndicator: (provided, state) => ({
  //   //nothing
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // loadingMessage: (provided, state) => ({
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // menu: (provided, state) => ({
  //   //This is the background color to the menu items
    // background-color: #DEEBFF;
    // color: blue;
    // cursor: default;
    // display: block;
    // font-size: inherit;
    // padding: 20px;
    // width: 100%;
    // -webkit-user-select: none;
    // -moz-user-select: none;
    // -ms-user-select: none;
    // user-select: none;
    // -webkit-tap-highlight-color: rgba(0,0,0,0);
    // box-sizing: border-box;
    // border-bottom: 1px dotted pink
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // menuList: (provided, state) => ({
  //   max-height: 300px;
  //   overflow-y: auto;
  //   padding-bottom: 4px;
  //   padding-top: 4px;
  //   position: relative;
  //   -webkit-overflow-scrolling: touch;
  //   box-sizing: border-box;
  //   color: red;
  //   background-color: green;
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // menuPortal: (provided, state) => ({
  //   //no distinct change given
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // multiValue: (provided, state) => ({
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // multiValueLabel: (provided, state) => ({
    //NOT APPLICABLE TO OUR USAGE
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // multiValueRemove: (provided, state) => ({
        //NOT APPLICABLE TO OUR USAGE
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // noOptionsMessage: (provided, state) => ({
  //   // DEFAULT VALUE OF NO OPTIONS
  //   // ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // option: (provided, state) => ({
  //   // ...provided,
  //   // // THIS IS EACH INDIVIDUAL OPTION ELEMENT
  //   // background-color: transparent;
  //   // color: inherit;
  //   // cursor: default;
  //   // display: block;
  //   // font-size: inherit;
  //   // padding: 8px 12px;
  //   // width: 100%;
  //   // -webkit-user-select: none;
  //   // -moz-user-select: none;
  //   // -ms-user-select: none;
  //   // user-select: none;
  //   // -webkit-tap-highlight-color: rgba(0,0,0,0);
  //   // box-sizing: border-box;
  // }),

  // placeholder: (provided, state) => ({
  //   //BACKGROUND TEXT OF 'SELECT CLIENT'
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  //   color: red;
  //   margin-left: 2px;
  //   margin-right: 2px;
  //   position: absolute;
  //   top: 50%;
  //   -webkit-transform: translateY(-50%);
  //   -ms-transform: translateY(-50%);
  //   transform: translateY(-50%);
  //   box-sizing: border-box;
  //   background-color: green;
  // }),

  // singleValue: (provided, state) => ({
  //   //no change 
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  // }),

  // valueContainer: (provided, state) => ({
  //   ///background to `select client` container
  //   ...provided,
  //   color: 'red',
  //   backgroundColor: 'green'
  //   -webkit-align-items: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   align-items: center;
  //   display: -webkit-box;
  //   display: -webkit-flex;
  //   display: -ms-flexbox;
  //   display: flex;
  //   -webkit-flex: 1;
  //   -ms-flex: 1;
  //   flex: 1;
  //   -webkit-flex-wrap: wrap;
  //   -ms-flex-wrap: wrap;
  //   flex-wrap: wrap;
  //   padding: 2px 8px;
  //   -webkit-overflow-scrolling: touch;
  //   position: relative;
  //   overflow: hidden;
  //   box-sizing: border-box;
  //   color: red;
  //   background-color: green;
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