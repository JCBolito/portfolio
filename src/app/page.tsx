import ProfileCard from "@/components/organisms/profile-card";
import SkillsCard from "@/components/organisms/skills-card";

export default function Home() {
  return (
    <main className="m-auto grid min-h-screen max-w-screen-xl flex-col content-start items-start lg:grid-cols-2">
      <section className="p-4">
        <ProfileCard className="dark:bg-gray-900" />
      </section>
      <section className="p-4">
        <SkillsCard className="dark:bg-gray-900" />
      </section>
    </main>
  );
}
