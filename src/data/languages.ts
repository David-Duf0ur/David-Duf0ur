interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Français",
        level: "Natale",
        description: "Langue de naissance",
        show: true
    },
    {
        name: "Anglais",
        level: "B2",
        description: "Anglais technique",
        show: true
    }
];

export default languages;