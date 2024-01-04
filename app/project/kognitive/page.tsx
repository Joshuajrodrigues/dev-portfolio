import Card from "@/components/card";
import ImageCard from "@/components/imageCard";
import ProjectLink from "@/components/projectLinks";
import Tags from "@/components/tags";
import { ArrowBigLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Kognitive Project | Joshua Rodrigues",
  description: "CBT jpurnaling app",
};
const page = () => {
  return (
    <section className="mx-2 w-full flex flex-col justify-center items-center lg:text-xl">
      <section className="w-full flex justify-start items-center mb-3">
        <Link
          className=" flex cursor-pointer items-center justify-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          href={"/"}
        >
          <ArrowBigLeftIcon /> Back
        </Link>
        <span className="">
        
        </span>
      </section>
      <Tags>
        <h2 className="text-2xl text-center">Kognitive - CBT Journaling</h2>
      </Tags>
      <ProjectLink
            visit="https://kognitive.vercel.app"
            code="https://github.com/Joshuajrodrigues/cbtjournal"
          />
      <Card
        className="w-full m-4"
        heading="The Problem"
        paragraph={
          <>
            <p>
              2022 was a difficult year, and while browsing online, I found a
              lot of books and apps for Cognitive Behavioral Therapy. However,
              these were very expensive and at times unavailable in my region.
              Some of my friends were even paying outrageous amounts for the
              forms, some of which would either get misplaced (physical) or used
              for ad targeting (applications).
            </p>
          </>
        }
      />
      <Card
        className="w-full m-4"
        heading="The Solution"
        paragraph={
          <>
            <p className="mb-4">
              Kognitive is a CBT journaling app designed to make the process of
              practicing Cognitive Behavioral Therapy more manageable and
              structured. It provides users with a digital platform to journal
              their thoughts, feelings, and behaviors, making it easier to
              recognize patterns and apply CBT techniques for better mental
              health.
            </p>
            <div className="flex flex-col flex-wrap md:flex-row md:items-baseline md:justify-around">
            <ImageCard imageUrl={"/kognitive/dash.png"}>Dashboard</ImageCard>
            <ImageCard imageUrl={"/kognitive/how.png"}>
              How was your day ?
            </ImageCard>
            </div>
          </>
        }
      />
      <Card
        className="w-full m-4"
        heading=" Features"
        paragraph={
          <>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>PWA:</strong> It is a progressive web app, can be
                installed on your phone like a native app.
              </li>
              <li>
                <strong>Daily check-in:</strong> A general space for users to
                record their thoughts and emotions, organized by date and time.
              </li>
              <li>
                <strong>SMART goal builder:</strong> Users can track their goals
                and get a clear picture of what they want and how they can
                achieve it.
              </li>
              <li>
                <strong>Stress manager:</strong> A feature for recording and
                analyzing stress, helping users understand how their actions
                relate to their thoughts and emotions.
              </li>
              <li>
                <strong>Worry challenge:</strong> Kognitive offers a form to
                challenge worry thoughts, to jot them down and make sense of
                them.
              </li>
              <li>
                <strong>Breakdown argument:</strong> Ever had those arguments
                that ruin your entire day? This is for you.
              </li>
              <li>
                <strong>History:</strong> Kognitive offers a history table where
                you can view your past entries.
              </li>
            </ul>
          </>
        }
      />
      <Card
        className="w-full m-4"
        heading="Challenges"
        paragraph={
          <>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                <strong>User Engagement:</strong> Usually, you see these apps
                use gamification tactics and rewards, they are flashy or too
                bubbly. I personally find this to be a bad design for an app
                where the user comes in with varied mental states and stresses.
                <p className="flex flex-col justify-center items-center">
                  <span>
                    <strong>Solution:</strong> Kognitive employs clean and soft
                    UI. It does not force your hand at anything; don't want to
                    write a step, that's okay. The app stays out of your way and
                    neutral to make sure the user can focus on themselves.
                  </span>
                </p>
                <div className="flex flex-col flex-wrap md:flex-row md:items-baseline md:justify-around">
                <ImageCard imageUrl="/kognitive/example.png">Example</ImageCard>
                </div>
              </li>
              <li>
                <strong>Data Privacy and Security:</strong> Safeguarding
                sensitive user data and ensuring the privacy of their thoughts
                and emotions is crucial in a mental health app.
                <p>
                  <strong>Solution:</strong> Kognitive is open-source; you can
                  clone and host this on your personal Supabase database. There
                  are no ads, and it's free.
                </p>
              </li>
              <li>
                <strong>Forms:</strong> The forms provided in Kognitive have a
                slightly complex state management system.
                <p>
                  <strong>Solution:</strong> It was made easier by using Zustand
                  over Redux, as it felt like the perfect balance for an app
                  like this.
                </p>
              </li>
            </ol>
          </>
        }
      />
      <section className="w-full flex justify-start mb-3">
        <Link
          className="flex cursor-pointer items-center justify-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          href={"/"}
        >
          <ArrowBigLeftIcon /> Back
        </Link>

        {/* <Link
          className="flex cursor-pointer items-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          href={"/"}
        >
          Next
        </Link> */}
      </section>
    </section>
  );
};

export default page;
