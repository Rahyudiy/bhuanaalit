import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-poppins">
      {/* TOP SECTION */}
      <div
        className="
          flex md:flex-row flex-col w-full justify-between text-sm
          max-md:gap-10 max-md:text-center max-md:items-center
        "
      >
        {/* BRAND */}
        <div className="flex flex-col gap-2 max-md:items-center">
          <h2 className="font-montserrat font-semibold">BhuanaAlit</h2>
          <p className="w-[250px] font-poppins md:text-base text-sm text-[#6B7280]">
            Explore the unseen side of Bali. Where nature and culture whisper in
            harmony.
          </p>
        </div>

        {/* SUPPORT */}
        <div className="flex flex-col gap-2 max-md:items-center">
          <h2 className="font-montserrat font-semibold">Support</h2>
          <div className="font-poppins flex flex-col gap-2 text-sm text-[#6B7280]">
            <Link href="/">Support Center</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Troubleshooting</Link>
            <Link href="/">Feedback</Link>
          </div>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col gap-2 max-md:items-center">
          <h2 className="font-montserrat font-semibold">Company</h2>
          <div className="font-poppins flex flex-col gap-2 text-sm text-[#6B7280]">
            <Link href="/">About us</Link>
            <Link href="/">Carees</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col gap-2 max-md:items-center">
          <h2 className="font-montserrat font-semibold">Legal</h2>
          <div className="font-poppins flex flex-col gap-2 text-sm text-[#6B7280]">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie Policy</Link>
            <Link href="/">Compliance</Link>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="text-sm flex flex-col gap-2 max-md:w-full max-md:px-4 max-md:items-center">
          <div
            className="
              w-full rounded-full border flex flex-row gap-4 items-center p-1 font-poppins
              max-md:w-full max-md:gap-2
            "
          >
            <input
              type="text"
              placeholder="Type your email address"
              className="outline-0 w-full text-center md:text-left"
            />
            <button className="px-4 py-2 bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-3">
            {["/tw.svg", "/lk.svg", "/fb.svg", "/ig.svg"].map((icon, i) => (
              <Link href="/" key={i}>
                <Image
                  src={icon}
                  alt={`social-icon-${i}`}
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div
        className="
          w-full border-t font-poppins text-sm text-[#6B7280] flex flex-row justify-between mt-[8vw]
          max-md:flex-col max-md:items-center max-md:gap-3 max-md:text-center max-md:mt-10
        "
      >
        <p>Copyright © BhuanaAlit 2025️</p>

        <div className="flex flex-row gap-2 max-md:flex-col max-md:gap-1">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
