import HomeBanner from "./components/HomeBanner";
import Container from "./components/nav/Container";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
      </Container>
    </div>
  );
}
