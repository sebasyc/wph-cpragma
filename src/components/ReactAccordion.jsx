import { useState } from 'react';
import IconSet from './ReactIconsAccordion';

export default function ReactAccordion() {
    const [openIndex, setOpenIndex] = useState(null);
    const items = [
        { 
            title: "Compliance Penal", 
            content: "<p>El cumplimiento normativo en materia penal es esencial para la sostenibilidad y reputación de las empresas. En el marco de la Ley N°20.393, contar con un Modelo de Prevención de Delitos permite eximir de responsabilidad penal a la empresa, asegurando que la organización tenga continuidad en sus operaciones. La adopción de buenas prácticas en compliance penal refuerza la cultura ética y reduce la exposición a sanciones, resguardando la confianza de clientes, inversionistas y colaboradores.</p><p>En Cpragma, analizamos las particularidades de cada organización para identificar riesgos penales, contribuyendo a la correcta implementación e integración del Modelo de Prevención de Delitos y al fortalecimiento de la cultura de cumplimiento.</p>",
            iconName: "compliancePenal"

        },
        { 
            title: "Compliance Legal", 
            content: "<p>El marco regulatorio laboral exige que las empresas adopten medidas para prevenir conflictos y asegurar condiciones de trabajo adecuadas. La Ley N° 21.643, sobre acoso laboral y violencia en el trabajo, junto con el Código del Trabajo, establecen estándares claros para resguardar los derechos de los trabajadores y evitar contingencias legales que puedan afectar la estabilidad organizacional.</p><p>Cpragma analiza las obligaciones específicas de cada empresa, permitiendo estructurar mecanismos que fortalezcan su cumplimiento. Según el contexto, esto puede incluir la evaluación de procedimientos internos, la adecuación de normativas internas o el desarrollo de estrategias y controles para prevenir y gestionar eventuales riesgos laborales.</p>",
            iconName: "complianceLegal"
        },
        { 
            title: "Datos Personales", 
            content: "<p>La protección de la información personal es fundamental en la gestión empresarial moderna. Con la promulgación de la Ley N° 21.719 el año 2024, exige a las organizaciones implementar medidas adecuadas para el tratamiento de datos personales, asegurando el respeto por los derechos de los titulares con el fin de evitar sanciones legales. La adopción de políticas alineadas con esta ley no solo cumple con las obligaciones legales, sino que también fortalece la confianza de clientes y colaboradores en la empresa.</p><p>Desde Cpragma, evaluamos cómo las organizaciones tratan los datos personales y su nivel de cumplimiento con la normativa vigente. En función de cada caso, esto puede implicar la revisión de políticas de privacidad, la actualización de cláusulas contractuales o la implementación de medidas de seguridad para reducir riesgos.</p>",
            iconName: "datosPersonales"
        },
        { 
            title: "Cyberseguridad", 
            content: "<p>La reciente promulgación de la Ley N° 21.663, conocida como Ley Marco de Ciberseguridad, establece nuevas obligaciones para las empresas en materia de gestión de riesgos, protección de información y respuesta ante ciberincidentes. Cumplir con esta normativa es esencial para evitar sanciones, minimizar responsabilidades y fortalecer la confianza en un entorno digital cada vez más exigente.</p><p>Cpragma analiza el cumplimiento normativo de la empresa, revisa sus políticas internas y diseña modelos de cumplimiento alineados con la ley. Según las necesidades detectadas, este proceso puede incluir la adecuación de normativas internas, la asesoría en obligaciones de reporte o el fortalecimiento de estrategias de gobernanza en ciberseguridad.</p>",
            iconName: "cyberseguridad"
        },
        { 
            title: "Riesgo operacional", 
            content: "<p>La gestión de riesgos operacionales es clave para la eficiencia y sostenibilidad del negocio. La identificación y control de amenazas en los procesos internos permite cumplir con regulaciones específicas de cada industria y alinear la empresa con estándares internacionales. Un enfoque preventivo en esta materia optimiza la toma de decisiones y reduce impactos negativos en la continuidad del negocio.</p><p>Para apoyar a las empresas en este ámbito, Cpragma identifica áreas críticas y propone estrategias para minimizar impactos adversos. Según cada caso, esto puede incluir la revisión de procesos clave, la optimización de controles internos o el desarrollo de herramientas para gestionar de manera más eficiente los riesgos operacionales.</p>",
            iconName: "riesgoOperacional"
        }
    ];

    return (
        <div className="accordion-container container">
            <div className="accordion">
                {items.map((item, index) => (
                    <div key={index} className={`accordion-item ${openIndex === index ? 'active' : ''}`}>
                        <div
                            className="accordion-title"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="accordion-icon">
                                {IconSet[item.iconName] && IconSet[item.iconName]}
                            </div>
                            <h3><span>{item.title}</span></h3>
                        </div>
                        {openIndex === index && (
                            <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.content }}>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}