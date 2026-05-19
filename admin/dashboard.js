const SUPABASE_URL =
  "https://glqvinbesukmglhqghhg.supabase.co/rest/v1/";

const SUPABASE_KEY =
  "sb_publishable_k1EB5QFmkqsNTW7e2pyReg_sjsdCGHJ";

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
