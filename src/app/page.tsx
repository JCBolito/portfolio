import ProfileCard from "@/components/organisms/profile-card";
import SkillsCard from "@/components/organisms/skills-card";

export default function Home() {
  return (
    <main
      className="m-auto flex min-h-screen max-w-screen-xl
	items-start gap-4"
    >
      <section className="flex flex-col gap-4 p-4 md:flex-row">
        <section className="md:flex-[1_0_0%]">
          <ProfileCard className="dark:bg-gray-900" />
        </section>
        <section className="flex flex-col justify-stretch gap-4 md:flex-[2_2_0%]">
          <SkillsCard className="flex flex-col justify-center dark:bg-gray-900" />
        </section>
      </section>
    </main>
  );
}
