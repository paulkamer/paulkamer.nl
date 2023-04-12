import React from 'react';

import { BreadCrumbtrail } from '../../components/Breadcrumbtrail';

const NetcompanyPage: React.FC = () => {

    return (
        <section>
            <BreadCrumbtrail trail={[{ to: '/jobs/', label: 'Jobs' }, { label: 'Netcompany' }]} />

            <h1>Netcompany | May 2020 - present</h1>

            <p>
                I started as a Senior Specialist at Netcompany working for a customer in the primary education in the Netherlands, the Vervangingsfonds/Participatiefonds (Vf/Pf).<br />
                For this customer my team and I built a solution that allows schools to request subsidies to cover unemployment costs.
            </p>

            <p>
                The solution consists of a React frontend and a .NET 6 backend component. The backend has several connections to external
                dependencies, like a CRM and document management system, using a wide arrange of protocols, such as: REST, SAML2.0, OpenID Connect, OData and SOAP.
            </p>

            <p>
                Mid 2022 I got the opportunity to shift my focus from software development to software architecture. My role changed to Managing Architect and in this capacity
                I assisted with transitioning our team from projects-based work to service and maintanance.
            </p>

            <p>In March 2023 I joined the 'Datalab Core Team' of a different Netcompany customer, the Dutch Ministry of Healthcare.</p>

            <p>
                Besides working as a developer/architect, I also regularly helped with tender writing, job interviews, internal knowledge sharing talks and I organized an internal DevOps & Kubernetes course.<br />
                Netcompany also gave me the opportunity to become an emergency response officer (BHV'er).
            </p>

            <h2>Technology stack</h2>

            <p>The technology stack comprises of the following:</p>

            <ul>
                <li>C# / .NET 3.1, 5, 6</li>
                <li>React + TypeScript</li>
                <li>Azure Kubernetes Service (AKS)</li>
                <li>Azure DevOps - CI/CD pipelines</li>
                <li>Sonarqube</li>
                <li>Azure Data Factory</li>
                <li>Power BI</li>
            </ul>

            <h2>Positions</h2>

            <ul>
                <li>Managing Architect | September 2022 - present</li>
                <li>Master / Lead Developer | January 2022 - September 2022</li>
                <li>Senior Specialist | May 2020 - January 2022</li>
            </ul>
        </section >
    )
};

export default NetcompanyPage;