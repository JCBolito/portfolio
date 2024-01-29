import ProfileCard from "@/components/organisms/profile-card";

export default function Home() {
  return (
    <main className="m-auto grid min-h-screen max-w-screen-2xl sm:grid-cols-2">
      <section className="p-4">
        <ProfileCard className="dark:bg-gray-900" />
      </section>
    </main>
  );
}
