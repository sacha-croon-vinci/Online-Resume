interface Study {
    title: string;
    school: string;
    date: string;
    link: string;
    option?: string[];
}
interface Experience {
    title: string;
    it: boolean;
    location: string;
    company: string;
    date: string;
    description: string;
    option?: string[];
    language: string[];
}

interface Languages{
    title: string;
    level: string;
    flagUrl?: string;
}

export type { Study, Experience, Languages  };