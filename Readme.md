# light-date-picker

light date picker is an simple date picker for your reactjs project

## Installation : 
`npm install @lilclemclem/light-date-picker@latest`

## Usage : 

#### Example 1 - no Custom Handler : 
```JSX
const [date , setDate] = useState("")
return(
 <DatePicker setDate={setDate}/>
)
```

#### Example 2 -  Custom Handler : 

```JSX
const CustomHandler = (year , month , day) => {
    //formatting to have dd/mm/yyyy
    return (`${day}/${month}/${year}`)
}
/*custom handler take 3 arguments : 
    - year
    - month
    - day

 and always have to return a string as input element value
*/
const [date , setDate] = useState("")

return(
 <DatePicker handleclick={CustomHandler} setDate={setDate}/>
)
```