export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 px-8 py-16 max-w-6xl">
      <h1 className="font-bold text-6xl">Welcome to my Website</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        pariatur! Provident aspernatur dolores dolor eaque ipsa fugit possimus
        totam consectetur, error labore saepe et soluta sunt iure alias vero,
        excepturi temporibus expedita porro? Eveniet magnam, mollitia omnis
        repudiandae temporibus vel id explicabo praesentium! Quos incidunt
        voluptatibus nulla similique at omnis ipsa sequi, voluptas voluptates
        numquam, ratione sapiente accusamus fuga amet.
      </p>
      <div className="flex gap-2 font-medium text-white">
        <button className="bg-teal-600 px-4 py-2.5">Get Started</button>
        <button className="bg-teal-600 px-4 py-2.5">Learn More</button>
      </div>
    </div>
  );
}
