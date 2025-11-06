import Image from "next/image";

export const StoryTellComponent = () => {
  return (
    <div>
      <h1>
        With endless travel inspiration, planning still feels overwhelming - too
        many tabs, scattered ideas, and group chats asking "where are we going?"
        turn excitement into exhaustion.
      </h1>
      <Image
        src={"/slides2.webp"}
        width={400}
        height={400}
        className="rounded-2xl md:h-[55vw] h-[60vw] w-[25vw] object-cover"
        alt="image"
      ></Image>
      <h1>500+</h1>
      <p>Places to go</p>
      <h1>
        BhuanaAlit makes travel effortless. Answer 3 quick questions and get a
        trip tailored to your vibe, goals, and schedule - no stress, just
        wanderlust.
      </h1>
    </div>
  );
};
