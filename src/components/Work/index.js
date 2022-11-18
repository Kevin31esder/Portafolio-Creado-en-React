import Project from "./Project";
import { Container, ProjectsContainer, MainTitle } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projectsList = [
  {
    id: uuidv4(),
    name: "Tienda de electronica",
    previewUrl: '/images/1.jpg',
    description: 'Tienda electronica que permite realizar varias compras y poder pagar.',
    githubLink: "https://github.com/Kevin31esder/Tienda-Electronica",
    websiteUrl: "https://tienda-electronica123.herokuapp.com/",
  },
  {
    id: uuidv4(),
    name: "Pokedex",
    previewUrl:
      "https://res.cloudinary.com/dkyhypzyp/image/upload/v1668803973/1_u2iobl.jpg",
    description:
      "Buscador de pokemon donde podra ver las estadisticas de su pokemon favorito.",
    githubLink: "https://github.com/Kevin31esder/Pokedex",
    websiteUrl: "https://pokedex-puce-mu.vercel.app/",
  },
  {
    id: uuidv4(),
    name: " App clima",
    previewUrl:
      "/images/3.jpg",
    description:
      "Pagina que permite al usuario buscar un lugar y conocer su clima",
    githubLink: "https://github.com/Kevin31esder/React-clima",
    websiteUrl: "https://glowing-naiad-606494.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Landing Page",
    previewUrl:
      "images/4.jpg",
    description:
      "Una simple pagina de landing pagina que fue mi primer Projecto en React",
    githubLink: "https://github.com/Kevin31esder/Landing-Page",
    websiteUrl: "https://inspiring-gnome-165b0d.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Pagina de videoJuegos",
    previewUrl:
      "/images/5.jpg",
    description:
      "Pagina de un sitio de videoJuegos, permite ver las ultimas noticias de los videosJuegos",
    githubLink: "https://github.com/Kevin31esder/Pagina-Videojuegos",
    websiteUrl: "https://kevin31esder.github.io/Pagina-Videojuegos/",
  },
 
];

const Work = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const scrollMotionAnime = {
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        ease: "easeIn",
        duration: 0.5,
        dealy: 0.5,
      },
    },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <Container id="work">
      <MainTitle
        as={motion.h3}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Work Details
      </MainTitle>
      <ProjectsContainer
        as={motion.ul}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        {projectsList.map((eachProject) => (
          <Project projectDetails={eachProject} key={eachProject.id} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Work;
