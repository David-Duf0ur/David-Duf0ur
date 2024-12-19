/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Supply chain",
        startDate: "2019-12-11",
        endDate: "2024-01-10",
        company: "Prodways",
        location: "Annecy 74 - France",
        description: "Organisation de la chaine d'approvisionnement et de la production d'imprimante 3D industrielle",
        goals: [
            "Planification et stratégie de la production",
            "Amélioration des flux logistique",
            "Gestion de projet industriel",
            "Négociation et communication avec les fournisseurs",
        ],
        currentJob: false,
    },
    {
        title: "Responsable service intégration",
        startDate: "2009-01-10",
        endDate: "2019-12-10",
        company: "Prodways & Spie",
        location: "Yvelines 78 - France",
        description: "Management des tests et de la mise en service d'imprimante 3D industrielle",
        goals: [
            "Gestion de projet industriel",
            "Pilotage des équipes en charges des tests et validation des machines de production",
            "Mise en place de procédure de validation pour l'usine de production",
            "Pratique de la rigueur lors de la réalisation des études électrique/automatisme pour les nouvelles gammes de machines",
            "Autonmie et capacité d'analyse lors de la construction des dossiers technique des machines en production",
        ],
        currentJob: false,
    },
];
export default workExperience;