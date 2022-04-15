import React from "react";
import {
  Branch,
  CardEducation,
  Educationsection,
  Educationsectionbottom,
  Educationsectiontop,
  Heading,
  Imagesection,
  InstituteName,
  Readmore,
  TextSection,
} from "./educationElements";

const Education = () => {
  return (
    <>
      <Educationsection>
        <Educationsectiontop>
          <Heading>Recent Posts</Heading>
        </Educationsectiontop>

        <Educationsectionbottom>
          <CardEducation>
            <Imagesection>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1649962592/good%20lives/WhatsApp-Image-2022-01-25-at-9.09.35-PM-4_1_pm2eej.jpg"
                  alt="nitr"
                ></img>
              </div>
            </Imagesection>

            <TextSection>
              <InstituteName>
                How To Study Hard: 10 Important Tips That Could Help!
              </InstituteName>
              <Branch>
                “Stop doubting yourself, study hard, and make it happen”
              </Branch>
              <Readmore>
                <a href="sxuhd">Read More</a>
              </Readmore>
            </TextSection>
          </CardEducation>

          <CardEducation>
            <Imagesection>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1649963287/good%20lives/WhatsApp-Image-2022-01-25-at-9.09.35-PM-1_wngmt9.jpg"
                  alt="nitr"
                ></img>
              </div>
            </Imagesection>

            <TextSection>
              <InstituteName>
              Important 6 Insights Into Online Therapy You Must Know
              </InstituteName>
              <Branch>
              “In therapy, I see myself in the mirror differently.”
              </Branch>
              <Readmore>
                <a href="sxuhd">Read More</a>
              </Readmore>
            </TextSection>
          </CardEducation>
        </Educationsectionbottom>
      </Educationsection>
    </>
  );
};

export default Education;
