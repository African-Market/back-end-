# back-end-


POST /api/auth/register

Expects an object with the following key constraints


| name        | type   | required | Unique |
| ------------| ------ | -------- | ------ |
| `username`  | String | Yes      | Yes    |
| `password`  | string | Yes      | No     |

Possible status codes:
201 User created
409 Username already taken
400 Missing username or password (error will indicate which one)
500 Server issue

POST /api/auth/login

Expects an object with the following key constraints


| name        | type   | required |
| ------------| ------ | -------- |
| `username`  | String | Yes      |
| `password`  | string | Yes      |

Possible status codes:
200 Welcome ${user.username}
401 Invalid credentials
400 Password or Username missing
500 Server issue

Requires Authentication

|Method	    |Endpoint	         |   Description                        |
|-----------|--------------------|--------------------------------------|
|`GET`	    |/api/event	         |  Returns a list of all events        |   
|`GET`	    |/api/event/:id	     |  Returns a specific event by id      |
|`POST`	    |/api/event/:id/event|	Creates an event with a specific id |
|`PUT`	    |/api/event/:id	     |  Updates an event with a specific id |
|`DELETE`	|/api/event/:id	     |  Deletes an event with a specific id |

Expects an object with the following key constraints

|name	        |type	    |required|
|---------------|-----------|--------|
|`title`	    |String	    |Yes     |
|`date`	        |String	    |Yes     |
|`description`	|String	    |Yes     |



|Method	     |Endpoint	                        |   Description                         |
|------------|----------------------------------|---------------------------------------|
|`GET`       |/api/event/:id/signUp             |  Returns a list of all items for event|
|`GET `      |/api/event/:id/signUp/:id         |  Returns a specific item by id        |
|`POST`      |/api/event/:id/signUp/:id/signUp  |  Creates an item with a specific id   |  
|`PUT `      |/api/event/:id/signUp/:id         |  Updates an item with a specific id   |
|`DELETE`    |/api/event/:id/signUp/:id         |  Deletes an item with a specific id   |

Expects an object with the following key constraints

|name	        |type	    |required|
|---------------|-----------|--------|
|`name`	        |String	    |Yes     |
|`item`	        |String	    |Yes     |
|`quantity`	    |String	    |No      |
>>>>>>> main
