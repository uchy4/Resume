import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";
import Fab from "@material-ui/core/Fab";
import styled, { css } from "styled-components";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles, Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Switch from "@material-ui/core/Switch";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SchoolIcon from "@material-ui/icons/School";
import { skills } from "../data/data";
import { BlackDivider, List, PrintArea, WhiteDivider, Wrapper } from "../styles";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import GitHubSvg from '../assets/github.svg';
import LinkedInSvg from '../assets/linkedin.svg';
import ResumePng from '../assets/resume.png';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "flex-start",
		padding: 0,
		margin: 0
	},
	date: {
		flex: 0,
		minWidth: "5rem",
		textAlign: "center",
		padding: 0,
		paddingLeft: ".25rem"
	},
	xp: {
		textAlign: "left",
		padding: 0,
		paddingRight: ".5rem",
		paddingBottom: 0,
	},
	blue: {
		backgroundColor: "#1f66a8",
		marginTop: ".25rem",
		marginBottom: ".25rem"
	},
	green: {
		backgroundColor: "#1fa896",
		marginTop: ".25rem",
		marginBottom: ".25rem"
	},
	yellow: {
		backgroundColor: "#31ce23",
		marginTop: ".25rem",
		marginBottom: ".25rem"
	},
	orange: {
		backgroundColor: "#c9cc18",
		marginTop: ".25rem",
		marginBottom: ".25rem"
	},
	red: {
		backgroundColor: "#e96a16",
		marginTop: ".25rem",
		marginBottom: ".25rem"
	},
	red2: {
		backgroundColor: "#e96a16",
	},
	purple: {
		backgroundColor: "#a81f1f",
		marginTop: ".25rem",
		marginBottom: ".25rem"
	},
	bluegreen: {
		backgroundImage: "linear-gradient( #1f66a8, #1fa896)",
		marginTop: "0",
		marginBottom: "0"
	},
	greenyellow: {
		backgroundImage: "linear-gradient( #1fa896, #31ce23)",
		marginTop: "0",
		marginBottom: "0"
	},
	yelloworange: {
		backgroundImage: "linear-gradient( #31ce23, #c9cc18)",
		marginTop: "0",
		marginBottom: "0"
	},
	orangered: {
		backgroundImage: "linear-gradient( #c9cc18, #e96a16)",
		marginTop: "0",
		marginBottom: "0"
	},
	redpurple: {
		backgroundImage: "linear-gradient( #e96a16, #a81f1f)",
		marginTop: "0",
		marginBottom: "0"
	},
	item: {
		margin: 0,
		padding: 0,
		minHeight: "30px"
	},
	thru: {
		flex: .0315
	},
	small: {
		fontSize: "0.85rem",
		lineHeight: "0.85rem"
	}
}));

const BasicTimeline = () => {
	const classes = useStyles();
	return (
		<Typography className="section" component="div">
			<Timeline className={classes.root} align="right">
				<TimelineItem className={classes.item}>
					<TimelineOppositeContent className={classes.date}>
						<Typography color="textPrimary" className={classes.small}>
							Jan 2020 Current
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot className={classes.blue} />
						<TimelineConnector className={classes.bluegreen} />
					</TimelineSeparator>
					<TimelineContent className={classes.xp}>
						<Typography variant="h6" component="div" className="subtitle blue2">
							<span>Software Developer II - Mid</span>
						</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.item}>
					<TimelineOppositeContent className={classes.date}>
						<Typography color="textPrimary" className={classes.small}>
							Jan 2019 Dec 2019
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot className={classes.green} />
						<TimelineConnector className={classes.greenyellow} />
					</TimelineSeparator>
					<TimelineContent className={classes.xp}>
						<Typography variant="h6" component="div" className="subtitle blue2">
							<span>Software Developer I - Junior</span>
						</Typography>
						{/* <Typography variant="caption" component="div" className="subtitle secondary">
							<span>Church of Jesus Christ of Latter-day Saints</span><span>Riverton, UT</span>
						</Typography> */}
					</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.item}>
					<TimelineOppositeContent className={classes.date}>
						<Typography color="textPrimary" className={classes.small}>
							May 2018 Dec 2018
							<div className="note">Awesome team player</div>
							<div className="note">Pays attention to detail</div>
							<div className="note">Innovative</div>
							<div className="note">Quick learner</div>
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot className={classes.yellow} />
						<TimelineConnector className={classes.yelloworange} />
					</TimelineSeparator>
					<TimelineContent className={classes.xp}>
						<Typography variant="h6" component="div" className="subtitle blue2">
							<span>Software Developer I - Contingent</span>
						</Typography>
						<Typography variant="caption" component="div" className="subtitle secondary">
							<span>Church of Jesus Christ of Latter-day Saints</span><span>Riverton, UT</span>
						</Typography>
						<BlackDivider />
						<List>
							<li><b>Technologies:</b> JavaScript, TypeScript, Angular, React, NextJs, Express, Sass, SQL, .NET Core, .NET Framework, Entity Framework, CI/CD Pipeline, End to End Testing</li>
							<li><b>Tools:</b> CLI, Azure Devops, Git, VS Code, Visual Studio</li>
							<li>Overhauled and implemented rewrites for 3 different projects</li>
							<li>Actively maintained and diagnosed lecagy code for 5 different projects</li>
							<li>Expedited project enhancements in a team setting using Agile SCRUM or Kanban methodologies</li>
							<li>Managed codebase of 3 different projects as sole developer with limited to no supervision</li>
							<li>Addressed and resolved technical roadblocks in a SCRUM standup meeting daily, using Microsoft Teams, and over phone</li>
							<li>Consistently participated in code reviews, architecture reviews and best coding practice trainings</li>
							<li>Contributed to clarification in software requirements and user stories</li>
							<li>Actively developed, maintained and troubleshot source code and unit tests across multiple projects that use different front-end and back-end technologies</li>
							<li>Continuously researched usage and implementation of new technologies and best coding practices</li>
							<li>Pioneered the adoption of React, NextJs and Dotnet Core 3.1 into projects and mentored others of my team</li>
						</List>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.item}>
					<TimelineOppositeContent className={classes.date}>
						<Typography color="textPrimary" className={classes.small}>Jan 2018 Apr 2018</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot className={classes.orange} />
						<TimelineConnector className={classes.orangered} />
					</TimelineSeparator>
					<TimelineContent className={classes.xp}>
						<Typography variant="h6" component="div" className="subtitle blue2">
							<span>Software QA Intern</span>
						</Typography>
						<Typography variant="caption" component="div" className="subtitle secondary">
							<span>Church of Jesus Christ of Latter-day Saints</span><span>Riverton, UT</span>
						</Typography>
						<div style={{ margin: ".25rem" }}></div>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.item}>
					<TimelineOppositeContent className={classes.date}>
						<Typography color="textPrimary" className={classes.small}>
							Jun 2017 Jan 2020
							<div className="note">Very self motivated</div>
							<div className="note">Self managing</div>
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot className={classes.red} />
						<TimelineConnector className={classes.redpurple} />
					</TimelineSeparator>
					<TimelineContent className={classes.xp}>
						<Typography variant="h6" component="div" className="subtitle blue2">
							<span>Freelance Web App Developer</span>
						</Typography>
						<Typography variant="caption" component="div" className="subtitle secondary">
							<span>R.C. Booting</span><span>Rexburg, ID</span>
						</Typography>
						<BlackDivider />
						<List>
							<li><b>Technologies:</b> React, Material UI, Firebase, Azure Static Web Apps, Progressive Web Apps</li>
							<li><b>Tools:</b> CLI, Github, VS Code</li>
							<li>Architected a Progressive Web App that included CRUD functionality, authentication, roles and offline capabilities</li>
							<li>Designed the UI in an intuitive and beautiful way</li>
							<li>Provided enhancements and bug fixes and worked closely with users</li>
							<li>Check out the app example here: <a href="https://rcbooting-dev.web.app">https://rcbooting-dev.web.app</a></li>
						</List>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.item}>
					<TimelineOppositeContent className={classes.date}>
						<Typography color="textPrimary" className={classes.small}>Jun 2016 Dec 2016</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot className={classes.purple} />
					</TimelineSeparator>
					<TimelineContent className={classes.xp}>
						<Typography variant="h6" component="div" className="subtitle blue2">
							<span>Web Developer</span>
						</Typography>
						<Typography variant="caption" component="div" className="subtitle secondary orange">
							<span>BYU-Idaho Music Department</span><span>Rexburg, ID</span>
						</Typography>
					</TimelineContent>
				</TimelineItem>
				<Typography style={{ marginTop: ".5rem", fontWeight: "bold" }}>
					<Typography variant="subtitle1" component="div" style={{ fontWeight: "bold" }}>View my references on LinkedIn!</Typography>
					<Typography variant="subtitle1" component="div" style={{ fontWeight: "bold" }}>Check out my projects/contributions/activity on Github!</Typography>
				</Typography>
				<Typography style={{ marginTop: ".5rem" }}>
					<div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
						<img src={GitHubSvg} height="100px" width="100px" />
						<img src={LinkedInSvg} height="100px" width="100px" />
						<img src={ResumePng} height="100px" width="100px" />
					</div>
				</Typography>
			</Timeline>
			<Typography style={{ marginTop: "" }}>
				NOTE: This resumé was hand-crafted with React and Material UI
			</Typography>
		</Typography>
	);
}

const IconText = ({
	icon,
	text,
	link,
}: {
	icon: JSX.Element;
	text: string;
	link?: boolean;
}) => (
	<ListItem className="no-padding">
		<ListItemIcon className="icon">{icon}</ListItemIcon>
		{link ? (
			<a href={text} className="link">
				{text}
			</a>
		) : (
				<span>{text}</span>
			)}
	</ListItem>
);

const PrintButton = ({ handle }: { handle: (() => void) | undefined }) => (
	<Fab onClick={handle} className="print">
		<PrintIcon />
	</Fab>
);

const ChipSection = ({
	items,
	title,
	className,
}: {
	items: { name: string; skill: number }[];
	title: string;
	className: string;
}) => (
	<>
		<Typography variant="h6" component="div" className="subtitle">
			{title}
		</Typography>
		<WhiteDivider />
		<Typography className="chip" component="div">
			{items.map((x) => (
				<Chip
					// variant="outlined"
					className={className}
					key={x.name}
					size="small"
					label={x.name}
					// avatar={<Avatar>{x.skill}</Avatar>}
					style={{ marginRight: ".25rem", marginBottom: ".25rem" }}
				/>
			))}
		</Typography>
	</>
);
const codeString = `let years = 30;
for (let y = 0; y < years; y++) {
    developWith({
        language: "typescript",
        tool: "react"
    });
    gainExperience();
    pluralSight(watch: true);
    if (y === 8) {
        roles.append("architect");
    }
}`;

const ComponentToPrint = React.forwardRef((_, ref: any) => {
	const [viewCode, setView] = useState(false);
	const toggleView = () => setView((prev) => false);
	console.log(vscDarkPlus);
	return (
		<PrintArea className="printable" ref={ref}>
			<Typography className="aside" component="div">
				<Typography className="div" component="div">
					<Typography
						variant="h3"
						className="section center title"
						component="div">
						Josh Uchytil
				</Typography>
					<Typography
						variant="h5"
						className="section center title orange"
						component="div">
						Full Stack Developer
				</Typography>
					<Typography className="section" component="div">
						<IconText
							icon={<AlternateEmailIcon fontSize="small" htmlColor="white" />}
							text="joshua.uchytil@gmail.com"
						/>
						<IconText
							icon={<PhoneIcon fontSize="small" htmlColor="white" />}
							text="(801) 600 -1572"
						/>
						<IconText
							icon={<LocationOnIcon fontSize="small" htmlColor="white" />}
							text="Eagle Mountain, Utah"
						/>
						<IconText
							icon={<LinkedInIcon fontSize="small" htmlColor="white" />}
							text="www.linkedin.com/in/joshuchytil"
							link
						/>
						<IconText
							icon={<GitHubIcon fontSize="small" htmlColor="white" />}
							text="https://github.com/uchy4"
							link
						/>
						<IconText
							icon={<SchoolIcon fontSize="small" htmlColor="white" />}
							text="BYU Idaho B.S. Degree (2018)"
						/>
					</Typography>
					<Typography className="section flex" component="div">
						<Typography variant="h6" component="div" className="subtitle">
							Summary
						{/* <span className="options">
								<Switch
									size="small"
									checked={!viewCode}
									onChange={toggleView}
									inputProps={{ "aria-label": "secondary checkbox" }}
								/>
							English
						</span> */}
						</Typography>
					</Typography>
					<WhiteDivider />
					{viewCode ? (
						<SyntaxHighlighter language="typescript" style={{ ...vscDarkPlus, background: "red" }}>
							{codeString}
						</SyntaxHighlighter>
					) : (
							<Typography className="summary" component="div" variant="caption">
								I have 5+ years experience as a full-stack developer with hands-on experience in front-end
								 interface design as well as code back-end logic implementation.
								I excel in creating responsive user interface components created with React or Angular.
								I am highly detail-oriented and as a result, proficient in translating designs &
								wireframes into high-quality code, and writing application interface
								code. I am adept at monitoring &
								maintaining front-end performance and troubleshooting & debugging the
								same to bolster overall performance. I have quality experience with Entity Framework, 
								and also various API and logic architecture patterns.
							</Typography>
						)}
					<Typography className="section" component="div">
						<ChipSection
							items={skills.languages}
							title="Languages"
							className="blue"
						/>
						<ChipSection
							className="green"
							items={skills.tools}
							title="Tools"
						/>
						<ChipSection
							className="red"
							items={skills.frameworks}
							title="Frameworks"
						/>
					</Typography>
					{/* <Typography variant="caption" component="div" className="subtitle">
						Proficiency rating is based on various skill tests from Pluralsight
						and LinkedIn courses as well as my experience. Test me on anything!
					</Typography> */}
				</Typography>
			</Typography>
			<Typography className="body" component="div">
				<Typography className="div" component="div">
					<BasicTimeline />
				</Typography>
			</Typography>
		</PrintArea>
	);
});

const Resume = () => {
	const componentRef = useRef<HTMLElement>(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<Wrapper>
			<Container maxWidth="md" className="container">
				<Paper elevation={3}>
					<ComponentToPrint ref={componentRef} />
				</Paper>
			</Container>
			<PrintButton handle={handlePrint} />
		</Wrapper>
	);
};

export default Resume;

const MeIn30Secs = () => 
<div>
	My name is Josh
	I am seeking a job as a software and web developer in front end or full stack technologies
	I have 3+ years experience working with full stack technologies
</div>
