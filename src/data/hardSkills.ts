interface HardSkill {
  name: string; 
  icons: string[];
}

const hardSkills: HardSkill[] = [
  {
    name: "Front",    
    icons: ["react", "tailwind"]
  },
  {
    name: "Back",    
    icons: ["sequelize", "nodejs"]
  },
  {
    name: "Autres",    
    icons: ["figma", "wordpress", "docker"]
  },
  {
    name: "Base de donnée",    
    icons: ["mongodb", "postgre"]
  }
];

export default hardSkills;