import { certificates } from '../data/certificates';

const CertificationsList: React.FC = () => {
    const classNames = ['certificates'];

    return (
        <section className={classNames.join('--')}>
            <h2>Certificates</h2>

            <ul className="certificates__certificateslist">
                {certificates.map((certificate, index) => (
                    <li key={`cert_${index}`} className="certificate">
                        <a href={certificate.credly_url} target="_blank">{certificate.name} ({certificate.start_date.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })})</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default CertificationsList;
