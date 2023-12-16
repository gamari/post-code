import { Typo } from "@/src/components/base/typo";
import { Container } from "@/src/components/base/container";
import { AboutSection } from "@/src/components/top/about-section";
import { LatestCodesSection } from "@/src/components/top/latest-codes-section";

export default async function Index() {
  return (
    <div>
      <LatestCodesSection />
      <AboutSection />

      <section>
        <Container>
          <Typo type="h1" text="人気" />
        </Container>
      </section>

      <footer className="border-t py-12">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <div>left</div>
            <div>right</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
