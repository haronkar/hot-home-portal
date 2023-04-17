import Footer from "../(components)/footer";

export default function About() {
  return (
    <div className="pt-20">
      <div className="flex justify-center items-center flex-col min-h-full pb-10">
        <h1 className="text-4xl font-black py-20">HotHome Inc.</h1>
        <div className="px-48 grid gap-5">
          <p>
            At HotHome, we are committed to creating beautiful, modern, and
            sustainable residential complexes that provide exceptional living
            experiences for our customers.
          </p>
          <p>
            As a leading construction company, we have expanded our services to
            include real estate development in response to the growing demand
            for quality housing.
          </p>

          <p>
            Our team of experienced builders, architects, and designers work
            tirelessly to ensure that every project we undertake is of the
            highest quality. We source raw land in prime locations and use the
            latest technology and materials to construct residential complexes
            that are functional, beautiful, and sustainable.
          </p>

          <p>
            With the launch of our Real Estate Development Portal project, we
            are now able to offer even greater value to our customers. Our
            portal integrates modern information technologies and
            technology-based solutions to make it easier for our customers to
            find and purchase their dream home.
          </p>

          <p>
            At HotHome, we are passionate about creating beautiful living spaces
            that people love to call home. We believe that everyone deserves a
            high-quality home that meets their unique needs and preferences, and
            we are committed to making that a reality for our customers.
          </p>
          <p>
            Thank you for choosing HotHome Real Estate Development Portal as
            your partner in finding your dream home.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
