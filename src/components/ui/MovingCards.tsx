"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { GridBackgroundDemo } from "./background-grid";
import { cn } from "@/utils/lib";

const musicSchoolQuotes = [
  {
    quote:
      "Teaching music is not my main purpose. I want to make good citizens. If children hear fine music from the day of their birth and learn to play it, they develop sensitivity, discipline and endurance. They get a beautiful heart.",
    name: "Shinichi Suzuki",
    title: "Violinist, Philosopher, and Founder of the Suzuki Method",
  },
  {
    quote:
      "The essential conditions of everything you do must be choice, love, passion. To be a good musician, you must be a sensitive and thoughtful human being.",
    name: "Nadia Boulanger",
    title: "Influential Music Teacher & Composer",
  },
  {
    quote:
      "Music is a spiritual food for everybody. So I studied how to make more people accessible to good music.",
    name: "Zoltán Kodály",
    title: "Composer, Ethnomusicologist, and Music Educator",
  },
  {
    quote:
      'Music washes away from the soul the dust of everyday life." [A popular sentiment often shared in music schools to express the transformative power of music.]',
    name: "Berthold Auerbach",
    title: "Poet and Author",
  },
  {
    quote:
      "The world's most famous and popular language is music. A music school is not just a center of learning; it is a embassy for this universal language.",
    name: "David Ackert",
    title: "Arts Columnist",
  },
  {
    quote:
      "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    name: "Plato",
    title: "Ancient Greek Philosopher",
  },
];

const MovingCards = () => {
  return (
    <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolQuotes}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCards;
