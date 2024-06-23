import Image from "next/image";

import XinluFullPose from "/public/images/xinlu-full-pose.png";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={XinluFullPose}
              alt="Fullpose of Xinlu"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{objectFit: "cover"}}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            As a seasoned Full Stack Engineer with 11 years of experience, I
            have developed a deep expertise in both front-end and back-end
            development, specializing in creating scalable, efficient, and
            robust web applications. My comprehensive skill set includes
            advanced proficiency in JavaScript, Python, and PHP, coupled with
            extensive experience in modern frameworks and libraries.
          </Typography>
          <Typography>
            I am adept at architecting and deploying applications on cloud
            platforms like AWS, Azure, and Google Cloud Platform, leveraging
            services such as EC2, S3, Lambda, and Kubernetes to enhance
            application scalability, reliability, and performance. My strong
            background in cloud services is complemented by a proven track
            record of leading development teams through full project lifecycles,
            ensuring seamless integration and deployment processes.
          </Typography>
          <Typography>
            I excel at driving innovations that improve user experiences and
            operational efficiencies, consistently delivering projects that meet
            and exceed business objectives. My approach integrates best
            practices in code quality, security, and maintainability, making me
            a valuable asset to any forward-thinking organization looking to
            innovate and grow in the tech space.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
