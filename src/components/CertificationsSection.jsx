import { Award } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "Brand Marketing and SEO Tools using Wix",
      issuer: "Coursera",
      link: "https://drive.google.com/file/d/1tgc_fA2SxpFbqUxAQencQ5IPQeznHid4/view",
    },
    {
      name: "Machine Learning in Python",
      issuer: "Simplilearn",
      link: "https://drive.google.com/file/d/1JougHrgmulOh9bmyVVtZXFRgWookgMAe/view",
    },
    {
      name: "PowerBi for Beginners",
      issuer: "Simplilearn",
      link: "https://drive.google.com/file/d/1q9S9xNB1bGz3ktP6JYihZevoSTaqyTX1/view",
    },
    {
      name: "Principles Of Management",
      issuer: "Great Learning",
      link: "https://drive.google.com/file/d/1RnNSOpaIYvFLhHv_7gx-lEpjguErXoZv/view",
    },
    {
      name: "Fundamentals of Software Development",
      issuer: "Simplelearn",
      link: "https://drive.google.com/file/d/1_MnGEejsZsRgkY_GcaHlKT7UAizd14Qv/view",
    },
    {
      name: "ReactJS for Beginners",
      issuer: "Cursa",
      link: "https://drive.google.com/file/d/1cTH_q5WXP670DXf6OoiGxIWv12UkWP0D/view"
    },
    {
      name: "FullStack Development",
      issuer: "Simplilearn ",
      link: "https://drive.google.com/file/d/17NvV1Rm2p_YsxRRIKncyRfmtvWNBgKvS/view"
    },
    {
      name: "Data Science and Analytics",
      issuer: "HP Foundation",
      link: "https://drive.google.com/file/d/1lOeD0XDL0j0i2_tYHVyBmk1jeq5kmjzq/view",
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
