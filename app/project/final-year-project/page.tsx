import Card from "@/components/card";
import ImageCard from "@/components/imageCard";
import ProjectLink from "@/components/projectLinks";
import Tags from "@/components/tags";
import { ArrowBigLeftIcon, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Capstone Project | Joshua Rodrigues",
  description: "Glaucoma detection",
};
const page = () => {
  return (
    <section className="mx-2 w-full flex flex-col justify-center items-center lg:text-xl">
      <section className="w-full flex justify-between items-center mb-3">
        <Link
          className=" flex cursor-pointer items-center justify-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          href={"/"}
        >
          <ArrowBigLeftIcon /> Back
        </Link>
        <span className="">
          <ProjectLink
            visit="https://glaucoma-detector.vercel.app/"
            code="https://github.com/Joshuajrodrigues/glaucoma-detector"
          />
        </span>
      </section>
      <Tags>
        <h2 className="text-2xl text-center">
          Glaucoma detection using clustering algorithms - Capstone Project
        </h2>
      </Tags>
      <Card
        className="w-full m-4"
        heading="Preface"
        paragraph={
          <>
            <p>
              In 2021, I was in my final year of college, working on a college
              project that marked the beginning of my software development
              journey. It was a collaborative effort, originally implemented in
              Python. Our project received first place among all engineering
              departments, which was a remarkable achievement.
              <br />
              <a
                className=" underline "
                href="https://github.com/Joshuajrodrigues/Glaucoma-detection-using-fuzzy-c-strange-point-algorithm"
              >
                Original project source{" "}
                <ExternalLink className="inline" size={12} />
              </a>
            </p>
          </>
        }
      />
      <Card
        className="w-full m-4"
        heading="The Problem"
        paragraph={
          <>
            <p>
              In the world of clustering algorithms, numerous options like the
              well-known K-means exist. The initial problem statement in college
              was to compare various clustering algorithms with the Fuzzy C
              Strange Point Algorithm, which our professor had introduced. The
              goal was to use these algorithms for glaucoma detection.
              <br />
              However, my personal problem statement was to create a
              user-friendly and accessible application for segmenting the cup
              and disk of the eye using the given algorithm.
            </p>
          </>
        }
      />
      <Card
        className="w-full m-4"
        heading="The Solution"
        paragraph={
          <>
            <p>
              The Glaucoma detector presents a straightforward user interface
              for quickly calculating the cup and disk using the Canvas API, a
              task that was challenging to accomplish with Python alone.
              <br />
              <strong className=" underline">Not for medical use</strong>
            </p>
          </>
        }
      />
      <Card
        className="w-full m-4"
        heading=" Challenges"
        paragraph={
          <>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                <strong>Area Calculation:</strong> After separating the image,
                determining the area of the disk and cup proved to be
                challenging.
                <p>
                  <strong>Solution:</strong> I provided two sets of handles that
                  users can manually adjust to obtain more accurate area
                  measurements.
                </p>
                <div className="flex flex-col flex-wrap md:flex-row md:items-baseline md:justify-around">
                  <ImageCard imageUrl="/gd/cup.png">Cup</ImageCard>
                  <ImageCard imageUrl="/gd/disk.png">Disk</ImageCard>
                </div>
              </li>
              <li>
                <strong>Eye Fundus Images:</strong> Issues arose with the
                quality of eye fundus images, particularly when images were too
                blurry or unclear, which disrupted the image separation process.
                <p>
                  <strong>Solution:</strong> I implemented pre-processing
                  techniques to enhance image contrast before the separation
                  process. Additionally, I included a function to rerun the
                  clustering algorithm to eliminate excess noise.
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
