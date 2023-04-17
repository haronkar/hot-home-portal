import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Footer from "../(components)/footer";
import Pill from "../(components)/link-pill";

export default function Sell() {
  return (
    <div className="pt-20 h-screen">
      <div className="flex justify-center items-center flex-col px-5">
        <h1 className="text-5xl font-bold pt-6">Discover Your Dream Home</h1>
        <h3 className="text-lg font-extralight mt-2">
          HotHome can help you navigate a successful sale.
        </h3>
        <div className="flex w-full mt-10 gap-3">
          <div className="flex-1 px-10 border border-foreground rounded-2xl py-7">
            <h1 className="text-2xl font-extrabold ">Sell Traditionally</h1>
            <h3 className=" text-foreground/80 my-5">
              When you work with a real estate agent, you'll get selling support
              at every step, from prepping and listing your home to marketing
              that gets buyers in the door.
            </h3>

            <Pill
              text="Find and agent"
              className="bg-accentColor border border-foreground/20 text-sm py-1"
            />

            <h1 className="font-bold my-5">Why sell Traditionally</h1>

            <ul className="text-sm text-foreground/80 w-[80%]">
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>
                  Convenience: Agents handle paperwork, legal documentation, and
                  negotiations
                </li>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>
                  Expertise: Agents have industry knowledge, marketing tools,
                  and access to buyer databases
                </li>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>
                  Wide Exposure: Agents can market the home to a large and
                  diverse audience
                </li>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>
                  Negotiation Skills: Agents are trained to facilitate
                  productive conversations between buyers and sellers
                </li>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>
                  Reduced Liability: Agents can help reduce legal and financial
                  risks associated with selling a home
                </li>
              </div>
            </ul>
          </div>
          <div className="flex-1 px-10 bg-foreground text-background rounded-2xl py-7">
            <h1 className="text-2xl font-extrabold ">
              Sell your home yourself
            </h1>
            <h3 className=" text-background/80 my-5 mb-10">
              Selling your home without the assistance of a real estate agent is
              known as for-sale-by-owner (FSBO). While the FSBO process shares
              similarities with traditional selling, it requires you to take on
              additional responsibilities such as preparing the home, marketing
              it, hosting showings to potential buyers.
            </h3>

            <Pill
              text="Sign in"
              className="bg-accentColor border border-foreground/20 text-sm text-foreground py-1"
            />

            <h1 className="font-bold my-5 mt-10">Why sell Yourself</h1>

            <ul className="text-sm text-background/80 w-[80%]">
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>Avoid paying a listing agent commission</li>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>Advertise your listing for free on HotHome</li>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="mr-3 pt-1" icon={faArrowRight} />
                <li>Flexibility and control from start to finish</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
