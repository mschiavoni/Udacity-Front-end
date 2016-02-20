	var bio = {
		"name": "Mark Schiavoni",
		"role": "Web Developer",
		"contacts": {
		"mobile": "540-336-1975",
		"email": "markdschiavoni@gmail.com",
		"github": "mschiavoni",
		"twitter": "@Paison30",
		"location": "D.C."
		},
		"welcomeMessage": "Welcome to my Page!",
		"image": "images/me.jpg",
		"skills": ["Video Production", "Web Design", "Motion Graphics", "Online Marketing"]
		};
		
	var work = {
		"jobs": [ 	
		{
			"employer": "Freelancer",
			"title": "Video/Multimedia Producer",
			"location": "All Over",			
			"dates": "2009-Present",
			"description": "Provide professional services in multimedia production. This includes film and video production, motion graphics, web design, storyboarding, and much more."
		},
		{
			"employer": "Pro Athlete 360",
			"title": "Online Manager",
			"location": "Winchester, VA, US",			
			"dates": "2009-Present",
			"description": "Run a sports social network and provide valuable content by filming pro athletes in all sports, for important answers to aspiring athletes and coaches of all levels."
		},
		{
			"employer": "The Boys & Girls Club of America",
			"title": "Site Director",
			"location": "Mount Pleasant, SC, US",			
			"dates": "2008-2009",
			"description": "Organized and led a site of 50 children year around in events, field trips, daily activities, food logistics, meal preparation, tutoring, and mentorship programs, to name a few."
		}		
	   ]
	};		
	
	var education = {
		"schools": [ 	
		{
			"name": "The Citadel, The Military College of South Carolina",
			"location": "Charleston, SC, US",
			"degree": "Bachelor of Science",			
			"dates": "2004-2007",
			"majors": ["Business Administration"],
			"url": "http://citadel.edu"
		},
		{
			"name": "The US Coast Guard Academy",
			"location": "New London, CT, US",
			"degree": "Honorable Discharge",						
			"dates": "2003-2004",
			"majors": ["N/A"],			
			"url": "http://uscga.edu/"						
		}		
	   ],
		 "onlineCourses": [
		{
			"title": "Front-End Developer",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"			
		}		
	   ]
	};
	
	var projects = {
		"projects": [ 	
		{
			"title": "HTML and CSS",
			"dates": "2015",
			"description" : ["An HTML and CSS web page coded from scratch and made with love."],
			"images": ["images/project1.jpg"]
		}		
	   ]
	};
	
var formattedName = HTMLheaderName.replace("%data%", bio.name);	
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);	
var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);	
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo =[];

formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);		
$("#header").append(formattedwelcomeMessage);

$("#topContacts").append(formattedContactInfo);
$("#footerContacts").append(formattedContactInfo);

if (bio.skills.length > 0) { 
	$("#header").append(HTMLskillsStart);

	for (var i in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
	}
}

	work.display=function () {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
	}
}

	work.display();
		 
	projects.display = function() {
			for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			
			if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}	
	
	projects.display();
			 
	education.display = function() {
			for (schools in education.schools){
			$("#education").append(HTMLschoolStart);
			
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].majors);

			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			}
		$("#education").append(HTMLonlineClasses);
		for (schools in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		
			var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", education.onlineCourses[schools].classes);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[schools].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[schools].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[schools].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[schools].url);

			$(".education-entry:last").append(formattedOnlineTitle);			
			$(".education-entry:last").append(formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
			}	
	}	
	
	education.display();
	

	$("#mapDiv").append(googleMap);
	
	
