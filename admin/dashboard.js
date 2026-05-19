const SUPABASE_URL =
  "SUA_URL";

const SUPABASE_KEY =
  "SUA_ANON_KEY";

const client =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

/* ADD MEMBER */

async function addMember() {

  const name =
    document.getElementById(
      "name"
    ).value;

  const role =
    document.getElementById(
      "role"
    ).value;

  const {
    error
  } = await client
  .from("members")
  .insert([

    {
      name,
      role
    }

  ]);

  if(error) {

    alert(error.message);

    return;

  }

  alert(
    "Membro adicionado!"
  );

}
