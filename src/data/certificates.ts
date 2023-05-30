export type Certificate = {
    name: string;
    issued_by: string;
    credly_url: string,
    start_date: Date;
    end_date?: Date;
}

export type CertificatesListType = Certificate[];

export const certificates: CertificatesListType = [
    {
        name: "Azure Fundamentals",
        issued_by: "Microsoft",
        credly_url: "https://www.credly.com/badges/9ba87db8-82ce-4bf6-bc78-aef0e999e05f",
        start_date: new Date('2021-04-30'),
    },
    {
        name: "Azure Developer Associate",
        issued_by: "Microsoft",
        credly_url: "https://www.credly.com/badges/cfbffad0-8c44-44dd-a5d2-d640c8042735",
        start_date: new Date('2021-05-31'),
        end_date: new Date('2024-05-31'),
    },
    {
        name: "Certified Kubernetes Application Developer (CKAD)",
        issued_by: "Cloud Native Computing Foundation",
        credly_url: "https://www.credly.com/badges/5393ae1c-dfe0-413a-beba-6d40c800f4c2",
        start_date: new Date('2021-11-14'),
        end_date: new Date('2024-11-14'),
    },
    {
        name: "Azure Administrator Associate",
        issued_by: "Microsoft",
        credly_url: "https://www.credly.com/badges/14fe9440-7442-4033-92c2-beffed36a908",
        start_date: new Date('2023-03-03'),
        end_date: new Date('2024-03-03'),
    },
    {
        name: "Azure Solutions Architect Expert",
        issued_by: "Microsoft",
        credly_url: "https://www.credly.com/badges/7ef7332c-1955-42a3-abd8-c93086c89c13",
        start_date: new Date('2023-05-19'),
        end_date: new Date('2024-05-19'),
    },    
];