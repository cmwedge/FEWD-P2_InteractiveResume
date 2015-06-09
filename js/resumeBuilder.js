var bio = {
	"name": "Christopher Wedge",
	"role": "Impressive-sounding Title",
	"contacts": {
		"mobile": "555-555-1234",
		"email": "my@example.com",
		"github": "gtcuth",
		"twitter": "@notreal",
		"location": "Nowhere, MiddleOf"
	},
	"welcomeMessage": "This is not the greatest resume in the world. This is just a tribute.",
	"skills": ["Skills", "To", "Pay", "The", "Bills"],
	"biopic": "http://lorempixel.com/200/200",
	display: function () {
        //general
	    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
	    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

        //contacts
	    var mobileContact = HTMLmobile.replace("%contact%", "mobile").replace("%data%", this.contacts.mobile);
	    $("#topContacts").append(mobileContact);
	    $("#footerContacts").append(mobileContact);

	    var emailContact = HTMLemail.replace("%contact%", "email").replace("%data%", this.contacts.email);
	    $("#topContacts").append(emailContact);
	    $("#footerContacts").append(emailContact);

	    var twitterContact = HTMLtwitter.replace("%contact%", "twitter").replace("%data%", this.contacts.twitter);
	    $("#topContacts").append(twitterContact);
	    $("#footerContacts").append(twitterContact);

	    var githubContact = HTMLgithub.replace("%contact%", "github").replace("%data%", this.contacts.github);
	    $("#topContacts").append(githubContact);
	    $("#footerContacts").append(githubContact);

	    var locationContact = HTMLlocation.replace("%data%", this.contacts.location);
	    $("#topContacts").append(locationContact);
	    $("#footerContacts").append(locationContact);

	    //skills
	    $("#header").append(HTMLskillsStart);
	    for (skill in this.skills) {
	        $("#skills").append(HTMLskills.replace("%data%", this.skills[skill]));
	    }
	}
};

var work = {
    "jobs": [
        {
            "employer": "Flowers By Irene",
            "title": "Impressive-sounding Title",
            "location": "Anchorage, AK",
            "dates": "January 2010 - Present",
            "description": "Mostly Just Reddit."
        },
        {
            "employer": "PB&J Express",
            "title": "Sandwich Analyst",
            "location": "Nowhere, MiddleOf",
            "dates": "January 2005 - January 2010",
            "description": "Analyzed Ingredient Ratio Correlation to Customer Happiness."
        },
        {
            "employer": "Washington School of REDACTED",
            "title": "Research Assistant",
            "location": "Totally Not Washington",
            "dates": "REDACTED - REDACTED",
            "description": "Completely Ethical and Legal Research."
        }
    ],
    display: function () {
        for (job in this.jobs) {
            var curJob = $(HTMLworkStart);
            curJob.append(
                HTMLworkEmployer.replace("%data%", this.jobs[job].employer) +
                HTMLworkTitle.replace("%data%", this.jobs[job].title));
            curJob.append(HTMLworkDates.replace("%data%", this.jobs[job].dates));
            curJob.append(HTMLworkLocation.replace("%data%", this.jobs[job].location));
            curJob.append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
            $("#workExperience").append(curJob);
        }
    }
};

var education = {
    "schools": [
        {
            "name": "Washington School of REDACTED",
            "location": "Totally Not Washington",
            "degree": "Master of REDACTED",
            "majors": ["REDACTED Cuisine"],
            "dates": 2016,
            "url": "http://www.cia.gov"
        },
        {
            "name": "Washington School of REDACTED",
            "location": "Totally Not Washington",
            "degree": "Bachelor of REDACTED",
            "majors": ["REDACTED", "REDACTED", "Culinary Arts"],
            "dates": 2006,
            "url": "http://www.cia.gov"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "http://www.udacity.com"
        },
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "http://www.udacity.com"
        }
    ],
    "display": function () {
        //schools
        for (school in this.schools) {
            var curSchool = $(HTMLschoolStart);
            curSchool.append(
                HTMLschoolName.replace("%data%", this.schools[school].name) +
                HTMLschoolDegree.replace("%data%", this.schools[school].degree));

            curSchool.append(HTMLschoolDates.replace("%data%", this.schools[school].dates));
            curSchool.append(HTMLschoolLocation.replace("%data%", this.schools[school].location));

            for (major in this.schools[school].majors) {
                curSchool.append(HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]));
            }

            $("#education").append(curSchool);
        }

        //online courses
        $("#education").append(HTMLonlineClasses);
        for (course in this.onlineCourses) {
            var curCourse = $(HTMLschoolStart);
            curCourse.append(
                HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title) +
                HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school));
            curCourse.append(HTMLonlineDates.replace("%data%", this.onlineCourses[course].date));
            curCourse.append(HTMLonlineURL.replace("%data%", this.onlineCourses[course].url));
            $("#education").append(curCourse);
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Most Recent Project",
            "dates": "May 2015 - June 2015",
            "description": "Fanciest",
            "images": ["http://lorempixel.com/250/250", "http://placekitten.com/200/250", "http://placebear.com/250/250"]
        },
        {
            "title": "Another Project",
            "dates": "March 2015 - May 2015",
            "description": "Fancier",
            "images": ["http://lorempixel.com/300/300"]
        },
        {
            "title": "First Project",
            "dates": "January 2015 - March 2015",
            "description": "Fancy",
            "images": ["http://lorempixel.com/400/200"]
        }
    ],
    "display": function () {
        for (project in this.projects) {
            var curProj = $(HTMLprojectStart);
            curProj.append(HTMLprojectTitle.replace("%data%", this.projects[project].title));
            curProj.append(HTMLprojectDates.replace("%data%", this.projects[project].dates));
            curProj.append(HTMLprojectDescription.replace("%data%", this.projects[project].description));

            for (img in this.projects[project].images) {
                curProj.append(HTMLprojectImage.replace("%data%", this.projects[project].images[img]));
            }

            $("#projects").append(curProj);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);