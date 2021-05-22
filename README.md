DESIGN DOCUMENT

Name : Sneha Joglekar
Course : MCA(Science)
College : MIT WPU
Email : snehajoglekar123@gmail.com

Task given :

      1.	There are Users and Blogs, and any user can comment on any blog.
      2.	Create a database with sample data, use the database of your choice.
      3.	Consider all users who have commented on the same blog as friends ( 1st level friend).
      4.	A friend is 2nd level friend if he has commented on a blog where a 1st level friend has     also commented but has not commented on any common blog.
      5.	Example - Blog1 has the comment of {User1, User2}, Blog2 has the comment of {User1, User3} here User2 and User3 are 2nd level friend if there exists no blog which has the comment of User2 and User3.
      6.	Similar to above there can be third level friend and k-th level friend ( LinkedIn shows this kind of friend level)
      7.	Create a REST api GET /users/<userId>/level/<levelNo> which should give list of all friends of that level for given userId (ex- /users/1234/level/1 for first level friend)
      8.	Use high standard design principles while implementing the solution
      9.	Write modular and clean code with comments keeping in mind scalability and manageability of code.





Introduction
   It is a single webpage for blog, Given theme of Nature and Travelling where various users can comment on any blog and their degree Connections (1st, 2nd, 3rd,  nth) with connectivity of database with angular version and firebase.


Technologies Used : 

Angular CLI: 10.2.0
Angular: 10.2.4
Typescript: 4.0.7
Node: 15.0.1
IDE Used : Visual Studio Code
Database Used : Firebase

Brief Description:
As “Angular, TypeScript, Firebase learnt from Scratch, It is not a fully functional web page but responsive page with connected database. Inserting  data into database and retrieving data from database is working smoothly, Also, it is showing Degree connections in Users.

Note : Task is not fully achieved, Application is not fully working as per the task given, Partially it is done and giving the degree level between users









4. Logic Implemented

        1.	Since we are focusing on getting the level of friends, database focus should be on users 

        2.	We have to maintain is a list of blogs where a specific user has commented on


        3.	I have used M:M relationship between users and for each level I have given a new table. So for level2, I have initialized them to 0 (denoting no relationship) and then go through the blog posts database, and if User1 & User2 have commented, then I have initialized their respective values to 1 for each other and so on. I can do this for 2 levels The ones who have something in common but have zero for each other's values, those will be returned

        4.	I have use Firebase, A main Table for Users , Another table for specific blog and data, Another tables for 1. Friends   2. Mutual Friends   3. 3rd  Degree friends

        5.	Friend’s tables are joint by INNER JOIN with M:M RELATIONSHIP
        6.	I have added design document in which screenshots are given















 

















Steps to run the project

      1.	Setup angular and node.js environment
      2.	Setup CLI
      3.	Download from the github link : https://github.com/snehajoglekar/myblog
      4.	Run the project on localhost:4200
      5.	Essentials for firebase are given here

          apiKey: "AIzaSyBnBofgYqZJt6YOfqq_gIb8QJVEF-aotCo",
          authDomain: "blogdata-1b879.firebaseapp.com",
          projectId: "blogdata-1b879",
          storageBucket: "blogdata-1b879.appspot.com",
          messagingSenderId: "1009705917758",
          appId: "1:1009705917758:web:793ffa099db1386de2606f",
          measurementId: "G-W0SCLXEP05"


      6.	To see database : database name: BlogData (Given Public)
      https://console.firebase.google.com/u/0/project/blogdata-1b879/firestore/data~2Fuser~2F1




 










