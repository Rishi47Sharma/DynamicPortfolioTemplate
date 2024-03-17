export function transformUserDataObj(fetchedData) {
  const names = fetchedData.about.name.split(" ");
  // transform heroData
  const transformedData = {};
  transformedData.heroData = {
    title: `My name<br />is <b>${names[0]}</b> <span><br />${names[1]}...</span>`,
    subTitle: `<span>${fetchedData.about.title}</span> based in <span>${fetchedData.about.address}</span>`,
    ImgLink: `${fetchedData.about.avatar.url}`,
    phone: fetchedData.about.phoneNumber,
    email: fetchedData.email,
    btnText: "Work with me",
    socialData: fetchedData.social_handles.map((social) => ({
      link: social.url,
      icon: social.platform.toLowerCase(),
    })),
  };

  // transform aboutData
  transformedData.aboutData = {
    aboutLeft: {
      ImgLink: fetchedData.about.avatar.url,
      name: fetchedData.about.name,
      designation: fetchedData.about.title,
      resumeCv: "",
    },
    aboutRight: {
      aboutText: fetchedData.about.description,
      contactInfo: [
        { icon: "phone", data: fetchedData.about.phoneNumber },
        { icon: "person", data: fetchedData.about.name },
        { icon: "envelope", data: fetchedData.email },
        { icon: "map", data: fetchedData.about.address },
      ],
      archivement: [
        {
          number: fetchedData.about.exp_year + "+",
          meta: "Years <br /> experience...",
          text: fetchedData.about.description,
        },
        {
          number: fetchedData.about.some_total + "+",
          meta: "Clients <br /> Worldwide...",
          text:
            "With " +
            fetchedData.about.exp_year +
            "+ years experience as a professional developer, I have acquired the skills to make your project a success.",
        },
      ],
      note: fetchedData.about.quote,
    },
  };

  // Transform serviceData
  transformedData.serviceData = fetchedData.services.map((service, index) => ({
    title: service.name,
    heading: service.desc,
    triger: `${index}`, // You may need to adjust this according to your logic
    imgLink: service.image.url,
    text: service.desc,
  }));

  // Transform w
  transformedData.sliderData = {
    testimonialInfo: {
      useFor: "testimonial",
      settings: {
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 1, autoplay: true } },
        ],
      },
      info: fetchedData.testimonials.map((testimonial) => ({
        imgLink: testimonial.image.url,
        name: testimonial.name,
        designation: testimonial.position,
        text: testimonial.review,
      })),
    },
    brandInfo: {
      useFor: "brand",
      settings: {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 4 } },
          { breakpoint: 767, settings: { slidesToShow: 3 } },
        ],
      },
      info: fetchedData.testimonials.map((testimonial) => ({
        imgLink: testimonial.image.url,
      })),
    },
  };
  transformedData.socialData = fetchedData.social_handles.map((social) => ({
    link: social.url,
    icon: social.platform.toLowerCase(),
  }));
  transformedData.portfolioData = fetchedData.projects
    .map((project) => ({
      ImgLink: project.image.url,
      title: project.title,
      subTitle: project.techStack,
      link: project.liveurl,
      paragraphList: [],
      liveurl: project.liveurl,
      githuburl: project.githuburl,
    }))
    .reverse();

  transformedData.experienceData = {
    text: `My name  is ${names[0]}  ${names[1]}. I am a ${fetchedData.about.title} and Im very passionate and dedicated to my work`,
    resumeCv: "/Resume.pdf",
    experience: fetchedData.timeline
      .filter((timeline) => timeline.forEducation === false)
      .map((timeline) => ({
        start: timeline.startDate.substring(0, 4),
        end: timeline.endDate.substring(0, 4),
        title: timeline.jobTitle,
        subtitle: timeline.company_name,
      }))
      .sort((a, b) => b.start - a.start),
  };

  return transformedData;
}
