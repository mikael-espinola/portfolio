import DevInfo from "@/components/devInfo/DevInfo";
import { Container } from "./style";
import Projects from "@/components/projects/Projects";
import UpButton from "@/components/upButton/UpButton";
import Form from "@/components/formContact/Form";
import Techs from "@/components/devInfo/technologies/techs";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <DevInfo />
      <Techs />
      <Projects threeFirst />
      <Form />
      <UpButton />
    </Container>
  );
}
