import DevInfo from "@/components/devInfo/DevInfo";
import { Container } from "./style";
import Projects from "@/components/projects/Projects";
import UpButton from "@/components/upButton/UpButton";
import Form from "@/components/formContact/Form";
import Techs from "@/components/devInfo/technologies/techs";

export default function Home() {
  return (
    <Container>
      <DevInfo />
      <Techs />
      <Projects threeFirst />
      <Form />
      <UpButton />
    </Container>
  );
}
