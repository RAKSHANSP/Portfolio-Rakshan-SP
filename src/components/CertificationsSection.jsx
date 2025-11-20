import { Award } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "Facebook ADS Campaign",
      issuer: "Coursera",
      link: "https://drive.google.com/file/d/1TTPtzVsyG5iFzhbbaPF3HwlpT0z-nj6f/view?usp=drive_link",
    },
    {
      name: "Machine Learning in Python",
      issuer: "Simplilearn",
      link: "https://drive.google.com/file/d/1-KrShdq9VtobYA82ioE-rpCfORCXCc-T/view?usp=drive_link",
    },
    {
      name: "5 Days Virtual Internship On CyberSecurity",
      issuer: "Prompt Infotech",
      link: "https://drive.google.com/file/d/1VreWNTlQCQc9rZB3Ui5m-p9JYHFP27oq/view?usp=drive_link",
    },
    {
      name: "Principles Of Management",
      issuer: "Great Learning",
      link: "https://drive.google.com/file/d/1CcaWtqaMP52BuLrcH-jQ8FhAkE1z7ZF7/view?usp=drive_link",
    },
    {
      name: "UI/UX for Beginers",
      issuer: "Great Learning",
      link: "https://drive.google.com/file/d/1swPto4Y-OxcVqlXR99kfYm1YMf31e4JE/view?usp=drive_link",
    },
    {
      name: "Git/GitHub Workshop",
      issuer: "NoviTech R&D Pvt Limited ",
      link: "https://drive.google.com/file/d/1DW7lAfiObvm_7T_jRDgm1SJERwq-OIcB/view?usp=drive_link"
    },
    {
      name: "AWS Fundamentals",
      issuer: "Simplilearn ",
      link: "https://drive.google.com/file/d/17zroyiKiqJQp84ZFFWZzNdoBfkD0J0CO/view?usp=drive_link"
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover flex items-start gap-4"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{cert.name}</h4>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
