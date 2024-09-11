import DevInfo from "@/components/devInfo/DevInfo";
import { Container } from "./style";
import Projects, { FetchProp } from "@/components/projects/Projects";
import UpButton from "@/components/upButton/UpButton";
import Form from "@/components/formContact/Form";

export default function Home() {
  return (
    <Container>
      <DevInfo />
      <Projects />
      <Form />
      <UpButton />
    </Container>
  );
}
