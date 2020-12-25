# Test Scenarios for Group Notes App

### What is a Test Scenario?
Test scenario, also known as scenario testing, is a high-level documentation of a use case. Scenario testing is performed to ensure that the end-to-end functioning of software is working fine.
<br><br>



| Test Scenario ID  | Test Scenario  |  Test Case ID |  Test Case Name | Test Steps	  |  Test Data |  	Expected Outcome |  Actual Outcome |  Result |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
|TS01   | Create a new group | TC01  | Check transition between home page and create group page  | 1- Click on + button in the upper right corner  | None  | Load create group page  | As expected  | pass  |
|  |   | TC02  | Check create group with valid data  | 1- Go to create group page <br> 2- Click on "Create a group" <br> 3- Enter group name <br> 4- Enter group ID <br> 5- Enter group code  | Group Name=demo_group<br>Group ID=60<br>Group Code=55  | Create group and popup "Your group has been created"  | As expected  | pass  |  |
|  |   | TC03  | Check create group with invalid data  | 1- Go to create group page<br> 2- Click on "Create a group" <br> 3- Enter group name <br> 4- Enter unavailable group ID <br> 5- Enter group code  | Group Name=demo_group<br>Group ID=60 (used ID)<br>Group Code=55  | Popup "This ID is not available, please try another one"  | As expected  | pass  |  |
|TS02   | Join a group | TC01  | Join a nonexistent group  | 1- Go to create group page <br> 2- Click on "Join a group" <br> 3- Enter nonexistent group ID <br> 4- Enter nonexistent group code  | Group ID=8749 <br> Group Code=2423  | Popup "This ID is not available, please try another one" | As expected  | pass  |
|   |  | TC02  | Join an existent group  | - Go to create group page <br> 2- Click on "Join a group" <br> 3- Enter group ID <br> 4- Enter group code  | Group ID=60 <br> Group Code=55  | Join and open group page | As expected  | pass  |
|TS03   | Show user's groups on home page | TC01  | Check joined groups  | 1- Join a group <br>2- Go back to home page | Group ID=60<br>Group Code=55</br>|Joined group appear on home page| As expected  | pass  |
|   | | TC02  | Check created groups  | 1- Create a group <br>2- Go back to home page | Group Name=home_demo <br> Group ID=38<br>Group Code=65</br>|Created group appear on home page| As expected  | pass  |
|   | | TC03  | Delete a group from home page | 1- Join a group <br>2- Go back to home page <br> 3- Click on the trash button next to the group |  Group ID=60<br>Group Code=55 |Group will be deleted| As expected  | pass  |
