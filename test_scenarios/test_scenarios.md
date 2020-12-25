# Test Scenarios for Group Notes App

### What is a Test Scenario?
Test scenario, also known as scenario testing, is a high-level documentation of a use case. Scenario testing is performed to ensure that the end-to-end functioning of software is working fine.
<br><br>



| Test Scenario ID  | Test Scenario  |  Test Case ID |  Test Case Name | Test Steps	  |  Test Data |  	Expected Outcome |  Actual Outcome |  Result |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
|TS01   | Create a new group | TC01  | Create group with valid data  | 1- Go to create group page <br> 2- Click on "Create a group" <br> 3- Enter group name <br> 4- Enter group ID <br> 5- Enter group code  | Group Name=demo_group<br>Group ID=60<br>Group Code=55  | Create group and popup "Your group has been created"  | As expected  | pass  |  |
|  |   | TC02  | Create group with invalid data  | 1- Go to create group page<br> 2- Click on "Create a group" <br> 3- Enter group name <br> 4- Enter unavailable group ID <br> 5- Enter group code  | Group Name=demo_group<br>Group ID=60 (used ID)<br>Group Code=55  | Popup "This ID is not available, please try another one"  | As expected  | pass  |  |
|TS02   | Join a group | TC01  | Join a nonexistent group  | 1- Go to create group page <br> 2- Click on "Join a group" <br> 3- Enter nonexistent group ID <br> 4- Enter nonexistent group code  | Group ID=8749 <br> Group Code=2423  | Popup "This ID is not available, please try another one" | As expected  | pass  |
|   |  | TC02  | Join an existent group  | - Go to create group page <br> 2- Click on "Join a group" <br> 3- Enter group ID <br> 4- Enter group code  | Group ID=60 <br> Group Code=55  | Join and open group page | As expected  | pass  |
|TS03   | Show user's groups on home page | TC01  | Check joined groups  | 1- Join a group <br>2- Go back to home page | Group ID=60<br>Group Code=55</br>|Joined group appear on home page| As expected  | pass  |
|   | | TC02  | Check created groups  | 1- Create a group <br>2- Go back to home page | Group Name=home_demo <br> Group ID=38<br>Group Code=65</br>|Created group appear on home page| As expected  | pass  |
|   | | TC03  | Check deleted groups | 1- Join a group <br>2- Go back to home page <br> 3- Click on the trash button next to the group |  Group ID=60<br>Group Code=55 |Group is deleted| As expected  | pass  |
|TS04   | Manage notes | TC01  | Add a new note  | 1- Open group page <br> 2- Click on "Add a new Note" <br> 3- Enter note title <br> 4- Enter note content <br> 5- Click save  | Note title=Demo title <br> Note content=Demo content  | Note is created | As expected  | pass  |
|   |  | TC02  | Edit an existent note  | 1- Open group page <br> 2- Click on the edit button in the note panel" <br> 3- Edit the title <br> 4- Edit the content <br> 5- Click save  | Note title=Demo updated title <br> Note content=Demo updated Content  | Note is updated | As expected  | pass  |
|   |  | TC03  | Delete a note  | 1- Open group page <br> 2- Click on the edit button in the note panel" <br> 3- Click on the delete button  | None | Note is deleted | As expected  | pass  |
