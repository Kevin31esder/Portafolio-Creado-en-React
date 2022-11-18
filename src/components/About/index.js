import {
  AboutContainer,
  Card,
  ByteText,
  Image,
  TextContainer,
  AvatarContainer,
  Button,
  Span,
  Title,
} from "./styles";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
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
        type: "spring",
        ease: "easeInOut",
        duration: 0.6,
        // mass: 2,
        // stiffness: 100,
      },
    },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <AboutContainer id="about">
      <Title
        as={motion.h5}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Quien soy Yo
      </Title>
      <Card>
        <AvatarContainer>
          <Image
            as={motion.img}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
            alt="kevin"
            src="/images/FotoCurri.jpg"
          />
          <Button
            as={motion.a}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
            href="https://drive.google.com/file/d/1JPcAKjvhFQhqQ8ub-XNmX3i2g-5nVV2h/view?usp=sharing"
            download
            target="_blank"
          >
            <Span>
              Descargar Resumen
              <FileDownloadIcon
                sx={{
                  fontSize: "1.1rem",
                }}
              />
            </Span>
          </Button>
        </AvatarContainer>
        <TextContainer>
          <ByteText
            as={motion.p}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
          >
            Soy egresado de la carrera de Ingeniería en Ciencias de los
            Materiales de la Universidad Juárez del estado de Durango. Durante
            mi formación profesional adquirí conocimientos útiles para el campo
            de la programación, como habilidades matemáticas generales,
            algoritmos, cálculo, entre otros , además de esto he aplicado mis
            conocimientos de programación para automatización de procesos
            repetitivos, asi como creación y mantenimiento de páginas web en
            general tanto por la parte de front end, como la creación de bases
            de datos relacionales y REST APIs.
          </ByteText>
          <ByteText
            as={motion.p}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
          >
            Dichos conocimientos fueron adquiridos como autodidacta ya que es un
            tema que siempre me ha apasionado y he aprendido a lo largo del
            tiempo, además de tener también cursos certificados por google,
            udemy, freecodecamp, entre otros. Actualmente estoy ampliando mis
            conocimientos de programación y desarrollo de software.
          </ByteText>
        </TextContainer>
      </Card>
    </AboutContainer>
  );
};

export default About;
