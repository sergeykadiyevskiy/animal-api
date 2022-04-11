Nevelex HTML5 Coding Test Backend
Nevelex Corporation thanks you for participating in this coding challenge!

REST API reference
Authentication
To authenticate to the server, you must include a querystring parameter called candidateID in each request. The candidateID querystring shall be equal to the candidate ID that you received via e-mail.
All requests must be URL form encoded with the Content-Type header set to application/x-www-form-urlencoded.
Animal
/Animal/List -- Lists all animals (images, IDs, and common names) (HTTP GET request)
/Animal/Id/{id} -- Retrieves all information known about an animal (HTTP GET request)
/Animal/Create([REQUIRED] commonName, scientificName, family, imageURL) -- Creates a new animal (HTTP POST request)
/Animal/Delete([REQUIRED] id) -- Deletes an animal with a specified ID (HTTP POST request)
All requests return data in JSON.


Create a Website Dynamically
Filled with Data from
Animal REST API
Background
Many of our projects require interfacing with a backend data source to populate the browser interface.  To assist us in understanding how you would develop a project using a dynamic backend data source, we have created a RESTful API for you to use to develop a quick website.
Technical Details
The description of the RESTful API is available at https://animalrestapi.azurewebsites.net/.  Feel free to contact us if you have any questions.
The API is seeded with three results, 1, 2, and 3, which can not be deleted.  However, all other results can be deleted.
Goals
•	Create a website or single page which retrieves and manipulates information using the Animal REST API. 
•	The interface must utilize all the capabilities of the API.
•	The look and feel of the site/page is totally up to you. Be creative and have fun with it!

