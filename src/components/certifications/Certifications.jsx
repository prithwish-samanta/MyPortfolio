import React from "react";
import "./certifications.css";
import IMG1 from "../../assets/aws1.png";
import IMG2 from "../../assets/aws2.png";
import IMG3 from "../../assets/az900.png";
import { HiExternalLink } from "react-icons/hi";

const data = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    docUrl:
      "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    image: IMG2,
    time: "Aug 2023",
    expiry: "Aug 2025",
    Id: "V02HTBKA5EZEQ7KQ",
    url: "https://drive.google.com/file/d/1gyPO7xWR1DI8zt9DwioIVJJr5CdPXehZ/view",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    docUrl:
      "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    image: IMG1,
    time: "Jul 2023",
    expiry: "Jul 2025",
    Id: "V08FYRFC8EQEQ0KE",
    url: "https://drive.google.com/file/d/1gyPO7xWR1DI8zt9DwioIVJJr5CdPXehZ/view",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    docUrl: "https://learn.microsoft.com/en-us/certifications/exams/az-900/",
    image: IMG3,
    time: "June 2022",
    expiry: "None",
    Id: "288236bc-8735-4358-b522-824c92885118",
    url: "https://www.credly.com/badges/da9c5793-ec36-44f8-ab0c-46ed871a391b",
  },
];
const Certifications = () => {
  return (
    <section id="certifications">
      <h5>What certifications I have</h5>
      <h2>My certifications</h2>
      <div className="container certifications__container">
        {data.map(({ title, docUrl, image, time, expiry, Id, url }) => {
          return (
            <div className="certifications__div">
              <img src={image} alt={"GCP_PCA"} className="certification_img" />

              <div className="certifications__content">
                <a href={docUrl}>
                  <h3>
                    {title}
                    <HiExternalLink />
                  </h3>
                </a>
                {expiry == "None" ? (
                  <small>Isuued {time}</small>
                ) : (
                  <small>
                    Isuued {time} . Expires {expiry}
                  </small>
                )}
                <small>Credential ID: {Id}</small>
                <a href={url} target="blank">
                  <div>
                    <small>
                      Credential Url <HiExternalLink />{" "}
                    </small>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
