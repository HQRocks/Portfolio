import Card from "../../components/Card";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col sm:flex-row flex-wrap items-center sm:items-stretch justify-center px-4 sm:px-8 md:px-12 py-8 sm:py-12 gap-6 sm:gap-8">
      <Card
        imagePath="/images/logo_my_fav.svg"
        title="Vacation Site"
        tools={["React", "TypeScript", "Tailwind CSS", "PostgreSQL"]}
        note="The website is in hungarian!"
        href="https://vakaciozz.com"
      >
        A travel and vacation site built for Hungarian travelers.
      </Card>
      
      <Card
        imagePath="/images/lancolj2.jpeg"
        title="Word Game"
        tools={["React"]}
        note="The game is in hungarian!"
        href="https://hqrocks.github.io"
      >
        An interactive word game invented by me.
      </Card>

      <Card
        imagePath="/images/placeholder.svg"
        title="Upcoming.."
        tools={["Python"]}
        note="name idea Word2Description"
        href="#"
      >
        An AI model that writes a short description about an uploaded image.
      </Card>
    </main>
  );
}