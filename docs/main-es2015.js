(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["about-me"]], decls: 77, vars: 0, consts: [[1, "about-me-container-outer"], [1, "about-me-container-inner"], [1, "main-row"], ["id", "picture-and-name", 1, "contentLeft"], [1, "profile-picture"], ["src", "./../../assets/images/profile_pic.png", "alt", "profilePic", "id", "profilePic"], [1, "name-and-location"], [1, "socialMedia"], ["href", "https://www.linkedin.com/in/samuel-hapgood-785518156/", "target", "_blank"], ["src", "./../../assets/images/linkedin-grey.png", "alt", "LinkedIn Logo"], ["href", "https://github.com/HappyDev95", "target", "_blank"], ["src", "./../../assets/images/github.png", "alt", "Github Logo"], [1, "contentRight"], [1, "about-me-summary"], ["id", "AboutMeHeader"], [1, "skills-hobbies-interests"], [1, "contentLeft"], [1, "techSkillList"], [1, "resume-container"], ["href", "./../../assets/images/resume.pdf", "target", "_blank"], ["src", "./../../assets/images/resume_background.png", "alt", "Resume Image"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sam Hapgood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Applications Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pittsburgh, Pennsylvania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Motivated and quality-focused Applications Developer skilled in developing complex programs. Ability to quickly master new software packages, API\u2019s and framework technologies. Passionate about the work I do and diligent in the way I do it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Currently, I am employed at First National Bank as a member of an Applications Development Team working on Teller and sales oriented banking applications. I'm an avid runner and who enjoys the outdoors - the background picture was taken from a hike in the White Mountains. I graduated from Florida State University *Go Noles* and earned a Bachelors of Science degree in Computer Science with a minor in Mathematics as well as Natural Sciences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Presently, my interests are in learning more about front-end technologies which led me to pickup Angular and TypeScript. Among other things I like to keep myself entertained with projects such as this website, running, and consistently learning. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Programming Languages:\tJava, JavaScript, HTML5, CSS, SCSS, XML, C++, JCL, COBOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Editors:\tEclipse, Visual Studios, Atom, Android Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Tools & Software:\tGit, Git Extensions, J2EE, JPA, XSLT, JAXB, JUnit, Java SWT, Batch Scripting, Apache Ant, Eclipse Debugger, Oracle WebLogic, Oracle SQL Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Databases: Oracle, MySQL, Google Firebase, IBM IMS, IBM DB2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Frameworks & Methodologies: JSF, Angular, Service Oriented Architecture, ExpressJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Environments:\tWindows, Unix/Linux, TSO z/OS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Certifications:\tAWS Certified Cloud Practitioner, Java SE 8 Programmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Click To View Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Professional and Academic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "In college much of my coursework focused on mathematics, algorithms, algorithm analysis, understanding object oriented design principals and patterns, and strong emphasis on implementing these techniques in the C++ programming language. The foundation of knowledge I built at FSU abetted the transition from academic to professional tremendously, and taught me invaluable lessons about trusting your preparation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "At DXC Technology, day-to-day work as an Applications Developer involved tasks such as writing backend business logic for Java EE web applications. This typically included interfacing with clients to determine an appropriate data model, communicating with DBA\u2019s to accurately map out and ensure effective database design for our applications. A sample of some of the techniques and technologies that I leveraged are the follwing: prepared statements, JDBC, JPA, Oracle SQL Developer and a whole lot of StackOverflow. Additionally, I wrote stand-alone ETL (extract, transform, and load) applications using service oriented architecture and leveraged the following technologies: Java, JAXB, XSL, XSLT, XPath queries, and SQL. Daily I communicated with L3 support teams to deploy software to production as well as troubleshoot problems. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "My position at DXC Technology as member on the Applications Development Team taught me a tremendous amount about professional software development. My expertise in Java, knowledge of software design and best practices, and technical skillset has been strengthened because of my time there. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Hobbies and Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Frontend development is exciting and always caught my attention as it continuously evolves. Over the course of the past year I have immersed myself in learning as much as I can about client-side web development with technologies like JavaScript, TypeScript, and Angular. This excitement led me to want to create and host my own website, and recently has brought me to the AWS cloud to explore serverless content hosting and serverless APIs with Lambda, S3, and CloudFormation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "I love the outdoors and the challenges it presents through activities such as running and hiking (and trying to get a new PR on a half or full marathon).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-me-container-outer[_ngcontent-%COMP%] {\n  height: 800px;\n  width: 100%;\n  background: url('Green.png');\n  background-size: cover;\n}\n.about-me-container-outer[_ngcontent-%COMP%]   .about-me-container-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.main-row[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\", sans-serif;\n  height: 100%;\n  width: 100%;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 50%;\n  padding: 10px;\n  margin: 50px 30px;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  height: 270px;\n  width: 500px;\n  margin: 7% auto;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 123px;\n  height: 224px;\n  border-radius: 100%;\n  border: solid 6px rgba(33, 114, 106, 0.7);\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%] {\n  background-color: #21726a;\n  border-radius: 15px;\n  width: 54%;\n  margin: auto;\n}\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  height: 35px;\n  width: 35px;\n}\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 10px;\n  text-align: center;\n  margin: 50px 30px;\n}\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%]   .about-me-summary[_ngcontent-%COMP%] {\n  background-color: #21726a;\n  border-radius: 15px;\n  padding: 10px;\n  margin-top: 125px;\n}\n.techSkillList[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: left;\n  padding: 0;\n  margin: 10%;\n}\n.techSkillList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 14px auto;\n}\n.resume-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.resume-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 7px;\n  font-size: 40px;\n  margin: 20px auto;\n}\n#AboutMeHeader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 40%;\n  padding-top: 20px;\n  border-bottom: 1px solid black;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  color: #6f995f;\n  font-weight: 400;\n  font-size: 35px;\n  letter-spacing: 1px;\n  margin: 15px auto;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  margin: 10px auto;\n}\nh4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #6f995f;\n  font-weight: 400;\n  font-size: 15px;\n  margin: 10px auto;\n}\n@media screen and (max-width: 768px) and (max-height: 1024px) {\n  .about-me-container-outer[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n\n  #picture-and-name[_ngcontent-%COMP%] {\n    padding-top: 230px;\n  }\n\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 88%;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 600px) {\n  .about-me-container-outer[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .about-me-container-outer[_ngcontent-%COMP%]   .about-me-container-inner[_ngcontent-%COMP%] {\n    padding-bottom: 30px;\n  }\n\n  .main-row[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  .main-row[_ngcontent-%COMP%]   #picture-and-name[_ngcontent-%COMP%] {\n    padding-top: 140px;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 0;\n    width: 90%;\n    padding-top: 50px;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .name-and-location[_ngcontent-%COMP%] {\n    width: 88%;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n    margin: auto;\n    padding: 0;\n    width: 90%;\n    padding-top: 0;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%]   .about-me-summary[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    margin-top: 50px;\n  }\n\n  h2[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    margin: 0 auto;\n    width: 40%;\n    padding-top: 20px;\n    border-bottom: 1px solid #902424;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvQzpcXE15LVByb2plY3RzXFxIYXBweURldlBvcnRmb2xpby9zcmNcXGFwcFxcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FER0E7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVJO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNBUjtBRElJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRk47QURLUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNIVjtBRFNFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUEo7QURTSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNQTjtBRGdCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ2JGO0FEY0U7RUFDRSxpQkFBQTtBQ1pKO0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjtBRGVFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNiSjtBRGlCQTtFQUNFLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNkRjtBRGlCQTtFQUNFLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkRjtBRGlCQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNkRjtBRGlCQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZEY7QURpQkE7RUFDRTtJQUNFLGNBQUE7RUNkRjs7RURpQkE7SUFDRSxrQkFBQTtFQ2RGOztFRGtCRTtJQUNFLGNBQUE7RUNmSjtFRGlCSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQ2ZOO0VEa0JJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7RUNoQk47RURvQkU7SUFDRSxjQUFBO0VDbEJKO0FBQ0Y7QURzQkE7RUFFRTtJQUNFLFlBQUE7RUNyQkY7RURzQkU7SUFDRSxvQkFBQTtFQ3BCSjs7RUR3QkE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNyQkY7RUR1QkU7SUFDRSxrQkFBQTtFQ3JCSjtFRHdCRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDdEJKO0VEd0JJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDdEJOO0VEeUJJO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUN2Qk47RUQyQkU7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDekJKO0VEMkJJO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ3pCTjs7RUQrQkE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQ0FBQTtFQzVCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HcmVlbi5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgLmFib3V0LW1lLWNvbnRhaW5lci1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuY29udGVudExlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggMzBweDtcclxuXHJcbiAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgbWFyZ2luOiA3JSBhdXRvO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTIzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgNnB4IHJnYigzMywgMTE0LCAxMDYsIDAuNyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmFtZS1hbmQtbG9jYXRpb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDExNCwgMTA2KTsgLy9ncmVlblxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICB3aWR0aDogNTQlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAuc29jaWFsTWVkaWEge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTNweDtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRSaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNTBweCAzMHB4O1xyXG5cclxuICAgIC5hYm91dC1tZS1zdW1tYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAxMTQsIDEwNik7IC8vZ3JlZW5cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzLWhvYmJpZXMtaW50ZXJlc3Rze1xyXG4gIC8vICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjQ1LCAyNDUsIDI0NSwgMC41KSwgcmdiKDIwOCwgMjA4LCAyMDgsIDAuOCkpO1xyXG59XHJcblxyXG4udGVjaFNraWxsTGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxMCU7XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAxNHB4IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdW1lLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbiNBYm91dE1lSGVhZGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyAgIC8vcmVkXHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMTExLCAxNTMsIDk1KTsgICAvL2dyZWVuXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDExMSwgMTUzLCA5NSk7ICAgLy9ncmVlblxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcclxuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgI3BpY3R1cmUtYW5kLW5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDIzMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tcm93e1xyXG4gICAgLmNvbnRlbnRMZWZ0e1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUtYW5kLWxvY2F0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogODglO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRSaWdodHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5hYm91dC1tZS1jb250YWluZXItaW5uZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICNwaWN0dXJlLWFuZC1uYW1lIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50TGVmdCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lLWFuZC1sb2NhdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDg4JTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50UmlnaHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG5cclxuICAgICAgLmFib3V0LW1lLXN1bW1hcnkge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGgyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICByZ2IoMTQ0LCAzNiwgMzYpOyAgIC8vcmVkXHJcbiAgfVxyXG5cclxufVxyXG4iLCIuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9HcmVlbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIC5hYm91dC1tZS1jb250YWluZXItaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLXJvdyAuY29udGVudExlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNTBweCAzMHB4O1xufVxuLm1haW4tcm93IC5jb250ZW50TGVmdCAucHJvZmlsZS1waWN0dXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjcwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA3JSBhdXRvO1xufVxuLm1haW4tcm93IC5jb250ZW50TGVmdCAucHJvZmlsZS1waWN0dXJlIGltZyB7XG4gIHdpZHRoOiAxMjNweDtcbiAgaGVpZ2h0OiAyMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCA2cHggcmdiYSgzMywgMTE0LCAxMDYsIDAuNyk7XG59XG4ubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IC5uYW1lLWFuZC1sb2NhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTcyNmE7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiA1NCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5tYWluLXJvdyAuY29udGVudExlZnQgLm5hbWUtYW5kLWxvY2F0aW9uIC5zb2NpYWxNZWRpYSBpbWcge1xuICBwYWRkaW5nOiA4cHggMTNweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbn1cbi5tYWluLXJvdyAuY29udGVudFJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggMzBweDtcbn1cbi5tYWluLXJvdyAuY29udGVudFJpZ2h0IC5hYm91dC1tZS1zdW1tYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNzI2YTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTI1cHg7XG59XG5cbi50ZWNoU2tpbGxMaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMCU7XG59XG4udGVjaFNraWxsTGlzdCBsaSB7XG4gIG1hcmdpbjogMTRweCBhdXRvO1xufVxuXG4ucmVzdW1lLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXN1bWUtY29udGFpbmVyIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5IFNDXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiA3cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbiNBYm91dE1lSGVhZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXkgU0NcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2Zjk5NWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG5cbmgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNmY5OTVmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgLmFib3V0LW1lLWNvbnRhaW5lci1vdXRlciB7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gIH1cblxuICAjcGljdHVyZS1hbmQtbmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDIzMHB4O1xuICB9XG5cbiAgLm1haW4tcm93IC5jb250ZW50TGVmdCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50TGVmdCAucHJvZmlsZS1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50TGVmdCAubmFtZS1hbmQtbG9jYXRpb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4OCU7XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50UmlnaHQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWJvdXQtbWUtY29udGFpbmVyLW91dGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmFib3V0LW1lLWNvbnRhaW5lci1vdXRlciAuYWJvdXQtbWUtY29udGFpbmVyLWlubmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5tYWluLXJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5tYWluLXJvdyAjcGljdHVyZS1hbmQtbmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDE0MHB4O1xuICB9XG4gIC5tYWluLXJvdyAuY29udGVudExlZnQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50TGVmdCAucHJvZmlsZS1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50TGVmdCAubmFtZS1hbmQtbG9jYXRpb24ge1xuICAgIHdpZHRoOiA4OCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50UmlnaHQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50UmlnaHQgLmFib3V0LW1lLXN1bW1hcnkge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIGgyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MDI0MjQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");




class AppComponent {
    constructor() {
        this.title = 'HappyDevPortfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main-app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], styles: [".main-app-container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(245, 245, 245, 0.5), rgba(220, 220, 220, 0.6));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE15LVByb2plY3RzXFxIYXBweURldlBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnR0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYXBwLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDI0NSwgMjQ1LCAyNDUsIDAuNSksIHJnYigyMjAsIDIyMCwgMjIwLCAwLjYpKTtcclxufVxyXG4iLCIubWFpbi1hcHAtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjUpLCByZ2JhKDIyMCwgMjIwLCAyMjAsIDAuNikpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["projects"]], decls: 77, vars: 0, consts: [[1, "projects-section"], [1, "main-row"], [1, "contentLeft"], [1, "project-info"], ["id", "deadDirectoryUrl", "href", "http://deaddirectorywebapp.s3-website-us-east-1.amazonaws.com/", "target", "_blank"], [1, "contentRight"], ["href", "https://github.com/HappyDev95/Dead-Directory", "target", "_blank"], ["src", ".\\..\\..\\..\\assets\\images\\gratefulDeadBears_image.png", "alt", "Dancing Bears"], ["href", "https://github.com/HappyDev95/HappyDev95.github.io", "target", "_blank"], ["src", ".\\..\\..\\..\\assets\\images\\github_image.png", "alt", "Github Image"], ["href", "https://github.com/Silcore/SpinnerApplication", "target", "_blank"], ["src", ".\\..\\..\\..\\assets\\images\\spinner.png", "alt", "Dancing Bears"], ["href", "https://github.com/HappyDev95/compression_proj", "target", "_blank"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dead Directory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date: Winter 2020 - Spring 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description: Angular web application in conjunction with ExpressJS API to serve Grateful Dead tour data. Deployed serverlessly to AWS using Lambda, API Gateway, CloudFormation, and S3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Technologies Used: Angular, TypeScript, Javascript, HTML, SCSS, NodeJS, ExpressJS, AWS Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contributors: Only Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check out the live site, click me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click image to view source code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HappyDev95 Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date: Ongoing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description: This webpage! It serves as way for me to put some of my ideas out there... Originally it started as raw HTML and CSS and since its inception it has been converted to an Angular web application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Technologies Used: Angular, TypeScript, HTML, SCSS, NPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contributors: Only Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Click image to view source code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Date: Summer 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "This unique social game is meant to bring friends together to enjoy a dizzying competitive challenge for the whole room to enjoy. Whether you're at a party or looking to kill time, simply pull out your phone, start a game, and wait for direction callouts. Each time the phone calls a direction, quickly spin to face that direction to earn points. Accurately spin as many times as you can in thirty seconds to rack up the most points. Compare your scores to your friends and publish them online on your quest to become the spinning champion! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Technologies Used: Java, Gradle, Android Studio, Google Firebase, Google Firebase Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Contributors: Group Effort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Click image to view source code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Huffman Tree Compression");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Date: Summer 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "A lossless compression implementation to be used on bitsets. An experiment to understand how compression works which turned into designing a basic Huffman Tree compression algorithm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Technologies Used: C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Contributors: Only Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Click image to view source code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.main-row[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\", sans-serif;\n  height: 100%;\n  width: 100%;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 60%;\n  padding: 10px;\n  margin: 50px 30px;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  background-color: rgba(111, 153, 95, 0.7);\n  border-radius: 15px;\n  padding: 10px;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   #deadDirectoryUrl[_ngcontent-%COMP%] {\n  color: #902424;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 10px;\n  text-align: center;\n  margin: 50px 30px;\n}\n\n.main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 100%;\n  width: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 7px;\n  font-size: 40px;\n  margin: 20px auto;\n}\n\nh1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 40%;\n  padding-top: 20px;\n  border-bottom: 1px solid #902424;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display SC\", sans-serif;\n  color: #902424;\n  font-weight: 400;\n  font-size: 35px;\n  letter-spacing: 1px;\n  margin: 15px auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  margin: 10px auto;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  color: #6f995f;\n  font-weight: 400;\n  font-size: 15px;\n  margin: 10px auto;\n}\n\n@media screen and (max-width: 600px) {\n  .about-me-container-outer[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .main-row[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentLeft[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 0;\n    width: 90%;\n    padding-top: 50px;\n  }\n  .main-row[_ngcontent-%COMP%]   .contentRight[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 0;\n    width: 90%;\n  }\n\n  .main-row[_ngcontent-%COMP%]:before {\n    content: \"\";\n    display: block;\n    margin-top: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXE15LVByb2plY3RzXFxIYXBweURldlBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENJO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDTjs7QURDTTtFQUNFLGNBQUE7QUNDUjs7QURJRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElJO0VBQ0Usc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRk47O0FEUUE7RUFDRSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDTEY7O0FEUUE7RUFDRSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBRUU7SUFDRSxZQUFBO0VDTkY7O0VEU0E7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNORjtFRFFFO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNOSjtFRFNFO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDUEo7O0VEV0E7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50TGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNTBweCAzMHB4O1xyXG5cclxuICAgIC5wcm9qZWN0LWluZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxNTMsIDk1LCAwLjcpOyAgIC8vZ3JlZW5cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICNkZWFkRGlyZWN0b3J5VXJsIHtcclxuICAgICAgICBjb2xvcjogcmdiKDE0NCwgMzYsIDM2KTsgICAvL3JlZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudFJpZ2h0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4IDMwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IFNDJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG5oMTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiKDE0NCwgMzYsIDM2KTsgICAvL3JlZFxyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IFNDJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDE0NCwgMzYsIDM2KTsgICAvL3JlZFxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigxMTEsIDE1MywgOTUpOyAgIC8vZ3JlZW5cclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgLmFib3V0LW1lLWNvbnRhaW5lci1vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWFpbi1yb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5jb250ZW50TGVmdCB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudFJpZ2h0IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1yb3c6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDUwcHggMzBweDtcbn1cbi5tYWluLXJvdyAuY29udGVudExlZnQgLnByb2plY3QtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTExLCAxNTMsIDk1LCAwLjcpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW4tcm93IC5jb250ZW50TGVmdCAucHJvamVjdC1pbmZvICNkZWFkRGlyZWN0b3J5VXJsIHtcbiAgY29sb3I6ICM5MDI0MjQ7XG59XG4ubWFpbi1yb3cgLmNvbnRlbnRSaWdodCB7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDMwcHg7XG59XG4ubWFpbi1yb3cgLmNvbnRlbnRSaWdodCBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXkgU0NcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDdweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuaDE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkwMjQyNDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5IFNDXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOTAyNDI0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzZmOTk1ZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFib3V0LW1lLWNvbnRhaW5lci1vdXRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm1haW4tcm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAubWFpbi1yb3cgLmNvbnRlbnRMZWZ0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbiAgLm1haW4tcm93IC5jb250ZW50UmlnaHQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5tYWluLXJvdzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My-Projects\HappyDevPortfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map