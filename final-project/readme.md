// Final Project Outline.

### Project Name

Final Project

### Github Link

https://nguyen2024-byte.github.io/N320/final-project

### Major Features

**Login Form**

- DOM references: password and username inputs
- Logic:
  - username is empty => tell user to fill in username
  - Tell user to enter valid password
    - password is empty
    - password is less than 8 characters
    - password contains no capital letters
    - password contains no numbers
- Events:
  - on login button click check login

**Dashboard Details**

- DOM references: Bulleted list of main objectives for the day.
- Loop:
  - <u>IF</u>: If a task is incomplete then it will stay on the dashboard.
  - <u>ELSE</u>: The task is complete and is taken off the dashboard.

**Task Manipulation Details**

- DOM references: To add, remove, update, or manipulate the order of the tasks.

- Logic:
  - The tasks are organized from top-to-bottom, based on their priorities and their deadlines.
    - Tasks with the closest deadlines are sorted at the top.
    - Tasks that are most important are also sorted at the top.
    - Otherwise, users can change the order by updating the task by manually setting up a different deadline and/or adjusting its importance, from "least important to top priority."
- Loop:
  - <u>IF</u>: The current date is "equal to 7 days before intended deadline," then it is the top priority for completion.
  - <u>IF-ELSE</u>: The task is "more than 7 days before intended deadline," then it is the least priority.
  - <u>ELSE</u>: The task is completed.

```md

```
