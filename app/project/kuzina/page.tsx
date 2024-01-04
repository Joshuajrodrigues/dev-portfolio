import Card from "@/components/card";
import ImageCard from "@/components/imageCard";
import ProjectLink from "@/components/projectLinks";
import Tags from "@/components/tags";
import Video from "@/components/video";
import { ArrowBigLeftIcon, ExternalLink, Github } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Kuzina Project | Joshua Rodrigues",
  description: "Kitchen management app",
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
      </section>
      <div className="flex w-full justify-between items-center">
        <Card className="w-fit h-fit" heading ={
          <h2 className="text-2xl">Kuzina - Kitchen Mangement </h2>
          
        }/>
       
        <div className="flex flex-col items-center justify-start ml-3 ">
          <a
            target="_blank"
            href={"https://kuzina.vercel.app/"}
            className="flex justify-center text-sm  cursor-pointer items-center rounded-md border-2 border-black bg-white w-16  m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            Link <ExternalLink className="ml-1" />
          </a>{" "}
          <a
            target="_blank"
            href={"https://github.com/Joshuajrodrigues/kuzina"}
            className="flex justify-center text-sm  cursor-pointer items-center rounded-md border-2 border-black bg-white w-16  m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            Git <Github className="ml-1" />
          </a>
        </div>
      </div>
 
      <Card
        className="w-full m-4"
        heading="The Problem"
        paragraph={
          <>
            <p>
              Often, I find myself too busy to check what's left in the fridge.
              Some days I plan a recipe but forget the steps or where I had
              found it. When I do have a recipe, I find out I'm out of a
              particular ingredient. Sometimes I forget to buy stuff, and some
              days I find that it's already bought, and I bought it again.
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
              Kuzina is a kitchen management app designed to be quick and
              effortless for data entry and viewing. The app comes with
              collaboration features, so you can be in sync with your family
              members regarding what needs to be purchased and what has already
              been purchased.
            </p>
            <div className="flex flex-col flex-wrap md:flex-row md:items-baseline md:justify-around">
              <ImageCard imageUrl={"/kuzina/dash.png"}>Dashboard</ImageCard>
              <ImageCard imageUrl={"/kuzina/pantry.png"}>Pantry</ImageCard>
              <ImageCard imageUrl={"/kuzina/res.png"}>Recipes</ImageCard>
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
                <strong>Pantry:</strong> Where all your inventory goes, such as
                salt, sugar, pepper, milk.
              </li>
              <li>
                <strong>Recipes:</strong> Where all your recipes go.
              </li>
              <li>
                <strong>Wishlist:</strong> The items that you are out of and can
                refer to when you go shopping.
              </li>
            </ul>
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
                <strong>Pantry:</strong> For the pantry (later for recipes and
                wishlist), I wanted the listing to be mobile-first as mobile is
                what my mom and I use when we go shopping. A table would be a
                bad idea as it often shows too much data or too little.
                <p className="flex flex-col justify-center items-center">
                  <span>
                    <strong>Solution:</strong> What I finally came up with was a
                    collapsible card stack that "opens" up to reveal more
                    content. This looked cool and was also very challenging to
                    build.
                  </span>
                </p>
                <div className="flex flex-col flex-wrap md:flex-row md:items-baseline md:justify-around">
                  <Video imageUrl="/kuzina/cool.mp4">Table</Video>
                </div>
              </li>
              <li>
                <strong>Authentication:</strong> Auth was and is very
                challenging in this app, mostly as I never dealt with complex
                authentication on the backend. Not only does Kuzina have a
                generic user login, it also has a request system where other
                users can request the kitchen creator to join their kitchen. As
                a frontend dev, I had to ask for help from my work colleagues on
                how to actually get this done.
                <p>
                  <strong>Solution:</strong> I finally cracked it by using
                  row-based security from the database side (Supabase) for the
                  kitchen read-write access.
                </p>
              </li>
              <li>
                <strong>Data Entry:</strong> Entering data for recipes was
                tedious, especially if you are like me who just copies recipes
                from YouTube or websites. To manually add it would be boring.
                <p>
                  <strong>Solution:</strong> This was my favorite. The add/edit
                  recipe drawer gives you a button called fast fill. This opens
                  up a text area, where you paste in your content, and choose
                  how you want the data to be broken up. So let's say the data
                  is: <br /> 1) milk <br />
                  2) bananas <br />
                  3) sugar <br />
                  all you have to do is select "Break on new line" and the app
                  fills out the form for you. You also have break on comma and
                  numbers as shown above.
                </p>
                <div className="flex flex-col flex-wrap md:flex-row md:items-baseline md:justify-around">
                  <ImageCard imageUrl="/kuzina/add1.png">
                    Fast fill add
                  </ImageCard>
                  <ImageCard imageUrl="/kuzina/add2.png">
                    Fast fill result
                  </ImageCard>
                </div>
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
