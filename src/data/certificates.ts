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
        credly_url: "https://learn.microsoft.com/en-us/users/paulkamer-0128/credentials/5818367a1b1c1d9",
        start_date: new Date('2021-05-31'),
        end_date: new Date('2025-06-01'),
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
        credly_url: "https://learn.microsoft.com/en-us/users/paulkamer-0128/credentials/8b360250ee368418",
        start_date: new Date('2023-03-03'),
        end_date: new Date('2025-03-04'),
    },
    {
        name: "Azure Solutions Architect Expert",
        issued_by: "Microsoft",
        credly_url: "https://learn.microsoft.com/en-us/users/paulkamer-0128/credentials/e4cb17c3d5e0c7a8",
        start_date: new Date('2023-05-19'),
        end_date: new Date('2025-05-20'),
    },    
    {
        name: "TOGAF 9 Certified",
        issued_by: "The Open Group",
        credly_url: "https://www.credly.com/badges/ea9e2396-0f7f-4975-a95f-9b2e019eeaa1",
        start_date: new Date('2024-02-03'),
    },      
];