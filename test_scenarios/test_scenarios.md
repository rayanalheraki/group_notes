# Test Scenarios for Group Notes App

### What is a Test Scenario?
Test scenario, also known as scenario testing, is a high-level documentation of a use case. Scenario testing is performed to ensure that the end-to-end functioning of software is working fine.
<br><br>



| Test Scenario ID  | Test Scenario  |  Test Case ID |  Test Case name | Test Steps	  |  Test Data |  	Expected Outcome |  Actual Outcome |  Result |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
|TS01   | Create a new group | TC01  | Check transition between main page and create group page  | 1- Click on + button in the upper right corner  | None  | Load create group page  | As expected  | pass  |
|  |   | TC02  | Check create group with valid data  | 1- Go to create group page <br> 2- Enter group name <br> 3- Enter group ID <br> 4- Enter group code  | Group Name=demo_group<br>Group ID=60<br>Group Code=55  | Create group and popup "Your group has been created"  | As expected  | pass  |  |
|  |   | TC03  | Check create group with invalid data  | 1- Go to create group page <br> 2- Enter group name <br> 3- Enter unavailable group ID <br> 4- Enter group code  | Group Name=demo_group<br>Group ID=60 (used ID)<br>Group Code=55  | Popup "This ID is not available, please try another one"  | As expected  | pass  |  |

