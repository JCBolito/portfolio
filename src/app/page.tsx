import ProfileCard from "@/components/organisms/profile-card";
import ProjectsCard from "@/components/organisms/projects-card";
import SkillsCard from "@/components/organisms/skills-card";

export default function Home() {
  return (
    <main className="m-auto flex max-w-screen-xl flex-col justify-start gap-4">
      <section className="flex flex-col gap-4 p-4 lg:flex-row">
        <section className="md:flex-[1_0_25%]">
          <ProfileCard className="dark:bg-gray-900" />
        </section>
        <section className="flex flex-col justify-stretch gap-4 md:flex-[2_2_75%]">
          <SkillsCard className="flex flex-col justify-center dark:bg-gray-900" />
          <ProjectsCard className="dark:bg-gray-900" />
        </section>
      </section>
    </main>
  );
}
