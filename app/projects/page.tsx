import Card from '../../components/Card';

export default function ProjectsPage() {
  return (
    <main className="flex flex-wrap justify-center py-12 gap-6">
      <Card
        imagePath="/images/lancolj2.png"
        title="Word Game"
        tools={["React", "Tailwind CSS", "JavaScript"]}
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