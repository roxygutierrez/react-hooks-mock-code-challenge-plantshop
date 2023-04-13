/*
As a user:

1.When the app starts, I can see all plants.
When the app starts, all the plants in the array should be loaded
PlantPage
    initialize state plants
    useEffect to fetch data
    pass plants arr into PlantList
PlantList
    map out the plants array and create a PlantCard for eatch plant in array
PlantCard
    deconstruct each plant
    


2.I can add a new plant to the page by submitting the form.
use the form the add a new plant
Form
    useState so i can make it a controlled form
    create state for each input'
    set the value and add a event handler

    handle submit by adding an event handle on the submit button
    write fucntion that will handle that submit
        create a newPlantObj
PlantPage
    execute a POST request
    then add new plant to the plants array

3.I can mark a plant as "sold out".
When i click on "InStock" btn, it should say "sold out"
PlantCard
    initialize state so i can toggle the button
    add an event handler on the button that will toggle the instock/sold out


4.I can search for plants by their name and see a filtered list of plants.
When i type in the input, i should be able to search the plant by name
PlantPage
setState onthe search
filter through the plants array to return plant names that nmatch the search
in PlantList plants = plants to display
 pass in setSearch to search as a prop
*/