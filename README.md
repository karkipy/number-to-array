# Number To Array

Consider this situation where you would require an array of certain number or till certain number say from 0 or any other start point, to resolve this we use number-to-array functionality. <br />

## `Installation`

`yarn add number-to-array` <br />

## Usage

`const { numberToArray} = require('number-to-array')` <br />

### Scenario

1) To get the number of array from 0 to the provided input : <br />
    numberToArray(5);  <br/>
    Output : <br/>
    [ 0, 1, 2, 3, 4, 5 ] <br/> <br />

2) To get the number of array from provided start point to provided end point : <br />
    numberToArray(5, 7); <br />
    Output: <br />
    [ 5, 6, 7 ] <br/> <br/>

3) To get array out of string provided with a seperator: <br />
    numberToArray('hey hey hey',true, 'e') // true indicates its a string <br />
    Output: <br />
    [ 'h', 'y h', 'y h', 'y' ] <br /> <br />

The code is all yours :)