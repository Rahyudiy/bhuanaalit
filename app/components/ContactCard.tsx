export const ContactCard = () => {
  return (
    <div className="font-poppins p-4 w-full bg-white rounded-sm flex flex-col gap-5">
      <p className="font-medium text-xl">Agent Details</p>
      <p className="">Jhon Doe</p>
      <div className="text-[#6B7280] text-sm">
        <p>Jl. madya No 17, Karangasem Bali</p>
        <p>+6289 023 123 23</p>
      </div>
      <button className="w-full p-2 bg-[#F8F7FC]">Contact</button>
    </div>
  );
};
