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
              Descargar CV
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
            Materiales de la Universidad Juárez del estado de Durango.Mientras cursaba mi carrera aprendiendo logica y matematicas en mi tiempo libre libre reforzaba mis conocimientos de programacion que habia tenido anteriormente
            
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
            udemy, Actualmente estoy ampliando mis
            conocimientos de programación y ingles.
          </ByteText>
        </TextContainer>
      </Card>
    </AboutContainer>
  );
};

export default About;
