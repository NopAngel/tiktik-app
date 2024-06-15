import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useState } from "react";

export default async function FormDB() {
  const user = await currentUser();
  const addPost = async (formData: FormData) => {
    "use server";

    const content = formData.get("content");
    if (content === null) return;

    const supabase = createServerActionClient({ cookies });
    const username = user?.fullName;
    /**
     ¿De en verdad?, Dure rato creando la App. Y nada.... Esta es una Prueba.
     */

    await supabase.from("db").insert({
      content: content,
      user_name: username,
      user_img: user?.imageUrl,
    });
  };
  return (
    <form
      className="flex justify-center rounded-lg items-center w-full gap-6 sticky top-0 mt-6 z-20 bg-white/55 backdrop-blur-xl"
      action={addPost}
    >
      <div>
        <UserButton />
      </div>
      <textarea
        className="w-[400px] h-[100px] border-[1px] p-2 rounded-lg resize-none outline-none"
        name="content"
        placeholder="¿¡Qué esta pasando.!?"
      />
      <button className="bg-sky-500 p-2 text-white rounded-lg">Postear.</button>
    </form>
  );
}
