import SkillItem from "./SkillItem";
import "./Skills.css";
import "./AboutMe.css";

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-list">
        <SkillItem icon="devicon-cplusplus-plain" skill="C++"/>
        <SkillItem icon="devicon-html5-plain" skill="HTML"/>
        <SkillItem icon="devicon-css3-plain" skill="CSS"/>
        <SkillItem icon="devicon-python-plain" skill="Python"/>
        <SkillItem icon="devicon-javascript-plain" skill="JavaScript"/>
        <SkillItem icon="devicon-java-plain" skill="Java"/>
        <SkillItem icon="devicon-azureslqdatabase-plain" skill="SQL"/>
        <SkillItem icon="devicon-git-plain" skill="Git"/>
        <SkillItem icon="devicon-react-original" skill="React"/>
        <SkillItem icon="devicon-django-plain" skill="Django"/>
        <SkillItem icon="devicon-google-plain" skill="Google Test"/>
        <SkillItem icon="" skill="Valgrind"/>
        <SkillItem icon="devicon-pytest-plain" skill="Pytest"/>
        <SkillItem icon="devicon-supabase-plain" skill="Supabase"/>
        <SkillItem icon="devicon-mysql-original" skill="MySQL"/>
        <SkillItem icon="devicon-expressjs-plain" skill="Express.js"/>
        <SkillItem icon="devicon-nodejs-plain" skill="Node.js"/>
      </div>
    </div>
  );
}

export default Skills;
