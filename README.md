# Task Manager Application
## A Simple todo app with elegant design
<span><img src="https://img.shields.io/badge/Mongo%20DB-3.5.7-yellowgreen">
<img src="https://img.shields.io/badge/Express-4.17.1-lightgrey">
<img src="https://img.shields.io/badge/React%20JS-16.13.1-blue"/>
<img src="https://img.shields.io/badge/Node%20JS-12.17.0-green"/></span>

<br/>
This project is made with MERN (Mongo, Express, ReactJS, NodeJS) techstack.

<img alt="MERN" width="300" style="text-align: center" src="https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png"/>
<h2>Demo</h2>
Link1: <a href=""></a>
<h2>Setup</h2>
This section is for you to setup this application on your computer system. If you want you can skip this section and move onto the <a href="#doc">documentation.</a><br/>
<b>Prerequisites: </b> Node and NPM installled on your laptop.<br/>
Paste the following commands in your terminal/command line.
<pre>
git clone https://github.com/VirajRG/todo-app.git
cd server && npm install
</pre>
There are two folder in it. One is Client folder that contains the frontend react app and another is server folder contains backend NodeJS app.
Make a .env file in the "server" directory and paste the following code in it.
<pre>
uri = &lt;CONNECTION_STRG&gt;
</pre> 
Replace &lt;CONNECTION_STRG&gt; with the connection string of your MongoDB Database.
<br/>
Create a database with name "tasks" and two collections with name "users" and "todos". Open terminal, cd into your the server directory and paste the following command in it.
<pre>npm start</pre>
Visit <a href="http://localhost:8080">http://localhost:8080</a>. Woho!! The app is up.<br/>
The frontend is built for production using <b>npm run build</b> command and stored in the build directory of client folder.
The NodeJS server serves the static build from this folder.<br/>
As far database is concerned, it is hosted on MongoDB Atlas so that you don't have to 


<h2 id="doc">This Documentiation is divided into three parts</h2>
<ul>
    <li><a href="#frontend">Frontend</a></li>
    <li><a href="#backend">Backend</a></li>
    <li><a href="#database">Database</a></li>
</ul>
<br/>
<h2 id="frontend">Frontend</h2>
<p> The frontend contains three screens namely, Login Page, SignUp Page and Home Page</p>
<p>As the names suggest the Login Page and Signup page contains Login and Signup form. The Home page contains two tabs, Tasks and Board.
<ol>
<h3><li>Login Page</li></h3>
<img src="https://i.ibb.co/yYY88ny/login.png" />
<h3><li>Signup Page</li></h3>
<img src="https://i.ibb.co/pnJCyL1/signup.png" alt="signup" border="0">
<h3><li>Home - Tasks </li></h3>
<img src="https://i.ibb.co/bBM9y17/tasks-1.png" alt="tasks-1" border="0">
<h3><li>Home Page - Tasks - Add Todo</li></h3>
<img src="https://i.ibb.co/4ZjzPMK/tasks-2.png" alt="tasks-2" border="0">
We can simply add a new todo by clicking on the "Add Todo" button.
<h3><li>Home Page - Tasks - Filter Todos</li></h3>
<img src="https://i.ibb.co/GJfpzh1/tasks-3.png" alt="tasks-3" border="0">
In this application we can filters the todos by applying four filters, namely, filter by todo text, due date, labels and priority. In this above image we can see that the first input box of filters contains "des" and only the todos which contain this text are shown. Similarly other filters are also applied. This filtering happens at real time, (no need to press any key or button) and also there is no delay as such.

<h3><li>Home Page - Tasks - Edit Todo</li></h3>
<img src="https://i.ibb.co/y4dBQB6/tasks-4.png" alt="tasks-4" border="0">
We can easily edit todo by just simply clicking on the todo.
Also there is provision to delete todo which is acheived by clicking the corresponding "dustbin" icon of that todo.

<h3><li>Home Page - Board</li></h3>
<img src="https://i.ibb.co/QK1zbz2/board-1.png" alt="board-1" border="0">
When you think of a Task Managment application the first thing that comes to your mind is Kanban board without which every todo app is incomplete. This extra feature has been added to facilitate the user to easily change the status of todos by dragging a todo from one column to another. <b>This satisfying task of dragging a todo from "In Progress" column to "Completed" column has been observed to increase the productivity of the user.</b>

<h3><li>Home Page - Board - drag and drop feature</li></h3>
<img src="https://i.ibb.co/2FvpFnh/board-2.png" alt="board-2" border="0">
Also observe that while dragging the todo the application creates a shadow element of that todo in the target column to give the user a preview of the resultant scene.

<h3><li>Home Page - Board - Edit Todo</li></h3>
<img src="https://i.ibb.co/bF2RVMP/board-3.png" alt="board-3" border="0">

<h2 id="#backend">Backend</h2>
<h4>Given below is a table of all the APIs including the request and response format.</h4>


| EndPoint    | Request Type | Request format                        | Response format                       |
|-------------|--------------|---------------------------------------|---------------------------------------|
| /auth/login | POST         | <pre>Object: {name: String, pass: String }</pre> | <pre>Object: {status: number, _id: String}</pre> | 
| /auth/signup| POST            |  <pre>Object: {name: String, pass: String }</pre>            | <pre>Object: {status: number, _id: String}</pre>|
| /todos/get| GET | - | Array of todos|
| todos/add | POST | Todo Object | Todo Object|
| /todos/edit | POST | Todo Object | <pre>Status: number</pre> |
| /todos/delete | POST | <pre>{ _id: String }</pre> | <pre>Status: number</pre>|
| /labels | POST | Array of labels | <pre>Status: number</pre>|

<h2>Database</h2>
The database name here is "tasks".
There are two collections or tables by name "users" and "tasks".
Users collection stores the credentials of all the users that signup for on this application. It also stores the labels.
<pre>
Users
  |-->_id : ObjectID
  |-->name : String
  |-->pass : String
  |-->labels : Array of Strings
</pre>
The todos collection stores the todos of each user. The structure is as follows:
<pre>
Todos
  |-->_id : ObjectID
  |-->user: String
  |-->name : String
  |-->desc : String
  |-->dueDate : String
  |-->priority : String
  |-->status : String
  |-->labels : Array of String
</pre>