interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Concepteur développeur d'application",
        startDate: "2024-06-01",
        endDate: "2025-02-15",
        school: "O'Clock",
        location: "Téléprésentiel",
        description: "Programme intensif en téléprésentiel (niveau Bac+3/4, RNCP niveau 6) axé sur la maîtrise des technologies web et mobiles. Formation orientée projet, incluant le développement full-stack (HTML, CSS, JavaScript, React, PHP, Symfony, SQL), gestion des bases de données, méthodologies agiles, et réalisation d’applications complexes. Accompagnement personnalisé pour l’insertion professionnelle.",
        currentUni: true,
    },
    {
        title: "Brevet de technicien supérieur, génie Électrotechnique",
        startDate: "2000-09-01",
        endDate: "2006-09-01",
        school: "Lycée Saint-Germain-en-Laye",
        location: "Yvelines 78",
        description: "Parcours du BEP / CAP au BTS",
        currentUni: false,
    }
];

export default education;