The app consist of a form which will take input from user abou which task has to be listed, after submitting the the form input will be added to the screen.
Here I am using two useStates to take the data from the form , I have used one state updating function in onChange event of input, which will keep track of every key stroke that user enters, second useState I have used in Submit handler, which will collect the data after submitting the form, before updating the data in the state updating function I am storing the data into an array, as later  this array can save multiple set of data inputted by the user and map them to render on screen. Later when I am mapping the data I am adding two dynamic Buttons Edit button and Delete Button and putting two functions as onClick eventlisteners and aslo passing the index into functions. I am using index as key while mapping the data as I don't have any other unique id to use. In the function of delete button's I heave created a shallow copy of the array, as I don't wanted to modify the real array, which may create internal problem. Then I have used slice() method, it will take id as 1st argument as it will start removing from that element only, then as the second argument it will take 1, as here only one element needs to be removed. Now in case of edit button's onclick functon, first of all I am populating the data by putting corresponding id elemenent's value in the input's value. After then I am deleting the task from list, so that when user updates the task it will replace the old task. To change the Button's text from "Add Task" to "Update task", I have taken another state whose initial value fale as boolean. While user clicks on edit button this state will turn to true, after user again submits the form i.e click on update button the state will be false again. I have used ternary operator in buttons inner text to toggle between Add task and Update Task. And finally there is a button called Download button which will download all the tasks as excel file.  In the function of that corresponding button first of all, it creates a new array called updatedTasks, which is a copy of the current list of submitted tasks. This copy is made using the spread operator .Next, it finds the specific task to delete using the provided id. The id represents the position of the task in the array.After locating the task to delete, the function uses the splice method to remove it from the updatedTasks array.Finally, the function updates the state of the submitted tasks with the modified array updatedTasks, effectively removing the task from the list displayed in the user interface. 
