import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import FormDB from "@/components/FormDB";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: db1 } = await supabase.from("db").select("*");

  return (
    <main>
      <section>
        <Navbar />
        <section className="lg:w-[450px] sm:w-full mx-auto mt-9">
          <FormDB />
          {db1?.map(({ id, content, user_img, user_name }) => (
            <Card
              key={id}
              Content={content}
             
              UserImg={user_img}
              UserName={user_name}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
