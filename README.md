> Authors: David Melamed, Majbrit Schöttner

# Application for booking laundry
## The basic idea
A website that can be visited to reserve machines of any kind for yourself.
### The current solution
On the original website there is the possibility to book laundry machines for yourself. 
> Original web application: https://www.signupgenius.com/go/10c0d49a4a828abf8c70-drlaundry

The procedure is described as follows:
1. you choose a day
2. you choose a time
3. select one or more machines
4. click on "Submit and Signup
5. enter the room number, full name and e-mail address
6. click on "Signup now
7. you will receive an email with the confirmation and your booking is done.

### Our solution
The website will be redesigned for our website. The design will have a separate version for the desktop and for the smartphone. Both versions will take full advantage of the possibilities of the respective device. 
- The desktop version
  1. the website will be extended vertically.
  2. all components are optimally displayed on a 1920x1080 resolution screen.
- The smartphone version
  1. the website is extended horizontally.
  2. website is used component by component from top to bottom.
 
### Our techniques used
For the realisation of our idea, the web app is programmed as a single-page application.
- Front-end: The framework React is used to build the framework of the website. The visual components are implemented using the CSS framework MUI (Material UI).
- Back-End: Routing, server and retrieval of information is done with the help of the ExpressJS framework. The information of each reservation is stored in a simple MariaDB database.
- Other technologies: Docker is used for the development and for testing the interaction of the application, on a machine. 
