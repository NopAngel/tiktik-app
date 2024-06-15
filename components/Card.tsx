export default function Card({
  Content,
  UserName,
  UserImg,
}: {
  Content: any;
  UserName: any;
  UserImg: any;
}) {
  return (
    <section className="border-[1px] border-neutral-300/55 cursor-pointer hover:bg-neutral-100 transition-all duration-100 lg:w-[450px] sm:w-full sm:text-center rounded-lg mt-6">
      <header className="border-b-[1px] border-neutral-300/55 pb-3">
        <h1 className="flex items-center justify-center gap-4">
          <img src={UserImg} alt={UserName} className="w-10 rounded-full" />
          <span className="text-neutral-400">{UserName}</span>
        </h1>
      </header>
      <section className="mt-3 mb-3 text-center text-xl p-3">
        <p>{Content}</p>
      </section>
    </section>
  );
}
