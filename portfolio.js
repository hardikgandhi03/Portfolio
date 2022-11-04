import emoji from "react-easy-emoji";

export const greetings = {
	name: "Hardik Gandhi",
	title: "Hey There! I'm Hardik Gandhi",
	description:
"I am a 4th year student currently pursuing B.Tech in I.T. from Charotar University of Science and Technology. I am interested in domains of Cloud, DevOps & CyberSecurity. Right now, I have some experience of working with CSPs like AWS as well as GCP. I am also preparing for AWS Solutions Architect. ",
		resumeLink:
		"https://drive.google.com/file/d/1NV2HgQX1WmpiEVJVtT0lWrkbPBnYSqlv/view?usp=sharing",
};

export const openSource = {
	githubUserName: "hardikgandhi03",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=100008789584756",
	instagram: "https://www.instagram.com/hardikgandhiii/",
	twitter: "https://twitter.com/hardikgandhi_", 
	github: "https://github.com/hardikgandhi03",
	linkedin: "https://www.linkedin.com/in/hardik-gandhi-",
};

export const skillsSection = {
	title: "WHAT I DO ?",
	subTitle:
		"A CRAZY LEARNER YOU WILL SEE ;) ",
	data: [
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Exploring How to Work with multiple cloud platforms ."),
				emoji(
					"⚡ Comparing various cloud platforms who provide same type of services ."
				),
				emoji(
					"⚡ Trying to Build CI/CD pipelines for automated testing & deployment ."
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "GCP",
					fontAwesomeClassname: "logos:google-cloud",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
			],
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Cloud Computing", //Insert stack or technology you have experience in
		progressPercentage: "75", //Insert relative proficiency in percentage
	},
	{
		Stack: "Mobile App Development with Flutter",
		progressPercentage: "60",
	},
	{
		Stack: "CyberSecurity",
		progressPercentage: "50",
	},
	
];

export const educationInfo = [
	{
		schoolName: "Charotar University of Science and Technology ,Changa",
		subHeader: "COURSE : B.Tech",
		duration: "July 2019 - May 2023(Expected)",
		desc: "CGPA : 9.17(UPTO 6TH SEM).",
	},
];
